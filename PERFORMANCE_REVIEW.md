# Page Load Performance Review

## Summary

This document reviews the wedding website's page load performance and documents the optimizations applied.

---

## Issues Found & Fixes Applied

### 1. **Tailwind CSS Runtime (CRITICAL — FIXED)**
- **Before:** `cdn.tailwindcss.com` loaded as a blocking script that compiles CSS at runtime.
- **Impact:** Browser downloads ~300KB+ script, executes it, scans DOM, generates CSS — adds 500ms–2s+ delay before first paint.
- **Fix:** Switched to build-time Tailwind via `@tailwindcss/vite`. CSS is now pre-compiled (35KB, 6.8KB gzipped) and bundled. Zero runtime cost.

### 2. **Hero Image Not Preloaded (HIGH — FIXED)**
- **Before:** Hero background image (`BT.jpeg`) discovered only when React rendered, delaying LCP.
- **Fix:** Added `<link rel="preload" href="/BT.jpeg" as="image">` in `<head>` so the browser fetches it immediately.

### 3. **Hero Image Path (FIXED)**
- **Before:** `url("BT.jpeg")` — relative path could fail depending on base URL.
- **Fix:** `url("/BT.jpeg")` — absolute path for reliable loading.

### 4. **Font Loading Blocking Render (MEDIUM — FIXED)**
- **Before:** Google Fonts CSS loaded synchronously, blocking first paint until fonts downloaded.
- **Fix:** `media="print"` + `onload="this.media='all'"` defers font stylesheet. Text renders immediately with system fonts, then swaps when custom fonts load. `display=swap` in URL prevents invisible text.

### 5. **Below-Fold Images Loading Eagerly (MEDIUM — FIXED)**
- **Before:** 8 gallery images + 2 story images all loaded immediately, competing with hero and main content.
- **Fix:** Added `loading="lazy"` and `decoding="async"` to Gallery and Story images. Browser defers loading until near viewport.

### 6. **Countdown Timer Delay (FIXED — see prior change)**
- **Before:** Countdown returned `null` until `useEffect` ran, causing empty space on first paint.
- **Fix:** Compute initial value in `useState(getTimeLeft)` so countdown displays immediately.

---

## Build Output (After Optimizations)

```
dist/index.html                 3.29 kB  (gzip:  1.13 kB)
dist/assets/index-*.css        35.47 kB  (gzip:  6.82 kB)
dist/assets/index-*.js        227.88 kB  (gzip: 70.11 kB)
```

---

## Additional Recommendations

### Images (If Load Times Remain High)

1. **Optimize image files:**
   - Use WebP/AVIF for smaller file sizes.
   - Compress JPEGs (e.g. 80–85% quality).
   - `BT.jpeg` should be &lt; 300KB for hero; consider responsive sizes (e.g. 1200w, 800w).

2. **Responsive images:**
   - Use `srcset` + `sizes` for gallery/story images to serve smaller images on mobile.

3. **Image dimensions:**
   - Add explicit `width` and `height` to prevent layout shift (CLS).

### Further Optimizations (Optional)

1. **Code splitting:** Lazy-load below-fold sections (Story, Gallery, RSVP, FAQ) with `React.lazy()` + `Suspense` to shrink initial JS.
2. **Preconnect to Lambda:** Add `<link rel="preconnect" href="https://m5de2ayxhjzoyfxob7t3xbxlza0zwtjl.lambda-url.us-east-1.on.aws">` if RSVP is used often.
3. **Remove unused importmap:** The ESM importmap for React is unused when Vite bundles; safe to remove from `index.html` if present.

---

## Testing

Run locally and use browser DevTools:

1. **Network tab:** Throttle to "Fast 3G" and confirm hero appears quickly.
2. **Performance tab:** Record page load; check LCP &lt; 2.5s.
3. **Lighthouse:** Run performance audit (target 90+).
