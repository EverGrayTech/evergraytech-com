# Plan: Dynamic App Catalog from Public App Metadata

## Objective
Replace the current hardcoded Plot Your Path app-library implementation with a data-driven integration that fetches structured app metadata from each app’s public `app-metadata.json` endpoint, while preserving the site’s static GitHub Pages hosting model and keeping presentation logic inside the company website repo.

## Customer Value
- App releases can update company-site catalog content automatically without copy/paste synchronization
- The website gains a reusable pattern for future apps that expose the same metadata contract
- EverGray Tech keeps app presentation consistent while letting each app repo own its content

## Scope Decisions (Locked)
- Keep `/apps/index.html` as the app catalog route
- Use lightweight client-side JavaScript to fetch and render live metadata at runtime
- Introduce a small website-owned app registry that maps active app slugs to public metadata endpoint URLs
- Treat each app’s public `app-metadata.json` endpoint as the only direct integration surface for app-library content
- Do not import source files from app repos, scrape rendered app HTML, or duplicate metadata fields manually in the website repo
- Keep routing static and understandable; do not introduce framework routing, build tooling, or generic rewrite-dependent dynamic routes in this phase
- Allow future apps to be added by registering their public metadata endpoint in the website-owned app registry
- Do not keep a local app detail page when the catalog no longer links to it or otherwise depends on it

## Prerequisites
- `04-apps-section-plot-your-path.md`

## Implementation Checklist

### 1. Runtime Data Model + Registry
- [x] Define a small local registry format for active apps that includes the public `app-metadata.json` URL
- [x] Ensure the registry shape is simple enough that onboarding a future app only requires adding one new entry
- [x] Document the registry as website-owned routing/configuration, distinct from app-owned metadata content
- [x] Validate that Plot Your Path’s registry entry points to `https://plot.evergraytech.com/app-metadata.json`

### 2. Shared Metadata Fetching + Resilience
- [x] Add a small shared client-side utility for fetching app metadata from public endpoints
- [x] Handle loading, malformed-response, network-failure, and temporary-unavailability states explicitly
- [x] Define a graceful rendering behavior when optional metadata fields or optional `overview` sections are absent
- [x] Confirm the integration remains progressive enough that the pages still explain what the visitor is looking at if live data is temporarily unavailable
- [ ] Verify cross-origin fetch assumptions for public metadata endpoints and document CORS as a requirement for future apps

### 3. Apps Catalog Page (`/apps`)
- [x] Replace the hardcoded Plot Your Path card content with rendering sourced from fetched metadata only
- [x] Build the catalog card template around generic field semantics rather than Plot Your Path-specific copy assumptions
- [x] Render card-level content from top-level metadata fields such as `name`, `tagline`, `shortDescription`, `status`, `assets.logo`, relevant `overview.outcomes`, and key URLs
- [x] Keep the page capable of rendering one app now and multiple apps later from the registry
- [x] Preserve accessible loading/error messaging and clear calls to action for opening the live app and repository

### 4. Plot Your Path Detail Page (`/apps/plot-your-path`)
- [x] Evaluate whether the local Plot Your Path detail page remains part of the active UX
- [x] Remove the local detail page once the catalog no longer links to or depends on it
- [x] Remove now-unused detail-page registry fields, fallback links, and route-specific references
- [x] Remove detail-page-specific CSS and markup that are no longer referenced
- [x] Keep the catalog’s fallback behavior focused on the live app when metadata is unavailable

### 5. Generic Rendering Foundation for Future Apps
- [x] Structure rendering helpers so future app cards can reuse the same metadata-driven rendering approach with a different registry entry
- [x] Avoid hardcoded Plot Your Path-only labels in reusable rendering code
- [x] Normalize optional rendering behavior so missing sections do not break the catalog experience
- [x] Ensure future apps can adopt the same registry-based pattern without redesigning the integration architecture

### 6. Static Hosting + Verification
- [x] Keep the implementation compatible with GitHub Pages static hosting and no-build deployment
- [x] Verify the catalog page still functions as static HTML enhanced by runtime JavaScript
- [ ] Confirm navigation, keyboard access, and reduced-motion expectations remain intact after dynamic rendering is introduced
- [x] Verify loading/error states remain understandable and visually consistent with the rest of the site
- [x] Record all files added or modified, including the app registry and shared client-side utilities

## Acceptance Criteria
- [x] Plot Your Path’s catalog card on `/apps` is rendered from `https://plot.evergraytech.com/app-metadata.json` only
- [x] The company website does not import Plot Your Path source files, parse its JSX, scrape its HTML, or manually duplicate its metadata fields as a second source of truth
- [x] The website uses a small local registry of active apps that maps app slugs to public metadata endpoint URLs
- [x] The rendering approach is generic enough that future apps can be added by publishing metadata and adding a registry entry
- [x] Missing optional sections in the catalog-driving metadata are handled gracefully without breaking layout or accessibility
- [x] Temporary endpoint failures produce a graceful, understandable user-facing fallback state
- [x] The implementation remains compatible with static GitHub Pages hosting

## Implementation Notes
- Implemented files:
  - `apps/app-registry.js`
  - `apps/apps-data.js`
  - `apps/index.html`
  - `styles.css`
- Removed files:
  - `apps/plot-your-path/index.html`
- Final UX shape in this phase:
  - `/apps` is the active local app-catalog surface
  - app cards fetch live metadata at runtime
  - app cards expose `Open App` and `View Repo`
  - app cards surface outcome bullets from `overview.outcomes.items`
  - there is no longer a local `/apps/plot-your-path` detail page in active use
