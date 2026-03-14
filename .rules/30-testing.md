# Verification Protocol (Static Site)
- **HTML Validation**: Check with W3C validator — no errors in semantic markup.
- **Lighthouse**: Run Lighthouse CI or DevTools audit; target 90+ in all categories (Performance, Accessibility, Best Practices, SEO).
- **Visual Smoke Test**: Open `index.html` locally and verify sections render correctly, logo loads, CTA is visible, and contact info is present.
- **Responsive Check**: Test at 320px, 768px, 1024px, and 1440px widths. Verify grid collapse, CTA stacking, and headline wrapping.
- **Reduced Motion**: Enable `prefers-reduced-motion: reduce` and confirm all animation and transitions are disabled.
- **Keyboard Navigation**: Tab through the page — focus indicators must be visible on all interactive elements.
- **Contrast**: Verify text contrast meets WCAG AA minimum (4.5:1 body, 7:1+ marketing headlines).
- **Content Independence**: Confirm the page is fully functional if all gradients replaced with flat canvas, all graphic motifs removed, and all motion disabled.
- **Definition of Done**: Task is complete when the site passes all checks above and renders correctly across supported browsers.
