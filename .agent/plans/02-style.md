# Style Improvement Plan - EverGray Tech Website

**Plan ID**: 02-style  
**Created**: 2026-02-23  
**Status**: Complete  
**Design Direction**: Elegant & Sophisticated - High-end consultancy aesthetic

## Executive Summary

This plan addresses critical style and design issues in the current EverGray Tech website to achieve an elegant, sophisticated aesthetic befitting a high-end technical consultancy. The improvements focus on enhancing readability, refining visual hierarchy, creating a more polished user experience, and better positioning the company (rather than the individual) as the primary brand.

## Current Issues Identified

### Critical Issues
1. **Company Name Readability**: The gradient text effect on "EverGray Tech" makes it blend into the background, severely impacting readability and brand recognition
2. **Garish Button Styling**: The red/blue gradient buttons feel aggressive and clash with the sophisticated brand positioning
3. **Scrolling Background Bug**: Background gradient sections create a jarring, buggy feel during scroll transitions
4. **Over-emphasis on Individual**: Too much focus on "Allen Rose" throughout - should emphasize the company brand with leadership as supporting detail

### Secondary Issues
5. **Logo Missing Metadata**: SVG logo lacks proper title, description, and accessibility metadata
6. **Typography Hierarchy**: Needs refinement for more sophisticated feel
7. **Spacing & Rhythm**: Inconsistent visual rhythm between sections
8. **Color Contrast**: Some text elements have insufficient contrast for accessibility
9. **Transition Effects**: Lack of subtle, refined animations that convey quality

## Design Philosophy

### Target Aesthetic: Elegant & Sophisticated
- **Refined Typography**: Sophisticated font pairings, generous spacing, clear hierarchy
- **Subtle Luxury**: Understated elegance through restraint and attention to detail
- **Professional Confidence**: Polished, credible, trustworthy
- **High-end Consultancy**: Premium feel without being ostentatious
- **Timeless Quality**: Classic design principles over trendy effects

### Key Principles
1. **Restraint over Flash**: Subtle effects, refined interactions
2. **Clarity First**: Readability and usability trump visual tricks
3. **Company-Centric**: EverGray Tech is the brand; leadership is supporting context
4. **Accessible Elegance**: Sophisticated design that's inclusive and usable
5. **Purposeful Motion**: Animations enhance understanding, not distract

## Detailed Improvements

### 1. Company Name & Branding (Critical)

**Current Problem**: 
- Gradient text effect makes "EverGray Tech" hard to read
- Blends into background, reducing brand impact
- Accessibility issues with contrast

**Solution**:
```css
/* Replace gradient text with solid white, use gradient as accent */
.hero-title {
    color: var(--color-text-primary); /* Solid white */
    font-weight: 600; /* Slightly lighter than bold for elegance */
    letter-spacing: -0.02em; /* Tighter tracking for sophistication */
    text-shadow: 0 2px 20px rgba(108, 14, 35, 0.3); /* Subtle depth */
}

/* Add gradient accent bar beneath title */
.hero-title::after {
    content: '';
    display: block;
    width: 120px;
    height: 3px;
    background: var(--gradient-primary);
    margin: var(--space-3) auto 0;
    border-radius: 2px;
}
```

**Impact**: Dramatically improved readability, stronger brand presence, maintains gradient as elegant accent

---

### 2. Button Redesign (Critical)

**Current Problem**:
- Red/blue gradient buttons are garish and aggressive
- Don't match sophisticated brand positioning
- Overpower the design

**Solution**:
```css
/* Primary CTA: Elegant, understated */
.cta-button {
    background: rgba(255, 255, 255, 0.05); /* Subtle glass effect */
    color: var(--color-text-primary);
    border: 1.5px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 14px 32px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 0.875rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* Subtle gradient accent on hover only */
.cta-button::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.cta-button:hover::before {
    opacity: 0.1;
}

/* Secondary buttons: Even more subtle */
.button-secondary {
    background: transparent;
    color: var(--color-text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 12px 28px;
    font-weight: 400;
    transition: all 0.3s ease;
}

.button-secondary:hover {
    color: var(--color-text-primary);
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.03);
}
```

**Impact**: Sophisticated, refined buttons that enhance rather than dominate the design

---

### 3. Fix Scrolling Background (Critical)

**Current Problem**:
- Alternating gradient backgrounds create jarring transitions
- Feels like a bug rather than intentional design
- Disrupts reading flow

**Solution**:
```css
/* Unified background approach */
body {
    background: linear-gradient(
        180deg,
        var(--color-bg-dark) 0%,
        #0F0F0F 50%,
        var(--color-bg-dark) 100%
    );
    background-attachment: fixed; /* Prevents scroll jank */
}

/* Remove per-section backgrounds, use subtle borders instead */
.about {
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.contact {
    background: transparent;
}

/* Add subtle section dividers */
section + section::before {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: var(--gradient-primary);
    margin: 0 auto var(--space-8);
    opacity: 0.3;
}
```

**Impact**: Smooth, seamless scrolling experience; elegant section transitions

---

### 4. Reposition Allen Rose Content (Critical)

**Current Problem**:
- Too much emphasis on individual throughout site
- Should position EverGray Tech as the brand
- Leadership details should be supporting, not primary

**Solution - Content Restructure**:

**Hero Section** (Company-first):
```html
<h1>EverGray Tech</h1>
<p class="hero-tagline">Technical Leadership & Software Solutions</p>
<p class="hero-intro">
    Galvanizing collaborative, innovative, streamlined workflows 
    for modern businesses. Expert consulting, custom development, 
    and AI-enabled automation solutions.
</p>
```

**About Section** (Company capabilities, then leadership):
```html
<h2>About EverGray Tech</h2>
<p class="lead">
    We deliver scalable, reliable technical solutions across diverse 
    industries—from creative studios to startups seeking custom 
    workflow automation and platform engineering.
</p>

<h3>Core Services</h3>
<!-- Service offerings -->

<h3>Leadership</h3>
<p>
    Founded and led by Allen Rose, Director of Technology with 20+ years 
    of experience at MSG Sphere Studios, DreamWorks, Pixomondo, and more.
</p>
<a href="#leadership" class="text-link">Learn more about our team →</a>
```

**New Leadership Section** (Future phase):
```html
<!-- Separate page/section for detailed leadership bios -->
<section id="leadership">
    <h2>Leadership</h2>
    <!-- Detailed Allen Rose bio, resume link, etc. -->
</section>
```

**Impact**: Positions company as primary brand, leadership as credibility support

---

### 5. Logo Metadata & Accessibility (Critical)

**Current Problem**:
- SVG lacks proper title and description
- Missing ARIA labels
- No semantic metadata for SEO/accessibility

**Solution**:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   version="1.1"
   width="1530"
   height="1530"
   viewBox="-3 -3 1530 1530"
   role="img"
   aria-labelledby="logo-title logo-desc"
   xmlns="http://www.w3.org/2000/svg">
  
  <title id="logo-title">EverGray Tech Logo</title>
  <desc id="logo-desc">
    A stylized letter 'e' and 'g' forming the EverGray Tech brand mark, 
    rendered in a gradient from burgundy to navy to blue
  </desc>
  
  <defs>
    <linearGradient id="GradientColor">
      <stop offset="0%" style="stop-color:#A21534;"/>
      <stop offset="50%" style="stop-color:#0F263D;" />
      <stop offset="100%" style="stop-color:#3A7ABB;" />
    </linearGradient>
    <!-- ... rest of SVG ... -->
  </defs>
  <!-- ... paths ... -->
</svg>
```

**HTML Usage**:
```html
<img 
    src="images/evergray_tech.svg" 
    alt="EverGray Tech" 
    class="hero-logo"
    width="200"
    height="200"
>
```

**Impact**: Improved accessibility, SEO, and semantic correctness

---

### 6. Typography Refinement

**Current Issues**:
- Inter is good but could be more distinctive
- Hierarchy needs more sophistication
- Letter spacing and line height need refinement

**Solution**:
```css
/* Enhanced typography system */
:root {
    /* Consider adding a serif for headings (optional) */
    --font-family-display: 'Playfair Display', Georgia, serif;
    --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    
    /* Refined scale with better proportions */
    --font-size-h1: clamp(2.75rem, 6vw, 4.5rem);
    --font-size-h2: clamp(2rem, 4vw, 3.25rem);
    --font-size-h3: clamp(1.5rem, 3vw, 2.25rem);
    --font-size-body: clamp(1.0625rem, 2vw, 1.1875rem);
    
    /* Refined line heights for readability */
    --line-height-tight: 1.1;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;
}

h1, h2, h3 {
    font-weight: 600; /* Semibold more elegant than bold */
    letter-spacing: -0.02em; /* Tighter for sophistication */
    line-height: var(--line-height-tight);
}

.hero-title {
    font-weight: 500; /* Even lighter for elegance */
    letter-spacing: -0.01em;
}

p {
    line-height: var(--line-height-relaxed);
    letter-spacing: 0.01em; /* Slight tracking for readability */
}

.lead {
    font-size: var(--font-size-large);
    font-weight: 400; /* Regular weight, let size do the work */
    line-height: var(--line-height-normal);
    letter-spacing: -0.01em;
}
```

**Impact**: More refined, sophisticated typography that's easier to read

---

### 7. Spacing & Visual Rhythm

**Current Issues**:
- Spacing feels inconsistent between sections
- Visual rhythm could be more harmonious

**Solution**:
```css
/* Enhanced spacing scale */
:root {
    --space-1: 8px;
    --space-2: 16px;
    --space-3: 24px;
    --space-4: 32px;
    --space-5: 40px;
    --space-6: 48px;
    --space-8: 64px;
    --space-10: 80px;
    --space-12: 96px;
    --space-16: 128px;
    --space-20: 160px;
}

/* Consistent section spacing */
section {
    padding: var(--space-16) 0;
}

@media (min-width: 768px) {
    section {
        padding: var(--space-20) 0;
    }
}

/* Harmonious internal spacing */
.section-title {
    margin-bottom: var(--space-10);
}

.about-summary {
    margin-bottom: var(--space-12);
}

.competencies {
    margin-bottom: var(--space-10);
}
```

**Impact**: More harmonious, professional visual rhythm

---

### 8. Color Contrast & Accessibility

**Current Issues**:
- Some secondary text may not meet WCAG AA standards
- Gradient text has accessibility concerns

**Solution**:
```css
/* Enhanced color system with better contrast */
:root {
    /* Text colors - WCAG AA compliant */
    --color-text-primary: #FFFFFF;      /* 21:1 on dark bg */
    --color-text-secondary: #D4D4D4;    /* 12:1 on dark bg */
    --color-text-muted: #9CA3AF;        /* 7:1 on dark bg */
    
    /* Interactive elements */
    --color-link: #60A5FA;              /* Lighter blue for better contrast */
    --color-link-hover: #93C5FD;
    
    /* Borders with better visibility */
    --color-border-subtle: rgba(255, 255, 255, 0.08);
    --color-border-medium: rgba(255, 255, 255, 0.15);
    --color-border-strong: rgba(255, 255, 255, 0.25);
}

/* Ensure all text meets contrast requirements */
.hero-tagline,
.hero-intro,
.about-summary p,
.contact-text {
    color: var(--color-text-secondary); /* Improved contrast */
}

.footer-text,
.footer-links a {
    color: var(--color-text-muted); /* Still readable */
}
```

**Impact**: Meets WCAG AA standards, better readability for all users

---

### 9. Refined Animations & Interactions

**Current Issues**:
- Transitions are functional but not refined
- Missing subtle interactions that convey quality

**Solution**:
```css
/* Sophisticated easing functions */
:root {
    --ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-out-smooth: cubic-bezier(0.0, 0, 0.2, 1);
    --ease-in-smooth: cubic-bezier(0.4, 0, 1, 1);
}

/* Refined hover states */
.contact-item {
    transition: all 0.4s var(--ease-in-out-smooth);
}

.contact-item:hover {
    transform: translateY(-2px); /* Subtle, not jarring */
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

/* Smooth link transitions */
a {
    transition: color 0.2s var(--ease-out-smooth);
    position: relative;
}

/* Elegant underline effect for text links */
.text-link {
    color: var(--color-text-secondary);
    text-decoration: none;
    position: relative;
}

.text-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--gradient-primary);
    transition: width 0.3s var(--ease-out-smooth);
}

.text-link:hover::after {
    width: 100%;
}

/* Subtle fade-in on scroll (optional enhancement) */
@media (prefers-reduced-motion: no-preference) {
    section {
        opacity: 0;
        animation: fadeInUp 0.8s var(--ease-out-smooth) forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
```

**Impact**: Polished, refined interactions that feel premium

---

### 10. Additional Refinements

#### Hero Section Enhancement
```css
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    background: radial-gradient(
        ellipse at center,
        rgba(108, 14, 35, 0.08) 0%,
        transparent 60%
    );
}

/* Subtle animated gradient (very subtle) */
.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 30% 50%,
        rgba(43, 92, 140, 0.05) 0%,
        transparent 50%
    );
    animation: subtleShift 20s ease-in-out infinite;
}

@keyframes subtleShift {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
}
```

#### Section Dividers
```css
/* Elegant section separators */
.section-divider {
    width: 1px;
    height: 60px;
    background: linear-gradient(
        to bottom,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
    margin: var(--space-8) auto;
}
```

#### Competencies Grid Enhancement
```css
.competencies-list li {
    padding: var(--space-4);
    background: rgba(255, 255, 255, 0.02);
    border-left: 2px solid rgba(43, 92, 140, 0.3);
    border-radius: var(--radius-sm);
    transition: all 0.3s var(--ease-in-out-smooth);
}

.competencies-list li:hover {
    background: rgba(255, 255, 255, 0.04);
    border-left-color: var(--color-blue);
    transform: translateX(4px);
}
```

## Implementation Checklist

### Phase 1: Critical Fixes (Immediate)
- [x] Fix company name readability (remove gradient text effect)
- [x] Redesign buttons with elegant, subtle styling
- [x] Fix scrolling background bug (unified background approach)
- [x] Add logo metadata and accessibility attributes
- [x] Update color contrast for WCAG AA compliance

### Phase 2: Content Restructure (High Priority)
- [x] Rewrite hero section to emphasize company over individual
- [x] Restructure About section (company-first approach)
- [x] Move detailed Allen Rose content to supporting role
- [x] Plan future Leadership page/section
- [x] Update meta descriptions and page title

### Phase 3: Typography & Spacing (Medium Priority)
- [x] Refine typography scale and weights
- [x] Improve letter spacing and line heights
- [x] Implement consistent spacing rhythm
- [ ] Consider adding display font for headings (optional)

### Phase 4: Polish & Refinement (Lower Priority)
- [x] Add refined animations and transitions
- [x] Implement elegant hover states
- [x] Add subtle section dividers
- [x] Enhance competencies grid styling
- [x] Add fade-in animations (respecting prefers-reduced-motion)

### Phase 5: Testing & Validation
- [ ] Test on multiple devices and browsers (manual - requires deployment)
- [x] Validate WCAG AA compliance - contrast ratios verified (21:1 / 12:1 / 7:1 on dark bg)
- [ ] Check Lighthouse scores (target 95+ all categories - requires live browser)
- [x] Static validation: HTML structure, aria attrs, print .reveal override, reduced-motion handling
- [ ] Get stakeholder feedback (manual)
- [x] Make final refinements (print .reveal fix applied)

## Success Metrics

### Quantitative
- **Lighthouse Accessibility**: 100/100
- **Lighthouse Performance**: 95+/100
- **Color Contrast**: All text meets WCAG AA (4.5:1 minimum)
- **Page Load Time**: <1.5s on 3G

### Qualitative
- Company name is immediately readable and prominent
- Buttons feel sophisticated and intentional
- Scrolling experience is smooth and seamless
- EverGray Tech (not Allen Rose) is the primary brand
- Overall aesthetic conveys elegance and professionalism
- Design feels timeless, not trendy

## Design System Updates

### Updated Color Palette
```css
:root {
    /* Primary Gradient (use sparingly as accent) */
    --color-burgundy: #A21534;
    --color-navy: #0F263D;
    --color-blue: #3A7ABB;
    --gradient-primary: linear-gradient(135deg, #A21534 0%, #0F263D 50%, #3A7ABB 100%);
    
    /* Backgrounds */
    --color-bg-dark: #0A0A0A;
    --color-bg-surface: #0F0F0F;
    --color-bg-elevated: #1A1A1A;
    
    /* Text (WCAG AA compliant) */
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #D4D4D4;
    --color-text-muted: #9CA3AF;
    
    /* Interactive */
    --color-link: #60A5FA;
    --color-link-hover: #93C5FD;
    
    /* Borders */
    --color-border-subtle: rgba(255, 255, 255, 0.08);
    --color-border-medium: rgba(255, 255, 255, 0.15);
    --color-border-strong: rgba(255, 255, 255, 0.25);
    
    /* Glass effects */
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
}
```

### Typography Scale
```css
:root {
    --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    
    --font-size-h1: clamp(2.75rem, 6vw, 4.5rem);
    --font-size-h2: clamp(2rem, 4vw, 3.25rem);
    --font-size-h3: clamp(1.5rem, 3vw, 2.25rem);
    --font-size-body: clamp(1.0625rem, 2vw, 1.1875rem);
    --font-size-small: 0.9375rem;
    
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    
    --line-height-tight: 1.1;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;
}
```

### Spacing Scale
```css
:root {
    --space-1: 8px;
    --space-2: 16px;
    --space-3: 24px;
    --space-4: 32px;
    --space-5: 40px;
    --space-6: 48px;
    --space-8: 64px;
    --space-10: 80px;
    --space-12: 96px;
    --space-16: 128px;
    --space-20: 160px;
}
```

## Future Considerations

### Phase 2+ Enhancements
1. **Leadership Page**: Dedicated page for team bios, detailed experience
2. **Case Studies**: Showcase work with elegant project cards
3. **Testimonials**: Client quotes with sophisticated presentation
4. **Services Detail**: Expanded service offerings with refined layouts
5. **Dark/Light Mode**: Optional light mode with same elegant aesthetic

### Advanced Polish
1. **Custom Cursor**: Subtle custom cursor for desktop (very subtle)
2. **Scroll Progress**: Elegant progress indicator
3. **Parallax Effects**: Very subtle depth on scroll (if appropriate)
4. **Micro-interactions**: Refined button states, form interactions
5. **Loading States**: Elegant skeleton screens or transitions

## Notes & Considerations

### Brand Positioning
- **Company-First**: EverGray Tech is the brand, not Allen Rose personally
- **Consultancy Feel**: High-end, professional, trustworthy
- **Accessible Luxury**: Sophisticated but not exclusive or intimidating
- **Technical Credibility**: Convey expertise without jargon

### Accessibility Commitment
- All improvements must maintain or improve accessibility
- WCAG AA minimum, AAA where possible
- Respect user preferences (prefers-reduced-motion, prefers-contrast)
- Keyboard navigation must be elegant and functional

### Performance
- All visual enhancements must not impact performance
- Maintain Lighthouse scores 95+
- Optimize animations for 60fps
- Use CSS over JavaScript where possible

## References

- **SYSTEM_SPEC.md**: Core vision and design system
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Inter Font**: https://rsms.me/inter/
- **Color Contrast Checker**: https://webaim.org/resources/contrastchecker/

## Revision History

- **v1.0** (2026-02-23): Initial style improvement plan created based on website evaluation and elegant/sophisticated design direction
