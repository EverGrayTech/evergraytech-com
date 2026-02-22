# File Organization Plan

## Current State
The repository currently has files in the root directory that should be organized for better maintainability.

## Files to Organize

### Documentation
- `RoseAllenM_resume.pdf` - Should remain accessible in root for easy linking from website

### Assets
- `images/evergray_tech.svg` - Logo file (already organized)

### Future Organization Structure

```
evergraytech_com/
├── .agent/                     # AI agent configuration
│   ├── .clinerules/           # Development guidelines
│   └── plans/                 # Project plans and phases
├── assets/                     # Future: additional assets
│   ├── images/                # Images, icons
│   ├── fonts/                 # Custom fonts (if needed)
│   └── downloads/             # Downloadable files (resume, etc.)
├── scripts/                    # Future: JavaScript files
├── styles/                     # Future: CSS organization
│   ├── base/
│   ├── components/
│   └── utilities/
├── index.html                  # Main landing page
├── styles.css                  # Global styles (current)
├── RoseAllenM_resume.pdf      # Resume (keep in root for now)
└── [config files]             # CNAME, .gitignore, etc.
```

## Recommendations

### Immediate (Phase 1)
- Keep resume in root for simple linking
- Keep current flat structure for simplicity
- Organize only .agent/ directory for development guidelines

### Phase 2+
- Move resume to `assets/downloads/` when implementing proper asset management
- Organize CSS into modular structure if complexity grows
- Create dedicated directories for scripts and additional assets

## Priority
- **Low priority** for Phase 1 MVP - current structure is acceptable
- **Medium priority** for Phase 2+ - organize as complexity increases
