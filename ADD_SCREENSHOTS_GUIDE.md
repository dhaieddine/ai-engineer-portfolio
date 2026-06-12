# 📸 Guide Complet: Ajouter des Screenshots aux Projets

## 🎯 Vue d'ensemble

Chaque projet affiche une **galerie de screenshots** (section "Screenshots & Gallery"). Les images s'affichent en grille responsive (3 colonnes sur desktop, 2 sur tablette, 1 sur mobile).

### Structure Actuelle:
- **Medical AI**: 3 images
- **Job Intelligent**: 3 images  
- **HomeSmart AI**: 3 images

---

## 📁 **ÉTAPE 1: Préparer vos fichiers images**

### Où placer les images?
```
projet/
├── public/
│   └── projects/          ← Placer ici toutes les images
│       ├── medical-ai.jpg
│       ├── medical-ai-architecture.jpg
│       ├── medical-ai-attention-map.jpg
│       ├── job-intelligent.jpg
│       ├── homesmart-ai.jpg
│       └── ... (ajouter vos fichiers ici)
```

### Format des fichiers:
- ✅ **Formats acceptés**: JPG, PNG, WebP
- ✅ **Recommandé**: JPG (plus léger)
- ✅ **Résolution**: 800x600px minimum (pour qualité HD)
- ✅ **Taille fichier**: Max 2-3 MB par image

### Nommer les fichiers:
```
project-name-screenshot-1.jpg
project-name-screenshot-2.jpg
project-name-dashboard.jpg
project-name-architecture.jpg
project-name-ui.jpg
```

**Exemple pour Medical AI:**
```
medical-ai-ui.jpg
medical-ai-model.jpg
medical-ai-results.jpg
```

---

## 🔧 **ÉTAPE 2: Modifier lib/projects-data.ts**

### Localiser le projet
Ouvrir `lib/projects-data.ts` et trouver la section `gallery:` de votre projet.

**Exemple actuel (Medical AI):**
```typescript
gallery: [
  { src: "/projects/medical-ai-architecture.jpg", caption: "Model architecture overview" },
  { src: "/projects/medical-ai-attention-map.jpg", caption: "Attention map visualization" },
  { src: "/projects/medical-ai.jpg", caption: "Tkinter inference interface" },
],
```

### Ajouter vos nouvelles images

```typescript
gallery: [
  // Image 1 - Interface/UI
  { 
    src: "/projects/medical-ai-ui.jpg", 
    caption: "Interface utilisateur principale" 
  },
  
  // Image 2 - Résultats/Dashboard
  { 
    src: "/projects/medical-ai-results.jpg", 
    caption: "Affichage des résultats d'analyse" 
  },
  
  // Image 3 - Processus/Architecture
  { 
    src: "/projects/medical-ai-model.jpg", 
    caption: "Pipeline du modèle d'IA" 
  },
  
  // Image 4 - Graphiques/Métriques (optionnel)
  { 
    src: "/projects/medical-ai-metrics.jpg", 
    caption: "Graphiques de performance" 
  },
],
```

---

## 📝 **Format de la structure gallery**

### Structure de base:
```typescript
interface GalleryItem {
  src: string        // Chemin de l'image: "/projects/filename.jpg"
  caption: string    // Description courte en français
}
```

### Règles:
1. **src**: Doit commencer par `/projects/`
2. **caption**: Description simple (20-50 caractères recommandé)
3. **Nombre d'images**: 3-6 images par projet (idéal: 4-5)

---

## 🎨 **ÉTAPE 3: Suggestions de screenshots par projet**

### 📊 Medical AI System
```typescript
gallery: [
  { src: "/projects/medical-ai-interface.jpg", caption: "Interface Tkinter de diagnostic" },
  { src: "/projects/medical-ai-mri.jpg", caption: "Exemple: Scan IRM analysé" },
  { src: "/projects/medical-ai-attention.jpg", caption: "Attention map - zones détectées" },
  { src: "/projects/medical-ai-predictions.jpg", caption: "Résultats prédictions (3 tâches)" },
],
```

### 📈 Job Intelligent Platform
```typescript
gallery: [
  { src: "/projects/job-intelligent-dashboard.jpg", caption: "Tableau de bord analytique" },
  { src: "/projects/job-intelligent-salary.jpg", caption: "Analyse des salaires par région" },
  { src: "/projects/job-intelligent-skills.jpg", caption: "Extraction et visualisation compétences" },
  { src: "/projects/job-intelligent-map.jpg", caption: "Carte géographique des offres" },
],
```

### 🏠 HomeSmart AI Platform
```typescript
gallery: [
  { src: "/projects/homesmart-ai-search.jpg", caption: "Interface de recherche intelligente" },
  { src: "/projects/homesmart-ai-recommendations.jpg", caption: "Recommandations personnalisées" },
  { src: "/projects/homesmart-ai-prediction.jpg", caption: "Prédiction des chances d'acceptation" },
  { src: "/projects/homesmart-ai-dossier.jpg", caption: "Génération PDF du dossier locataire" },
],
```

---

## 📋 **ÉTAPE 4: Checklist mise à jour**

Après ajouter les images, vérifiez:

- [ ] **Fichiers images créés** dans `public/projects/`
  ```bash
  ls public/projects/*.jpg
  ```

- [ ] **lib/projects-data.ts modifié** avec nouvel array `gallery:`
  - [ ] Tous les chemins commencent par `/projects/`
  - [ ] Les noms de fichiers correspondent exactement
  - [ ] Captions sont descriptives et en français

- [ ] **Tester le rendu** - Lancer `npm run dev`
  - [ ] Page du projet charge sans erreur
  - [ ] Images s'affichent dans "Screenshots & Gallery"
  - [ ] Hover effect fonctionne (zoom sur image)
  - [ ] Captions visibles et lisibles

---

## 🔗 **Exemple Complet: Medical AI**

### Fichier structure:
```
public/projects/
├── medical-ai.jpg                  ✅ Existe
├── medical-ai-architecture.jpg     ✅ Existe  
├── medical-ai-attention-map.jpg    ✅ Existe
├── medical-ai-ui.jpg               ➕ À ajouter
├── medical-ai-results.jpg          ➕ À ajouter
└── medical-ai-training.jpg         ➕ À ajouter
```

### Code TypeScript:
```typescript
"medical-ai": {
  // ... autres propriétés ...
  gallery: [
    { src: "/projects/medical-ai-ui.jpg", caption: "Interface de l'application" },
    { src: "/projects/medical-ai-results.jpg", caption: "Résultats du diagnostic" },
    { src: "/projects/medical-ai-training.jpg", caption: "Processus d'entraînement du modèle" },
    { src: "/projects/medical-ai-attention-map.jpg", caption: "Attention map - zones détectées" },
    { src: "/projects/medical-ai-architecture.jpg", caption: "Architecture du modèle hybrid" },
  ],
  // ... autres propriétés ...
},
```

---

## ⚡ **Quick Copy-Paste Template**

Copiez cet template pour vos projets:

```typescript
"your-project": {
  // ... autres champs ...
  gallery: [
    { src: "/projects/your-project-screenshot-1.jpg", caption: "Screenshot 1 description" },
    { src: "/projects/your-project-screenshot-2.jpg", caption: "Screenshot 2 description" },
    { src: "/projects/your-project-screenshot-3.jpg", caption: "Screenshot 3 description" },
    { src: "/projects/your-project-screenshot-4.jpg", caption: "Screenshot 4 description" },
  ],
  // ... autres champs ...
},
```

---

## 🚀 **Résumé des étapes**

1. ✅ **Préparer images**: Placer dans `public/projects/`
2. ✅ **Ouvrir**: `lib/projects-data.ts`
3. ✅ **Modifier**: Section `gallery:` du projet
4. ✅ **Ajouter**: Objets avec `src` et `caption`
5. ✅ **Tester**: `npm run dev` → Vérifier rendu
6. ✅ **Commit**: `git add . && git commit -m "Add project screenshots"`

---

## 💡 **Tips & Tricks**

### Besoin de screenshos fictifs?
- Utilisez [Unsplash](https://unsplash.com) ou [Pexels](https://pexels.com)
- Téléchargez des images similaires au type de projet
- Renommez avec vos noms de projet

### Créer des screenshots de votre app?
1. Lancer votre application
2. Prendre des screenshots (PrtScn)
3. Coller dans Paint/Photoshop
4. Exporter en JPG
5. Placer dans `public/projects/`

### Format optimal:
```
Résolution: 1200x800 px (ou proche)
Format: JPG
Compression: 70-80% (bon balance qualité/taille)
Taille: 500KB-1.5MB
```

---

## ✨ **Affichage Final**

Sur la page du projet, cela donnera:

```
┌─────────────────────────────────────┐
│   Screenshots & Gallery             │
├─────────────────────────────────────┤
│ [Image 1] [Image 2] [Image 3]       │
│  Caption1  Caption2  Caption3       │
│                                     │
│ [Image 4] [Image 5]                │
│  Caption4  Caption5                │
└─────────────────────────────────────┘
```

**Avec hover effect**: Zoom 1.1x + gradient overlay

---

Besoin d'aide pour obtenir des images ou modifier le code? 📧
