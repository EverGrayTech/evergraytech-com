# Plan: Legal Pages for Terms and Refunds

## Objective
Add static Terms of Service and Refund Policy pages to the EverGray Tech website so visitors can review baseline software-license and refund expectations, while preserving the site’s static GitHub Pages deployment model, existing design language, and clear company positioning.

## Customer Value
- Builds trust by making legal and policy information easy to find
- Establishes a reusable pattern for future app-product legal pages without adding backend requirements
- Clarifies how EverGray Tech approaches software licenses, support contact, and refund handling for future no-login app products

## Scope Decisions (Locked)
- Implement the legal pages as static routes at `/terms` and `/refunds`
- Use folder-based routes (`terms/index.html` and `refunds/index.html`) compatible with GitHub Pages static hosting
- Reuse the existing site shell, shared stylesheet, and design-system tokens rather than introducing a separate legal-page template system
- Add both legal links to the site footer so they are discoverable from the homepage and other static pages
- Phrase software licensing on a per-app basis only; do not imply bundled rights across products
- Add reasonable license-key activation-limit language to prevent abuse without implying login-gated products
- Keep contract work and consulting coverage lightweight, noting that separate written agreements may govern bespoke/client services
- Treat the pages as baseline public-facing policy copy, not a substitute for legal counsel

## Prerequisites
- `03-design-system-adoption.md`
- `05-dynamic-app-catalog-from-public-metadata.md`

## Implementation Checklist

### 1. Information Architecture + Static Routing
- [x] Confirm the legal routes fit the active GitHub Pages static hosting model
- [x] Create a static Terms route at `/terms`
- [x] Create a static Refund Policy route at `/refunds`
- [x] Ensure both routes use the site’s existing top-level navigation structure

### 2. Terms of Service Content
- [x] Draft Terms copy using EverGray Tech / Allen Rose naming and `Support@EverGrayTech.com`
- [x] Scope software licenses per app rather than as bundled or account-based rights
- [x] Include reasonable activation-limit language for license keys to prevent abuse
- [x] Lightly cover consulting and bespoke services, with separate-agreement language where appropriate
- [x] Include warranty, liability, updates, and contact sections in a clear, restrained tone aligned with company positioning

### 3. Refund Policy Content
- [x] Draft Refund Policy copy for future app/software purchases with a 14-day request window
- [x] Clarify that refund decisions may account for fairness, abuse prevention, and issue resolution attempts
- [x] Encourage support outreach for bugs or product issues before or during a refund request
- [x] Clarify that custom consulting or bespoke client work may be governed by separate written agreements
- [x] Include payment-provider processing language and support contact details

### 4. Layout, Styling + Shared Navigation/Footer
- [x] Reuse existing hero, section, typography, and footer patterns for both legal pages
- [x] Add only minimal new CSS needed for readable long-form legal content
- [x] Update footer links on the homepage and apps page to include Terms and Refund Policy
- [x] Keep all styling within design-system token usage and local site-token conventions

### 5. Verification + Reporting
- [x] Verify all legal-page links resolve correctly from the homepage and apps page
- [x] Confirm the pages remain readable, responsive, keyboard navigable, and consistent with reduced-motion expectations
- [x] Record files added or modified and any policy assumptions reflected in the draft copy

## Acceptance Criteria
- [x] Static pages exist at `/terms` and `/refunds`
- [x] Both pages match the site’s existing visual and structural conventions
- [x] Footer links to both legal pages are present where the site exposes footer utility navigation
- [x] Terms language reflects per-app licenses, reasonable activation limits, and lightweight consulting coverage
- [x] Refund language reflects the 14-day request window, support contact, payment-provider processing, and separate-agreement treatment for bespoke work
- [x] The implementation remains static, accessible, and compatible with GitHub Pages hosting
