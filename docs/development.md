# Development Workflow

## Spec-Driven Development

1. Reference [system-spec.md](system-spec.md) for website-specific goals and constraints
2. Reference the [design system](https://github.com/EverGrayTech/design-system) for all shared visual decisions
3. Create or update a plan in `.plans/` before making structural changes
4. Implement changes per the plan, committing after each atomic task
5. Validate against requirements, then deploy

## Design System Dependency

This site consumes `@evergraytech/design-system` for foundational tokens. The vendored outputs in `vendor/design-system/` are committed so GitHub Pages can serve them.

**Update flow:**

```bash
pnpm update @evergraytech/design-system
pnpm run sync:design-system
# Review vendor/design-system/ diff and the upstream changelog
git add vendor/ pnpm-lock.yaml
git commit -m "chore: update design system to vX.Y.Z"
```

**Token usage rules:**

- If a shared token exists upstream, use it — do not hardcode the value locally
- Site-specific composition tokens use the `--site-` prefix in `styles.css`
- If a needed token is missing, follow the upstream exception-handling process:
  1. Check if an existing token fits
  2. Request it upstream if no token fits
  3. Document the local override with a tracking comment if urgent: `/* TODO: upstream to design system — see #XX */`

## Quality Standards

### Code Quality
- Valid, semantic HTML5 (W3C validator)
- Modern CSS using design system custom properties
- Commented code for maintainability
- Consistent formatting and naming

### Performance
- Lighthouse score: 90+ across all categories
- Page load: <2 seconds on 3G
- Optimized assets (SVG logo from design system, WebP for future photos)

### Accessibility
- WCAG 2.1 AA minimum
- Marketing headlines target 7:1+ contrast (per upstream guidance)
- Keyboard navigable with visible focus indicators
- Screen reader compatible
- `prefers-reduced-motion` fully respected — all motion disabled

### Browser Support
- Modern browsers (last 2 versions): Chrome, Firefox, Safari, Edge
- Mobile Safari, Chrome Mobile

## Version Control

- Conventional Commits for all commit messages
- Main branch: production-ready code
- Feature branches for development
- Tag releases following SemVer 2.0.0
