export const projectsData = [
  {
    slug: "nexus-ai-enterprise-automation",
    title: "Nexus AI — Autonomous Workflow Engine",
    category: "AI",
    industry: "Logistics & Supply Chain",
    shortDescription: "An intelligent multi-agent platform automating document processing, route optimization, and operational predictive analytics.",
    fullDescription: "OpusByte engineered Nexus AI for a global logistics conglomerate. The system combines proprietary LLM workflows with vector search and predictive models to process thousands of unstructured shipping manifests, bill of lading documents, and regulatory filings per hour.",
    featured: true,
    gridSpan: "col-span-12 lg:col-span-8",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    techStack: ["Python", "PyTorch", "FastAPI", "React", "Vector DB", "AWS SageMaker"],
    challenge: "The client was manually processing over 12,000 international shipping documents daily with a high error rate, leading to border delays and demurrage penalties.",
    solution: "We designed a multi-agent RAG pipeline integrated with custom computer vision models to parse complex tables, extract metadata, and run automated compliance checks.",
    architecture: "Microservices architecture hosted on AWS EKS, using Redis Pub/Sub for real-time updates and Qdrant for semantic document retrieval.",
    metrics: [
      { label: "Document Processing Time", val: "94% Faster" },
      { label: "Extraction Accuracy", val: "99.4%" },
      { label: "Annual Cost Savings", val: "$2.8M" }
    ]
  },
  {
    slug: "aeroflow-cloud-native-platform",
    title: "AeroFlow — Cloud-Native Industrial Telemetry",
    category: "Cloud",
    industry: "Aerospace & Engineering",
    shortDescription: "High-throughput IoT data ingestion and real-time visualization platform processing 500k telemetry events per second.",
    fullDescription: "OpusByte re-architected AeroFlow's telemetry monitoring platform from legacy monolithic servers into a modern Kubernetes cloud-native architecture.",
    featured: true,
    gridSpan: "col-span-12 lg:col-span-4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Go", "Kubernetes", "Kafka", "React", "TimescaleDB", "GCP"],
    challenge: "Legacy architecture suffered from frequent database locks and failed to scale during peak flight test runs.",
    solution: "Implemented an Apache Kafka event streaming backbone coupled with Go microservices and distributed time-series database clusters.",
    architecture: "GCP Cloud Infrastructure managed via Terraform, utilizing Envoy API Gateway and Grafana enterprise dashboards.",
    metrics: [
      { label: "Throughput", val: "500k events/sec" },
      { label: "System Latency", val: "<12ms" },
      { label: "Infrastructure Uptime", val: "99.999%" }
    ]
  },
  {
    slug: "omni-health-mobile-suite",
    title: "OmniHealth — Patient & Provider Mobile Ecosystem",
    category: "Mobile",
    industry: "Healthcare & MedTech",
    shortDescription: "HIPAA-compliant cross-platform mobile suite enabling remote patient monitoring, encrypted telehealth video, and AI vitals tracking.",
    fullDescription: "Designed and built for a network of 40+ medical centers, OmniHealth bridges the gap between remote patients and clinical care teams.",
    featured: false,
    gridSpan: "col-span-12 lg:col-span-6",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React Native", "Swift", "Kotlin", "WebRTC", "Node.js", "PostgreSQL"],
    challenge: "Patients lacked a unified portal to view diagnostic lab results, schedule appointments, and connect securely with doctors in real time.",
    solution: "Built a sleek cross-platform iOS & Android application featuring WebRTC end-to-end encrypted video, biometrics, and push notifications.",
    architecture: "HIPAA-compliant AWS Cloud environment utilizing AWS KMS encryption and WebRTC TURN/STUN servers.",
    metrics: [
      { label: "Active Mobile Users", val: "350,000+" },
      { label: "Telehealth Visits", val: "1.2M+" },
      { label: "App Store Rating", val: "4.9 / 5.0" }
    ]
  },
  {
    slug: "vortex-legacy-modernization",
    title: "Vortex Enterprise — Legacy Core Modernization",
    category: "Enterprise",
    industry: "Fintech & Banking Technology",
    shortDescription: "Zero-downtime Strangler Fig modernization converting a 15-year COBOL/Oracle monolith into cloud-native microservices.",
    fullDescription: "OpusByte executed a multi-phase legacy modernization for Vortex Enterprise, enabling modern REST/GraphQL APIs without disrupting core operations.",
    featured: false,
    gridSpan: "col-span-12 lg:col-span-6",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Java", "Spring Boot", "GraphQL", "PostgreSQL", "Docker", "AWS"],
    challenge: "The legacy monolith was brittle, preventing new digital products from launching and requiring expensive mainframes.",
    solution: "Engineered an incremental API abstraction layer and migrated core operational databases using zero-downtime CDC tools.",
    architecture: "Spring Cloud microservices running on AWS ECS with automated canary release strategies.",
    metrics: [
      { label: "Migration Downtime", val: "0 Minutes" },
      { label: "Feature Velocity", val: "4x Faster" },
      { label: "Infrastructure Savings", val: "52%" }
    ]
  },
  {
    slug: "synthwave-desktop-suite",
    title: "Synthwave Audio Studio — Pro Audio Desktop Software",
    category: "Software",
    industry: "Digital Media & Audio",
    shortDescription: "High-performance C++ & Electron cross-platform desktop suite for spatial audio editing and AI noise removal.",
    fullDescription: "A multi-threaded desktop software application created by OpusByte for sound engineers, combining low-level C++ DSP algorithms with a sleek modern UI.",
    featured: false,
    gridSpan: "col-span-12 lg:col-span-6",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    techStack: ["C++20", "Electron", "TypeScript", "WebAssembly", "SQLite"],
    challenge: "Audio engineers needed sub-millisecond audio previewing and offline hardware device integration across Windows and macOS.",
    solution: "Created a custom multi-threaded native C++ audio engine with a web-tech frontend running over low-latency IPC channels.",
    architecture: "Native C++ dynamic libraries coupled with Electron UI and custom WebGL waveform renderers.",
    metrics: [
      { label: "Audio Processing Latency", val: "<1.5ms" },
      { label: "Platform Support", val: "macOS & Windows" },
      { label: "Pro Audio Downloads", val: "180,000+" }
    ]
  },
  {
    slug: "lumina-saas-web-platform",
    title: "Lumina Workspace — Real-time Collaboration Engine",
    category: "Web",
    industry: "SaaS & Productivity",
    shortDescription: "A modern collaborative canvas web platform supporting multiplayer editing, live video, and dynamic document generation.",
    fullDescription: "OpusByte built Lumina Workspace from the ground up to redefine how distributed technical teams collaborate on complex system architectures.",
    featured: false,
    gridSpan: "col-span-12 lg:col-span-6",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Redis", "Canvas API"],
    challenge: "Existing diagramming tools lacked real-time multi-user cursor sync and crashed on large complex architectural trees.",
    solution: "Leveraged Conflict-free Replicated Data Types (CRDTs) with HTML5 Canvas acceleration for 60fps multiplayer rendering.",
    architecture: "Next.js frontend deployed to Vercel/Edge with Node.js WebSocket cluster backed by Redis adapter.",
    metrics: [
      { label: "Canvas Frame Rate", val: "60 FPS" },
      { label: "Concurrent Users/Board", val: "500+" },
      { label: "Monthly Active Teams", val: "45,000" }
    ]
  }
];

export const projectCategories = [
  "All",
  "Web",
  "Mobile",
  "Software",
  "AI",
  "Cloud",
  "Enterprise"
];
