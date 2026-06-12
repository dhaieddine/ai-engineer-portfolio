# 📸 TEMPLATE - COPY & PASTE

## 🎯 Comment utiliser ce template

1. **Copier** la section de votre projet ci-dessous
2. **Remplacer** les noms de fichiers par vos vrais fichiers
3. **Modifier** les captions en fonction de vos images
4. **Coller** dans `lib/projects-data.ts`
5. **Tester** avec `npm run dev`

---

## 🏥 MEDICAL AI - Template

### Avant (à remplacer):
```typescript
gallery: [
  { src: "/projects/medical-ai-architecture.jpg", caption: "Model architecture overview" },
  { src: "/projects/medical-ai-attention-map.jpg", caption: "Attention map visualization" },
  { src: "/projects/medical-ai.jpg", caption: "Tkinter inference interface" },
],
```

### Après (COPIER/COLLER):
```typescript
gallery: [
  { src: "/projects/medical-ai-interface.jpg", caption: "Interface Tkinter de diagnostic" },
  { src: "/projects/medical-ai-mri-scan.jpg", caption: "Exemple: Scan IRM analysé" },
  { src: "/projects/medical-ai-detection-results.jpg", caption: "Résultats détection cancer" },
  { src: "/projects/medical-ai-attention-map.jpg", caption: "Attention map - zones critiques" },
  { src: "/projects/medical-ai-architecture.jpg", caption: "Architecture hybrid CNN+Transformer" },
],
```

### Fichiers à créer/placer dans `public/projects/`:
```
- medical-ai-interface.jpg
- medical-ai-mri-scan.jpg
- medical-ai-detection-results.jpg
- medical-ai-attention-map.jpg (déjà existe)
- medical-ai-architecture.jpg (déjà existe)
```

---

## 💼 JOB INTELLIGENT - Template

### Avant (à remplacer):
```typescript
gallery: [
  { src: "/projects/job-intelligent.jpg", caption: "Streamlit analytics dashboard" },
  { src: "/projects/job-intelligent.jpg", caption: "Salary distribution analysis" },
  { src: "/projects/job-intelligent.jpg", caption: "Geographic job density map" },
],
```

### Après (COPIER/COLLER):
```typescript
gallery: [
  { src: "/projects/job-intelligent-dashboard.jpg", caption: "Tableau de bord Streamlit" },
  { src: "/projects/job-intelligent-salary-analysis.jpg", caption: "Analyse salaires par région" },
  { src: "/projects/job-intelligent-geographic-map.jpg", caption: "Carte densité des offres" },
  { src: "/projects/job-intelligent-skills-extraction.jpg", caption: "Extraction compétences requises" },
  { src: "/projects/job-intelligent-cv-matching.jpg", caption: "Matching CV vs offres" },
],
```

### Fichiers à créer/placer dans `public/projects/`:
```
- job-intelligent-dashboard.jpg
- job-intelligent-salary-analysis.jpg
- job-intelligent-geographic-map.jpg
- job-intelligent-skills-extraction.jpg
- job-intelligent-cv-matching.jpg
```

---

## 🏠 HOMESMART AI - Template

### Avant (à remplacer):
```typescript
gallery: [
  { src: "/projects/homesmart-ai.jpg", caption: "Interface de recommandation des logements" },
  { src: "/projects/homesmart-ai.jpg", caption: "Tableau de bord d'analyse des chances" },
  { src: "/projects/homesmart-ai.jpg", caption: "Assistant IA pour conseils" },
],
```

### Après (COPIER/COLLER):
```typescript
gallery: [
  { src: "/projects/homesmart-ai-search.jpg", caption: "🔍 Recherche intelligente multi-plateforme" },
  { src: "/projects/homesmart-ai-recommendations.jpg", caption: "⭐ Recommandations personnalisées" },
  { src: "/projects/homesmart-ai-prediction.jpg", caption: "📈 Prédictions chances acceptation" },
  { src: "/projects/homesmart-ai-pdf-generator.jpg", caption: "📄 Génération dossier PDF auto" },
  { src: "/projects/homesmart-ai-assistant.jpg", caption: "💬 Assistant IA conversationnel" },
],
```

### Fichiers à créer/placer dans `public/projects/`:
```
- homesmart-ai-search.jpg
- homesmart-ai-recommendations.jpg
- homesmart-ai-prediction.jpg
- homesmart-ai-pdf-generator.jpg
- homesmart-ai-assistant.jpg
```

---

## 🧬 TEMPLATE GÉNÉRIQUE (pour vos projets)

```typescript
"your-project-slug": {
  slug: "your-project-slug",
  title: "Your Project Title",
  subtitle: "Your project subtitle",
  // ... autres champs ...
  
  gallery: [
    {
      src: "/projects/your-project-screenshot-1.jpg",
      caption: "First screenshot description"
    },
    {
      src: "/projects/your-project-screenshot-2.jpg",
      caption: "Second screenshot description"
    },
    {
      src: "/projects/your-project-screenshot-3.jpg",
      caption: "Third screenshot description"
    },
    {
      src: "/projects/your-project-screenshot-4.jpg",
      caption: "Fourth screenshot description"
    },
    {
      src: "/projects/your-project-screenshot-5.jpg",
      caption: "Fifth screenshot description"
    },
  ],
  
  // ... autres champs ...
},
```

---

## 📋 Checklist Avant de Copier/Coller

- [ ] Tous les fichiers JPG/PNG sont dans `public/projects/`
- [ ] Les noms de fichiers sont corrects (pas d'accents, pas d'espaces)
- [ ] Les captions sont en français et descriptives
- [ ] Les emojis sont optionnels mais ajoutent du style
- [ ] Minimum 3 images, idéalement 4-5
- [ ] Chaque objet a une virgule à la fin (sauf le dernier)

---

## 🔍 Vérifier la Syntaxe

### ✅ BON:
```typescript
gallery: [
  { src: "/projects/my-project-1.jpg", caption: "First" },
  { src: "/projects/my-project-2.jpg", caption: "Second" },
  { src: "/projects/my-project-3.jpg", caption: "Third" },
],
```

### ❌ MAUVAIS:
```typescript
gallery: [
  { src: "/projects/my-project-1.jpg", caption: "First" }  // ← Manque virgule!
  { src: "/projects/my-project-2.jpg", caption: "Second" },
  { src: "/projects/my-project-3.jpg", caption: "Third" },
]
```

### ❌ MAUVAIS:
```typescript
gallery: [
  { src: "/projects/my project-1.jpg", caption: "First" },  // ← Espace dans nom!
  { src: "/projects/my-project-2.jpg", caption: "Second" },
  { src: "/projects/my-project-3.jpg", caption: "Third" }  // ← Virgule manquante (dernière ok)
],
```

---

## 🚀 Après Copy/Paste

```bash
# 1. Sauvegarder lib/projects-data.ts

# 2. Lancer dev server:
npm run dev

# 3. Ouvrir navigateur:
http://localhost:3000/projects/YOUR-PROJECT

# 4. Vérifier:
# - Images s'affichent
# - Captions visibles
# - Pas d'erreurs rouge (F12)
```

---

## 💾 Fichiers à modifier

| Fichier | Action |
|---------|--------|
| `public/projects/` | 📁 Ajouter images JPG/PNG |
| `lib/projects-data.ts` | ✏️ Remplacer array `gallery:` |

---

## 📱 Rendu Final

Après modification, sur chaque page projet, vous verrez:

```
╔════════════════════════════════════════════╗
║    Screenshots & Gallery                  ║
╠════════════════════════════════════════════╣
║  [Image 1]    [Image 2]    [Image 3]      ║
║ Caption 1    Caption 2    Caption 3       ║
║                                           ║
║  [Image 4]    [Image 5]                   ║
║ Caption 4    Caption 5                    ║
╚════════════════════════════════════════════╝
```

**Hover effect:** Images zoontent (1.1x) avec gradient overlay

---

## 🆘 Erreurs Courantes & Solutions

| Erreur | Cause | Fix |
|--------|-------|-----|
| `Cannot find module` | Fichier n'existe pas | Vérifier nom exact |
| `SyntaxError` | Virgule manquante | Ajouter `,` après `}` |
| Image grise/blanche | Chemin incorrect | Ajouter `/projects/` |
| Captions coupées | Texte trop long | Réduire à <50 chars |

---

**Prêt?** 🚀
1. Copier le template de votre projet
2. Remplacer noms fichiers
3. Modifier captions
4. Coller dans `lib/projects-data.ts`
5. Test: `npm run dev`
