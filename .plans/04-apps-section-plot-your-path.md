# Plan: Apps Section + Plot Your Path

## Objective
Add a new Apps section to the EverGray Tech website that introduces company applications through a simple static index and an initial detail page for Plot Your Path, while preserving the site's existing layout, design system usage, and maintainable static-site structure.

## Customer Value
- Makes EverGray Tech products discoverable from the main website navigation
- Gives visitors a clear path to explore and open Plot Your Path
- Establishes a reusable pattern for listing future applications without introducing unnecessary complexity

## Scope Decisions (Locked)
- Add a top-level Apps navigation item alongside the existing primary navigation links
- Implement Apps as static site pages under `/apps` and `/apps/plot-your-path`
- Hardcode Plot Your Path content for now rather than introducing CMS support, data fetching, or generated content pipelines
- Reuse the existing site layout and design language rather than duplicating shared header or footer logic
- Limit this phase to a simple apps index and one app detail page for the MVP entry
- Ensure the `/apps` page functions as a visibly discoverable app directory, with a clear path to each app detail page

## Prerequisites
- `03-design-system-adoption.md`

## Implementation Checklist

### 1. Information Architecture + Routing
- [x] Review the current site structure and determine how top-level navigation and static routes are currently organized
- [x] Add an Apps destination to the primary navigation alongside existing top-level items
- [x] Create a static Apps index route at `/apps`
- [x] Create a static app detail route at `/apps/plot-your-path`
- [x] Ensure route structure remains compatible with GitHub Pages static hosting constraints

### 2. Apps Index Experience
- [x] Create an Apps index page that uses the site's existing layout patterns and visual hierarchy
- [x] Present the current apps collection as a simple list or grid suitable for one item now and additional items later
- [x] Include the app name, tagline, short description, and a clear link to open the app
- [x] Include a link from the index entry to the local detail page for Plot Your Path
- [x] Keep the implementation fully static and progressively accessible without requiring JavaScript

### 3. Plot Your Path Detail Page
- [x] Create a detail page for Plot Your Path at `/apps/plot-your-path`
- [x] Include the provided name, tagline, and short description
- [x] Add a primary capabilities list based on the provided app metadata
- [x] Add a prominent Open App action linking to `https://plot.evergraytech.com`
- [x] Add a supporting link to the GitHub repository
- [x] Ensure the details page clearly relates back to the broader Apps section

### 4. Design System + Layout Consistency
- [x] Reuse existing site structure, spacing, and typography patterns rather than creating parallel layout logic
- [x] Keep styling consistent with the rest of the site using shared design-system tokens and existing local composition tokens
- [x] Avoid duplicating header/footer behavior across pages beyond what is necessary for static page composition
- [x] Ensure CTA hierarchy remains aligned with existing site conventions and upstream marketing guidance
- [x] Keep the implementation visually simple, professional, and maintainable

### 5. Content, Verification + Reporting
- [x] Verify all new navigation and page links resolve correctly in the static site
- [x] Confirm the Apps pages remain responsive, accessible, and keyboard navigable
- [x] Validate that reduced-motion and content-independence expectations remain satisfied if any motion or atmosphere is reused
- [x] Record the routes created and the components or files added or modified
- [x] Document any assumptions made, including any interpretation of the capabilities content if the final list requires curation for the static page

### 6. Apps Directory Discoverability Follow-up
- [x] Update `/apps` so Plot Your Path is clearly presented as a discoverable directory entry
- [x] Ensure the directory entry includes a visible link to `/apps/plot-your-path`
- [x] Ensure the directory entry may also expose a direct link to the live app
- [x] Keep the entry visually obvious without relying on hidden navigation or excessive scrolling
- [x] Reuse existing styles wherever possible and add CSS only if needed

## Acceptance Criteria
- [x] The main website navigation includes a top-level Apps link
- [x] A static Apps index exists at `/apps` and lists Plot Your Path with its name, tagline, short description, open-app link, and detail-page link
- [x] A static app detail page exists at `/apps/plot-your-path` with the required metadata, capabilities list, Open App button, and GitHub link
- [x] New pages follow the existing site layout and design system conventions without introducing dynamic data fetching or CMS dependencies
- [x] The implementation remains simple, static, accessible, and compatible with GitHub Pages hosting
- [x] `/apps` visibly links to `/apps/plot-your-path` through a clear directory entry for Plot Your Path
