# Plan: Design System Adoption + Website Realignment

## Objective
Adopt the shared EverGray Tech design system in this website repository so the public site becomes a first-class consumer of the canonical visual system, while also tightening repository documentation and developer guidance to remove duplication, reduce drift, and make future updates straightforward.

## Customer Value
- Aligns the marketing site with the same visual language used across company products
- Reduces long-term brand drift by treating the design system repo as the source of truth
- Makes the website easier to maintain by replacing local design assumptions with explicit upstream references
- Gives future contributors a clearer operating model for styling, documentation, and downstream consumption

## Scope Decisions (Locked)
- Treat `/home/rosea/Repos/design-system` as the canonical source of truth for shared visual rules and token values
- Update this repo to consume and reference the design system rather than maintaining a parallel local design system definition
- Keep this website as the more cinematic expression of the shared system, consistent with the design system spec
- Use the plan to drive both style alignment and documentation consolidation
- Remove or rewrite duplicate, stale, or superseded guidance rather than preserving conflicting material for historical reasons

## Current Findings

### Confirmed upstream source of truth
- The design system repo defines the canonical visual system in `design-system/docs/system-spec.md`
- The design system consumption model is now concrete: downstream repos install `@evergraytech/design-system` and import `dist/variables.css` for CSS custom properties or `dist/tokens.json` for programmatic access (`design-system/docs/consumption-guide.md`)
- The design system now include the canonical brand logo `@evergraytech/design-system/logo.svg`
- The website is explicitly defined upstream as the slightly more cinematic expression of the shared system
- The upstream now provides **website-specific guidance** that did not exist when this plan was originally written:
  - `design-system/docs/website-brand-atmosphere-and-graphics.md` — concrete rules for atmospheric accent treatments (gradient fields, radial highlights, hero energy, tonal overlays), approved graphic motif patterns (geometric dividers, line-led framework graphics, diagrammatic accents, abstract structural backgrounds), motion restraint rules with specific timing/amplitude limits, surface-atmosphere interaction rules, and accessibility/reduced-motion requirements
  - `design-system/docs/marketing-site-patterns.md` — reusable section composition model (hero, intro/value, capability group, proof, CTA, footer), content hierarchy rules (eyebrow → headline → lead → body → metadata), CTA tier definitions (primary, secondary, quiet/tertiary, inline, contact-oriented), accent vs. neutral treatment boundaries, responsive posture guidance, and website-specific dos/don'ts including card and divider boundaries
- The upstream also now provides application-focused pattern guidance (shell/navigation, forms/actions, data-dense workspaces, overlays/feedback, status/priority signals) which are not directly consumed by this site but establish the application expression that the website should feel related to without duplicating

### Gaps and inconsistencies in this repo
- `README.md` is too minimal to explain repository purpose, operating model, or dependency on the design system
- `docs/system-spec.md` currently mixes product/site specification with a locally embedded design system definition that is now superseded by the external design system repo
- `docs/system-spec.md` also contains stale plan references (`.plans/phase-1-mvp.md`, `.plans/future-phases.md`) that no longer match repository contents
- `styles.css` locally defines color, spacing, typography, radius, and motion primitives that should instead come from the design system via `@evergraytech/design-system`
- `.rules/10-frontend.md`, `.rules/20-backend.md`, and `.rules/30-testing.md` are largely oriented toward unrelated stacks (Next.js 15+, FastAPI, pytest/vitest) and do not meaningfully guide work in this static-site repo
- Current docs are directionally useful but not yet cohesive around a single source of truth for style and developer workflow

## Prerequisites
- Access to the design system repository and its generated outputs (`@evergraytech/design-system` package or vendored `dist/variables.css`)
- Agreement that this repository should consume shared tokens instead of maintaining duplicate foundational styling values

## Implementation Workstreams

### 1. Documentation Architecture Refresh
- [x] Rewrite `README.md` so it explains the site's purpose, stack, relationship to the design system, and where to find key docs
- [x] Audit `docs/` for overlap, stale references, and content that should be deleted, merged, or reduced
- [x] Reframe `docs/system-spec.md` around website-specific goals, content strategy, constraints, and adoption expectations rather than duplicating shared visual rules
- [x] Remove or replace any local design-system prose that is now owned by `/home/rosea/Repos/design-system`
- [x] Add explicit references to the upstream consumption guide (`design-system/docs/consumption-guide.md`), website atmosphere guidance (`design-system/docs/website-brand-atmosphere-and-graphics.md`), and marketing-site patterns (`design-system/docs/marketing-site-patterns.md`) wherever contributors need styling guidance
- [x] Ensure docs remain concise: strategy/spec content in `docs/`, implementation sequencing in plan files, shared visual rules upstream

### 2. Developer Instructions Realignment
- [x] Review `.rules/` against the actual repository stack and remove framework/tooling guidance that does not apply to this static-site project (Next.js, FastAPI, pytest/vitest references)
- [x] Replace generic or incorrect frontend/backend/testing rules with repo-appropriate instructions for HTML/CSS/vanilla JS work
- [x] Add an explicit downstream-consumer rule: if a shared token exists upstream, do not redefine it locally — reference the consumption guide's "What Must Not Be Duplicated or Hardcoded" section
- [x] Document how contributors should update the design system dependency: `pnpm update @evergraytech/design-system` (or re-vendor `dist/variables.css` if vendoring), review changelog for breaking changes per semver
- [x] Document the upstream exception-handling process: check for existing token → request upstream if missing → document local override with tracking comment if urgent
- [x] Align workflow guidance so plans, docs, and implementation expectations are internally consistent

### 3. Design System Consumption Setup
- [x] Determine the short-term consumption strategy for a static HTML/CSS site: since `@evergraytech/design-system` is an npm package with `dist/variables.css`, options are (a) add a minimal `package.json` and import from `node_modules`, (b) vendor the generated CSS directly, or (c) use a symlink/copy script from the local design system checkout
- [x] Import the generated design-system CSS variables into the site stylesheet flow
- [x] Replace locally authored foundational tokens in `styles.css` with references to canonical design-system variables (colors: `--color-neutral-*`, `--color-text-*`, `--color-border-*`, `--color-accent-*`; typography: `--typography-*`; spacing: `--spacing-*`; radii: `--radii-*`; motion: `--motion-*`)
- [x] Replace `images/evergray_tech.svg` with `@evergraytech/design-system/logo.svg`
- [x] Preserve only site-specific tokens that represent local composition decisions (layout widths, z-index, component-internal dimensions) rather than shared design primitives
- [x] Document the chosen consumption path in the README and development docs

### 4. Website Style Realignment
- [x] Review `index.html` and `styles.css` against the upstream website-specific guidance:
  - Atmospheric treatments: gradient fields at ≤0.15 opacity, radial highlights at 0.06–0.12 opacity, no glassmorphism/neon glow/gradient text/colored shadows (`website-brand-atmosphere-and-graphics.md` §1)
  - Graphic motifs: geometric dividers, line-led framework graphics at 0.1–0.2 opacity, sparse diagrammatic accents (`website-brand-atmosphere-and-graphics.md` §2)
  - Motion restraint: section reveals 250–400ms with 16–24px translateY, hero ambient 30s+ cycles, hover transitions 150ms, CTA pulse 3s+ cycles; all disabled under `prefers-reduced-motion` (`website-brand-atmosphere-and-graphics.md` §3, §5)
  - Section composition: hero → intro/value → capability group → proof → CTA → footer model; one section one job (`marketing-site-patterns.md` §1)
  - CTA hierarchy: primary (accent), secondary (neutral outline/ghost), quiet/tertiary (text-forward), inline links, contact-oriented; accent reserved for true emphasis moments only (`marketing-site-patterns.md` §3)
- [x] Update the site's surfaces, spacing, type hierarchy, borders, and interactive states to use canonical tokens and match the upstream patterns
- [x] Keep the site's slightly more cinematic expression while ensuring styling reads as system usage, not local invention
- [x] Ensure accent gradients remain selective and purposeful — accent is not the default action styling (`marketing-site-patterns.md` §3.2)
- [x] Remove any effects that conflict with the system's non-negotiables: glassmorphism, neon glow, gradient text, saturated backgrounds, bokeh/lens effects, scroll-jacking, parallax, text animation, 3D transforms (`website-brand-atmosphere-and-graphics.md` §1.3, §3.2)
- [x] Confirm surface-atmosphere interaction rules are followed: atmosphere below surfaces, solid surface backgrounds, neutral shadows, consistent edge glints (`website-brand-atmosphere-and-graphics.md` §4)
- [x] Confirm text contrast meets the upstream's stricter 7:1+ target for marketing headlines, tested at the lightest gradient point (`website-brand-atmosphere-and-graphics.md` §4.5)
- [x] Confirm accessibility, contrast, and reduced-motion behavior remain strong after the visual update

### 5. Content and Structural Consistency Review
- [x] Re-check site copy and metadata so tone, voice, and brand posture align with the design system's direction — proof should feel sober and specific, not promotional (`marketing-site-patterns.md` §1.2 proof section)
- [x] Verify the website remains company-first while using leadership context as supporting proof
- [x] Validate section composition against the upstream marketing composition model: each section has one dominant job, escalate-then-resolve flow, selective containment, no landing-page sameness (`marketing-site-patterns.md` §1.3)
- [x] Apply upstream responsive posture guidance: headline wrapping, section spacing compression, multi-column to stacked behavior, CTA stacking in priority order (`marketing-site-patterns.md` §4)
- [x] Update internal document links so every referenced plan/doc path exists and uses current naming
- [x] Remove duplicate explanations that would be better expressed once upstream or once locally

### 6. Validation and Acceptance
- [x] Review the final documentation set for cohesion, brevity, and clear separation of responsibilities
- [x] Validate that no shared foundational values remain hardcoded locally without justification — per upstream: "If you find yourself writing `#121216`, `8px`, or `'Inter'` directly in application code, you should be referencing a design system token instead"
- [x] Smoke-test the site visually and responsively after the style update
- [x] Verify atmospheric treatments pass the upstream content-independence test: page must be fully functional if all gradients replaced with flat canvas, all graphic motifs removed, all motion disabled (`website-brand-atmosphere-and-graphics.md` §5.3)
- [x] Confirm contributors can understand how the design system is consumed by reading only `README.md`, `docs/`, and `.rules/`

## Deliverables
- Updated `README.md`
- Rationalized `docs/` set with stale or duplicate content removed
- Updated `.rules/` guidance tailored to this repository
- Website styling updated to consume and reflect the canonical design system
- Clear documentation of how this repo depends on the design system and how to keep it current

## Acceptance Criteria
- [x] This repository clearly identifies the external design system as the source of truth for shared visual decisions
- [x] Shared visual primitives are consumed from the design system via `@evergraytech/design-system` (or vendored equivalent) rather than duplicated locally
- [x] Documentation is cohesive, concise, and split appropriately between repo-specific guidance and upstream design-system guidance
- [x] Developer instructions are accurate for this repo's actual technology stack and workflow
- [x] The website visually aligns with the canonical system — including the specific upstream guidance for website atmosphere, marketing-site composition, CTA hierarchy, motion restraint, and accessibility
- [x] All referenced internal paths are valid and no superseded guidance remains in active docs

## Out of Scope
- Building a shared component library in this repository
- Adding new site features unrelated to the design-system adoption effort
- Expanding the website beyond the current single-page marketing scope unless required by the style realignment
- Implementing application-focused upstream patterns (shell/navigation, forms, data-dense workspaces, overlays, status signals) — those serve downstream application consumers, not this marketing site
