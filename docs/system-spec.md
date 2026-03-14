# System Specification: EverGray Tech Marketing Website

## 1. Purpose

This document defines the website-specific goals, content strategy, constraints, and adoption expectations for [evergraytech.com](https://evergraytech.com). It does not duplicate shared visual rules — those are owned by the [EverGray Tech Design System](https://github.com/EverGrayTech/design-system).

## 2. Core Vision

A professional, credible marketing site that establishes trust with potential clients seeking technical leadership, consulting, custom software development, and workflow solutions.

**Core Users**:
1. **Primary**: Decision-makers seeking technical leadership and software solutions — creative studios, production companies, small-to-medium businesses, and startups.
2. **Secondary**: Open source community members, developers, and professional network connections.

## 3. Business Context

### About EverGray Tech
- **Founder**: Allen Rose — Director of Technology with 20+ years in platform engineering, pipeline architecture, and cross-functional leadership
- **Background**: Media/entertainment industry (MSG Sphere Studios, DreamWorks, Pixomondo, Rhythm & Hues, Flawless AI)
- **Services**: Technical leadership consulting, custom software development, workflow automation, open source library development — specializing in AI-enabled automation, internal developer platforms, and security-conscious workflows
- **Target Markets**: Industry-agnostic; currently serving creative studios, startups, and SMBs

### Mission Statement
"To galvanize and forge collaborative, innovative, streamlined workflows, so that, together, we overcome challenges and produce our very best work: building and inspiring a brighter future."

### Contact Information
- **Email**: hello@EverGrayTech.com
- **LinkedIn**: [Company](https://www.linkedin.com/company/EverGrayTech) · [Allen Rose](https://www.linkedin.com/in/allen-rose)
- **Phone**: 310-923-6769
- **Location**: Los Angeles, CA

## 4. Design System Relationship

This website consumes the shared EverGray Tech Design System for all foundational visual tokens (colors, typography, spacing, radii, motion, accent, semantic states, and the brand logo). See the [README](../README.md) for consumption mechanics.

The website is the slightly more cinematic expression of the shared system. It may use atmospheric treatments, scroll-reveal motion, and marketing-specific composition — all within the boundaries defined upstream:

- **Visual tokens and consumption**: [Consumption Guide](https://github.com/EverGrayTech/design-system/blob/main/docs/consumption-guide.md)
- **Atmospheric treatments and motion**: [Website Brand Atmosphere and Graphics](https://github.com/EverGrayTech/design-system/blob/main/docs/website-brand-atmosphere-and-graphics.md)
- **Section composition and CTA hierarchy**: [Marketing Site Patterns](https://github.com/EverGrayTech/design-system/blob/main/docs/marketing-site-patterns.md)

Contributors should reference those upstream docs for styling guidance rather than inventing local style rules.

## 5. Technical Architecture

See [Technical Requirements](technical-requirements.md) for detailed specifications.

**Summary**:
- Static HTML5, CSS3, vanilla JavaScript
- GitHub Pages hosting (CNAME: evergraytech.com)
- Mobile-first, accessible, performant
- Design system tokens consumed via vendored `vendor/design-system/variables.css`

## 6. Content Strategy

### Tone and Voice
- **Professional**: Credible, experienced, authoritative
- **Approachable**: Collaborative and human — not corporate or stuffy
- **Clear**: Jargon-free for non-technical stakeholders, with demonstrated technical depth
- **Confident**: Proven track record, capable of solving complex problems
- **Forward-thinking**: AI-enabled, modern practices, continuous improvement

### Key Messages
1. **Experience**: Extensive technical leadership in complex, high-stakes environments
2. **Versatility**: Industry-agnostic expertise applicable across domains
3. **Results**: Proven ability to deliver scalable, reliable systems
4. **Leadership**: Cross-functional team leadership and stakeholder alignment
5. **Innovation**: AI-enabled automation, modern architecture, best practices

### Content Posture (from upstream guidance)
- Proof should feel sober and specific, not promotional
- The website should be company-first, with leadership context as supporting proof
- Each section should have one dominant communicative purpose
- Accent is reserved for true emphasis moments — it is not the default action styling

## 7. Current State

The site is a single-page marketing presence with four sections:
- **Hero**: Brand posture, value proposition, primary CTA
- **About**: Company overview, core competencies, industry positioning, leadership proof
- **Contact**: Direct outreach paths (email, phone, location, LinkedIn)
- **Footer**: Copyright and utility links

## 8. Future Roadmap

Potential future additions (not yet scheduled):
- Enhanced content: services detail, case studies, testimonials
- Thought leadership: blog, project showcases, speaking
- Interactive features: contact form, newsletter, calendar booking
- Infrastructure: CMS integration, analytics, performance optimization

## 9. Constraints

### Must Have
- Professional appearance that builds trust
- Mobile-responsive design
- Fast load times (<2s on 3G)
- WCAG 2.1 AA accessibility
- Works on GitHub Pages
- Consumes design system tokens — no hardcoded foundational values

### Should Have
- Dark-mode aesthetic (per design system canvas)
- Restrained gradient accents from logo
- Clear call-to-action for contact
- Resume link

### Won't Have (current scope)
- JavaScript frameworks
- Backend/database
- User accounts or authentication
- E-commerce
- Content management system

## 10. Related Documents

- [Technical Requirements](technical-requirements.md) — stack, performance, accessibility
- [Development Workflow](development.md) — process and quality standards
- [Project Plans](../.plans/) — implementation sequencing
