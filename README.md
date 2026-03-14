# EverGray Tech — evergraytech.com

The public marketing website for [EverGray Tech](https://evergraytech.com).

## Stack

Static HTML5, CSS3, and vanilla JavaScript — hosted on GitHub Pages.

## Design System

This site consumes the shared [EverGray Tech Design System](https://github.com/EverGrayTech/design-system) for all foundational visual tokens: colors, typography, spacing, radii, and motion. The design system is the single source of truth for these values — they must not be duplicated or hardcoded locally.

Vendored design-system outputs live in `vendor/design-system/` and are committed to the repo so GitHub Pages can serve them without a build step.

### Updating the design system

```bash
pnpm update @evergraytech/design-system
pnpm run sync:design-system
```

Review the design system changelog for breaking changes (major version bumps) or new tokens before committing the updated vendor files.

### What comes from the design system

Colors, typography, spacing, radii, motion durations, easing curves, semantic states, accent values, and the brand logo.

See the upstream [Consumption Guide](https://github.com/EverGrayTech/design-system/blob/main/docs/consumption-guide.md) for the full contract.

### What remains a local decision

Layout composition, responsive clamp sizes, section spacing, container widths, z-index layering, and component-internal dimensions. These are defined in `styles.css` using `--site-` prefixed custom properties.

## Website expression

This site is the slightly more cinematic expression of the shared design system — it may use atmospheric background treatments, scroll-reveal motion, and marketing-specific composition patterns, all within the boundaries defined upstream:

- [Website Brand Atmosphere and Graphics](https://github.com/EverGrayTech/design-system/blob/main/docs/website-brand-atmosphere-and-graphics.md)
- [Marketing Site Patterns](https://github.com/EverGrayTech/design-system/blob/main/docs/marketing-site-patterns.md)

## Documentation

| Document | Purpose |
|---|---|
| [docs/system-spec.md](docs/system-spec.md) | Website-specific goals, content strategy, and constraints |
| [docs/technical-requirements.md](docs/technical-requirements.md) | Technical stack, performance targets, and accessibility standards |
| [docs/development.md](docs/development.md) | Development workflow and quality standards |

## Project plans

All project plans are in the [.plans/](.plans/) directory.

## Contributing

1. Read the `.rules/` directory for operating procedures
2. Read the [Consumption Guide](https://github.com/EverGrayTech/design-system/blob/main/docs/consumption-guide.md) before making styling changes
3. If a shared token exists upstream, reference it — do not redefine it locally
4. If a needed token does not exist, follow the upstream exception-handling process (check → request → document local override with tracking comment if urgent)
5. Use Conventional Commits; commit after every atomic task

## License

[Apache-2.0](LICENSE)
