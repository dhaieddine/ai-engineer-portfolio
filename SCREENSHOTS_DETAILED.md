# 🎬 AJOUTER DES SCREENSHOTS - GUIDE ÉTAPE PAR ÉTAPE

## 📋 Table des Matières
1. Préparer les images
2. Placer les fichiers
3. Modifier le code
4. Tester
5. Exemples complets

---

## 🖼️ **ÉTAPE 1: Préparer vos images**

### Option A: Créer des screenshots de votre app

**Sous Windows:**
1. Ouvrir votre application
2. Appuyer sur `PrintScreen` ou `Win + Shift + S`
3. Coller dans Paint
4. Redimensionner à ~1200x800 pixels
5. Exporter en JPG

**Sous Mac:**
1. `Cmd + Shift + 4` pour selection
2. Ouvrir Preview
3. Exporter en JPG

**Sous Linux:**
1. `gnome-screenshot` ou `scrot`
2. Éditer avec GIMP/Krita
3. Exporter en JPG

### Option B: Utiliser des images existantes

- **Unsplash.com** - Images gratuites
- **Pexels.com** - Stock photos gratuit
- **Pixabay.com** - Images libres de droits
- Télécharger et renommer

### Spécifications images:

| Spec | Recommandation |
|------|-----------------|
| Résolution | 1200 x 800 pixels |
| Format | JPG (principal) ou PNG |
| Taille fichier | 800KB - 1.5MB |
| Compression | 70-80% qualité |
| Couleurs | RGB (pas CMYK) |
| Mode | 24 bits |

---

## 📁 **ÉTAPE 2: Placer les fichiers**

### Localiser le dossier public/projects/

```
Votre projet:
ai-engineer-portfolio/
├── public/
│   ├── projects/  ← ICI
│   └── placeholder.svg
├── lib/
├── components/
└── ...
```

### Ajouter vos images

1. **Ouvrir dossier:** `public/projects/`
2. **Placer vos images JPG** dedans
3. **Noms acceptables:**
   - `homesmart-ai-search.jpg` ✅
   - `medical-ai_interface.jpg` ✅
   - `job intelligent dashboard.jpg` ❌ (espaces!)
   - `JobIntelligent.jpg` ✅

**Règle de nommage:**
```
LOWERCASE-project-name-screenshot-description.jpg
Exemple: homesmart-ai-search-interface.jpg
```

### Vérifier les fichiers

```bash
# Ouvrir terminal et vérifier:
ls public/projects/

# Vous devriez voir:
medical-ai.jpg
medical-ai-architecture.jpg
medical-ai-attention-map.jpg
medical-ai-interface.jpg           ← Nouveau
medical-ai-mri.jpg                 ← Nouveau
job-intelligent.jpg
homesmart-ai.jpg
homesmart-ai-search.jpg            ← Nouveau
...
```

---

## 🔧 **ÉTAPE 3: Modifier lib/projects-data.ts**

### Locater le fichier

```
ai-engineer-portfolio/
└── lib/
    └── projects-data.ts  ← Éditer ce fichier
```

### Trouver votre projet

Recherchez votre projet (Ctrl+F):

```typescript
"homesmart-ai": {
  slug: "homesmart-ai",
  title: "HomeSmart AI – Plateforme...",
  // ... autres propriétés ...
  gallery: [
    // ← ÉDITER ICI
  ],
  // ... autres propriétés ...
}
```

### Exemple AVANT:

```typescript
gallery: [
  { src: "/projects/homesmart-ai.jpg", caption: "Interface de recommandation des logements" },
  { src: "/projects/homesmart-ai.jpg", caption: "Tableau de bord d'analyse des chances" },
  { src: "/projects/homesmart-ai.jpg", caption: "Assistant IA pour conseils" },
],
```

### Exemple APRÈS:

```typescript
gallery: [
  { src: "/projects/homesmart-ai-search.jpg", caption: "Interface de recherche intelligente" },
  { src: "/projects/homesmart-ai-dashboard.jpg", caption: "Tableau de bord analytique" },
  { src: "/projects/homesmart-ai-prediction.jpg", caption: "Prédictions des chances d'acceptation" },
  { src: "/projects/homesmart-ai-pdf.jpg", caption: "Génération PDF du dossier" },
  { src: "/projects/homesmart-ai-assistant.jpg", caption: "Assistant IA conversationnel" },
],
```

### Règles à respecter:

✅ **Chemins valides:**
```typescript
{ src: "/projects/medical-ai-ui.jpg", caption: "..." }
{ src: "/projects/job-intelligent-dashboard.png", caption: "..." }
```

❌ **Chemins invalides:**
```typescript
{ src: "projects/medical-ai-ui.jpg", caption: "..." }  // Manque /
{ src: "/public/projects/medical-ai-ui.jpg", caption: "..." }  // Trop de dossiers
{ src: "/projects/medical ai ui.jpg", caption: "..." }  // Espaces!
```

---

## 📝 **ÉTAPE 4: Syntaxe correcte**

### Format TypeScript complet:

```typescript
gallery: [
  {
    src: "/projects/your-project-name-screenshot-1.jpg",
    caption: "Description courte et claire"
  },
  {
    src: "/projects/your-project-name-screenshot-2.jpg",
    caption: "Une autre description"
  },
]
```

### Points importants:

- **`src`** = chemin vers fichier image
  - Doit commencer par `/projects/`
  - Doit être le chemin exact du fichier
  - Case-sensitive sur Linux

- **`caption`** = texte qui s'affiche sous l'image
  - Maximum ~50 caractères
  - En français généralement
  - Soyez descriptif mais court

---

## 💻 **ÉTAPE 5: Exemples Complets par Projet**

### Example 1: Medical AI - Complete

```typescript
"medical-ai": {
  slug: "medical-ai",
  title: "Hybrid Medical AI System for Cancer Detection",
  // ... autres champs ...
  
  gallery: [
    {
      src: "/projects/medical-ai-ui.jpg",
      caption: "Interface Tkinter pour l'inférence"
    },
    {
      src: "/projects/medical-ai-mri-example.jpg",
      caption: "Exemple: Scan IRM analysé"
    },
    {
      src: "/projects/medical-ai-detection.jpg",
      caption: "Résultats détection cancer"
    },
    {
      src: "/projects/medical-ai-attention.jpg",
      caption: "Attention map - zones critiques"
    },
    {
      src: "/projects/medical-ai-architecture.jpg",
      caption: "Architecture hybrid CNN+Transformer"
    },
  ],
  
  // ... autres champs ...
},
```

### Example 2: Job Intelligent - Complete

```typescript
"job-intelligent": {
  slug: "job-intelligent",
  title: "Job Intelligent — Data Job Market Intelligence Platform",
  // ... autres champs ...
  
  gallery: [
    {
      src: "/projects/job-intelligent-dashboard.jpg",
      caption: "Tableau de bord Streamlit"
    },
    {
      src: "/projects/job-intelligent-salary-analysis.jpg",
      caption: "Analyse des salaires par région"
    },
    {
      src: "/projects/job-intelligent-geographic-map.jpg",
      caption: "Carte des offres d'emploi"
    },
    {
      src: "/projects/job-intelligent-skills-extraction.jpg",
      caption: "Extraction et visualisation compétences"
    },
  ],
  
  // ... autres champs ...
},
```

### Example 3: HomeSmart AI - Complete

```typescript
"homesmart-ai": {
  slug: "homesmart-ai",
  title: "HomeSmart AI – Plateforme Intelligente de Recherche de Logement",
  // ... autres champs ...
  
  gallery: [
    {
      src: "/projects/homesmart-ai-search-interface.jpg",
      caption: "🔍 Interface de recherche intelligente"
    },
    {
      src: "/projects/homesmart-ai-recommendations.jpg",
      caption: "⭐ Recommandations personnalisées"
    },
    {
      src: "/projects/homesmart-ai-prediction-model.jpg",
      caption: "📈 Prédictions d'acceptation ML"
    },
    {
      src: "/projects/homesmart-ai-pdf-dossier.jpg",
      caption: "📄 Génération automatique dossier PDF"
    },
    {
      src: "/projects/homesmart-ai-assistant-chat.jpg",
      caption: "💬 Assistant IA conversationnel"
    },
  ],
  
  // ... autres champs ...
},
```

---

## ✅ **ÉTAPE 6: Tester votre travail**

### Lancer le serveur de développement:

```bash
npm run dev
```

### Vérifier dans le navigateur:

1. Ouvrir: `http://localhost:3000`
2. Naviguer vers le projet: Ex: `/projects/homesmart-ai`
3. Scroller à **"Screenshots & Gallery"**
4. Vérifier que les images s'affichent

### Checklist:

- [ ] Images s'affichent (pas d'erreur 404)
- [ ] Captions visibles sous chaque image
- [ ] Hover effect fonctionne (zoom sur survol)
- [ ] Layout responsive (testé sur mobile)
- [ ] Pas d'erreurs dans la console (F12)

### Erreurs courantes:

| Erreur | Cause | Solution |
|--------|-------|----------|
| Image ne s'affiche pas | Fichier n'existe pas | Vérifier nom exact et dossier |
| Texte "Failed to load" | Chemin incorrect | Ajouter `/projects/` avant nom |
| Images en blanc | Format non supporté | Convertir en JPG/PNG/WebP |
| Layout cassé | Erreur TypeScript | Vérifier virgules et accolades |

---

## 🎨 **ÉTAPE 7: Optimiser**

### Vérifier résolution images:

```bash
# Sur Mac/Linux:
identify public/projects/homesmart-ai-search.jpg
# Output: homesmart-ai-search.jpg JPEG 1200x800 ...
```

### Compresser si trop lourd:

```bash
# Utiliser ImageOptim (Mac) ou FileOptimizer (Windows)
# Ou via terminal avec ImageMagick:
convert input.jpg -quality 75 output.jpg
```

### Bonus - Ajouter des emojis aux captions:

```typescript
gallery: [
  { src: "/projects/...", caption: "🔍 Recherche intelligente" },
  { src: "/projects/...", caption: "⭐ Recommandations" },
  { src: "/projects/...", caption: "📈 Prédictions ML" },
  { src: "/projects/...", caption: "📄 Dossier PDF" },
],
```

---

## 🚀 **Résumé Rapide**

```
1. 📁 Créer images (1200x800px, JPG)
2. 📂 Placer dans: public/projects/
3. ✏️ Éditer: lib/projects-data.ts
4. 🔗 Ajouter paths: "/projects/nom.jpg"
5. 📝 Ajouter captions: "Description..."
6. ▶️ Lancer: npm run dev
7. 🌐 Ouvrir: http://localhost:3000
8. ✅ Vérifier: Images s'affichent?
```

---

**Besoin d'aide?** Consulter les autres guides! 📚
