# Plan: Design System Adoption + Website Realignment

## Objective
Adopt the shared EverGray Tech design system in this website repository so the public site becomes a first-class consumer of the canonical visual system, while also tightening repository documentation and developer guidance to remove duplication, reduce drift, and make future updates straightforward.

## Customer Value
- Aligns the marketing site with the same visual language used across company products
- Reduces long-term brand drift by treating the design system repo as the source of truth
- Makes the website easier to maintain by replacing local design assumptions with explicit upstream references
- Gives future contributors a clearer operating model for styling, documentation, and downstream consumption

## Scope Decisions (Locked)
- Treat `/home/rosea/Repos/design_system` as the canonical source of truth for shared visual rules and token values
- Update this repo to consume and reference the design system rather than maintaining a parallel local design system definition
- Keep this website as the more cinematic expression of the shared system, consistent with the design system spec
- Use the plan to drive both style alignment and documentation consolidation
- Remove or rewrite duplicate, stale, or superseded guidance rather than preserving conflicting material for historical reasons

## Current Findings

### Confirmed upstream source of truth
- The design system repo defines the canonical visual system in `design_system/docs/system-spec.md`
- The design system consumption model requires downstream repos to import tokens rather than hardcode shared values
- The website is explicitly defined upstream as the slightly more cinematic expression of the shared system

### Gaps and inconsistencies in this repo
- `README.md` is too minimal to explain repository purpose, operating model, or dependency on the design system
- `docs/system-spec.md` currently mixes product/site specification with a locally embedded design system definition that is now superseded by the external design system repo
- `docs/system-spec.md` also contains stale plan references (`.plans/phase-1-mvp.md`, `.plans/future-phases.md`) that no longer match repository contents
- `styles.css` locally defines color, spacing, typography, radius, and motion primitives that should instead come from the design system
- `.rules/10-frontend.md`, `.rules/20-backend.md`, and `.rules/30-testing.md` are largely oriented toward unrelated stacks and do not meaningfully guide work in this static-site repo
- Current docs are directionally useful but not yet cohesive around a single source of truth for style and developer workflow

## Prerequisites
- Access to the design system repository and its generated outputs
- Agreement that this repository should consume shared tokens instead of maintaining duplicate foundational styling values

## Implementation Workstreams

### 1. Documentation Architecture Refresh
- [ ] Rewrite `README.md` so it explains the site's purpose, stack, relationship to the design system, and where to find key docs
- [ ] Audit `docs/` for overlap, stale references, and content that should be deleted, merged, or reduced
- [ ] Reframe `docs/system-spec.md` around website-specific goals, content strategy, constraints, and adoption expectations rather than duplicating shared visual rules
- [ ] Remove or replace any local design-system prose that is now owned by `/home/rosea/Repos/design_system`
- [ ] Add explicit references to the design system README and consumption guide wherever contributors need styling guidance
- [ ] Ensure docs remain concise: strategy/spec content in `docs/`, implementation sequencing in plan files, shared visual rules upstream

### 2. Developer Instructions Realignment
- [ ] Review `.rules/` against the actual repository stack and remove framework/tooling guidance that does not apply to this static-site project
- [ ] Replace generic or incorrect frontend/backend/testing rules with repo-appropriate instructions for HTML/CSS/vanilla JS work
- [ ] Add an explicit downstream-consumer rule: if a shared token exists upstream, do not redefine it locally
- [ ] Document how contributors should update the design system dependency or vendored outputs when upstream tokens change
- [ ] Align workflow guidance so plans, docs, and implementation expectations are internally consistent

### 3. Design System Consumption Setup
- [ ] Decide the website consumption strategy for the short term: package dependency, vendored generated CSS, or direct synced artifact
- [ ] Import the generated design-system CSS variables into the site stylesheet flow
- [ ] Replace locally authored foundational tokens in `styles.css` with references to canonical design-system variables
- [ ] Preserve only site-specific tokens that represent local composition decisions rather than shared design primitives
- [ ] Document the chosen consumption path in the README and development docs

### 4. Website Style Realignment
- [ ] Review `index.html` and `styles.css` against the upstream visual spec (`Engineered Elegance`, geometric minimalism, restrained accent usage, machined layering, motion-as-feedback)
- [ ] Update the site's surfaces, spacing, type hierarchy, borders, and interactive states to better match the canonical system
- [ ] Keep the site's slightly more cinematic expression while reducing any styling that reads as local invention rather than system usage
- [ ] Ensure accent gradients remain selective and purposeful, not default chrome
- [ ] Remove any effects that conflict with the design system's non-negotiables (for example glass-heavy treatments if they read as glassmorphism rather than subtle layering)
- [ ] Confirm accessibility, contrast, and reduced-motion behavior remain strong after the visual update

### 5. Content and Structural Consistency Review
- [ ] Re-check site copy and metadata so tone, voice, and brand posture align with the new shared design system direction
- [ ] Verify the website remains company-first while using leadership context as supporting proof
- [ ] Update internal document links so every referenced plan/doc path exists and uses current naming
- [ ] Remove duplicate explanations that would be better expressed once upstream or once locally

### 6. Validation and Acceptance
- [ ] Review the final documentation set for cohesion, brevity, and clear separation of responsibilities
- [ ] Validate that no shared foundational values remain hardcoded locally without justification
- [ ] Smoke-test the site visually and responsively after the style update
- [ ] Confirm contributors can understand how the design system is consumed by reading only `README.md`, `docs/`, and `.rules/`

## Deliverables
- Updated `README.md`
- Rationalized `docs/` set with stale or duplicate content removed
- Updated `.rules/` guidance tailored to this repository
- Website styling updated to consume and reflect the canonical design system
- Clear documentation of how this repo depends on the design system and how to keep it current

## Acceptance Criteria
- [ ] This repository clearly identifies the external design system as the source of truth for shared visual decisions
- [ ] Shared visual primitives are consumed from the design system rather than duplicated locally
- [ ] Documentation is cohesive, concise, and split appropriately between repo-specific guidance and upstream design-system guidance
- [ ] Developer instructions are accurate for this repo's actual technology stack and workflow
- [ ] The website visually aligns with the canonical system while preserving its more cinematic website-specific expression
- [ ] All referenced internal paths are valid and no superseded guidance remains in active docs

## Out of Scope
- Building a shared component library in this repository
- Adding new site features unrelated to the design-system adoption effort
- Expanding the website beyond the current single-page marketing scope unless required by the style realignment
