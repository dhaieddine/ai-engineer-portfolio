# 📸 AJOUTER DES SCREENSHOTS - RÉSUMÉ COMPLET

## 🎯 Vue d'ensemble

Vous avez créé un portfolio avec 3 projets. Chaque projet affiche une **galerie de screenshots** dans la section **"Screenshots & Gallery"**.

**But:** Ajouter vos propres images pour que chaque projet soit illustré avec des vrais screenshots/mockups.

---

## 🚀 EN 3 ÉTAPES SIMPLES

### 1️⃣ **Créer/Trouver vos images**
- Prendre des screenshots de votre app
- Ou télécharger des images similaires (Unsplash, Pexels)
- Format: JPG/PNG, ~1200x800px, <2MB

### 2️⃣ **Placer les fichiers**
- Mettre toutes les images dans: `public/projects/`
- Noms: `project-name-screenshot-1.jpg`

### 3️⃣ **Mettre à jour le code**
- Ouvrir: `lib/projects-data.ts`
- Trouver: section `gallery:` de votre projet
- Ajouter: vos images avec chemins et descriptions

**Résultat:** Images s'affichent automatiquement! ✨

---

## 📁 STRUCTURE DES FICHIERS

### Avant:
```
public/projects/
├── medical-ai.jpg
├── medical-ai-architecture.jpg
├── medical-ai-attention-map.jpg
├── job-intelligent.jpg
└── homesmart-ai.jpg
```

### Après:
```
public/projects/
├── medical-ai.jpg
├── medical-ai-interface.jpg           ← Nouveau
├── medical-ai-mri-scan.jpg            ← Nouveau
├── medical-ai-detection.jpg           ← Nouveau
├── medical-ai-architecture.jpg
├── medical-ai-attention-map.jpg
├── job-intelligent.jpg
├── job-intelligent-dashboard.jpg      ← Nouveau
├── job-intelligent-salary.jpg         ← Nouveau
├── job-intelligent-map.jpg            ← Nouveau
├── homesmart-ai.jpg
├── homesmart-ai-search.jpg            ← Nouveau
├── homesmart-ai-recommend.jpg         ← Nouveau
└── homesmart-ai-pdf.jpg               ← Nouveau
```

---

## 🔧 CODE À MODIFIER

### Location: `lib/projects-data.ts`

**Format:**
```typescript
gallery: [
  { src: "/projects/FILE-NAME.jpg", caption: "Description" },
  { src: "/projects/FILE-NAME.jpg", caption: "Description" },
  { src: "/projects/FILE-NAME.jpg", caption: "Description" },
],
```

**Règles:**
- ✅ `src` commence par `/projects/`
- ✅ Fichier doit exister dans `public/projects/`
- ✅ `caption` s'affiche sous l'image
- ✅ Maximum 50 caractères pour caption
- ✅ Minimum 3 images, idéal 4-5

---

## 📝 EXEMPLE COMPLET: HomeSmart AI

### Code ACTUEL:
```typescript
"homesmart-ai": {
  // ...
  gallery: [
    { src: "/projects/homesmart-ai.jpg", caption: "Interface de recommandation" },
    { src: "/projects/homesmart-ai.jpg", caption: "Tableau de bord" },
    { src: "/projects/homesmart-ai.jpg", caption: "Assistant IA" },
  ],
  // ...
}
```

### Code À REMPLACER:
```typescript
"homesmart-ai": {
  // ...
  gallery: [
    { src: "/projects/homesmart-ai-search.jpg", caption: "🔍 Recherche intelligente" },
    { src: "/projects/homesmart-ai-dashboard.jpg", caption: "📊 Tableau de bord" },
    { src: "/projects/homesmart-ai-prediction.jpg", caption: "📈 Prédictions ML" },
    { src: "/projects/homesmart-ai-pdf.jpg", caption: "📄 Dossier généré" },
    { src: "/projects/homesmart-ai-assistant.jpg", caption: "💬 Assistant IA" },
  ],
  // ...
}
```

### Fichiers à créer:
```
public/projects/
├── homesmart-ai-search.jpg
├── homesmart-ai-dashboard.jpg
├── homesmart-ai-prediction.jpg
├── homesmart-ai-pdf.jpg
└── homesmart-ai-assistant.jpg
```

---

## 📊 TEMPLATES POUR CHAQUE PROJET

### Medical AI - 5 images ideales:
```
1. Interface utilisateur (Tkinter UI)
2. Exemple d'entrée (MRI scan)
3. Résultats/sorties (détections)
4. Attention map (zones détectées)
5. Architecture visuelle
```

### Job Intelligent - 4-5 images ideales:
```
1. Tableau de bord principal
2. Analyse des salaires
3. Carte géographique
4. Extraction compétences
5. (Optionnel) Matching CV-Job
```

### HomeSmart AI - 5 images ideales:
```
1. Interface recherche
2. Recommandations
3. Prédictions
4. Génération PDF
5. Assistant IA chat
```

---

## ⚡ WORKFLOW RAPIDE

### 1. Préparer images (15 min)
```
Créer 4-5 screenshots par projet
Redimensionner à ~1200x800px
Exporter en JPG
```

### 2. Placer fichiers (2 min)
```
Copier les JPG dans: public/projects/
Vérifier les noms exacts
```

### 3. Modifier code (5 min)
```
Ouvrir: lib/projects-data.ts
Trouver: section gallery: du projet
Remplacer l'array avec vos images
Sauvegarder
```

### 4. Tester (2 min)
```bash
npm run dev
# Ouvrir http://localhost:3000
# Vérifier que images s'affichent
```

**Total: ~25 minutes par projet!** ⏱️

---

## 💡 ASTUCES

### 1. Ajouter des emojis aux captions
```typescript
{ src: "/projects/...", caption: "🔍 Recherche intelligente" }
{ src: "/projects/...", caption: "⭐ Recommandations" }
{ src: "/projects/...", caption: "📈 Prédictions" }
```

### 2. Créer des maquettes rapides
- **Figma** - Créer des mockups (gratuit)
- **Excalidraw** - Sketches simples
- **Screenshots + Paint/Photoshop** - Éditer/annoter

### 3. Utiliser des images stock
- Unsplash.com
- Pexels.com
- Pixabay.com
- Placeit.net (mockups)

### 4. Optimiser les images
```bash
# Réduire taille sans perdre qualité
# MacOS: ImageOptim
# Windows: FileOptimizer
# Ou: convert -quality 75 input.jpg output.jpg
```

---

## ✅ CHECKLIST FINALE

### Avant d'ajouter images:
- [ ] Images créées/téléchargées
- [ ] Format: JPG ou PNG
- [ ] Résolution: ~1200x800px minimum
- [ ] Taille: <2MB par fichier

### Avant de modifier code:
- [ ] Fichiers placés dans `public/projects/`
- [ ] Noms de fichiers sont corrects
- [ ] Pas d'espaces ou accents dans noms

### Après modification:
- [ ] Fichier `lib/projects-data.ts` sauvegardé
- [ ] Syntaxe TypeScript correcte (pas d'erreurs)
- [ ] Virgules après chaque `}` (sauf dernier)
- [ ] Chemins commencent par `/projects/`

### Tests:
- [ ] `npm run dev` lance sans erreur
- [ ] Projet page ouvre
- [ ] Images s'affichent dans "Screenshots & Gallery"
- [ ] Captions visibles
- [ ] Hover effect fonctionne (zoom)
- [ ] Layout responsive (mobile/tablet/desktop)

---

## 📚 GUIDES DÉTAILLÉS

Pour plus de détails, consultez:

- **SCREENSHOTS_QUICK_START.md** - Guide super rapide (2 min)
- **SCREENSHOTS_DETAILED.md** - Guide complet avec exemples
- **SCREENSHOTS_TEMPLATE.md** - Templates copy/paste prêts

---

## 🎨 AFFICHAGE FINAL

### Desktop (3 colonnes):
```
[Image 1] [Image 2] [Image 3]
Caption   Caption   Caption

[Image 4] [Image 5]
Caption   Caption
```

### Tablette (2 colonnes):
```
[Image 1] [Image 2]
[Image 3] [Image 4]
[Image 5]
```

### Mobile (1 colonne):
```
[Image 1]
[Image 2]
[Image 3]
[Image 4]
[Image 5]
```

**Avec hover:** Images zoontent 1.1x + gradient overlay

---

## 🆘 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Images ne s'affichent pas | Vérifier chemin `/projects/` + nom fichier exact |
| Erreur TypeScript | Vérifier virgules et accolades |
| Captions coupées | Réduire texte à <50 caractères |
| Images floutées | Augmenter résolution (min 1200x800) |
| Page lente | Compresser images (quality 70-80%) |

---

## 🚀 READY TO GO!

**Prochaines étapes:**

1. Créer/trouver 4-5 images par projet
2. Placer dans `public/projects/`
3. Éditer `lib/projects-data.ts`
4. Tester avec `npm run dev`
5. Commit: `git add . && git commit -m "Add project screenshots"`

---

**Questions?** Consultez les guides spécifiques! 📖
