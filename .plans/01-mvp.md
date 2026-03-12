# Plan: MVP Implementation

## 1. Technical Architecture

### Impacted Files
- `index.html` - Complete rebuild with semantic HTML5 structure
- `styles.css` - Create comprehensive stylesheet with design system
- New files to create:
  - `favicon.ico` or `favicon.svg` - Site favicon
  - Meta tags and SEO optimization

### New Dependencies
- None (vanilla HTML/CSS/JS as per technical requirements)

### Design System Implementation
```css
/* Color Palette */
--color-burgundy: #6C0E23;
--color-navy: #12263A;
--color-blue: #2B5C8C;
--color-bg-dark: #0A0A0A;
--color-bg-surface: #1A1A1A;
--color-text-primary: #FFFFFF;
--color-text-secondary: #D0D0D0;
--color-text-muted: #808080;

/* Typography Scale */
--font-family-heading: 'Inter', system-ui, sans-serif;
--font-family-body: 'Inter', system-ui, sans-serif;
--font-size-h1: clamp(2.5rem, 5vw, 4rem);
--font-size-h2: clamp(2rem, 4vw, 3rem);
--font-size-h3: clamp(1.5rem, 3vw, 2rem);
--font-size-body: clamp(1rem, 2vw, 1.125rem);

/* Spacing System (8px base) */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;
--space-12: 96px;
--space-16: 128px;
```

### Content Structure
```
1. Header
   - Logo
   - Navigation (minimal - future)

2. Hero Section
   - Logo (large)
   - Tagline/Value Proposition
   - Brief introduction
   - CTA (Contact)

3. About/Overview Section
   - Professional summary
   - Key competencies
   - Technical scope
   - Industry positioning
   - Resume link

4. Contact Section
   - Email
   - LinkedIn (company & personal)
   - Phone
   - Location
   - Contact CTA

5. Footer
   - Copyright
   - Links
```

## 2. Implementation Steps (The Task List)

- [ ] **Phase 1: HTML Structure**
    - [ ] Create semantic HTML5 document structure
    - [ ] Add meta tags (viewport, description, keywords, Open Graph)
    - [ ] Implement hero section with logo and value proposition
    - [ ] Create about/overview section with professional summary
    - [ ] Build contact information section
    - [ ] Add footer with copyright and links
    - [ ] Link to resume PDF
    - [ ] Ensure accessibility (ARIA labels, semantic elements)

- [ ] **Phase 2: CSS Styling**
    - [ ] Set up CSS custom properties (design system)
    - [ ] Create base/reset styles
    - [ ] Implement typography system
    - [ ] Style hero section with gradient background
    - [ ] Style about section with clear hierarchy
    - [ ] Style contact section
    - [ ] Style footer
    - [ ] Add responsive breakpoints (mobile-first)
    - [ ] Ensure color contrast meets WCAG AA standards

- [ ] **Phase 3: Polish & Optimization**
    - [ ] Create favicon (SVG or ICO)
    - [ ] Add smooth scrolling and subtle animations
    - [ ] Optimize for performance
    - [ ] Test mobile responsiveness (320px to 4K)
    - [ ] Test keyboard navigation
    - [ ] Validate HTML (W3C validator)
    - [ ] Test cross-browser compatibility

- [ ] **Phase 4: Pre-Launch Validation**
    - [ ] Run Lighthouse audit (target 90+ all categories)
    - [ ] Test all links (resume, LinkedIn, email)
    - [ ] Proofread all content
    - [ ] Test on real mobile devices
    - [ ] Verify CNAME configuration
    - [ ] Test accessibility with screen reader

- [ ] **Phase 5: Deployment**
    - [ ] Commit all changes
    - [ ] Push to GitHub
    - [ ] Verify GitHub Pages deployment
    - [ ] Test live site
    - [ ] Verify SSL/HTTPS working

## 3. Content Copy

### Hero Section
**Tagline Options:**
1. "Galvanizing collaborative, innovative, streamlined workflows"
2. "Technical Leadership for Modern Challenges"
3. "Building Scalable Solutions, Inspiring Brighter Futures"

**Introduction:**
"EverGray Tech provides technical leadership, custom software development, and workflow automation solutions. Led by Allen Rose, a Director of Technology with 20+ years of experience in platform engineering and cross-functional leadership."

### About Section
**Professional Summary:**
"Allen Rose brings over two decades of technical leadership experience from high-stakes environments including MSG Sphere Studios, DreamWorks, Pixomondo, Rhythm & Hues, and Flawless AI. Specializing in platform engineering, pipeline architecture, and AI-enabled automation, EverGray Tech delivers scalable, reliable solutions across diverse industries."

**Key Competencies:**
- Technical Leadership & Strategy
- Platform Engineering & Architecture
- AI-Enabled Workflow Automation
- Internal Developer Platforms
- Cross-Functional Team Leadership
- Security-Conscious Development

**Industry Positioning:**
"While rooted in media and entertainment, EverGray Tech's expertise is industry-agnostic—serving creative studios, production companies, small-to-medium businesses, and startups seeking custom workflow solutions and technical architecture."

### Contact Section
**Heading:** "Let's Build Something Great Together"

**Subheading:** "Ready to streamline your workflows and overcome technical challenges? Get in touch."

## 4. Known Risks

### Content Risks
- **Risk:** Messaging may be too technical or too vague
  - **Mitigation:** Balance technical depth with accessibility; get feedback before launch

- **Risk:** Value proposition unclear to non-technical stakeholders
  - **Mitigation:** Lead with outcomes and benefits, not just technical capabilities

### Technical Risks
- **Risk:** Dark mode may have contrast issues
  - **Mitigation:** Use contrast checker tools, test with accessibility validators

- **Risk:** Gradient backgrounds may affect text readability
  - **Mitigation:** Use overlays/gradients carefully, ensure sufficient contrast

- **Risk:** Mobile responsiveness issues
  - **Mitigation:** Mobile-first approach, test on real devices

### Design Risks
- **Risk:** Site may look too simple or unprofessional
  - **Mitigation:** Focus on polish, typography, spacing; simplicity can be elegant

- **Risk:** Logo gradient colors may clash with dark background
  - **Mitigation:** Test color combinations, use gradient subtly as accents

## 5. Success Criteria

### Must Have (Launch Blockers)
- ✅ Valid, semantic HTML5
- ✅ Mobile responsive (320px to 4K)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ All links working (resume, LinkedIn, email)
- ✅ Fast load time (<2 seconds on 3G)
- ✅ Professional appearance
- ✅ Clear value proposition
- ✅ Contact information visible

### Should Have (Pre-Launch)
- ✅ Lighthouse score 90+ all categories
- ✅ Favicon implemented
- ✅ SEO meta tags
- ✅ Cross-browser tested
- ✅ Smooth animations/transitions

### Could Have (Post-Launch)
- 🔄 Analytics integration
- 🔄 Contact form (vs. email link)
- 🔄 Testimonials section
- 🔄 Case studies preview

## 6. Next Steps After Completion
1. Commit with semantic version tag (v1.0.0)
2. Deploy to GitHub Pages
3. Test live site
4. Share with professional network
5. Gather feedback
6. Plan Phase 2 enhancements
