import React, { useState, useCallback, useMemo } from 'react';
import { RSVP_API_URL } from '../constants';

type RsvpItem = {
  pk?: string;
  id?: string;
  name?: string;
  attending?: boolean | null;
  guestCount?: number;
  events?: { traditional?: boolean; white?: boolean; reception?: boolean };
  choice?: string;
  createdAt?: string;
};

const STORAGE_KEY = 'rsvp_admin_token_session';

/** Collapse duplicate submissions: same person (normalized name) → keep newest by createdAt. */
function normalizeGuestName(name: string | undefined): string {
  return (name ?? '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function dedupeKey(row: RsvpItem): string {
  const n = normalizeGuestName(row.name);
  if (n) return `name:${n}`;
  return `id:${row.pk || row.id || row.createdAt || ''}`;
}

function dedupeByGuestName(items: RsvpItem[]): RsvpItem[] {
  const sorted = [...items].sort((a, b) => {
    const ta = a.createdAt ?? '';
    const tb = b.createdAt ?? '';
    return tb.localeCompare(ta);
  });
  const seen = new Set<string>();
  const out: RsvpItem[] = [];
  for (const row of sorted) {
    const key = dedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(row);
  }
  return out;
}

function formatEventsLabel(row: RsvpItem): string {
  if (!row.events) return '';
  return Object.entries(row.events)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join(', ');
}

function escapeCsvCell(value: unknown): string {
  const s = value === null || value === undefined ? '' : String(value);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function buildCsv(rows: RsvpItem[]): string {
  const headers = ['Name', 'Attending', 'Guests', 'Events', 'Choice', 'Submitted', 'Id'];
  const lines = [headers.map(escapeCsvCell).join(',')];
  for (const row of rows) {
    lines.push(
      [
        escapeCsvCell(row.name ?? ''),
        escapeCsvCell(row.attending === true ? 'Yes' : row.attending === false ? 'No' : ''),
        escapeCsvCell(row.guestCount ?? ''),
        escapeCsvCell(formatEventsLabel(row)),
        escapeCsvCell(row.choice ?? ''),
        escapeCsvCell(row.createdAt ?? ''),
        escapeCsvCell(row.pk ?? row.id ?? ''),
      ].join(',')
    );
  }
  return lines.join('\r\n');
}

function downloadCsv(filename: string, content: string) {
  const blob = new Blob(['\ufeff', content], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

const AdminRSVP: React.FC = () => {
  const [nameQuery, setNameQuery] = useState('');
  const [token, setToken] = useState(() => sessionStorage.getItem(STORAGE_KEY) ?? '');
  const [items, setItems] = useState<RsvpItem[] | null>(null);
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setError('');
    setLoading(true);
    setItems(null);
    setCount(null);
    try {
      const res = await fetch(RSVP_API_URL.replace(/\/?$/, '/'), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.trim()}`,
        },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError((data as { error?: string }).error || `Request failed (${res.status})`);
        return;
      }
      sessionStorage.setItem(STORAGE_KEY, token.trim());
      setCount((data as { count?: number }).count ?? 0);
      setItems((data as { items?: RsvpItem[] }).items ?? []);
    } catch {
      setError('Network error. Try again.');
    } finally {
      setLoading(false);
    }
  }, [token]);

  const dedupedItems = useMemo(() => (items ? dedupeByGuestName(items) : []), [items]);

  const filteredItems = useMemo(() => {
    const q = nameQuery.trim().toLowerCase();
    if (!q) return dedupedItems;
    return dedupedItems.filter((row) => normalizeGuestName(row.name).includes(q));
  }, [dedupedItems, nameQuery]);

  const attendingYes = dedupedItems.filter((i) => i.attending === true).length;
  const attendingNo = dedupedItems.filter((i) => i.attending === false).length;

  const onDownloadCsv = useCallback(() => {
    const day = new Date().toISOString().slice(0, 10);
    downloadCsv(`wedding-rsvp-${day}.csv`, buildCsv(filteredItems));
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <header className="border-b border-slate-200 bg-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-xl font-serif text-blue-800">RSVP submissions</h1>
        <a href="#home" className="text-sm text-blue-700 hover:underline">
          ← Back to site
        </a>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-sm text-slate-600 mb-6">
          Admin only. View RSVPs submitted by guests.
        </p>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4 max-w-xl">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Admin token</label>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl"
              placeholder="From Lambda env ADMIN_TOKEN"
              autoComplete="current-password"
            />
          </div>
          <button
            type="button"
            onClick={load}
            disabled={loading || !token.trim()}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Loading…' : 'Load RSVPs'}
          </button>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        {count !== null && items && (
          <div className="mt-10 space-y-6">
            <p className="text-sm text-slate-600">
              Showing <strong>{dedupedItems.length}</strong> unique guests ({count} total rows from API — duplicates
              hidden).
              {nameQuery.trim() ? (
                <>
                  {' '}
                  · Name filter: <strong>{filteredItems.length}</strong> match
                  {filteredItems.length === 1 ? '' : 'es'}
                </>
              ) : null}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white px-4 py-2 rounded-full border border-slate-200">
                Unique guests: <strong>{dedupedItems.length}</strong>
              </span>
              <span className="bg-white px-4 py-2 rounded-full border border-slate-200">
                Attending: <strong>{attendingYes}</strong>
              </span>
              <span className="bg-white px-4 py-2 rounded-full border border-slate-200">
                Declined: <strong>{attendingNo}</strong>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <label className="flex-1 min-w-0">
                <span className="sr-only">Search by name</span>
                <input
                  type="search"
                  value={nameQuery}
                  onChange={(e) => setNameQuery(e.target.value)}
                  placeholder="Search by name…"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white"
                  autoComplete="off"
                />
              </label>
              <button
                type="button"
                onClick={onDownloadCsv}
                disabled={filteredItems.length === 0}
                className="shrink-0 px-5 py-3 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Download CSV
              </button>
            </div>
            <p className="text-xs text-slate-500">
              CSV includes the guests currently shown (after dedupe and name search). Clear the search to export everyone.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-xs uppercase tracking-wider text-slate-600">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Attending</th>
                    <th className="px-4 py-3">Guests</th>
                    <th className="px-4 py-3">Events</th>
                    <th className="px-4 py-3">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-slate-500 text-sm">
                        {nameQuery.trim() ? 'No guests match that search.' : 'No rows.'}
                      </td>
                    </tr>
                  ) : (
                    filteredItems.map((row, i) => (
                      <tr key={row.pk || row.id || i} className="border-t border-slate-100">
                        <td className="px-4 py-3 font-medium">{row.name ?? '—'}</td>
                        <td className="px-4 py-3">{row.attending === true ? 'Yes' : row.attending === false ? 'No' : '—'}</td>
                        <td className="px-4 py-3">{row.guestCount ?? '—'}</td>
                        <td className="px-4 py-3 text-xs">
                          {formatEventsLabel(row) || '—'}
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{row.createdAt ?? '—'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminRSVP;
