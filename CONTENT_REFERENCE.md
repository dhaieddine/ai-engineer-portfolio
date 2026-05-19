# Service Pages - Content & Design Reference

## AI Engineering Service Page

### URL
```
/services/ai-engineering
```

### Color Scheme
- Primary: Purple (`#a855f7`)
- Accent: Violet
- Text: White with gray descriptions

### Hero Section
```
Title: AI Engineering
Subtitle: Building intelligent systems powered by deep learning and computer vision
CTA Buttons: [View Projects] [Contact Me]
```

### Overview
"AI Engineering combines cutting-edge deep learning techniques with practical system design to create intelligent solutions that solve real-world problems. My expertise spans hybrid architectures that merge CNNs with Vision Transformers, enabling sophisticated multi-task learning for specialized domains like medical image analysis.

I focus on building explainable, production-ready AI systems that not only achieve high accuracy but also provide insights into their decision-making processes. This approach ensures trustworthiness and adaptability in critical applications."

### Tech Stack Icons
1. PyTorch
2. TensorFlow
3. Python
4. OpenAI
5. Scikit-learn

### Core Topics (12 Pills)
- Deep Learning
- Computer Vision
- Vision Transformers
- CBAM Architecture
- Medical AI
- Explainable AI
- Attention Mechanisms
- Multi-task Learning
- Model Optimization
- EfficientNet
- CNN Architectures
- Transfer Learning

### Process (4 Steps)
1. **Problem Analysis** - Understanding the domain, data requirements, and performance metrics
2. **Model Architecture** - Designing hybrid CNN + Transformer systems with attention mechanisms
3. **Training & Optimization** - Multi-task learning with advanced optimization techniques
4. **Deployment & Inference** - Production-ready model deployment with explainability features

### Featured Projects
1. Medical AI System for Cancer Detection
   - Hybrid CNN + CBAM + Vision Transformer for MRI and X-Ray analysis
   - Tags: PyTorch, EfficientNet, Vision Transformer

2. AI-Powered Analytics Platform
   - Real-time intelligent data analysis with deep learning pipelines
   - Tags: TensorFlow, Python, Data Processing

### CTA
"Ready to Build Something Intelligent?"
"Let's collaborate on your next AI engineering project"
Buttons: [View All Projects] [Get in Touch]

---

## Data Science Service Page

### URL
```
/services/data-science
```

### Color Scheme
- Primary: Cyan (`#06b6d4`)
- Accent: Blue
- Text: White with gray descriptions

### Hero Section
```
Title: Data Science
Subtitle: Transforming raw data into actionable insights
CTA Buttons: [View Projects] [Contact Me]
```

### Overview
"Data Science bridges the gap between raw data and actionable business intelligence. By combining statistical rigor with machine learning expertise, I transform complex datasets into meaningful insights that drive informed decision-making.

My approach emphasizes both technical accuracy and clear communication. I specialize in exploratory data analysis, feature engineering, predictive modeling, and compelling visualizations that tell the data's story to stakeholders at all levels."

### Tech Stack Icons
1. Python
2. Pandas
3. NumPy
4. Scikit-learn
5. Power BI

### Core Topics (12 Pills)
- Data Analysis
- Statistical Modeling
- Data Visualization
- Feature Engineering
- Predictive Analytics
- Machine Learning Workflows
- A/B Testing
- Data Mining
- Hypothesis Testing
- Time Series Analysis
- Cluster Analysis
- Regression Modeling

### Process (4 Steps)
1. **Data Exploration** - Understanding data distributions, patterns, and identifying anomalies
2. **Feature Engineering** - Creating meaningful features that enhance model performance
3. **Statistical Modeling** - Applying advanced statistical techniques to extract insights
4. **Visualization & Insights** - Communicating findings through compelling data visualizations

### Featured Projects
1. Data Job Market Intelligence Platform
   - Comprehensive analysis of Data job market trends in France using statistical modeling
   - Tags: Python, Pandas, Data Analysis

2. Predictive Analytics System
   - Advanced forecasting and predictive modeling for business intelligence
   - Tags: Scikit-learn, Statistical Modeling, Power BI

### CTA
"Ready to Unlock Data Insights?"
"Let's work together to transform your data into strategic advantage"
Buttons: [View All Projects] [Get in Touch]

---

## Data Engineering Service Page

### URL
```
/services/data-engineering
```

### Color Scheme
- Primary: Pink (`#ec4899`)
- Accent: Rose
- Text: White with gray descriptions

### Hero Section
```
Title: Data Engineering
Subtitle: Designing scalable pipelines and modern data infrastructures
CTA Buttons: [View Projects] [Contact Me]
```

### Overview
"Data Engineering is the backbone of modern data-driven organizations. I design and build scalable, resilient data pipelines that reliably move, transform, and store data at any scale. My expertise covers the full stack: from data ingestion and ETL/ELT processes to distributed processing and cloud-ready architectures.

I focus on creating systems that are not only performant but also maintainable and observable. Proper orchestration, monitoring, and error handling ensure that data flows smoothly through your infrastructure, enabling real-time analytics and insights."

### Tech Stack Icons
1. MongoDB
2. PostgreSQL
3. FastAPI
4. Airflow
5. Apache Spark

### Core Topics (12 Pills)
- ETL/ELT
- Data Pipelines
- API Design
- Orchestration
- Distributed Processing
- Real-time Ingestion
- Data Quality
- Monitoring & Observability
- Schema Management
- Cloud Architecture
- Data Warehousing
- Scalable Systems

### Process (4 Steps)
1. **Requirements Analysis** - Understanding data sources, volume, velocity, and infrastructure requirements
2. **Architecture Design** - Building scalable, cloud-ready data architectures with proper orchestration
3. **Pipeline Development** - Creating robust ETL/ELT pipelines with error handling and monitoring
4. **Optimization & Scaling** - Ensuring performance at scale with distributed processing and caching

### Featured Projects
1. Data Job Market Intelligence Pipeline
   - End-to-end ETL system for job data collection, enrichment, and storage using MongoDB and FastAPI
   - Tags: MongoDB, FastAPI, ETL

2. Real-time Analytics Platform
   - Scalable data pipeline for processing and analyzing streaming data with Apache Spark
   - Tags: Apache Spark, PostgreSQL, Real-time Ingestion

### CTA
"Ready to Build Scalable Data Systems?"
"Let's design and implement the data infrastructure your business needs"
Buttons: [View All Projects] [Get in Touch]

---

## Common Page Elements

### Navigation
All pages have links to home sections:
- `/#projects` - Featured Projects section
- `/#contact` - Contact section

### Animations (All Pages)
- Hero title: fade-up + scale animation
- Overview: fade-up on scroll
- Tech stack: stagger animation + hover lift (scale 1.05)
- Topics: stagger animation + hover scale
- Process cards: stagger animation + hover lift
- Projects: stagger animation + hover lift
- CTA: fade-up on scroll

### Responsive Breakpoints
- Mobile: Full width (px-4 padding)
- Tablet (md:): 2 columns for process/projects
- Desktop (lg:): 3-5 columns for tech stack

### Accessibility
- Proper heading hierarchy
- Semantic HTML structure
- Sufficient color contrast
- Readable font sizes
- Touch-friendly interactive elements

---

## Design System Consistency

### Typography
- Hero Title: `text-5xl md:text-7xl font-bold`
- Section Title: `text-3xl md:text-4xl font-bold`
- Card Title: `text-xl font-semibold`
- Body Text: `text-lg text-gray-300`
- Small Text: `text-sm`

### Spacing
- Section Padding: `py-20 px-4`
- Card Padding: `p-8 border`
- Grid Gap: `gap-6` (large), `gap-3` (pills)
- Max Width: `max-w-6xl` (content), `max-w-4xl` (overview)

### Rounded Corners
- Cards: `rounded-2xl`
- Large Cards: `rounded-3xl`
- Icons: `rounded-3xl`
- Pills: `rounded-lg`
- Buttons: `rounded-xl`

### Borders & Glass
- Card Border: `border border-{color}-500/15`
- Hover Border: `border-{color}-500/40`
- Glass Background: `glass rounded-2xl p-8`
- Backdrop: `backdrop-blur-xl`

### Colors by Service
- AI Engineering: `purple-500/20` background, `purple-400` text, `purple-300` accents
- Data Science: `cyan-500/20` background, `cyan-400` text, `cyan-300` accents
- Data Engineering: `pink-500/20` background, `pink-400` text, `pink-300` accents

---

## Implementation Notes

### Why This Design?
✅ Matches existing portfolio aesthetic
✅ Professional and modern
✅ Premium developer portfolio feel
✅ Consistent animations throughout
✅ Accessible and responsive
✅ Performance optimized

### What's Included
✅ Production-ready code
✅ No console warnings
✅ Type-safe TypeScript
✅ Proper use of Framer Motion
✅ Semantic HTML
✅ Clean architecture

### Testing Recommended
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (375px - 480px)
- Navigation flow
- Link functionality
- Animation smoothness

---

**All content and styling is production-ready. Just move files and deploy! 🚀**
