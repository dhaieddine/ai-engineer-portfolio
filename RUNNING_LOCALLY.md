# 🚀 Running the AI Engineer Portfolio Locally

## Quick Start

Your project dependencies are **already installed**! ✅

### Option 1: Using Batch File (Easiest - Windows)
Double-click the batch file in your project folder:
```
run-dev.bat
```

This will automatically:
1. Install dependencies (if needed)
2. Set up directories
3. Start the dev server at http://localhost:3000

### Option 2: Using Command Prompt
Open Command Prompt and run:
```batch
cd C:\Users\Dhia\Desktop\ai-engineer-portfolio
npm run dev
```

### Option 3: Using PowerShell
Open PowerShell and run:
```powershell
cd 'C:\Users\Dhia\Desktop\ai-engineer-portfolio'
npm run dev
```

### Option 4: Using Node.js Script
```bash
node start-dev.js
```

---

## 🌐 Access Your Portfolio

Once the server starts, open your browser and go to:

**http://localhost:3000**

You should see:
- 🏠 Hero section with your AI Engineer portfolio
- 📊 Tech stack showcase
- 🎯 Services section (Data Science, Data Engineering, AI Engineering)
- 📁 Featured Projects (including the new HomeSmart AI project!)
- ✨ Skills section
- 👥 Footer with contact links

---

## 📁 Project Structure

```
ai-engineer-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (Portfolio)
│   ├── projects/           # Project detail pages
│   │   └── [slug]/page.tsx # Dynamic project detail
│   └── services/           # Service pages
├── components/             # React components
│   ├── projects.tsx        # Projects list (shows HomeSmart AI!)
│   ├── project-detail/     # Project detail components
│   └── ...                 # Other components
├── lib/
│   └── projects-data.ts    # Project data (HomeSmart AI added!)
├── public/
│   └── projects/           # Project images
├── styles/                 # Tailwind CSS
└── package.json           # Dependencies
```

---

## 🆕 New Project Added: HomeSmart AI

The third project **"HomeSmart AI"** has been added with:

✅ **Full Project Page** at `/projects/homesmart-ai`
✅ **Complete Description** in French
✅ **Architecture Diagram** (6-step pipeline)
✅ **Technologies Showcase** (FastAPI, React, PostgreSQL, Elasticsearch, XGBoost, etc.)
✅ **Features & Metrics**
✅ **Code Terminal Display**

### Access the new project:
- From the home page: Scroll to "Featured Projects" and click HomeSmart AI
- Direct URL: http://localhost:3000/projects/homesmart-ai

---

## 🛠️ Available Commands

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run setup:dirs # Create necessary directories
```

---

## 📝 Recent Changes

✨ **Added HomeSmart AI (3rd Project)**
- Updated `lib/projects-data.ts` with complete project data
- Updated `components/projects.tsx` to show HomeSmart AI
- Updated `components/project-detail/project-detail-page.tsx` to support 3 projects
- Created placeholder image: `public/projects/homesmart-ai.jpg`

---

## 🐛 Troubleshooting

### Port 3000 already in use?
Use a different port:
```bash
npm run dev -- --port 3001
```

### Dependencies not installed?
Run:
```bash
npm install
```

### Can't access http://localhost:3000?
1. Check that the dev server is running (you should see output in the terminal)
2. Try refreshing the page (F5)
3. Make sure no firewall is blocking localhost:3000

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

Happy coding! 🎉
