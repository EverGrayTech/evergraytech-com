# App Metadata Standard

## Purpose

This document defines the public `app-metadata.json` contract used by EverGray Tech application teams to publish catalog-ready metadata for consumption by the company website.

The company website uses this metadata to render app-catalog entries without copying app content into the website repo. App repos own metadata content. The company website owns presentation, layout, and the local registry of active apps.

## Integration Rule

The company website should consume only a public metadata endpoint for each app:

- `app-metadata.json`

It should not:

- import app source files directly
- parse framework pages or components
- scrape rendered HTML
- manually duplicate app metadata into the company website repo as a second source of truth

## Current Company Website Usage

At the time of writing, the company website uses app metadata for the `/apps` catalog page.

To add an app to the company website catalog:

1. publish a public `app-metadata.json` endpoint for the app
2. ensure the endpoint is browser-fetchable from `evergraytech.com`
3. add one entry to the website’s local app registry pointing to that endpoint

No copied app content should be required in the website repo beyond the registry entry.

## Ownership Boundaries

### App repos own

- metadata content
- version values
- public URLs
- public asset paths referenced by metadata
- whether optional metadata sections are present

### Company website owns

- catalog layout
- spacing and visual hierarchy
- CTA styling
- loading and error states
- local active-app registry wiring

## Minimal Required Fields

These fields should be treated as the minimum contract for a useful catalog entry:

- `version`
- `slug`
- `name`
- `tagline`
- `shortDescription`
- `status`
- `urls.app`

Recommended for production use:

- `assets.logo`
- `urls.repo`
- `capabilities`
- `overview.outcomes.items`

## Top-Level Field Semantics

### `version`
Current public app version.

Guidance:

- source it from the real app release or package version
- keep it aligned with actual releases
- do not maintain it separately in the company website repo

### `slug`
Stable app identifier.

Guidance:

- keep lowercase
- use URL-safe naming
- treat it as stable once public

### `name`
Public product name used in the catalog.

### `tagline`
Short positioning statement for quick understanding.

Guidance:

- keep it concise
- optimize for fast comprehension
- avoid hype-heavy phrasing

### `shortDescription`
Concise public summary of what the app helps a user do.

Guidance:

- focus on user outcome
- keep it short enough for catalog-card contexts

### `status`
Current maturity or release state.

Examples:

- `MVP`
- `Preview`
- `Beta`
- `Active`
- `Experimental`

### `assets.logo`
Primary app logo or mark.

Guidance:

- use a stable public path
- prefer a clean app mark over decorative artwork

### `urls`
Public destinations related to the app.

Relevant fields:

- `urls.app`: primary live app destination
- `urls.repo`: canonical source repository
- `urls.docs`: optional documentation or overview URL

Guidance:

- use stable public URLs
- prefer canonical destinations over temporary links

### `capabilities`
Short list of scannable app capabilities.

Guidance:

- keep items short
- describe capabilities, not implementation details
- use this for lightweight summary surfaces

## `overview` Structure

The `overview` object is structured metadata that may support richer catalog presentation now and richer website surfaces later.

The current catalog implementation already benefits from `overview.outcomes.items`. Future company-site experiences may use additional sections, so app teams should follow the shared structure where applicable.

All `overview` sections should be treated as optional unless otherwise required by a specific future integration.

### `overview.hero`

- `eyebrow`
- `title`
- `description`

Use this for a richer top-level explanation of the app.

### `overview.outcomes`

- `kicker`
- `title`
- `items`
- `primaryCtaLabel`
- `primaryCtaHref`

This section explains what the app helps a user accomplish.

For the current company website catalog, `overview.outcomes.items` is especially useful because it can provide concise outcome bullets beneath the short description.

Guidance:

- describe user benefits and outcomes
- avoid implementation detail here
- keep each item readable in isolation

### `overview.loop`

- `kicker`
- `title`
- `description`
- `ariaLabel`
- `stages`

Use this for an ordered reinforcing workflow when applicable.

### `overview.features`

- `kicker`
- `title`
- `items[]`
  - `title`
  - `description`

Use this for richer feature explanation beyond a lightweight capabilities list.

### `overview.differentiators`

- `kicker`
- `title`
- `items[]`
  - `title`
  - `description`

Use this to explain why the app is meaningfully distinct.

### `overview.gettingStarted`

- `kicker`
- `title`
- `items`
- `primaryCtaLabel`
- `primaryCtaHref`
- `secondaryCtaLabel`
- `secondaryCtaHref`

Use this for practical first-use guidance.

### `overview.technicalDifferentiators`

- `kicker`
- `title`
- `description`
- `items`

Use this for readable technical credibility, not implementation trivia.

### `overview.currentStatus`

- `kicker`
- `heading`
- `content`

Use this for trustworthy expectation-setting about current maturity.

## Optional Section Guidance

Apps do not need to provide every `overview` section.

If a section is not useful for a given app, omit it rather than forcing placeholder content. The company website should handle absent sections gracefully.

## Publishing Requirements

Each app should expose metadata at a stable public JSON endpoint.

Requirements:

- publicly reachable over HTTPS
- valid JSON response
- browser-fetchable from the company website origin
- stable enough to act as an integration surface

If the endpoint is not publicly fetchable or has incompatible CORS behavior, the company website may be unable to render the app catalog entry at runtime.

## CORS Requirement

Because the company website fetches metadata client-side from `evergraytech.com`, each app metadata endpoint must allow browser access from that origin.

At minimum, ensure the metadata endpoint is accessible to browser `fetch()` requests initiated from the company website.

## Failure Behavior

If an app metadata endpoint is unavailable, malformed, or blocked, the company website may:

- show a loading or error state
- omit app content that depends on the response
- fall back to a direct link to the live app where appropriate

App teams should treat endpoint stability as part of the public integration contract.

## Example Payload

```json
{
  "version": "0.4.1",
  "slug": "plot-your-path",
  "name": "Plot Your Path",
  "tagline": "Make better career decisions with clarity and confidence.",
  "shortDescription": "Evaluate opportunities, prepare stronger applications, and build a purposeful career roadmap.",
  "status": "MVP",
  "assets": {
    "logo": "/logo.svg"
  },
  "urls": {
    "app": "https://plot.evergraytech.com",
    "repo": "https://github.com/EverGrayTech/plot-your-path",
    "docs": "https://evergraytech.com/apps"
  },
  "capabilities": [
    "Opportunity capture and structuring",
    "Role fit and company desirability evaluation",
    "Application and interview preparation support"
  ],
  "overview": {
    "outcomes": {
      "items": [
        "Decide which roles are worth your time before you sink effort into them.",
        "Reuse real experience in applications and interviews instead of rebuilding from memory.",
        "Spot patterns in strengths, gaps, and outcomes that improve your next decision."
      ]
    }
  }
}
```

## Authoring Checklist for Future Apps

Before asking to be added to the company website catalog, confirm that:

- [ ] `app-metadata.json` is published at a stable public URL
- [ ] the endpoint returns valid JSON
- [ ] browser requests from the company website can access the endpoint
- [ ] `version`, `slug`, `name`, `tagline`, `shortDescription`, `status`, and `urls.app` are present
- [ ] public URLs are canonical and correct
- [ ] logo and other asset URLs are stable
- [ ] optional sections are omitted cleanly when not needed
- [ ] outcome bullets are concise and readable if `overview.outcomes.items` is provided
- [ ] the app has been added to the local active-app registry in the company website repo

## Related Documents

- `docs/system-spec.md`
- `docs/technical-requirements.md`
- `.plans/05-dynamic-app-catalog-from-public-metadata.md`
- `.plans/06-app-metadata-standard-and-authoring-guide.md`
