import { siteLinks } from "@/lib/site-links"

export type ProjectSlug = "medical-ai" | "job-intelligent" | "homesmart-ai"

export interface ArchitectureStep {
  label: string
  description: string
}

export interface ProjectFeature {
  title: string
  description: string
}

export interface ProjectMetric {
  label: string
  value: string
  suffix?: string
}

export interface GalleryItem {
  src: string
  caption: string
}

export interface ProjectTechnology {
  name: string
  iconId: string
}

export interface ProjectData {
  slug: ProjectSlug
  title: string
  subtitle: string
  badge: string
  heroImage: string
  tags: string[]
  liveDemo: string
  github: string
  accent: "purple" | "cyan"
  overview: {
    goal: string
    problem: string
    why: string
    architecture: string
  }
  architectureSteps: ArchitectureStep[]
  technologies: ProjectTechnology[]
  features: ProjectFeature[]
  gallery: GalleryItem[]
  metrics: ProjectMetric[]
  terminal: {
    filename: string
    lines: { type: "comment" | "keyword" | "string" | "plain" | "indent"; text: string }[]
  }
}

export const projectsData: Record<ProjectSlug, ProjectData> = {
  "medical-ai": {
    slug: "medical-ai",
    title: "Hybrid Medical AI System for Cancer Detection",
    subtitle:
      "Multi-task cancer detection and classification from MRI and X-Ray imaging.",
    badge: "Medical AI · Deep Learning",
    heroImage: "/projects/medical-ai.jpg",
    tags: ["PyTorch", "EfficientNet", "Vision Transformer", "CBAM", "OpenCV", "Tkinter"],
    liveDemo: "#",
    github: siteLinks.github,
    accent: "purple",
    overview: {
      goal:
        "Build an end-to-end medical imaging system that detects cancer presence, classifies cancer type, and identifies imaging modality from MRI and X-Ray scans — with interpretable attention maps for clinical trust.",
      problem:
        "Radiologists face high workloads and subtle patterns in medical images that are easy to miss. Single-task models lack the flexibility to handle detection, classification, and modality recognition in one unified pipeline.",
      why:
        "A hybrid architecture combining CNN spatial features with transformer global context — enhanced by CBAM attention — delivers state-of-the-art performance while remaining explainable through attention visualization.",
      architecture:
        "The system uses EfficientNet-B0 as backbone, CBAM attention modules for channel and spatial refinement, a Vision Transformer head for global context, and multi-task output heads for detection, type classification, and modality classification — wrapped in a PyTorch training pipeline with a Tkinter desktop interface.",
    },
    architectureSteps: [
      { label: "Medical Images", description: "MRI & X-Ray input preprocessing" },
      { label: "EfficientNet", description: "EfficientNet-B0 feature extraction" },
      { label: "CBAM", description: "Channel & spatial attention refinement" },
      { label: "Vision Transformer", description: "Global context encoding" },
      { label: "Multi-task Heads", description: "Detection · Type · Modality outputs" },
    ],
    technologies: [
      { name: "PyTorch", iconId: "pytorch" },
      { name: "EfficientNet", iconId: "brain" },
      { name: "Vision Transformer", iconId: "layers" },
      { name: "CBAM", iconId: "scan" },
      { name: "OpenCV", iconId: "opencv" },
      { name: "Scikit-learn", iconId: "scikitlearn" },
      { name: "Tkinter", iconId: "monitor" },
    ],
    features: [
      {
        title: "Multi-task Learning",
        description:
          "Simultaneous cancer detection, type classification, and imaging modality recognition in a single forward pass.",
      },
      {
        title: "Attention Visualization",
        description:
          "CBAM attention maps highlight clinically relevant regions for interpretable AI-driven diagnostics.",
      },
      {
        title: "Hybrid Architecture",
        description:
          "CNN + CBAM + Vision Transformer fusion captures both local textures and global anatomical context.",
      },
      {
        title: "Medical Interpretability",
        description:
          "Explainable outputs designed for trust in high-stakes medical decision workflows.",
      },
      {
        title: "PyTorch Training Pipeline",
        description:
          "Full training, validation, and checkpointing with advanced optimization and augmentation.",
      },
      {
        title: "Desktop Interface",
        description:
          "Tkinter GUI for loading scans, running inference, and visualizing predictions interactively.",
      },
    ],
    gallery: [
      { src: "/projects/medical-ai-architecture.jpg", caption: "Model architecture overview" },
      { src: "/projects/medical-ai-attention-map.jpg", caption: "Attention map visualization" },
      { src: "/projects/medical-ai.jpg", caption: "Tkinter inference interface" },
    ],
    metrics: [
      { label: "Model Accuracy", value: "94", suffix: "%" },
      { label: "Dataset Images", value: "12K", suffix: "+" },
      { label: "Task Heads", value: "3" },
      { label: "Modalities", value: "2", suffix: " types" },
      { label: "Backbone", value: "EfficientNet-B0" },
      { label: "Framework", value: "PyTorch" },
    ],
    terminal: {
      filename: "train_medical_ai.py",
      lines: [
        { type: "comment", text: "# Hybrid Medical AI — Training Pipeline" },
        { type: "plain", text: "" },
        { type: "keyword", text: "model = HybridMedicalNet(" },
        { type: "indent", text: "backbone='efficientnet_b0'," },
        { type: "indent", text: "attention='cbam'," },
        { type: "indent", text: "transformer_heads=8," },
        { type: "indent", text: "tasks=['detection', 'type', 'modality']" },
        { type: "keyword", text: ")" },
        { type: "plain", text: "" },
        { type: "keyword", text: "trainer.fit(" },
        { type: "indent", text: "epochs=100," },
        { type: "indent", text: "optimizer='adamw'," },
        { type: "indent", text: "loss='multi_task_ce'" },
        { type: "keyword", text: ")" },
        { type: "plain", text: "" },
        { type: "string", text: ">>> Accuracy: 94.2% | F1: 0.91 | AUC: 0.96" },
      ],
    },
  },
  "job-intelligent": {
    slug: "job-intelligent",
    title: "Job Intelligent — Data Job Market Intelligence Platform",
    subtitle:
      "Large-scale data engineering and analytics platform for the French Data job market.",
    badge: "Data Engineering · Analytics",
    heroImage: "/projects/job-intelligent.jpg",
    tags: ["MongoDB", "FastAPI", "Streamlit", "Playwright", "Pandas", "Plotly"],
    liveDemo: "#",
    github: siteLinks.github,
    accent: "cyan",
    overview: {
      goal:
        "Build a comprehensive intelligence platform that collects, enriches, and analyzes Data job offers across France — delivering actionable insights on salaries, skills, geography, and CV-job matching.",
      problem:
        "The French Data job market lacks a unified, real-time view of demand trends, salary benchmarks, and skill requirements. Job seekers and analysts struggle to find structured, up-to-date market intelligence.",
      why:
        "By combining official API data with targeted web scraping, robust ETL pipelines, and interactive analytics dashboards, the platform transforms fragmented job postings into strategic market intelligence.",
      architecture:
        "Data flows from France Travail API and LinkedIn scraping (Playwright) into MongoDB, through a cleaning ETL pipeline, then to a FastAPI backend serving analytics to a Streamlit dashboard with CV matching, salary analysis, and geographic visualizations.",
    },
    architectureSteps: [
      { label: "API + Scraping", description: "France Travail API & LinkedIn Playwright" },
      { label: "MongoDB", description: "Document storage & indexing" },
      { label: "Cleaning Pipeline", description: "ETL normalization & enrichment" },
      { label: "Analytics API", description: "FastAPI REST endpoints" },
      { label: "Streamlit Dashboard", description: "Interactive visual analytics" },
    ],
    technologies: [
      { name: "MongoDB", iconId: "mongodb" },
      { name: "FastAPI", iconId: "fastapi" },
      { name: "Streamlit", iconId: "streamlit" },
      { name: "Playwright", iconId: "globe" },
      { name: "Pandas", iconId: "pandas" },
      { name: "Python", iconId: "python" },
      { name: "Plotly", iconId: "plotly" },
    ],
    features: [
      {
        title: "CV Matching System",
        description:
          "Semantic matching between candidate profiles and job requirements with relevance scoring.",
      },
      {
        title: "Salary Analytics",
        description:
          "Distribution analysis, benchmarks, and trend visualization across roles and regions.",
      },
      {
        title: "Skills Extraction",
        description:
          "NLP-powered extraction of required skills from job descriptions at scale.",
      },
      {
        title: "Geographic Analysis",
        description:
          "Interactive maps and charts showing job density and demand by French region.",
      },
      {
        title: "Real-time Scraping",
        description:
          "Playwright-driven LinkedIn scraping with robust scheduling and error recovery.",
      },
      {
        title: "Interactive Dashboard",
        description:
          "Streamlit UI with Plotly charts for exploratory market intelligence.",
      },
    ],
    gallery: [
      { src: "/projects/job-intelligent-dashboard.PNG", caption: "Streamlit analytics dashboard" },
      { src: "/projects/job-intelligent-inter.PNG", caption: "main interface" },
    ],
    metrics: [
      { label: "Jobs Collected", value: "15K", suffix: "+" },
      { label: "Data Sources", value: "2" },
      { label: "API Endpoints", value: "24", suffix: "+" },
      { label: "Technologies", value: "7" },
      { label: "Pipeline Stages", value: "5" },
      { label: "Regions Covered", value: "13", suffix: "+" },
    ],
    terminal: {
      filename: "etl_pipeline.py",
      lines: [
        { type: "comment", text: "# Job Intelligent — ETL Workflow" },
        { type: "plain", text: "" },
        { type: "keyword", text: "jobs = scrape_linkedin(role='Data Scientist')" },
        { type: "keyword", text: "jobs += fetch_france_travail(api_key=ENV_KEY)" },
        { type: "plain", text: "" },
        { type: "keyword", text: "cleaned = ETLPipeline(" },
        { type: "indent", text: "dedupe=True," },
        { type: "indent", text: "extract_skills=True," },
        { type: "indent", text: "normalize_salary=True" },
        { type: "keyword", text: ").run(jobs)" },
        { type: "plain", text: "" },
        { type: "keyword", text: "db.mongodb.insert_many(cleaned)" },
        { type: "plain", text: "" },
        { type: "string", text: ">>> 15,247 jobs indexed | 24 API routes live" },
      ],
    },
  },
  "homesmart-ai": {
    slug: "homesmart-ai",
    title: "HomeSmart AI – Plateforme Intelligente de Recherche de Logement",
    subtitle:
      "Plateforme IA pour agrégation, recommandation et automatisation de la recherche de logement en France.",
    badge: "AI Platform · Data Engineering",
    heroImage: "/projects/homesmart-ai.png",
    tags: ["FastAPI", "React", "PostgreSQL", "Elasticsearch", "Machine Learning", "Docker", "Airflow"],
    liveDemo: "#",
    github: siteLinks.github,
    accent: "cyan",
    overview: {
      goal:
        "Construire une plateforme intelligente centralisée qui agrège automatiquement les annonces immobilières, recommande les logements les plus adaptés via l'IA, prédit les chances d'acceptation par machine learning, génère des dossiers locataires automatisés et fournit un assistant IA pour conseils personnalisés.",
      problem:
        "Les chercheurs de logement en France font face à la fragmentation entre multiples plateformes (LeBonCoin, SeLoger, PAP), manquent d'insights sur leur éligibilité, doivent préparer manuellement des dossiers complexes, et ne disposent pas de conseils intelligents pour optimiser leur candidature.",
      why:
        "Une plateforme centralisée utilisant web scraping, ETL pipelines, machine learning pour la prédiction et LLM pour l'assistance transforme le processus fragmenté en expérience fluide et guidée, augmentant les chances de trouver un logement.",
      architecture:
        "Le système intègre des scrapers et APIs pour l'agrégation, des pipelines ETL Apache Airflow pour le nettoyage et la déduplication, un moteur de recommandation IA avec scoring de compatibilité, un modèle ML XGBoost prédisant les chances d'acceptation, un générateur PDF automatisé pour les dossiers, et un assistant conversationnel basé sur LLM — le tout exposé via une API FastAPI et une interface React avec Elasticsearch pour la recherche ultra-rapide.",
    },
    architectureSteps: [
      { label: "Web Scraping", description: "Agrégation multi-plateformes via Scrapy & Playwright" },
      { label: "ETL Pipeline", description: "Apache Airflow : nettoyage, normalisation, déduplication" },
      { label: "Elasticsearch", description: "Indexation haute-performance pour recherche rapide" },
      { label: "ML Engine", description: "Scoring IA + prédiction XGBoost des chances" },
      { label: "PDF Generation", description: "Création automatique de dossiers locataires" },
      { label: "LLM Assistant", description: "Conseils et stratégie via OpenAI API" },
    ],
    technologies: [
      { name: "FastAPI", iconId: "fastapi" },
      { name: "React", iconId: "react" },
      { name: "PostgreSQL", iconId: "postgresql" },
      { name: "Elasticsearch", iconId: "elasticsearch" },
      { name: "XGBoost", iconId: "brain" },
      { name: "Scrapy", iconId: "globe" },
      { name: "Docker", iconId: "docker" },
      { name: "Apache Airflow", iconId: "layers" },
      { name: "Redis", iconId: "redis" },
      { name: "Python", iconId: "python" },
    ],
    features: [
      {
        title: "Agrégation Multi-Plateforme",
        description:
          "Collecte automatique des annonces via APIs et web scraping (Scrapy, Playwright) depuis LeBonCoin, SeLoger, PAP et autres plateformes.",
      },
      {
        title: "Recommandation IA Personnalisée",
        description:
          "Analyse du profil utilisateur (budget, localisation, critères) et score de compatibilité pour chaque annonce avec classement intelligent.",
      },
      {
        title: "Prédiction ML des Chances d'Acceptation",
        description:
          "Modèle XGBoost entraîné sur revenus, garant, statut professionnel, niveau de concurrence pour estimer la probabilité d'acceptation de candidature.",
      },
      {
        title: "Génération Automatique de Dossier Locataire",
        description:
          "Compilation automatique des documents, création PDF professionnelle et génération de lettre de motivation par IA.",
      },
      {
        title: "Assistant IA Conversationnel",
        description:
          "LLM (OpenAI API) fournissant conseils personnalisés, réponses administratives, stratégie de candidature et génération de contenu.",
      },
      {
        title: "Moteur de Recherche Ultra-Rapide",
        description:
          "Elasticsearch pour indexation et recherche instantanée sur des milliers d'annonces avec filtres avancés et agrégations.",
      },
      {
        title: "Notifications Temps Réel",
        description:
          "Alertes email, push mobile et tableaux de bord web pour nouvelles annonces correspondant aux critères de l'utilisateur.",
      },
      {
        title: "Vérification Automatique des Aides",
        description:
          "Intégration avec API des aides au logement pour vérification instantanée de l'éligibilité utilisateur.",
      },
    ],
    gallery: [
      { src: "/projects/homesmart-ai-interface.png", caption: "Interface de recommandation des logements" },
      { src: "/projects/homesmart-ai-dashbord.png", caption: "Tableau de bord d'analyse des chances" },
      { src: "/projects/homesmart-ai-chatbot.png", caption: "Assistant IA pour conseils" },
    ],
    metrics: [
      { label: "Annonces Agrégées", value: "50K", suffix: "+" },
      { label: "Plateformes", value: "4", suffix: "+" },
      { label: "API Endpoints", value: "32", suffix: "+" },
      { label: "Temps Scraping", value: "15", suffix: " min" },
      { label: "Accuracy ML", value: "87", suffix: "%" },
      { label: "Régions Couvertes", value: "22", suffix: "+" },
    ],
    terminal: {
      filename: "homesmart_pipeline.py",
      lines: [
        { type: "comment", text: "# HomeSmart AI — Pipeline Complet" },
        { type: "plain", text: "" },
        { type: "keyword", text: "# 1. Agrégation multi-plateforme" },
        { type: "keyword", text: "listings = aggregate_listings(" },
        { type: "indent", text: "sources=['leboncoin', 'seloger', 'pap']," },
        { type: "indent", text: "regions=['IDF', 'Provence', 'Rhône-Alpes']" },
        { type: "keyword", text: ")" },
        { type: "plain", text: "" },
        { type: "keyword", text: "# 2. ETL & nettoyage Airflow" },
        { type: "keyword", text: "clean_listings = ETLPipeline.deduplicate(" },
        { type: "indent", text: "normalize_prices=True," },
        { type: "indent", text: "extract_features=True" },
        { type: "keyword", text: ")" },
        { type: "plain", text: "" },
        { type: "keyword", text: "# 3. Recommandation IA + prédiction ML" },
        { type: "keyword", text: "scored = recommend_listings(" },
        { type: "indent", text: "user_profile=user," },
        { type: "indent", text: "model='xgboost_acceptance_v2'," },
        { type: "indent", text: "top_k=20" },
        { type: "keyword", text: ")" },
        { type: "plain", text: "" },
        { type: "string", text: ">>> 52,847 annonces | 87% prédiction accuracy | Dossier PDF généré" },
      ],
    },
  },
}

export const projectSlugs = Object.keys(projectsData) as ProjectSlug[]

export function getProject(slug: string): ProjectData | undefined {
  return projectsData[slug as ProjectSlug]
}
