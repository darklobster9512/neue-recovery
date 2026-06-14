Add `breuer-partner.de` to Vite dev-server `allowedHosts` so the preview can be accessed via that custom domain.

### Change
In `vite.config.ts`, add inside the `server` block:

```ts
allowedHosts: ['breuer-partner.de'],
```

### Why
Without this, Vite may block requests coming from the custom domain with a 403 error.

### Files
- `vite.config.ts` — one-line addition in the `server` object.