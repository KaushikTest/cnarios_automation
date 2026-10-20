# Cnarios Playwright automation

TypeScript Playwright tests for the public practice site [cnarios.com](https://www.cnarios.com/).
The suite covers navigation, forms, input widgets, and quiz behavior using
page objects, fixtures, and data-driven cases.

## Run locally

Requires a current Node.js release.

```bash
npm ci
npx playwright install
npm test
```

To run only the Chromium project used by CI:

```bash
npm run test:chromium
```

The configured projects are Chromium, Firefox, and WebKit. GitHub Actions runs
Chromium on pushes and pull requests and uploads the HTML report. Tests use a
third-party practice site, so a site change or outage can affect results; inspect
the trace from a retry before changing an assertion.

The most useful coverage is in `tests/` and the corresponding `cases/` files.
The quiz input matrix caught behavior that a single happy-path check would miss.
