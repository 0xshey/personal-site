# sheys.space

Turborepo + pnpm monorepo hosting the personal site and independent demo
apps, each deployed as its own Vercel project on its own subdomain
(e.g. `ball-knowledge.sheys.space`).

## Layout

```
apps/
  web/                  # personal site (sheys.space)
packages/
  ui/                   # @repo/ui — shared React components (empty scaffold for now)
  typescript-config/    # @repo/typescript-config — shared tsconfig bases
  eslint-config/        # @repo/eslint-config — shared ESLint flat configs
  tailwind-config/      # @repo/tailwind-config — shared Tailwind v4 theme tokens (CSS)
```

## Commands

Requires Node ≥ 20.9 and pnpm 9 (pinned via `packageManager`).

```sh
pnpm install
pnpm dev                # all apps
pnpm dev --filter=web   # one app
pnpm build
pnpm lint
pnpm typecheck
```

## Adding a new app

Use `apps/web` as the template:

1. Copy the app and strip the site-specific bits:
   ```sh
   cp -R apps/web apps/<name>
   rm -rf apps/<name>/.next apps/<name>/node_modules apps/<name>/next-env.d.ts
   ```
2. In `apps/<name>/package.json`: set `"name": "<name>"` and prune
   dependencies the new app doesn't need (the markdown/remark stack is
   site-specific).
3. Replace the contents of `src/app/`, `src/components/`, and
   `src/content/` with the new app's code. Keep `src/styles/globals.css`
   (it pulls the shared theme from `@repo/tailwind-config`), `tsconfig.json`,
   and `eslint.config.mjs` — they already extend the shared packages.
4. `pnpm install` (registers the new workspace), then
   `pnpm dev --filter=<name>`.
5. Deploy: see "Deploying on Vercel" below.

(`turbo gen workspace --copy web` can automate the copy step if you'd
rather not `cp -R`; a custom generator is a future option.)

### Using @repo/ui in an app

When components are worth sharing, put them in `packages/ui/src/` and:

1. Add `"@repo/ui": "workspace:*"` to the app's dependencies.
2. Add `transpilePackages: ["@repo/ui"]` to the app's `next.config.ts`.
3. Tell Tailwind to scan the package, in the app's `globals.css`:
   `@source "../../node_modules/@repo/ui/src";`
4. Import as `import { Example } from "@repo/ui/example";`

## Deploying on Vercel

Each app is a separate Vercel project pointed at the same Git repo,
differing only in Root Directory.

**Existing site** (one-time after this migration):
- Project Settings → Build & Deployment → set **Root Directory** to
  `apps/web`. Leave "Include files outside of Root Directory" enabled.
- Vercel detects pnpm from the lockfile and `packageManager` field.
- Optional: set the project's **Ignored Build Step** to `npx turbo-ignore`
  so the site only redeploys when it (or a package it depends on) changed.

**New app**:
1. Vercel → Add New… → Project → import this repo again.
2. Set **Root Directory** to `apps/<name>`; framework preset Next.js.
3. Deploy, then Project → Settings → Domains → add `<name>.sheys.space`.

**DNS** (one-time): at the DNS provider for `sheys.space`, add a wildcard
record `*` → CNAME → `cname.vercel-dns.com`. Every `<name>.sheys.space`
then resolves to Vercel, which routes by hostname to whichever project
claimed that domain and issues certs automatically. (If the domain
already uses Vercel nameservers, skip this — adding the domain to the
project is enough.)

## Future: path routing (sheys.space/app/<name>)

Subdomains are canonical for now. To additionally serve an app under a
path later, use Next.js multi-zones:

- In the demo app: set `basePath: "/app/<name>"` in its `next.config.ts`.
- In `apps/web`'s `next.config.ts`: add `rewrites()` mapping
  `/app/<name>/:path*` → `https://<name>.sheys.space/app/<name>/:path*`.
- Docs: https://nextjs.org/docs/app/guides/multi-zones

## Notes

- `apps/web/tailwind.config.ts` is a leftover from Tailwind v3; Tailwind
  v4 ignores it (no `@config` directive references it). Safe to delete.
- `apps/web/src/content/unpublished/` is gitignored draft content.
