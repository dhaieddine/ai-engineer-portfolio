# 📸 AJOUTER DES SCREENSHOTS - GUIDE RAPIDE

## 🎯 En 5 minutes...

### **Étape 1: Créer/Trouver vos images**
```
Formats: JPG, PNG, WebP
Taille: 800x600px minimum
Dossier: public/projects/
```

### **Étape 2: Nommer vos fichiers**
```
Exemple:
- homesmart-ai-search.jpg
- homesmart-ai-dashboard.jpg
- homesmart-ai-results.jpg
```

### **Étape 3: Ajouter dans lib/projects-data.ts**

**Trouver:**
```
"homesmart-ai": {
  // ...
  gallery: [
    { src: "/projects/homesmart-ai.jpg", caption: "Interface de recommandation" },
    { src: "/projects/homesmart-ai.jpg", caption: "Tableau de bord" },
    { src: "/projects/homesmart-ai.jpg", caption: "Assistant IA" },
  ],
}
```

**Remplacer par:**
```typescript
gallery: [
  { src: "/projects/homesmart-ai-search.jpg", caption: "🔍 Interface de recherche" },
  { src: "/projects/homesmart-ai-dashboard.jpg", caption: "📊 Tableau de bord" },
  { src: "/projects/homesmart-ai-prediction.jpg", caption: "🎯 Prédictions ML" },
  { src: "/projects/homesmart-ai-pdf.jpg", caption: "📄 Dossier généré" },
],
```

### **Étape 4: Sauvegarder et tester**
```bash
npm run dev
```
Allez à: `http://localhost:3000/projects/homesmart-ai`

---

## 📊 Structure gallery

```typescript
gallery: [
  {
    src: "/projects/PROJECT-NAME.jpg",        // ✅ Doit exister dans public/projects/
    caption: "Description courte"              // ✅ S'affiche sous l'image
  },
  // ... ajouter plus d'images
]
```

---

## 💡 Conseils Pratiques

### Pour Medical AI:
```typescript
gallery: [
  { src: "/projects/medical-ai-interface.jpg", caption: "Interface Tkinter" },
  { src: "/projects/medical-ai-mri.jpg", caption: "Exemple scan IRM" },
  { src: "/projects/medical-ai-attention.jpg", caption: "Attention map" },
  { src: "/projects/medical-ai-results.jpg", caption: "Résultats détectés" },
],
```

### Pour Job Intelligent:
```typescript
gallery: [
  { src: "/projects/job-intelligent-dashboard.jpg", caption: "Tableau de bord" },
  { src: "/projects/job-intelligent-salary.jpg", caption: "Analyse salaires" },
  { src: "/projects/job-intelligent-map.jpg", caption: "Carte géographique" },
  { src: "/projects/job-intelligent-matching.jpg", caption: "Matching CV-Job" },
],
```

### Pour HomeSmart AI:
```typescript
gallery: [
  { src: "/projects/homesmart-ai-search.jpg", caption: "🔍 Recherche" },
  { src: "/projects/homesmart-ai-recommend.jpg", caption: "⭐ Recommandations" },
  { src: "/projects/homesmart-ai-predict.jpg", caption: "📈 Prédictions" },
  { src: "/projects/homesmart-ai-dossier.jpg", caption: "📄 Dossier PDF" },
],
```

---

## 🚀 Workflow Complet

```bash
# 1. Ajouter images dans:
#    public/projects/mon-image.jpg

# 2. Éditer lib/projects-data.ts
#    Mettre à jour le array gallery:

# 3. Sauvegarder

# 4. Lancer dev server:
npm run dev

# 5. Ouvrir dans navigateur:
# http://localhost:3000/projects/YOUR-PROJECT
```

---

## ✅ Checklist Finale

- [ ] Images créées/trouvées (JPG, PNG, WebP)
- [ ] Fichiers placés dans `public/projects/`
- [ ] Noms de fichiers exacts (sans espaces)
- [ ] `lib/projects-data.ts` modifié
- [ ] Chemins commencent par `/projects/`
- [ ] Captions descriptives en français
- [ ] Serveur lancé: `npm run dev`
- [ ] Page projet ouvre sans erreur
- [ ] Images s'affichent dans "Screenshots & Gallery"
- [ ] Hover effect fonctionne (zoom)

---

## 📁 Exemple Structure Finale

```
public/projects/
├── medical-ai.jpg
├── medical-ai-architecture.jpg
├── medical-ai-attention-map.jpg
├── medical-ai-interface.jpg
├── medical-ai-mri-scan.jpg
├── medical-ai-results.jpg
├── job-intelligent.jpg
├── job-intelligent-dashboard.jpg
├── job-intelligent-salary-analysis.jpg
├── job-intelligent-map.jpg
├── job-intelligent-matching.jpg
├── homesmart-ai.jpg
├── homesmart-ai-search.jpg
├── homesmart-ai-dashboard.jpg
├── homesmart-ai-prediction.jpg
└── homesmart-ai-pdf-dossier.jpg
```

---

## 🎨 Affichage Responsive

- **Desktop (3 colonnes):** 
  ```
  [Img1] [Img2] [Img3]
  [Img4] [Img5]
  ```

- **Tablette (2 colonnes):**
  ```
  [Img1] [Img2]
  [Img3] [Img4]
  ```

- **Mobile (1 colonne):**
  ```
  [Img1]
  [Img2]
  [Img3]
  ```

---

**Questions?** Consulter le guide complet: `ADD_SCREENSHOTS_GUIDE.md`
