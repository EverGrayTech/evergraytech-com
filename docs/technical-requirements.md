# Technical Requirements

## Technology Stack

- **Frontend**: Static HTML5, CSS3, vanilla JavaScript
- **Styling**: Design system tokens via `@evergraytech/design-system` (vendored to `vendor/design-system/`)
- **Hosting**: GitHub Pages (CNAME: evergraytech.com)
- **Assets**: Brand logo from design system (`vendor/design-system/logo.svg`)
- **Package Manager**: pnpm (for design system dependency tracking and vendor sync)
- **Version Control**: Git (GitHub repository)

## Technical Principles

- **Simplicity First**: Static site — no build step required for deployment
- **Design System Consumer**: All foundational tokens come from the shared design system
- **Performance**: Fast load times, minimal dependencies
- **Accessibility**: WCAG 2.1 AA compliance minimum; 7:1+ contrast target for marketing headlines
- **Mobile-First**: Responsive design for all device sizes (320px to 4K)
- **Progressive Enhancement**: Core content accessible without JavaScript
- **SEO-Ready**: Semantic HTML, meta tags, Open Graph, Twitter Cards

## Requirements

- Valid, semantic HTML5
- Modern CSS (Grid/Flexbox, custom properties from design system)
- Minimal JavaScript (scroll-reveal only, gracefully degraded)
- Design system tokens for all colors, typography, spacing, radii, and motion
- Fast page load (<2 seconds on 3G)
- Cross-browser compatibility (modern browsers, last 2 versions)
- Mobile-responsive (320px to 4K)
- Accessible: keyboard navigation, screen readers, ARIA where needed, `prefers-reduced-motion` respected
- Lighthouse 90+ across all categories

## Migration Considerations

- Design should remain portable to AWS hosting
- Structure should support future CMS integration
- Code should be modular for easy enhancement
- Static site generator migration path (Hugo, Jekyll, 11ty) remains viable
