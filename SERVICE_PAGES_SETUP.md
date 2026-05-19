# Service Pages Implementation Guide

## Quick Setup Instructions

Your service pages are ready! Follow these steps to activate them:

### Step 1: Create Directory Structure

In VS Code, create these folders:
```
app/
└── services/
    ├── ai-engineering/
    ├── data-science/
    └── data-engineering/
```

**How to create folders in VS Code:**
1. Open the Explorer panel (Ctrl+Shift+E)
2. Right-click on the `app` folder
3. Select "New Folder"
4. Name it `services`
5. Right-click `services` and create three subfolders:
   - `ai-engineering`
   - `data-science`
   - `data-engineering`

### Step 2: Move Service Pages

Copy these files from the root to their respective folders:

- `_ai-engineering.page.tsx` → `app/services/ai-engineering/page.tsx`
- `_data-science.page.tsx` → `app/services/data-science/page.tsx`
- `_data-engineering.page.tsx` → `app/services/data-engineering/page.tsx`

**How to do this in VS Code:**
1. Right-click each `_*.page.tsx` file
2. Select "Cut"
3. Navigate to the respective folder
4. Right-click and select "Paste"
5. Rename the file to `page.tsx` (remove the underscore)

### Step 3: Verify Components Modified

The Services component in `components/services.tsx` has been updated with:
- ✅ Added `link` field to each service
- ✅ Converted to `motion.a` for navigation
- ✅ Maintained all styling and animations

### Step 4: Test the Pages

1. Run your dev server: `npm run dev`
2. Go to http://localhost:3000
3. Click any "Learn more" button in the Services section
4. You should be navigated to the service page!

## File Structure After Setup

```
app/
├── page.tsx (home)
├── layout.tsx
├── globals.css
└── services/
    ├── ai-engineering/
    │   └── page.tsx
    ├── data-science/
    │   └── page.tsx
    └── data-engineering/
        └── page.tsx
components/
├── services.tsx (✅ UPDATED)
├── hero.tsx
├── projects.tsx
└── ...
```

## What Each Page Includes

### AI Engineering Page (`/services/ai-engineering`)
- Hero section with gradient background
- Overview of AI engineering expertise
- Tech stack: PyTorch, TensorFlow, Python, OpenAI, Scikit-learn
- 12 core topics pills
- 4-step process workflow
- 2 featured projects
- CTA section with project and contact buttons

### Data Science Page (`/services/data-science`)
- Hero section with cyan gradient
- Overview of data science approach
- Tech stack: Python, Pandas, NumPy, Scikit-learn, Power BI
- 12 core topics pills
- 4-step data science process
- 2 featured projects
- CTA section

### Data Engineering Page (`/services/data-engineering`)
- Hero section with pink gradient
- Overview of data engineering expertise
- Tech stack: MongoDB, PostgreSQL, FastAPI, Airflow, Apache Spark
- 12 core topics pills
- 4-step engineering process
- 2 featured projects
- CTA section

## Design Features

All pages include:
- ✅ Dark futuristic glassmorphism design matching your portfolio
- ✅ Smooth Framer Motion animations (fade-up, stagger, hover effects)
- ✅ Responsive grid layouts
- ✅ Tech stack icons from react-icons/si
- ✅ Glass morphism cards with hover effects
- ✅ Animated topic pills
- ✅ Professional spacing and typography
- ✅ Gradient glow backgrounds
- ✅ Links back to home sections (#projects, #contact)

## Color Coding

- **AI Engineering:** Purple/Violet accents (purple-500, purple-400)
- **Data Science:** Cyan/Blue accents (cyan-500, cyan-400)
- **Data Engineering:** Pink/Rose accents (pink-500, pink-400)

## Interactive Elements

- Hover effects on cards (lift animation with y: -8)
- Hover effects on tech icons (scale 1.05)
- Hover effects on topic pills (scale 1.05)
- Button hover effects (scale 1.05, y: -2)
- Animated "Learn more" text in Services component

## Customization Tips

If you want to customize the content:

1. **Modify tech stack:** Edit the `technologies` array in each page.tsx
2. **Change process steps:** Edit the `workflows` array
3. **Update project cards:** Edit the `projects` array
4. **Adjust colors:** Replace color class names (e.g., `purple-500` → `indigo-500`)
5. **Add navigation links:** Update links in CTA section buttons

## Troubleshooting

**Pages not showing up?**
- Make sure folders are created correctly
- Verify files are named `page.tsx` (lowercase, no underscore)
- Check that Services component is updated in `components/services.tsx`
- Restart dev server after creating folders

**Styling looks off?**
- Clear `.next` cache: Delete the `.next` folder and restart
- Make sure TailwindCSS and Framer Motion are installed (they should be)
- Check that globals.css is imported in layout.tsx

**Links not working?**
- Verify the href values match the folder paths
- Check that service pages are in correct locations
- Make sure Links are imported from 'next/link'

## Notes

- All pages are fully responsive (mobile, tablet, desktop)
- Uses Next.js App Router (13.4+)
- No additional dependencies needed (uses existing packages)
- Pages are production-ready with clean, semantic code
- All animations are smooth and performance-optimized

## What's Modified

✅ `components/services.tsx` - Added links and motion.a navigation
✅ `package.json` - Added setup:dirs script (for future use)

## Next Steps (Optional)

If you want to enhance further:
1. Add actual project links to the featured projects section
2. Add more topics or technologies
3. Create individual project detail pages
4. Add testimonials or case studies
5. Implement contact form integration

---

**Support:** All code is production-ready and follows Next.js 15 best practices.
