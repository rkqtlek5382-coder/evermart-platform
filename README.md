# EVER MART Platform — prototype v0.2

A React/Vite shopping simulation with multiple store brands and family profiles.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

1. Push this folder to GitHub.
2. In Netlify, import the repository.
3. Build command: `npm run build`
4. Publish directory: `dist`

## Current features

- Fully separate store-scoped family profiles and store switching (new stores start with their own family)
- Editable store name, PB brand, accent color, and tagline
- Store and family profile switching
- Independent products per store and carts/favorites/orders per store+family
- Product CRUD, inventory deduction on simulated checkout
- Client-side WebP image compression and IndexedDB image storage
- JSON full backup and restore, including images
- Product search, sorting, categories, cart, budget, order history
- Mobile-friendly interface

## Important limitations

- **Not cloud-synced**: IndexedDB belongs to the current browser/profile/device. Browser data removal can erase the database. Export backups regularly.
- **Not a real user authentication system**: Store/family selectors are simulation profiles, not secure login accounts.
- **Not a real checkout**: Orders are simulated; no payments or shipping.
- **Storage is not unlimited**: IndexedDB quota is browser/device-dependent; backup remains necessary. For robust multi-device production use, connect a managed backend such as Supabase (PostgreSQL + object storage + authentication).
- No preloaded product catalog yet; use Admin to add products.
- Backup restore does not delete orphaned images from prior data.

## Store isolation

Each store has its own product catalog, inventory, brand settings, family profiles, and per-family carts, favorites and orders. The database and export file are shared at the application level so backups include all stores. This is **logical separation**, not security isolation: any browser user can access Admin. Production multi-tenant authentication and server-side access rules are still required.

## First public deployment (Netlify)

This source ZIP is **not** a compiled drag-and-drop deploy folder. Upload it to a GitHub repository, then use Netlify **Add new project → Import an existing project → GitHub**. Netlify will install dependencies and run the build using `netlify.toml`.

1. Extract the ZIP and upload its *contents* to the root of a new GitHub repository.
2. In Netlify, import that GitHub repository.
3. Confirm build command `npm run build` and publish directory `dist`.
4. Deploy. Netlify provides a live `*.netlify.app` URL after a successful build.
5. Test in one browser, export a backup, then test again. Other devices will not share local data.

**Security warning:** All users of this prototype can access the simulated Admin controls. Do not enter personal or sensitive data. Do not use this as a production commerce backend.

**Build verification:** This environment could not download npm dependencies, so a complete build test has not been performed. Check the Netlify build log and report errors before relying on the deployment.
