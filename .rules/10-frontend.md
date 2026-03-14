# Frontend Standards (Static HTML/CSS/JS)
- **Stack**: Static HTML5, CSS3, vanilla JavaScript. No frameworks.
- **Package Manager**: Use `pnpm` for dependency tracking (`@evergraytech/design-system`).
- **Design System**: All foundational tokens (colors, typography, spacing, radii, motion) come from `vendor/design-system/variables.css`. Do not hardcode values that exist upstream.
- **Site Tokens**: Local composition decisions use `--site-` prefixed custom properties in `styles.css`.
- **Naming**: kebab-case for CSS classes, camelCase for JS variables.
- **Upstream Rule**: If a shared token exists in the design system, reference it — do not redefine it locally. See the [Consumption Guide](https://github.com/EverGrayTech/design-system/blob/main/docs/consumption-guide.md).
- **Exception Handling**: Check for existing token → request upstream if missing → document local override with tracking comment (`/* TODO: upstream to design system — see #XX */`) if urgent.
- **Update Flow**: `pnpm update @evergraytech/design-system && pnpm run sync:design-system` — review changelog for breaking changes before committing.
