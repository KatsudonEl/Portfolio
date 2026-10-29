export const PORTFOLIO_CONFIG = {
  creatorName: "John Dave M. Justo",
  alias: "JD",
  role: "AI Video & Content Creator",
  email: "jdjusto.creatives@gmail.com",
  linkedin: "https://www.linkedin.com/in/jdva-dataanalyticsandsqa/",
  location: "Las Piñas City, Philippines",
  currentCompany: "GoPrime Technology Corporation",
  thesisAward: "Best in Thesis Award 2025 — DOCCHAIN",

  // Skills tags
  skills: [
    "AI Video Creation",
    "UGC Ads",
    "Cinematic Ads",
    "Data Analysis",
    "UI/UX Design",
    "SQA Testing",
    "Power BI",
    "Looker Studio",
    "Excel Power Query",
    "Google Apps Script",
    "Meta Business Suite",
    "Figma",
    "Prompt Engineering",
    "Storyboarding",
    "Pacing & Motion"
  ],

  // 8 AI Tools
  aiTools: [
    {
      id: "grok",
      name: "Grok (xAI)",
      tagline: "Real-time insight & prompt expansion",
      color: "#FFFFFF",
      iconPath: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      tagline: "Hyper-realistic voiceover & audio stems",
      color: "#06B6D4",
      iconPath: "M8.5 4h2v16h-2V4zm5 0h2v16h-2V4z"
    },
    {
      id: "gemini",
      name: "Gemini",
      tagline: "Multimodal conceptualization & analysis",
      color: "#3B82F6",
      iconPath: "M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
    },
    {
      id: "chatgpt",
      name: "ChatGPT",
      tagline: "High-retention scripting & narrative flow",
      color: "#10A37F",
      iconPath: "M20.5 9.5a5.5 5.5 0 0 0-4.8-4.8 5.5 5.5 0 0 0-9.4 1.3 5.5 5.5 0 0 0-4.1 4.5 5.5 5.5 0 0 0 1.8 6.2 5.5 5.5 0 0 0 4.8 4.8 5.5 5.5 0 0 0 9.4-1.3 5.5 5.5 0 0 0 4.1-4.5 5.5 5.5 0 0 0-1.8-6.2zM12 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
    },
    {
      id: "veo",
      name: "Google Labs (Flow / Veo)",
      tagline: "Cinematic photorealistic 4K generation",
      color: "#8B5CF6",
      iconPath: "M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.8l5.5 3.4-5.5 3.4-5.5-3.4L12 4.8zM6 9.4l5 3.1v6.1l-5-3.1V9.4zm12 6.1l-5 3.1v-6.1l5-3.1v6.1z"
    },
    {
      id: "whisk",
      name: "Google Whisk",
      tagline: "Rapid multi-image composition & styling",
      color: "#F59E0B",
      iconPath: "M12 3a9 9 0 0 0-9 9c0 3.2 1.7 6 4.2 7.5l.8-1.5C5.8 16.8 4.5 14.5 4.5 12A7.5 7.5 0 1 1 12 19.5c-.8 0-1.5-.1-2.2-.4l-.6 1.4c.9.3 1.8.5 2.8.5 5 0 9-4 9-9s-4-9-9-9zm-1 5h2v6h-2V8zm0 8h2v2h-2v-2z"
    },
    {
      id: "antigravity",
      name: "Google Antigravity",
      tagline: "Dynamic motion dynamics & 3D flow",
      color: "#EC4899",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-5l4.5 2.5-4.5 2.5zm0-7.5V5h-2v4h2z"
    },
    {
      id: "claude",
      name: "Claude AI",
      tagline: "Nuanced brand voice & psychological hooks",
      color: "#D97706",
      iconPath: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm-1.5 3.5v4l3.5-2-3.5-2z"
    }
  ],

  // Real Video Projects from Portfolio Videos folder
  categories: [
    { id: "all", name: "All Videos", count: 6 },
    { id: "commercials", name: "Commercial Ads", count: 2 },
    { id: "ugc", name: "UGC & Direct Response", count: 2 },
    { id: "promo", name: "Promo & Product Demos", count: 2 }
  ],

  projects: [
    // 01 — BMW GT3 EVO_ADS.mp4
    {
      id: "bmw-gt3-evo-ads",
      fileName: "BMW GT3 EVO_ADS.mp4",
      categoryId: "commercials",
      categoryName: "Cinematic Commercials",
      title: "BMW M4 GT3 EVO — Cinematic Hypercar Ad",
      format: "9:16 Vertical Reel",
      resolution: "720 × 1280 (HD)",
      fileSize: "5.34 MB",
      aspectRatio: "aspect-[9/16]",
      orientation: "vertical",
      videoUrl: "/videos/BMW%20GT3%20EVO_ADS.mp4",
      description: "High-octane commercial ad featuring the BMW M4 GT3 EVO. Dynamic camera sweeps, track surface reflections, aggressive exhaust sound staging, and aerodynamic motorsport pacing engineered for maximum thumbstop rate on Instagram Reels & TikTok.",
      hook: "Instant ignition exhaust roar paired with a macro aerodynamic carbon fiber sweep within the first 2.5 seconds.",
      clientIndustry: "Automotive & Luxury Motorsport",
      bgGradient: "from-blue-950/70 via-neutral-900 to-black",
      tools: ["veo", "elevenlabs", "antigravity", "chatgpt"],
      tags: ["Automotive", "Commercial Ad", "High-Retention", "9:16 Vertical"]
    },

    // 02 — GymShark_FitnessAds.mp4
    {
      id: "gymshark-fitness-ads",
      fileName: "GymShark_FitnessAds.mp4",
      categoryId: "ugc",
      categoryName: "UGC & Direct Response",
      title: "Gymshark — High-Energy Fitness Campaign Ad",
      format: "9:16 Vertical Reel",
      resolution: "720 × 1280 (HD)",
      fileSize: "4.62 MB",
      aspectRatio: "aspect-[9/16]",
      orientation: "vertical",
      videoUrl: "/videos/GymShark_FitnessAds.mp4",
      description: "Adrenaline-fueled gym performance ad designed for Gymshark activewear. Features explosive lift repetitions, sweat droplet macro-optics, synchronized bass impact drops, and motivational kinetic typography to maximize direct-to-cart conversions.",
      hook: "Heavy barbell deadlift drop synced to sub-bass impact with aggressive motivational pacing.",
      clientIndustry: "Fitness Apparel & Activewear",
      bgGradient: "from-zinc-900/80 via-neutral-900 to-black",
      tools: ["veo", "elevenlabs", "whisk", "chatgpt"],
      tags: ["Fitness", "Direct Response", "Bass-Synced", "UGC Creative"]
    },

    // 03 — Saas_PromoVideo.mp4
    {
      id: "saas-promo-video",
      fileName: "Saas_PromoVideo.mp4",
      categoryId: "promo",
      categoryName: "Promo & Product Demos",
      title: "SaaS Workflow Platform — Product Demo & Promo",
      format: "16:9 4K Widescreen",
      resolution: "1280 × 720 (HD)",
      fileSize: "3.66 MB",
      aspectRatio: "aspect-video",
      orientation: "landscape",
      videoUrl: "/videos/Saas_PromoVideo.mp4",
      description: "Modern SaaS software promotional showcase highlighting seamless real-time dashboards, collaborative team boards, automated analytics telemetry, and sleek dark-mode UI interactions designed for B2B buyer retention.",
      hook: "Split-screen problem-to-solution visual resolving manual spreadsheet chaos into one-click AI automation.",
      clientIndustry: "B2B Software & Cloud Productivity",
      bgGradient: "from-indigo-950/70 via-slate-900 to-black",
      tools: ["gemini", "claude", "antigravity", "chatgpt"],
      tags: ["B2B SaaS", "Product Demo", "16:9 Cinema", "UI/UX"]
    },

    // 04 — Skincare_ComercialAds.mp4
    {
      id: "skincare-comercial-ads",
      fileName: "Skincare_ComercialAds.mp4",
      categoryId: "commercials",
      categoryName: "Cinematic Commercials",
      title: "Luxe Botanical Skincare — Commercial Ad",
      format: "9:16 Vertical Reel",
      resolution: "720 × 1280 (HD)",
      fileSize: "2.92 MB",
      aspectRatio: "aspect-[9/16]",
      orientation: "vertical",
      videoUrl: "/videos/Skincare_ComercialAds.mp4",
      description: "Studio-grade commercial ad highlighting hydration texture, botanical emulsion droplets, soft studio rim lighting, and luminous skin finish. Formatted for high thumbstop rate on Meta Ads & TikTok.",
      hook: "Slow-motion dewdrop suspension reflecting organic plant extracts with gentle ASMR water acoustics.",
      clientIndustry: "Beauty & Botanical Skincare",
      bgGradient: "from-emerald-950/70 via-neutral-900 to-black",
      tools: ["veo", "whisk", "elevenlabs", "claude"],
      tags: ["Beauty & Wellness", "Commercial Ad", "Slow-Motion", "ASMR Audio"]
    },

    // 05 — Skincare_UGC_BrandDeals.mp4
    {
      id: "skincare-ugc-brand-deals",
      fileName: "Skincare_UGC_BrandDeals.mp4",
      categoryId: "ugc",
      categoryName: "UGC & Direct Response",
      title: "Skincare Glow Routine — UGC Brand Deals & Review",
      format: "9:16 Vertical Reel",
      resolution: "720 × 1280 (HD)",
      fileSize: "16.15 MB",
      aspectRatio: "aspect-[9/16]",
      orientation: "vertical",
      videoUrl: "/videos/Skincare_UGC_BrandDeals.mp4",
      description: "Ultra-authentic creator UGC brand sponsorship ad. Replicates organic creator habits with dynamic captions, unboxing, authentic micro-pauses, barrier repair before/after proof, and direct discount code CTA.",
      hook: "'Stop buying expensive moisturizers until you know this secret barrier-repair routine that dermatologists love.'",
      clientIndustry: "E-Commerce Beauty & Influencer Deals",
      bgGradient: "from-rose-950/70 via-neutral-900 to-black",
      tools: ["chatgpt", "elevenlabs", "whisk", "grok"],
      tags: ["UGC Creator", "Brand Deal", "Social Proof", "9:16 Vertical"]
    },

    // 06 — Sunglasses_PormotionalAds.mp4
    {
      id: "sunglasses-promotional-ads",
      fileName: "Sunglasses_PormotionalAds.mp4",
      categoryId: "promo",
      categoryName: "Promo & Product Demos",
      title: "Avant-Garde Eyewear — Sunglasses Promotional Ad",
      format: "9:16 Vertical Reel",
      resolution: "720 × 1280 (HD)",
      fileSize: "3.21 MB",
      aspectRatio: "aspect-[9/16]",
      orientation: "vertical",
      videoUrl: "/videos/Sunglasses_PormotionalAds.mp4",
      description: "Stylized lifestyle promotional ad for premium designer sunglasses. Featuring golden-hour lens reflections, sleek frame silhouettes, high-fashion color grading, and trend-aligned audio pacing for luxury shoppers.",
      hook: "Flash-tilt golden hour lens glare transition with upbeat rhythm-locked beat switch.",
      clientIndustry: "Fashion Accessories & Eyewear",
      bgGradient: "from-amber-950/70 via-neutral-900 to-black",
      tools: ["veo", "antigravity", "elevenlabs", "claude"],
      tags: ["Fashion & Eyewear", "Promotional Ad", "Golden Hour", "Rhythm Sync"]
    }
  ],

  // Experience timeline
  experience: [
    {
      role: "Lead Data Analyst (Intern)",
      company: "GoPrime Technology Corporation, Philippines",
      period: "2025 — Present",
      bullets: [
        "Reported weekly high-level performance insights and campaign telemetry directly to Marketing Leadership.",
        "Engineered automated data hygiene workflows using Excel Power Query and Google Apps Script.",
        "Designed real-time executive dashboards in Power BI and Looker Studio.",
        "Tracked ad creative ROAS, CTR, and audience retention metrics using Meta Business Suite.",
        "Integrated AI-assisted script generation to optimize analytics turnaround speed."
      ]
    },
    {
      role: "UI/UX Designer (Intern)",
      company: "GoPrime Technology Corporation, Philippines",
      period: "2025 — Present",
      bullets: [
        "Redesigned customer-facing websites and internal enterprise ticketing portals.",
        "Conducted qualitative user discovery, persona mapping, and heuristic usability audits.",
        "Created scalable Figma component libraries, ensuring seamless developer handoff."
      ]
    }
  ],

  // Education timeline
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "STI Las Piñas Campus, Philippines",
      period: "2022 — 2026 (Expected)",
      bullets: [
        "Capstone Thesis: DOCCHAIN — Blockchain-Supported Digitized Transcript of Records Managing System.",
        "Honored with the Best in Thesis Award (2025).",
        "Led system architecture, UI/UX design execution, and data privacy & security compliance."
      ]
    },
    {
      degree: "Senior High School Graduate",
      institution: "University of Perpetual Help System DALTA, Las Piñas",
      period: "2020 — 2022",
      bullets: [
        "Academic foundation in STEM, multimedia technologies, algorithmic thinking, and collaborative development."
      ]
    }
  ],

  // Certifications
  certifications: [
    {
      title: "Software Quality Assurance Engineer Seminar",
      issuer: "SQA Standards, Test Cases & Validation (2025)",
      icon: "🛡️"
    },
    {
      title: "Google Business Suites & Freelancing Tools",
      issuer: "Cloud Collaboration & Enterprise Workflows (2025)",
      icon: "📊"
    },
    {
      title: "Best in Thesis Award 2025",
      issuer: "DOCCHAIN Blockchain System • STI Las Piñas (2025)",
      icon: "🏆"
    }
  ],

  // 3 Process steps
  process: [
    {
      step: "01",
      badge: "Strategy",
      title: "Concept & Script",
      description: "Deep research into audience demographics, customer objections, and competitor benchmarks. We craft high-converting 3-second psychological hooks, structured video scripts, and shot lists.",
      deliverable: "Script, 3 Hook Variations, Storyboard Matrix"
    },
    {
      step: "02",
      badge: "Generation",
      title: "Generate & Create",
      description: "Deploying multi-model AI pipelines: ultra-photorealistic scenes via Google Veo / Flow / Whisk, emotive studio voiceovers via ElevenLabs, and custom prompt assets engineered with Claude and GPT-4o.",
      deliverable: "Raw 4K Video Stems, Custom Voiceover & SFX"
    },
    {
      step: "03",
      badge: "Optimization",
      title: "Edit, Test & Optimize",
      description: "Polishing kinetic typography, sound design, and color grading. Once live, we review performance telemetry (CTR, watch time, thumbstop rate) to iterate hook variations and scale winners.",
      deliverable: "Final 4K Master Exports (9:16 & 16:9) + Test Batches"
    }
  ],

  // Services
  services: [
    {
      icon: "⚡",
      name: "UGC & Direct-Response Ads",
      description: "High-converting UGC ads featuring realistic AI personas and native social environments that bypass banner blindness and drive clicks.",
      deliverables: ["3-second hook testing packages", "Problem → Solution narrative arcs", "Native TikTok/Reels captions & pacing"]
    },
    {
      icon: "🎬",
      name: "Cinematic AI Commercials",
      description: "Studio-grade 4K cinematic commercials with hyper-realistic lighting, camera sweeps, and physics that rival traditional production shoots.",
      deliverables: ["Luxury & tech launch films", "Dynamic drone & tracking shots", "Immersive spatial sound design"]
    },
    {
      icon: "📱",
      name: "Social Media Ad Creatives",
      description: "High-retention social creatives engineered for TikTok, Instagram Reels, and YouTube Shorts leveraging viral soundbites and trends.",
      deliverables: ["POV vignettes & comedic skits", "Curated top-3 listicle formats", "Multi-aspect ratio outputs (9:16, 1:1, 16:9)"]
    },
    {
      icon: "📖",
      name: "Storytelling & Brand Narratives",
      description: "Deeply emotional, human-centric origin stories and documentaries designed to forge long-lasting brand affinity and trust.",
      deliverables: ["Founder origin story reels", "Emotional customer transformation journeys", "High-retention voiceover writing"]
    },
    {
      icon: "🏢",
      name: "Specialized Industry Visuals",
      description: "Tailored video solutions for high-ticket industries: luxury real estate architectural tours, dynamic fitness supplements, and SaaS application walkthroughs.",
      deliverables: ["Real estate 3D architectural flythroughs", "SaaS animated UI feature reels", "Fitness & supplement hype promos"]
    },
    {
      icon: "📊",
      name: "Data Analytics & UI/UX Audits",
      description: "Leverage my Computer Science & Data Analytics background to audit your creatives, configure Power BI / Meta dashboards, and optimize landing page UI.",
      deliverables: ["Creative performance dashboards", "Landing page conversion rate audit", "SQA cross-device usability testing"]
    }
  ],

  // FAQs
  faqs: [
    {
      q: "What services do you provide?",
      a: "I provide end-to-end AI video creation, including UGC Direct-Response Ads, cinematic product commercials, viral social creatives (TikTok/Reels/Shorts), narrative brand storytelling, and high-ticket industry showcases (Real Estate, Fitness, SaaS). Because of my background in Data Analytics and UI/UX, I also assist with performance tracking and landing page conversion audits."
    },
    {
      q: "How do I start working with you?",
      a: "Simply click the 'Get Started Now' or 'Send Email' button to send an inquiry with your project goals, preferred timeline, and reference inspiration. I will respond within 24 hours to schedule an onboarding discussion or review your creative brief."
    },
    {
      q: "What AI tools do you use?",
      a: "My core creative stack includes Google Labs (Veo, Flow), Google Whisk, Google Antigravity, ElevenLabs for voice and audio design, ChatGPT (GPT-4o), Claude 3.5 Sonnet, Gemini Pro, and Grok (xAI). For editing, data, and design, I utilize Figma, Premiere Pro/CapCut, Power BI, Looker Studio, and Meta Business Suite."
    },
    {
      q: "How long does a project take?",
      a: "A typical UGC ad test batch or single commercial takes 3 to 7 business days from finalized script to final render delivery. Expedited 48-hour turnarounds are available upon request for time-sensitive product launches."
    },
    {
      q: "Do you provide revisions?",
      a: "Yes! Every standard project includes 2 rounds of iterative revisions covering pacing, caption styles, voiceover inflection, visual color grading, and alternate hook variations."
    },
    {
      q: "What industries do you work with?",
      a: "I frequently partner with E-Commerce (Beauty, Wellness, Fashion), Consumer Tech & Gadgets, SaaS & Mobile Apps, Real Estate developers, and creators seeking high-production storytelling."
    },
    {
      q: "What is your pricing structure?",
      a: "I offer both project-based fixed packages (e.g. 3-hook UGC testing batches, single cinematic commercials) and monthly creator-in-residence retainer models for brands scaling continuous ad tests. Reach out via email for a custom proposal tailored to your volume."
    },
    {
      q: "Can you redo my existing ads?",
      a: "Absolutely. I can audit your current underperforming ad creative, review your Meta/TikTok analytics, identify drop-off moments, and reconstruct higher-converting hooks and refreshed visual storylines."
    }
  ]
};
