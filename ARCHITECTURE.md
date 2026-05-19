# 🎯 Service Pages - Visual Architecture

## Application Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     HOMEPAGE (/)                            │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │         Services Component (UPDATED)                │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  ┌──────────────────┐  ┌──────────────────┐        │   │
│  │  │ AI & ML Card     │  │ Data Science Card│  ...   │   │
│  │  │ └─Learn more─┘   │  │ └─Learn more─┘   │        │   │
│  │  │   (link to AI)   │  │  (link to DS)    │        │   │
│  │  └─────────────────┘  └──────────────────┘        │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                         │                                   │
│                         ├──→ [href="/services/ai-eng"]     │
│                         ├──→ [href="/services/data-sci"]    │
│                         └──→ [href="/services/data-eng"]    │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
   │ AI ENGINEER │  │ DATA SCIENCE│  │DATA ENGINE. │
   │   PAGE      │  │    PAGE     │  │    PAGE     │
   ├─────────────┤  ├─────────────┤  ├─────────────┤
   │ Hero        │  │ Hero        │  │ Hero        │
   │ Overview    │  │ Overview    │  │ Overview    │
   │ Tech Stack  │  │ Tech Stack  │  │ Tech Stack  │
   │ Process     │  │ Process     │  │ Process     │
   │ Projects    │  │ Projects    │  │ Projects    │
   │ CTA         │  │ CTA         │  │ CTA         │
   │ ├─↓─────┤   │  │ ├─↓─────┤   │  │ ├─↓─────┤   │
   │ ││Links ││   │  │ ││Links ││   │  │ ││Links ││   │
   │ │├────────┤│   │  │ │├────────┤│   │  │ │├────────┤│   │
   │ ││#projects││   │  │ ││#projects││   │  │ ││#projects││   │
   │ ││#contact ││   │  │ ││#contact ││   │  │ ││#contact ││   │
   │ └─────────┘│   │  │ └─────────┘│   │  │ └─────────┘│   │
   └─────────────┘  └─────────────┘  └─────────────┘
        │                ↓                │
        │         [Back to Home]         │
        └────────────────┬────────────────┘
                         ↓
   ┌─────────────────────────────────────┐
   │   Home Sections                     │
   │   - #projects  →  Featured Projects │
   │   - #contact   →  Contact Form      │
   └─────────────────────────────────────┘
```

---

## Component Hierarchy

```
App (Next.js)
└── RootLayout
    └── HomePage (/)
        ├── Navbar
        ├── Hero
        ├── Services (✅ UPDATED)
        │   ├── ServiceCard₁ (motion.a → /services/ai-engineering)
        │   ├── ServiceCard₂ (motion.a → /services/data-science)
        │   └── ServiceCard₃ (motion.a → /services/data-engineering)
        ├── Projects
        ├── Skills
        └── Footer
    
    ├── AIEngineeringPage (/services/ai-engineering) ✅ NEW
    │   ├── HeroSection
    │   ├── OverviewSection
    │   ├── TechStackSection
    │   ├── ProcessSection
    │   ├── ProjectsSection
    │   └── CTASection
    
    ├── DataSciencePage (/services/data-science) ✅ NEW
    │   ├── HeroSection
    │   ├── OverviewSection
    │   ├── TechStackSection
    │   ├── ProcessSection
    │   ├── ProjectsSection
    │   └── CTASection
    
    └── DataEngineeringPage (/services/data-engineering) ✅ NEW
        ├── HeroSection
        ├── OverviewSection
        ├── TechStackSection
        ├── ProcessSection
        ├── ProjectsSection
        └── CTASection
```

---

## Directory Structure

### Before Setup
```
app/
├── page.tsx
├── layout.tsx
└── globals.css

components/
└── services.tsx (will be updated)

root/
├── _ai-engineering.page.tsx
├── _data-science.page.tsx
└── _data-engineering.page.tsx
```

### After Setup
```
app/
├── page.tsx
├── layout.tsx
├── globals.css
└── services/ (NEW)
    ├── ai-engineering/ (NEW)
    │   └── page.tsx (NEW)
    ├── data-science/ (NEW)
    │   └── page.tsx (NEW)
    └── data-engineering/ (NEW)
        └── page.tsx (NEW)

components/
└── services.tsx (✅ UPDATED)

root/
├── _ai-engineering.page.tsx (can delete after moving)
├── _data-science.page.tsx (can delete after moving)
└── _data-engineering.page.tsx (can delete after moving)
```

---

## Page Structure (Each Service Page)

```
┌─────────────────────────────────────────────────┐
│           HERO SECTION (min-h-screen)           │
├─────────────────────────────────────────────────┤
│  [Animated Service Badge]                       │
│                                                 │
│         Service Title (Large)                   │
│         Service Subtitle                        │
│                                                 │
│     [View Projects]  [Contact Me]              │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│       OVERVIEW SECTION (py-20 px-4)            │
├─────────────────────────────────────────────────┤
│  [Glass Card - Glassmorphism]                   │
│  Title: "Overview"                              │
│  Content: 2 paragraphs of description           │
│  Border: Service color (purple/cyan/pink)       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│    TECH STACK SECTION (py-20 px-4)            │
├─────────────────────────────────────────────────┤
│  Title: "Tech Stack & Expertise"                │
│                                                 │
│  [Icon₁]  [Icon₂]  [Icon₃]  [Icon₄]  [Icon₅]  │
│  TechName TechName TechName TechName TechName   │
│  (5-column grid, responsive)                    │
│                                                 │
│  Subtitle: "Core Topics"                        │
│  [Pill₁] [Pill₂] [Pill₃] [Pill₄] [Pill₅]...   │
│  (12 topic pills in 4-column grid)             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│     PROCESS SECTION (py-20 px-4)              │
├─────────────────────────────────────────────────┤
│  Title: "My Process"                            │
│                                                 │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │ 01  Title        │  │ 02  Title        │    │
│  │     Description  │  │     Description  │    │
│  └──────────────────┘  └──────────────────┘    │
│                                                 │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │ 03  Title        │  │ 04  Title        │    │
│  │     Description  │  │     Description  │    │
│  └──────────────────┘  └──────────────────┘    │
│  (2-column grid, responsive)                    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│    PROJECTS SECTION (py-20 px-4)              │
├─────────────────────────────────────────────────┤
│  Title: "Featured Projects"                     │
│                                                 │
│  ┌──────────────────────────────────────┐      │
│  │ Project Title                        │      │
│  │ Project Description                  │      │
│  │ [Tag₁] [Tag₂] [Tag₃]                │      │
│  └──────────────────────────────────────┘      │
│                                                 │
│  ┌──────────────────────────────────────┐      │
│  │ Project Title                        │      │
│  │ Project Description                  │      │
│  │ [Tag₁] [Tag₂] [Tag₃]                │      │
│  └──────────────────────────────────────┘      │
│  (2-column grid, responsive)                    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│         CTA SECTION (py-20 px-4)              │
├─────────────────────────────────────────────────┤
│  [Glass Card]                                   │
│                                                 │
│      "Ready to Build Something...?"             │
│      "Description text..."                      │
│                                                 │
│   [View All Projects]  [Get in Touch]          │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Animation Flow Diagram

```
Page Load
    ↓
┌─────────────────────────┐
│ Hero Section            │
│ - Fade up (0s)          │
│ - Logo: fade up (0.2s)  │
│ - Title: fade up (0.4s) │
│ - Buttons: fade up      │
└─────────────────────────┘
    ↓ (Scroll)
┌─────────────────────────┐
│ Overview                │
│ - Fade up on scroll     │
└─────────────────────────┘
    ↓ (Scroll)
┌─────────────────────────┐
│ Tech Stack              │
│ - Icons: stagger fade   │
│ - On hover: scale 1.05  │
│ - Pills: stagger fade   │
│ - On hover: scale 1.05  │
└─────────────────────────┘
    ↓ (Scroll)
┌─────────────────────────┐
│ Process Cards           │
│ - Stagger fade          │
│ - On hover: lift (y-8)  │
│ - Step color: brighten  │
└─────────────────────────┘
    ↓ (Scroll)
┌─────────────────────────┐
│ Project Cards           │
│ - Stagger fade          │
│ - On hover: lift (y-8)  │
└─────────────────────────┘
    ↓ (Scroll)
┌─────────────────────────┐
│ CTA Section             │
│ - Fade up on scroll     │
│ - Button hover: lift    │
└─────────────────────────┘
```

---

## Styling System

```
Colors
├── Background: #0a0a0f (dark)
├── Text: #ffffff (white)
├── Description: #9ca3af (gray-400)
├── Primary
│   ├── AI: #a855f7 (purple-500)
│   ├── DS: #06b6d4 (cyan-500)
│   └── DE: #ec4899 (pink-500)
└── Accents
    ├── AI: #6d28d9 (violet-600)
    ├── DS: #0284c7 (blue-600)
    └── DE: #f43f5e (rose-600)

Spacing
├── Sections: py-20 px-4
├── Cards: p-8 or p-12
├── Grid Gap: gap-6 (cards) or gap-3 (pills)
└── Max Width: max-w-6xl or max-w-4xl

Rounded Corners
├── Cards: rounded-2xl
├── Large Cards: rounded-3xl
├── Icons: rounded-3xl
├── Pills: rounded-lg
└── Buttons: rounded-xl

Effects
├── Glass: rgba(20,20,30,0.6) + backdrop-blur-20
├── Border: color-500/15 (normal), color-500/40 (hover)
├── Shadow: 0_0_25px_rgba(color,0.15)
└── Glow: box-shadow with color accent
```

---

## Responsive Grid System

```
Tech Stack Grid
└── Grid cols: 2 | md:3 | lg:5

Topic Pills Grid
└── Grid cols: 2 | md:3 | lg:4

Process Cards Grid
└── Grid cols: 1 | md:2

Project Cards Grid
└── Grid cols: 1 | md:2
```

---

## File Size Summary

```
Pages Created
├── _ai-engineering.page.tsx    11.6 KB
├── _data-science.page.tsx      11.4 KB
└── _data-engineering.page.tsx  11.6 KB
                               ──────────
                               Total: 34.6 KB

Documentation
├── QUICK_START.md               4.5 KB
├── SERVICE_PAGES_SETUP.md       5.7 KB
├── IMPLEMENTATION_SUMMARY.md    8.0 KB
├── CONTENT_REFERENCE.md         9.3 KB
├── TESTING_CHECKLIST.md        10.2 KB
└── README_SERVICE_PAGES.md      9.0 KB
                               ──────────
                               Total: 46.7 KB

Setup Files
├── create-dirs.js               0.5 KB
├── setup.mjs                    0.3 KB
└── package.json                (updated)
```

---

## Dependencies Used

```
Already Installed (No New Packages Needed)
├── next: 16.2.6
├── react: ^19
├── react-dom: ^19
├── framer-motion: ^12.38.0
├── react-icons: ^5.6.0
│   └── (Si icons library)
├── tailwindcss: ^4.2.0
├── postcss: ^8.5
└── typescript: 5.7.3
```

---

## Implementation Checklist Flow

```
Start
  ↓
[Create Folders]
  ├─ app/services/ai-engineering
  ├─ app/services/data-science
  └─ app/services/data-engineering
  ↓
[Move Files]
  ├─ _ai-engineering.page.tsx → page.tsx
  ├─ _data-science.page.tsx → page.tsx
  └─ _data-engineering.page.tsx → page.tsx
  ↓
[Test Locally]
  ├─ npm run dev
  ├─ Visit http://localhost:3000
  └─ Click "Learn more" buttons
  ↓
[Verify]
  ├─ Pages load ✓
  ├─ Animations work ✓
  ├─ Links work ✓
  └─ Responsive design ✓
  ↓
[Deploy]
  ├─ npm run build
  ├─ Deploy to hosting
  └─ Verify on production
  ↓
Complete ✅
```

---

**Visual architecture is complete. Ready to implement! 🚀**
