# whereti.website

The site at **whereti.com**: what whereti is, the download, questions, privacy,
security, the legal notice. Built with [Astro](https://astro.build) as a static
export, served by nginx. Same setup as silentsilo.com (Software Hive S.R.L.).

## Pages

| Page | What it holds |
|---|---|
| `/` | What whereti does, how it works, features, privacy, comparison, open source |
| `/download/` | The installer, how to install, how to check it, update and removal |
| `/faq/` | Short answers |
| `/privacy/` | What the app and the site keep (nothing, in practice), GDPR |
| `/security/` | What gets installed, how it is kept safe, checking the download, reporting |
| `/supporter/` | The supporter license (coming soon) |
| `/who/` | Who makes whereti |
| `/legal/` | Company details (imprint) |
| `404` | Not found, with links |

`/sitemap.xml` and `/robots.txt` are generated with the pages.

## Work on it

```
npm ci
npm run dev       # http://localhost:4321
npm run build     # static files in dist/
npm run og        # redraw public/og.png and public/icon-180.png
```

Node 22.19 or newer.

## At each release

All download data is in **`src/links.ts`**, edited by hand:

1. Publish the GitHub release with `whereti-setup-<version>.exe` (built and signed
   by `scripts\package.ps1 -Release` in the whereti repository).
2. In `src/links.ts`: set `LATEST_VERSION`, `INSTALLER_SHA256` (printed by the
   package script), and `RELEASED = true` for the first release.
3. Push to `main`: the workflow builds the image and redeploys.

## Links between the pieces

- The app's Settings, About links here: `whereti/crates/whereti-app/src/links.rs`.
- The installer's entry in Windows Settings, Apps links to `/`, `/faq/` and
  `/download/`: `whereti/crates/whereti-setup/src/ops.rs`.
- This site links to GitHub for the source and the release files.

## Promises the site makes

The pages say that whereti's only request is a daily update check (version
number only, can be turned off) and that this site uses no cookies, no
analytics and nothing from other domains. Keep both true:
the font is self-hosted, and `deploy/security-headers.conf` enforces the second
with a strict Content Security Policy. Writing style: plain, short sentences, no
long dashes.

## Deploy

`deploy/Dockerfile` builds the site and serves `dist/` with nginx on port 3000.
`.github/workflows/build-and-deploy.yml` pushes `ghcr.io/whereti/website` and calls
the Coolify webhooks in the `COOLIFY_WEBHOOKS` secret.

## License

The code is MIT. The whereti name, logo and the text of the pages belong to
Software Hive S.R.L.
