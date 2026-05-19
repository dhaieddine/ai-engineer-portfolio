# ✅ Service Pages - Implementation Checklist

## Pre-Setup Verification
- [x] Services component updated with links
- [x] All three service page files created
- [x] Documentation files generated
- [x] Setup guide provided
- [x] Content reference available

## Manual Setup Steps

### 1. Directory Creation
```
[ ] Create app/services/ folder
[ ] Create app/services/ai-engineering/ subfolder
[ ] Create app/services/data-science/ subfolder
[ ] Create app/services/data-engineering/ subfolder
```

### 2. File Movement & Renaming
```
[ ] Move _ai-engineering.page.tsx to app/services/ai-engineering/page.tsx
[ ] Move _data-science.page.tsx to app/services/data-science/page.tsx
[ ] Move _data-engineering.page.tsx to app/services/data-engineering/page.tsx
[ ] Verify all three page.tsx files are in correct locations
```

### 3. Cleanup (Optional but Recommended)
```
[ ] Delete the original _*.page.tsx files from root (after moved)
[ ] Delete setup.mjs if you used it
```

### 4. Verification
```
[ ] Check folder structure matches expected layout
[ ] Verify page.tsx files are named correctly (lowercase, no underscore)
[ ] Confirm no TypeScript errors in VS Code
```

## Testing Checklist

### Local Development
```
[ ] Run: npm run dev
[ ] Open: http://localhost:3000
[ ] Homepage loads without errors
```

### Services Component Navigation
```
[ ] Click "Learn more" on AI & Machine Learning card
    → Should navigate to /services/ai-engineering
[ ] Click "Learn more" on Data Science card
    → Should navigate to /services/data-science
[ ] Click "Learn more" on Data Engineering card
    → Should navigate to /services/data-engineering
```

### AI Engineering Page (`/services/ai-engineering`)
**Hero Section:**
```
[ ] Page title "AI Engineering" displays
[ ] Subtitle displays correctly
[ ] Gradient background animates
[ ] "View Projects" button visible
[ ] "Contact Me" button visible
[ ] Buttons have hover effects
```

**Overview Section:**
```
[ ] Overview title displays
[ ] Two paragraphs of content visible
[ ] Glass card styling applied
[ ] Border color is purple/violet
```

**Tech Stack:**
```
[ ] "Tech Stack & Expertise" heading displays
[ ] 5 tech icons visible (PyTorch, TensorFlow, Python, OpenAI, Scikit-learn)
[ ] Icons have correct colors
[ ] Tech icons scale on hover
[ ] "Core Topics" heading displays
[ ] 12 topic pills visible
[ ] Topic pills have purple styling
[ ] Topic pills scale on hover
```

**Process Section:**
```
[ ] "My Process" heading displays
[ ] 4 process cards visible
[ ] Each card has step number (01, 02, 03, 04)
[ ] Each card has title and description
[ ] Cards lift on hover (y: -8)
[ ] Step numbers change color on hover
```

**Featured Projects:**
```
[ ] "Featured Projects" heading displays
[ ] 2 project cards visible
[ ] Each project has title, description, and tags
[ ] Tags display with purple styling
[ ] Cards lift on hover
```

**CTA Section:**
```
[ ] "Ready to Build Something Intelligent?" heading displays
[ ] Description text displays
[ ] "View All Projects" button visible
[ ] "Get in Touch" button visible
[ ] Both buttons have hover effects
[ ] Buttons link correctly (/#projects, /#contact)
```

### Data Science Page (`/services/data-science`)
**Hero Section:**
```
[ ] Page title "Data Science" displays
[ ] Subtitle displays correctly
[ ] Gradient background has cyan colors
[ ] Buttons have cyan hover effects
```

**Tech Stack:**
```
[ ] 5 tech icons visible (Python, Pandas, NumPy, Scikit-learn, Power BI)
[ ] Icons have cyan colors
[ ] 12 topic pills have cyan styling
[ ] All interactions work smoothly
```

**All Other Sections:**
```
[ ] Overview section displays correctly with cyan borders
[ ] Process cards work as expected
[ ] Project cards display correctly
[ ] CTA section has correct cyan styling
```

### Data Engineering Page (`/services/data-engineering`)
**Hero Section:**
```
[ ] Page title "Data Engineering" displays
[ ] Subtitle displays correctly
[ ] Gradient background has pink colors
[ ] Buttons have pink hover effects
```

**Tech Stack:**
```
[ ] 5 tech icons visible (MongoDB, PostgreSQL, FastAPI, Airflow, Apache Spark)
[ ] Icons have pink colors
[ ] 12 topic pills have pink styling
[ ] All interactions work smoothly
```

**All Other Sections:**
```
[ ] Overview section displays correctly with pink borders
[ ] Process cards work as expected
[ ] Project cards display correctly
[ ] CTA section has correct pink styling
```

## Responsive Design Testing

### Mobile (375px - 480px)
```
[ ] Text readable without horizontal scroll
[ ] Buttons clickable with adequate spacing
[ ] Stacked layout for process and projects (1 column)
[ ] Tech stack grid shows 2 columns
[ ] Images/icons scale properly
[ ] No layout shift on scroll
```

### Tablet (768px - 1024px)
```
[ ] Two-column layout for process and projects
[ ] Tech stack grid shows 3 columns
[ ] All content readable
[ ] Hover effects still work
[ ] Spacing looks balanced
```

### Desktop (1920px+)
```
[ ] All content properly centered
[ ] Max-width constraints working
[ ] Tech stack shows 5 columns
[ ] All animations smooth and responsive
[ ] No horizontal scrolling
```

## Animation Testing

### Fade-up Animations
```
[ ] Hero title fades in on page load
[ ] Overview card fades in on scroll
[ ] Process cards fade in on scroll
[ ] Project cards fade in on scroll
[ ] CTA card fades in on scroll
```

### Stagger Animations
```
[ ] Tech stack icons appear in sequence
[ ] Topic pills appear in sequence
[ ] Process step cards appear in sequence
[ ] Project cards appear in sequence
```

### Hover Animations
```
[ ] Service cards lift on hover
[ ] Tech icons scale 1.05 on hover
[ ] Topic pills scale 1.05 on hover
[ ] Process cards lift on hover
[ ] Project cards lift on hover
[ ] Buttons scale and lift on hover
[ ] "Learn more" arrows slide on hover
```

### Smooth Transitions
```
[ ] All animations have 0.5s duration
[ ] Easing functions applied correctly
[ ] No janky or stuttering animations
[ ] 60fps performance
```

## Accessibility Testing

### Keyboard Navigation
```
[ ] Can tab through all buttons
[ ] Can activate buttons with Enter/Space
[ ] Focus states visible
[ ] No keyboard traps
```

### Screen Reader (Optional)
```
[ ] Page title announced
[ ] Headings announced with levels
[ ] Link text is descriptive
[ ] Button purposes clear
[ ] Images have alt text (if any)
```

### Color Contrast
```
[ ] White text on dark background (WCAG AA)
[ ] Purple/Cyan/Pink text readable on dark background
[ ] Button text has sufficient contrast
```

## Performance Testing

### Load Time
```
[ ] Page loads in < 2 seconds
[ ] No console errors
[ ] No warnings about deprecated APIs
```

### Lighthouse Scores (Optional)
```
[ ] Performance: > 90
[ ] Accessibility: > 90
[ ] Best Practices: > 90
[ ] SEO: > 90
```

## Browser Compatibility

### Browsers Tested
```
[ ] Chrome/Chromium (latest)
[ ] Firefox (latest)
[ ] Safari (latest)
[ ] Edge (latest)
```

### Features Verified
```
[ ] CSS Grid/Flexbox layout works
[ ] CSS transitions smooth
[ ] CSS custom properties work
[ ] backdrop-filter blur works
[ ] CSS gradients display correctly
```

## Links & Navigation

### Internal Links
```
[ ] "Learn more" cards navigate to correct service pages
[ ] "View Projects" links to /#projects
[ ] "Get in Touch" links to /#contact
[ ] Back navigation works (using browser back button)
```

### Link Behavior
```
[ ] Links open in same tab (not new tab)
[ ] No 404 errors
[ ] Correct pages load
[ ] Scroll position correct after navigation
```

## Final Quality Checks

### Code Quality
```
[ ] No TypeScript errors
[ ] No ESLint warnings
[ ] Clean code formatting
[ ] No console errors or warnings
[ ] Proper component structure
```

### Design Consistency
```
[ ] Color scheme matches per service
[ ] Typography consistent throughout
[ ] Spacing follows system
[ ] Border radius consistent
[ ] Shadow/glow effects applied
```

### Content Quality
```
[ ] All text is accurate and professional
[ ] No typos or grammatical errors
[ ] Topic lists are complete
[ ] Project descriptions are clear
[ ] Process steps make sense
```

## Deployment Readiness

### Pre-Deployment
```
[ ] All tests pass
[ ] No console errors
[ ] Performance acceptable
[ ] Mobile responsive verified
[ ] All links working
```

### After Deployment
```
[ ] Live links work on production domain
[ ] Service pages are crawlable by search engines
[ ] Performance metrics acceptable
[ ] Error tracking set up (if applicable)
[ ] Analytics tracking set up (if applicable)
```

---

## Quick Reference Commands

### Development
```bash
npm run dev                  # Start dev server
npm run build               # Build for production
npm run lint                # Check for linting errors
```

### File Operations
```bash
# Create folders
mkdir -p app/services/{ai-engineering,data-science,data-engineering}

# Move files
mv _ai-engineering.page.tsx app/services/ai-engineering/page.tsx
mv _data-science.page.tsx app/services/data-science/page.tsx
mv _data-engineering.page.tsx app/services/data-engineering/page.tsx
```

---

## Success Criteria

✅ **All of the following must be true:**

1. Services component links correctly navigate to service pages
2. All three service pages render without errors
3. All sections display with correct styling
4. All animations play smoothly
5. Page is responsive on all device sizes
6. All links work correctly
7. No console errors or warnings
8. Content is accurate and professional
9. Design is consistent across all pages
10. Performance is acceptable

---

**Once all checks pass, your service pages are production-ready! 🎉**

For any issues, refer to:
- `SERVICE_PAGES_SETUP.md` - Troubleshooting guide
- `CONTENT_REFERENCE.md` - Design and content details
- `IMPLEMENTATION_SUMMARY.md` - Overview of implementation
