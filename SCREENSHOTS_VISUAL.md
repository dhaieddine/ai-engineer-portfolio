# 🎬 AJOUTER DES SCREENSHOTS - GUIDE VISUEL

## 📊 Vue d'ensemble du processus

```
┌────────────────────────────────────────────────────────────┐
│             PROCESSUS D'AJOUT DE SCREENSHOTS               │
└────────────────────────────────────────────────────────────┘

Step 1: CRÉER/TROUVER IMAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📸 Prendre screenshots OU
🌐 Télécharger images (Unsplash, Pexels)
⚙️ Format: JPG/PNG, 1200x800px, <2MB
        ↓
        ✅ 4-5 images par projet


Step 2: PLACER FICHIERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 Dossier destination: public/projects/
📝 Noms: my-project-screenshot-1.jpg
        ↓
        ✅ Tous les JPG placés


Step 3: MODIFIER CODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 Fichier: lib/projects-data.ts
🔍 Chercher: gallery: [
✏️ Ajouter:
   { src: "/projects/name.jpg", caption: "..." }
        ↓
        ✅ Code modifié


Step 4: TESTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▶️ Lancer: npm run dev
🌐 Ouvrir: http://localhost:3000
👀 Vérifier: Images s'affichent
        ↓
        ✅ DONE!
```

---

## 🗂️ STRUCTURE DOSSIERS

```
ai-engineer-portfolio/
│
├── 📁 public/
│   └── 📁 projects/
│       ├── 📸 medical-ai.jpg
│       ├── 📸 medical-ai-interface.jpg       ← À AJOUTER
│       ├── 📸 medical-ai-mri.jpg             ← À AJOUTER
│       ├── 📸 medical-ai-results.jpg         ← À AJOUTER
│       ├── 📸 job-intelligent.jpg
│       ├── 📸 job-intelligent-dashboard.jpg  ← À AJOUTER
│       ├── 📸 job-intelligent-salary.jpg     ← À AJOUTER
│       ├── 📸 homesmart-ai.jpg
│       ├── 📸 homesmart-ai-search.jpg        ← À AJOUTER
│       └── 📸 homesmart-ai-recommendations.jpg ← À AJOUTER
│
├── 📁 lib/
│   └── 📄 projects-data.ts    ← MODIFIER ICI
│
└── 📁 components/
    └── project-detail/
        └── project-detail-page.tsx (affiche les images)
```

---

## 💻 CODE - Avant et Après

### AVANT:
```typescript
// lib/projects-data.ts

"homesmart-ai": {
  slug: "homesmart-ai",
  title: "HomeSmart AI",
  
  gallery: [
    { src: "/projects/homesmart-ai.jpg", caption: "Interface" },
    { src: "/projects/homesmart-ai.jpg", caption: "Dashboard" },
    { src: "/projects/homesmart-ai.jpg", caption: "Assistant" },
  ],
}
```

### APRÈS:
```typescript
// lib/projects-data.ts

"homesmart-ai": {
  slug: "homesmart-ai",
  title: "HomeSmart AI",
  
  gallery: [
    { src: "/projects/homesmart-ai-search.jpg", caption: "🔍 Recherche" },
    { src: "/projects/homesmart-ai-dashboard.jpg", caption: "📊 Dashboard" },
    { src: "/projects/homesmart-ai-prediction.jpg", caption: "📈 Prédiction" },
    { src: "/projects/homesmart-ai-pdf.jpg", caption: "📄 Dossier" },
  ],
}
```

---

## 🎨 AFFICHAGE SUR PAGE

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║           🔍 Projet: HomeSmart AI Platform               ║
║                                                            ║
║  ────────────────────────────────────────────────────────  ║
║                 Screenshots & Gallery                      ║
║  ────────────────────────────────────────────────────────  ║
║                                                            ║
║  ┌──────────┐  ┌──────────┐  ┌──────────┐                ║
║  │          │  │          │  │          │                ║
║  │ Image 1  │  │ Image 2  │  │ Image 3  │                ║
║  │          │  │          │  │          │                ║
║  └──────────┘  └──────────┘  └──────────┘                ║
║  🔍 Recherche  📊 Dashboard  📈 Prédiction               ║
║                                                            ║
║  ┌──────────┐  ┌──────────┐                              ║
║  │          │  │          │                              ║
║  │ Image 4  │  │ Image 5  │                              ║
║  │          │  │          │                              ║
║  └──────────┘  └──────────┘                              ║
║  📄 Dossier    💬 Assistant                               ║
║                                                            ║
║  💡 Hover effect: Images zoontent 1.1x                   ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## 📱 RESPONSIVE LAYOUT

### 🖥️ Desktop (>1024px) - 3 colonnes:
```
[Image 1]  [Image 2]  [Image 3]
[Image 4]  [Image 5]
```

### 📱 Tablet (640-1024px) - 2 colonnes:
```
[Image 1]  [Image 2]
[Image 3]  [Image 4]
[Image 5]
```

### 📱 Mobile (<640px) - 1 colonne:
```
[Image 1]
[Image 2]
[Image 3]
[Image 4]
[Image 5]
```

---

## ✨ DÉTAILS D'AFFICHAGE

```
┌─ Image Container ───────────────────────┐
│                                         │
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │      Image (1200x800px)         │  │
│  │     Hover: zoom 1.1x             │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                         │
│  🔍 Recherche intelligente             │ ← Caption
│  (max 50 caractères)                    │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🔄 CYCLE DE TRAVAIL

```
     START
       ↓
    ┌──────────────────────────────────┐
    │ 1. CRÉER/TROUVER IMAGES         │
    │    (4-5 par projet)              │
    │    Format: JPG, 1200x800px       │
    └──────────────────────────────────┘
       ↓
    ┌──────────────────────────────────┐
    │ 2. PLACER DANS public/projects/  │
    │    Vérifier noms exacts          │
    └──────────────────────────────────┘
       ↓
    ┌──────────────────────────────────┐
    │ 3. MODIFIER lib/projects-data.ts │
    │    Ajouter array gallery:        │
    └──────────────────────────────────┘
       ↓
    ┌──────────────────────────────────┐
    │ 4. TESTER npm run dev            │
    │    Vérifier affichage            │
    └──────────────────────────────────┘
       ↓
    ┌──────────────────────────────────┐
    │ 5. COMMIT & PUSH                 │
    │    git add . && git commit       │
    └──────────────────────────────────┘
       ↓
      END

```

---

## 📋 CHECKLIST VISUELLE

```
┌─ IMAGES ────────────────────────────┐
│ ☐ Créées/téléchargées              │
│ ☐ Format JPG/PNG                   │
│ ☐ Résolution ~1200x800px           │
│ ☐ Taille <2MB chacune              │
│ ☐ 4-5 images par projet            │
└─────────────────────────────────────┘

┌─ FICHIERS ──────────────────────────┐
│ ☐ Placés dans public/projects/      │
│ ☐ Noms sans espaces/accents         │
│ ☐ Tous les fichiers listés          │
└─────────────────────────────────────┘

┌─ CODE ──────────────────────────────┐
│ ☐ lib/projects-data.ts modifié      │
│ ☐ Chemin: /projects/name.jpg        │
│ ☐ Captions <50 caractères           │
│ ☐ Syntaxe TypeScript correcte       │
│ ☐ Virgules après chaque }           │
└─────────────────────────────────────┘

┌─ TEST ──────────────────────────────┐
│ ☐ npm run dev réussit               │
│ ☐ Page projet ouvre                 │
│ ☐ Images s'affichent                │
│ ☐ Captions visibles                 │
│ ☐ Hover effect marche               │
│ ☐ Layout responsive OK              │
│ ☐ Console sans erreurs              │
└─────────────────────────────────────┘
```

---

## ⏱️ TIMING ESTIMÉ

| Tâche | Durée |
|-------|-------|
| Créer/trouver images | 10-15 min |
| Placer fichiers | 2-3 min |
| Modifier code | 5-10 min |
| Tester | 2-3 min |
| **TOTAL** | **20-30 min** |

---

## 🎯 EXEMPLE RAPIDE

```
PROJET: HomeSmart AI
────────────────────

1️⃣ IMAGES À CRÉER/TROUVER:
   • Écran recherche
   • Tableau de bord
   • Résultats prédiction
   • Génération PDF
   • Chat IA

2️⃣ PLACER DANS:
   public/projects/
   └── homesmart-ai-search.jpg
   └── homesmart-ai-dashboard.jpg
   └── homesmart-ai-prediction.jpg
   └── homesmart-ai-pdf.jpg
   └── homesmart-ai-assistant.jpg

3️⃣ AJOUTER DANS lib/projects-data.ts:
   gallery: [
     { src: "/projects/homesmart-ai-search.jpg", caption: "🔍" },
     { src: "/projects/homesmart-ai-dashboard.jpg", caption: "📊" },
     ...
   ]

4️⃣ TESTER:
   npm run dev
   ↓
   http://localhost:3000/projects/homesmart-ai
   ↓
   ✅ Images affichées!
```

---

## 💡 ASTUCES RAPIDES

```
🎨 Ajouter emojis:
   caption: "🔍 Recherche intelligente"

📐 Redimensionner images:
   1. Ouvrir avec Paint
   2. Image → Redimensionner
   3. 1200 x 800 pixels
   4. Enregistrer en JPG

🗜️ Compresser images:
   1. Ouvrir ImageOptim (Mac) ou FileOptimizer (Windows)
   2. Glisser les fichiers
   3. Laisser optimiser

🔗 Vérifier chemin:
   Fichier: my-screenshot.jpg
   Chemin: /projects/my-screenshot.jpg ✅
```

---

## 🚀 COMMANDES UTILES

```bash
# Vérifier que npm fonctionne
npm --version

# Lancer serveur dev
npm run dev

# Arrêter serveur
Ctrl + C

# Vérifier fichiers images
ls public/projects/

# Voir erreurs TypeScript
npm run lint
```

---

**Besoin d'aide?** Consultez les autres guides:
- SCREENSHOTS_QUICK_START.md
- SCREENSHOTS_DETAILED.md
- SCREENSHOTS_TEMPLATE.md
