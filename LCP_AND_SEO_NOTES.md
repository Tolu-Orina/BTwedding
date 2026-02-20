# LCP & SEO Optimizations

## LCP (Largest Contentful Paint) – Comprehensive Fixes

### Root Cause
The site is a client-rendered React SPA. **Nothing painted until React's 200KB+ JS bundle loaded and executed.** LCP was 10+ seconds because the entire page waited for JavaScript.

### 1. Static Hero in HTML (Critical)
- Added hero markup (img + h1 + date) **directly in `index.html`** so it paints before any JS.
- Hero content is visible as soon as HTML parses—no React required.
- React replaces it when mounted; user sees seamless transition.
- LCP now driven by HTML parse + image load, not JS execution.

### 2. Critical Hero CSS Inlined
- Hero layout/styles in a `<style>` block so no external CSS blocks first paint.
- Uses system fonts (Georgia) as fallback before Google Fonts load.

### 3. Non-Blocking Resources
- **Main CSS:** `media="print" onload="this.media='all'"` so it doesn't block render.
- **Fonts:** Same async pattern (already in place).
- **Script:** `type="module"` → deferred by default.

### 4. Code Splitting
- Story, Details, Gallery, RSVP, FAQ, Footer load lazily.
- Initial bundle: ~204KB (down from 228KB); below-fold content fetched on demand.

### 5. Hero: Background Image → `<img>` Element (React Hero)
- **Before:** Hero used `background-image` on a div – the browser deprioritizes CSS backgrounds.
- **After:** Switched to `<img>` with `fetchPriority="high"` so the hero image loads first.

### 2. Preload at Top of `<head>`
- Preload for `/BT.jpeg` is now the first resource after charset/viewport.
- Ensures the LCP image starts loading as early as possible.

### 3. Image Hints
- Added `width={1920}` and `height={1080}` to avoid layout shift (CLS).
- `loading="eager"` and `decoding="async"` for fastest render.

### 4. Critical: Image File Size
If LCP is still slow (e.g. 10s+), `BT.jpeg` may be too large. Options:

- **Resize:** Max 1920×1080 or 1920×1280 for the hero.
- **Compress:** Target under 300–500KB (e.g. JPEG 80–85% quality).
- **Use WebP:** Add a WebP version and use `<picture>` for better compression (optional).

Tools: [Squoosh](https://squoosh.app), [TinyPNG](https://tinypng.com).

---

## SEO – Applied Fixes

### Meta & Social
- **OG/Twitter image:** Absolute URL `https://blessyn-tolu-wedding.com/BT.jpeg` (required by crawlers).
- **og:image:alt** and **twitter:image:alt** for accessibility.
- **og:locale** set to `en_US`.
- **geo.region** `NG-LA` for Lagos.
- **theme-color** for mobile browsers.

### Structured Data (Schema.org)
- **Event:** Wedding details (dates, venues, locations).
- **WebSite:** For potential sitelinks in search results.

### Discovery
- **robots.txt:** Allows crawling and points to the sitemap.
- **sitemap.xml:** Lists the main URL for indexing.

### Next Steps for Google
1. **Google Search Console:** Add property `https://blessyn-tolu-wedding.com`, verify ownership.
2. **Submit sitemap:** Sitemap URL: `https://blessyn-tolu-wedding.com/sitemap.xml`
3. **Request indexing** for the homepage.
4. Wait 1–2 weeks for indexing; rankings may take longer.
