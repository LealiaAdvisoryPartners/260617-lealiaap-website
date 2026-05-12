
# Fix Netlify Forms Not Receiving Submissions

## Problem
The contact form POSTs to `/`, but the `_redirects` geo-redirect rules (`/* /en/:splat 302!`) intercept the POST request with a forced redirect before Netlify's form handler can process it. The form data is lost in the redirect.

## Solution
Update `ContactForm.tsx` to POST to the current page path (e.g., `/en`, `/pt`, `/es`) instead of `/`. These language-prefixed paths already have `200` pass-through rules in `_redirects`, so Netlify will receive and process the form data correctly.

## Changes

### 1. `src/components/home/ContactForm.tsx`
- Get the current URL path using `window.location.pathname`
- Change `fetch('/')` to `fetch(window.location.pathname)` so the POST goes to a path that won't be redirected (e.g., `/en`, `/pt/about`, etc.)

**Before:**
```typescript
const response = await fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(formData as any),
});
```

**After:**
```typescript
const response = await fetch(window.location.pathname || '/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(formData as any),
});
```

## Why This Works
- Language-prefixed paths (`/en/*`, `/pt/*`, `/es/*`) have explicit `200` pass-through rules in `_redirects` that execute before the geo-redirect rules
- Netlify's form handler processes the POST request at the `200` path, sees the `form-name=contact` field, matches it to the hidden form in `index.html`, and stores the submission
- No other files need to change — the hidden form in `index.html` with `data-netlify="true"` is already correctly set up
