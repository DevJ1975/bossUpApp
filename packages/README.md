# packages/

Reserved for shared workspace packages (e.g. `ui`, `config`, `tsconfig`, `eslint-config`)
as the monorepo grows. Anything here is matched by the `packages/*` glob in
`pnpm-workspace.yaml` and can be imported by apps via the workspace protocol
(`"@bossup/ui": "workspace:*"`).

Currently empty — the only app is `apps/web`.
