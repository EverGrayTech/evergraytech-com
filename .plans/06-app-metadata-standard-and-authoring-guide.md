# Plan: App Metadata Standard and Authoring Guide

## Objective
Create a `docs/` guide that defines the EverGray Tech public app metadata standard and explains how future app teams should publish and maintain `app-metadata.json` so the company website can render app-catalog content from each app’s public endpoint.

## Customer Value
- Future apps get a clear, reusable contract for joining the company app catalog
- The website integration becomes easier to scale because content ownership and presentation ownership are cleanly separated
- App teams can publish updates confidently, knowing which fields drive catalog surfaces on the company site

## Scope Decisions (Locked)
- Treat `app-metadata.json` as the public integration contract between app repos and the company website
- Define top-level field meanings and `overview` section semantics in a reusable, app-agnostic way
- Distinguish required fields from optional fields wherever practical
- Document that the company website owns layout and rendering, while app repos own metadata content
- Document registry onboarding requirements for adding a new app to the company website catalog
- Keep the guide focused on authoring and integration expectations, not on app-internal implementation details

## Prerequisites
- `05-dynamic-app-catalog-from-public-metadata.md`

## Implementation Checklist

### 1. Standard Framing
- [x] Create a new `docs/` guide dedicated to app metadata publishing and company-site integration
- [x] Explain the purpose of the standard and why the public metadata endpoint is the only supported integration surface
- [x] State the ownership boundary clearly: app repos own content, the company website owns presentation and registry wiring
- [x] Explain that the standard is reusable across multiple apps and is not Plot Your Path-specific

### 2. Field Contract Documentation
- [x] Document the semantic meaning of top-level fields such as `version`, `slug`, `name`, `tagline`, `shortDescription`, `status`, `assets`, `urls`, and `capabilities`
- [x] Document the intended meaning and rendering purpose of the `overview` structure and its nested sections
- [x] Identify which fields should be considered required for a minimal viable integration and which are optional
- [x] Clarify stability expectations for public identifiers such as `slug` and endpoint URLs

### 3. Authoring Guidance for Future Apps
- [x] Provide guidance on sourcing metadata from app-owned canonical values rather than manually maintained duplicates
- [x] Explain how app version should stay aligned with real releases
- [x] Provide recommendations for writing clear, user-outcome-focused copy for card/catalog contexts
- [x] Explain how to handle apps that do not need every `overview` section
- [x] Document expectations for stable asset paths and public URLs

### 4. Publishing + Integration Guidance
- [x] Document how an app should expose its metadata at a stable public JSON endpoint
- [x] Document the need for public accessibility and browser-fetchable CORS behavior for company-site consumption
- [x] Explain how a future app becomes discoverable on the company site by adding one registry entry that points to its metadata endpoint
- [x] Describe expected failure behavior if an endpoint is unavailable or malformed so app teams understand integration impact

### 5. Examples + Validation Expectations
- [x] Include at least one concrete example payload shape or field example for implementers
- [x] Provide a practical checklist future app teams can use before asking to be added to the company catalog
- [x] Recommend validation expectations for field presence, URL correctness, and optional-section handling
- [x] Cross-link to relevant company-site docs or plans where appropriate

## Acceptance Criteria
- [x] A new `docs/` guide exists for future app teams authoring `app-metadata.json`
- [x] The guide explains the public metadata endpoint as the sole supported integration surface for the company website
- [x] The guide documents the reusable field contract for both top-level and `overview` metadata
- [x] The guide explains required vs optional sections clearly enough for future apps to adopt the standard without copying Plot Your Path-specific assumptions
- [x] The guide explains how to publish metadata, satisfy browser/runtime access expectations, and join the company website catalog via the local app registry
- [x] The guide reinforces the separation of responsibilities: app repos own metadata content; the company site owns presentation

## Implementation Notes
- Implemented file:
  - `docs/app-metadata-standard.md`
- Final guide coverage includes:
  - the public integration rule for `app-metadata.json`
  - required and recommended catalog fields
  - reusable `overview` semantics with optional-section guidance
  - publishing and CORS expectations
  - failure behavior expectations
  - an example payload and future-app onboarding checklist
