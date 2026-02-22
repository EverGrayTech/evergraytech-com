# System Specification: EverGray Tech Business Website

## 1. Core Vision

**Vision**: A professional, credible web presence that showcases Allen Rose's technical leadership expertise and establishes trust with diverse potential clients seeking consulting, software development, and workflow solutions.

**Problem**: As a solo founder launching EverGray Tech, there's a need for a professional digital presence that:
- Establishes credibility and trust with potential clients
- Communicates 20+ years of technical leadership experience
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

## 3. Architectural Overview

### Technology Stack
- **Frontend**: Static HTML5, CSS3, vanilla JavaScript
- **Hosting**: GitHub Pages (current) → AWS migration planned
- **Domain**: evergraytech.com (via CNAME)
- **Assets**: SVG logo with gradient (burgundy to navy blue)
- **Version Control**: Git (GitHub repository)

### Technical Principles
- **Simplicity First**: Static site for easy maintenance and hosting
- **Performance**: Fast load times, minimal dependencies
- **Accessibility**: WCAG 2.1 AA compliance minimum
- **Mobile-First**: Responsive design for all device sizes
- **Progressive Enhancement**: Core content accessible without JavaScript
- **SEO-Ready**: Semantic HTML, meta tags, structured data

## 4. Phase 1 Requirements (MVP)

### Scope: Minimal Professional Presence
The initial release focuses on establishing credibility with minimal complexity.

#### Required Content
1. **Hero Section**
   - EverGray Tech logo (evergray_tech.svg)
   - Tagline/value proposition
   - Brief introduction to Allen Rose and services
   
2. **About/Overview**
   - Professional summary highlighting 20+ years experience
   - Key competencies and technical scope
   - Industry-agnostic positioning
   - Link to resume (RoseAllenM_resume.pdf)
   
3. **Contact Information**
   - Email: hello@EverGrayTech.com
   - LinkedIn: https://www.linkedin.com/company/EverGrayTech
   - Phone: 310-923-6769
   - Location: Los Angeles, CA
   - Simple contact method (email link or basic form)

#### Design Requirements
- **Aesthetic**: Clean, modern, dark-mode focused
- **Personality**: Professional but not corporate; sophisticated and approachable
- **Color Palette**: 
  - Primary: Gradient from burgundy (#6C0E23) through navy (#12263A) to blue (#2B5C8C) - from logo
  - Background: Dark (charcoal/near-black)
  - Text: Light/white with good contrast
  - Accents: Derived from logo gradient
- **Typography**: 
  - Clean, modern sans-serif
  - Excellent readability
  - Professional hierarchy
- **Layout**: 
  - Single-page or minimal multi-page
  - Clear visual hierarchy
  - Generous whitespace
  - Mobile-responsive breakpoints

#### Technical Requirements
- Valid, semantic HTML5
- Modern CSS (Grid/Flexbox for layout)
- Minimal or no JavaScript for core functionality
- Optimized images and assets
- Fast page load (<2 seconds on 3G)
- Cross-browser compatibility (modern browsers)
- Mobile-responsive (320px to 4K)
- Accessible (keyboard navigation, screen readers, ARIA where needed)

## 5. Future Expansion (Post-MVP)

### Planned Phases
While not in scope for Phase 1, the architecture should accommodate:

**Phase 2: Enhanced Content**
- Detailed service offerings (consulting, development, open source)
- Case studies or project highlights
- Testimonials/references
- Expanded about section

**Phase 3: Thought Leadership**
- Blog/articles section
- Technical writing samples
- Open source project showcase
- Speaking engagements/presentations

**Phase 4: Interactive Features**
- Contact form with validation
- Newsletter signup
- Project inquiry form
- Calendar integration for consultations

**Phase 5: Advanced**
- CMS integration for content management
- Analytics and conversion tracking
- A/B testing capabilities
- SEO optimization and content strategy

### Migration Considerations
- Design should be portable to AWS hosting
- Structure should support future CMS integration
- Code should be modular for easy enhancement
- Consider static site generator migration path (Hugo, Jekyll, 11ty)

## 6. Success Metrics

### Phase 1 Goals
- **Professional Credibility**: Site looks polished and trustworthy when shared with prospects
- **Expertise Showcase**: Clearly communicates technical leadership capabilities
- **Accessibility**: Easy for prospects to understand services and make contact
- **Technical Quality**: Fast, accessible, works on all devices

### Future Metrics (Post-MVP)
- Contact form submissions / email inquiries
- Time on site and engagement
- SEO visibility for relevant keywords
- Conversion rate from visitor to inquiry
- Professional network sharing and referrals

## 7. Content Strategy

### Tone and Voice
- **Professional**: Credible, experienced, authoritative
- **Approachable**: Not corporate or stuffy; collaborative and human
- **Clear**: Jargon-free for non-technical stakeholders, but demonstrates technical depth
- **Confident**: Proven track record, capable of solving complex problems
- **Forward-thinking**: AI-enabled, modern practices, continuous improvement

### Key Messages
1. **Experience**: 20+ years of technical leadership in complex, high-stakes environments
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

## 8. Design System (Phase 1)

### Color Palette
```
Primary Gradient: 
  - Burgundy: #6C0E23
  - Navy: #12263A
  - Blue: #2B5C8C

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

```
evergraytech_com/
├── index.html              # Main landing page
├── styles.css              # Global styles
├── SYSTEM_SPEC.md          # This document
├── README.md               # Project documentation
├── LICENSE                 # License information
├── CNAME                   # Domain configuration
├── .gitignore              # Git ignore rules
├── images/
│   └── evergray_tech.svg   # Logo
├── assets/                 # Future: additional images, icons
├── scripts/                # Future: JavaScript files
└── RoseAllenM_resume.pdf   # Resume download
```

## 10. Development Workflow

### Spec-Driven Development Protocol
1. **Specification**: This SYSTEM_SPEC defines requirements
2. **Design**: Create mockups/wireframes aligned with spec
3. **Implementation**: Build according to spec and design
4. **Review**: Validate against requirements
5. **Iterate**: Gather feedback and refine
6. **Deploy**: Push to GitHub Pages
7. **Monitor**: Track performance and user feedback

### Quality Standards
- **Code Quality**: 
  - Valid HTML5 (W3C validator)
  - Modern CSS best practices
  - Commented code for maintainability
  - Consistent formatting and naming conventions
  
- **Performance**:
  - Lighthouse score: 90+ across all categories
  - Page load: <2 seconds on 3G
  - Optimized images (SVG for logo, WebP for photos)
  
- **Accessibility**:
  - WCAG 2.1 AA minimum
  - Keyboard navigable
  - Screen reader compatible
  - Sufficient color contrast (4.5:1 minimum)
  
- **Browser Support**:
  - Modern browsers (last 2 versions)
  - Chrome, Firefox, Safari, Edge
  - Mobile Safari, Chrome Mobile

### Version Control
- Main branch: production-ready code
- Feature branches for development
- Meaningful commit messages
- Tag releases (v1.0.0, v1.1.0, etc.)

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

## 13. Launch Checklist

### Pre-Launch
- [ ] Content finalized and proofread
- [ ] Design approved
- [ ] All links tested
- [ ] Mobile responsive verified
- [ ] Accessibility tested
- [ ] Performance optimized (Lighthouse)
- [ ] Cross-browser tested
- [ ] SEO meta tags added
- [ ] Favicon created
- [ ] CNAME configured
- [ ] SSL/HTTPS working

### Post-Launch
- [ ] Share with professional network
- [ ] Update LinkedIn with website link
- [ ] Monitor for issues
- [ ] Gather feedback
- [ ] Plan Phase 2 enhancements

## 14. Appendix

### References
- Resume: RoseAllenM_resume.pdf
- LinkedIn: https://www.linkedin.com/in/allen-rose
- Repository: git@github.com:EverGrayTech/evergraytech_com.git

### Related Documents
- README.md: Project overview and setup instructions
- LICENSE: Project license information

### Revision History
- v1.0 (2026-02-21): Initial specification for Phase 1 MVP
