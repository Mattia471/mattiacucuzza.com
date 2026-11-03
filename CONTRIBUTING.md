# Contributing

Thanks for taking the time to look at the project.

This repository is primarily Mattia Cucuzza's personal portfolio, so visual direction and product decisions remain owner-led. Bug fixes, accessibility improvements and clearly scoped technical improvements are welcome.

## Local setup

1. Use Node.js 20.19+ or 22.12+.
2. Install dependencies with `pnpm install`.
3. Start development with `pnpm dev`.
4. Run `pnpm check` before opening a pull request.

## Pull requests

Keep pull requests focused and small when possible.

A good PR should:

- explain the problem and the proposed change;
- avoid unrelated formatting churn;
- keep Italian and English content aligned when copy changes;
- preserve mobile behavior;
- include screenshots for meaningful visual changes;
- pass the repository CI checks.

Do not include credentials, personal data, environment files or third-party assets without permission.

## Project data

When adding a portfolio entry, update `src/data/projects.ts` and, when needed, the corresponding translations in `src/i18n.ts`.

Unannounced client/project information must remain behind the existing `comingSoon` presentation until it is explicitly cleared for publication.
