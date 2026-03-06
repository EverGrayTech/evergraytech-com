# System Specification: EverGray Tech Business Website

## 1. Core Vision

**Vision**: A professional, credible web presence that showcases Allen Rose's technical leadership expertise and establishes trust with diverse potential clients seeking consulting, software development, and workflow solutions.

**Problem**: As a solo founder launching EverGray Tech, there's a need for a professional digital presence that:
- Establishes credibility and trust with potential clients
- Communicates extensive technical leadership experience
- Positions services across multiple domains (consulting, development, open source)
- Provides an easy way for prospects to make contact
- Supports iterative growth as the business evolves

**Core Users**:
1. **Primary**: Decision-makers seeking technical leadership and software solutions
   - Creative studios and production companies
   - Small-to-medium businesses needing custom workflow solutions
   - Startups requiring technical architecture and leadership consulting
   
2. **Secondary**: 
   - Open source community members and developers
   - Professional network connections and referral sources

## 2. Business Context

### About EverGray Tech
- **Founder**: Allen Rose - Director of Technology with 20+ years experience in platform engineering, pipeline architecture, and cross-functional leadership
- **Background**: Media/entertainment industry (MSG Sphere Studios, DreamWorks, Pixomondo, Rhythm & Hues, Flawless AI)
- **Services**: 
  - Technical leadership and strategy consulting
  - Custom software development and workflow automation
  - Open source library development
  - Specialized in AI-enabled automation, internal developer platforms, and security-conscious workflows
- **Primary Customer**: Party/decor/creative studio (inventory management, digital files, review/approval workflows)
- **Target Markets**: Not limited to media/entertainment - open to diverse industries

### Mission Statement
"To galvanize and forge collaborative, innovative, streamlined workflows, so that, together, we overcome challenges and produce our very best work: building and inspiring a brighter future."

**Core Values**:
- Long-term vision balanced with short-term agility
- Clear communication across diverse stakeholders
- User-centered, sustainable solutions
- Continuous learning and positive impact

## 3. Contact Information
- **Email**: hello@EverGrayTech.com
- **LinkedIn**: https://www.linkedin.com/company/EverGrayTech
- **Personal LinkedIn**: https://www.linkedin.com/in/allen-rose
- **Phone**: 310-923-6769
- **Location**: Los Angeles, CA

## 4. Technical Architecture

See [Technical Requirements](.agent/.clinerules/technical-requirements.md) for detailed technical specifications.

**Summary**:
- Static HTML5, CSS3, vanilla JavaScript
- GitHub Pages → AWS migration planned
- Mobile-first, accessible, performant
- Simple, maintainable codebase

## 5. Current Phase: MVP

See [Phase 1 MVP Plan](.agent/plans/phase-1-mvp.md) for complete requirements and checklist.

**Key Deliverables**:
- Hero section with logo and value proposition
- Professional overview with resume link
- Contact information and simple contact method
- Dark-mode aesthetic with logo gradient colors
- Mobile-responsive, accessible design

## 6. Future Roadmap

See [Future Phases](.agent/plans/future-phases.md) for detailed expansion plans.

**Upcoming**:
- Phase 2: Enhanced content (services, case studies, testimonials)
- Phase 3: Thought leadership (blog, projects, speaking)
- Phase 4: Interactive features (forms, newsletter, calendar)
- Phase 5: Advanced (CMS, analytics, optimization)

## 7. Content Strategy

### Tone and Voice
- **Professional**: Credible, experienced, authoritative
- **Approachable**: Not corporate or stuffy; collaborative and human
- **Clear**: Jargon-free for non-technical stakeholders, but demonstrates technical depth
- **Confident**: Proven track record, capable of solving complex problems
- **Forward-thinking**: AI-enabled, modern practices, continuous improvement

### Key Messages
1. **Experience**: Extensive technical leadership in complex, high-stakes environments
2. **Versatility**: Industry-agnostic expertise applicable across domains
3. **Results**: Proven ability to deliver scalable, reliable systems
4. **Leadership**: Cross-functional team leadership and stakeholder alignment
5. **Innovation**: AI-enabled automation, modern architecture, best practices

### SEO Keywords (Future)
- Technical leadership consulting
- Software development Los Angeles
- Pipeline architecture
- Workflow automation
- Internal developer platforms
- AI-enabled automation
- Custom software development
- Technical strategy consulting

## 8. Design System

### Color Palette
```
Primary Gradient (from logo): 
  - Burgundy: #A21534
  - Navy: #0F263D
  - Blue: #3A7ABB

Background:
  - Dark: #0A0A0A - #1A1A1A
  - Surface: #252525 - #2A2A2A

Text:
  - Primary: #FFFFFF
  - Secondary: #B0B0B0 - #D0D0D0
  - Muted: #808080

Accents:
  - Derived from logo gradient
  - Use sparingly for CTAs and highlights
```

### Typography Scale
```
Headings: Modern sans-serif (e.g., Inter, Outfit, Space Grotesk)
Body: Readable sans-serif (e.g., Inter, System UI stack)

Scale:
  - H1: 2.5rem - 4rem (responsive)
  - H2: 2rem - 3rem
  - H3: 1.5rem - 2rem
  - Body: 1rem - 1.125rem
  - Small: 0.875rem
```

### Spacing System
```
Base unit: 8px
Scale: 8, 16, 24, 32, 48, 64, 96, 128px
```

### Components
- Logo header
- Navigation (minimal for Phase 1)
- Hero section with gradient background
- Content sections with clear hierarchy
- Contact information block
- Footer with copyright and links

## 9. File Structure

See [File Organization Plan](.agent/plans/00-file-organization.md) for detailed organization strategy.

**Current Structure**:
```
evergraytech_com/
├── .agent/                     # Development guidelines and plans
│   ├── .clinerules/           # Development workflow and requirements
│   └── plans/                 # Phase plans and organization
├── index.html                  # Main landing page
├── styles.css                  # Global styles
├── images/
│   └── evergray_tech.svg      # Logo
├── RoseAllenM_resume.pdf      # Resume download
├── SYSTEM_SPEC.md             # This document
├── README.md                  # Project documentation
├── LICENSE                    # License information
├── CNAME                      # Domain configuration
└── .gitignore                 # Git ignore rules
```

## 10. Development Guidelines

See [Development Workflow](.agent/.clinerules/development-workflow.md) for complete development standards and processes.

**Key Principles**:
- Spec-driven development
- Quality standards (code, performance, accessibility)
- Version control best practices
- Iterative deployment and monitoring

## 11. Constraints and Considerations

### Must Have
- Professional appearance that builds trust
- Mobile-responsive design
- Fast load times
- Easy to update and maintain
- Works on GitHub Pages
- Includes EverGray Tech logo

### Should Have
- Dark mode aesthetic
- Gradient accents from logo
- Clear call-to-action for contact
- Link to resume
- SEO-friendly structure

### Could Have (Future)
- Light mode toggle
- Animated transitions
- Interactive elements
- Blog integration
- Analytics tracking

### Won't Have (Phase 1)
- Complex JavaScript frameworks
- Backend/database
- User accounts or authentication
- E-commerce functionality
- Content management system
- Multi-language support

## 12. Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Site looks unprofessional | High | Follow design system, get feedback before launch |
| Poor mobile experience | High | Mobile-first development, test on real devices |
| Slow load times | Medium | Optimize assets, minimize dependencies |
| Accessibility issues | Medium | Follow WCAG guidelines, use accessibility tools |
| Unclear messaging | High | Clear value proposition, professional copywriting |
| Hard to maintain | Low | Simple tech stack, well-documented code |
| GitHub Pages limitations | Low | Plan AWS migration path, keep portable |

## 13. Related Documents

### Development Guidelines
- [Technical Requirements](.agent/.clinerules/technical-requirements.md)
- [Development Workflow](.agent/.clinerules/development-workflow.md)

### Project Plans
- [File Organization Plan](.agent/plans/00-file-organization.md)
- [Phase 1 MVP](.agent/plans/phase-1-mvp.md)
- [Future Phases](.agent/plans/future-phases.md)

### Project Files
- README.md: Project overview and setup instructions
- LICENSE: Project license information
- RoseAllenM_resume.pdf: Professional resume

### Repository
- GitHub: git@github.com:EverGrayTech/evergraytech_com.git

## 14. Revision History
- v1.1 (2026-02-21): Reorganized content into .agent/ structure, reduced repetition
- v1.0 (2026-02-21): Initial specification for Phase 1 MVP
