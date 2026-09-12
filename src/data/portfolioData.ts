import { PortfolioData, Project, Testimonial, ExperienceItem } from '../types';

export const initialPortfolioData: PortfolioData = {
  name: "Shatma Aaliya",
  title: "Fashion Designer · Indus Design School '27",
  city: "Ahmedabad & Mumbai",
  tagline: "Femme Fatale Silhouettes & Archival Indian Craftsmanship",
  heroHighlight: "CALCULATED SEDUCTION",
  heroSecondary: "Graduating fashion design student at Indus Design School (Class of 2023–2027). Interrogating the razor-sharp tension between seductive femme fatale architecture, subversive menswear, and the generational alchemy of Neelgar couture.",
  availability: "CLASS OF 2023–2027 · ACCEPTING COMMISSIONS",
  bioHeadline: "An editorial sensibility forged in dark couture, architectural corsetry, and subverted heritage textiles.",
  bioParagraphs: [
    "Shatma Aaliya is a graduating fashion designer from Indus Design School (Class of 2023–2027). Her design philosophy embodies the FEMME FATALE: seductive, dark, confident, glamorous, and editorial — the visual language of a woman who is elegant, dangerous, and completely in control.",
    "Rooted in rigorous artisanal investigation through her work with the Neelgar couture atelier, Shatma deconstructs traditional Indian handlooms, zardozi metallurgies, and fluid drapes, weaponizing them into razor-sharp silhouettes and tailored menswear.",
    "Her collections reject decorative sentimentality in favor of psychological power. Every garment is engineered as an architectural instrument of calculated seduction, precision cutting, and uncompromising discipline."
  ],
  neelgarHighlight: {
    role: "Fashion Design & Haute Couture Apprentice",
    period: "2024 — Present",
    tagline: "The Neelgar Archive & Couture Textile Modernity",
    summary: "Collaborated directly with master drapers and artisans at Neelgar, co-developing seasonal couture silhouettes, researching archival zardozi techniques, and styling international editorial lookbooks.",
    achievements: [
      "Assisted in cutting and structural prototyping for 4 seasonal high-fashion presentations across Mumbai and Paris fashion circles.",
      "Researched and revived 18th-century Varanasi metallic handloom weaves for Neelgar's limited couture capsule 'Nocturne'.",
      "Drafted technical patterns for structured boned corsets paired with heavy unspun mulberry silks.",
      "Co-curated the Neelgar archival retrospective monograph documenting two decades of artisan-draped silhouettes."
    ]
  },
  pullQuote: {
    quote: "Design is never an embellishment; it is an act of calculated seduction and uncompromising discipline.",
    author: "Shatma Aaliya",
    context: "Indus Design School Degree Manifesto, Class of 2023–2027"
  },
  contactEmail: "shaimaaaliya840@gmail.com",
  whatsappNumber: "8404916721",
  callingNumber: "6351283152",
  socials: {
    instagram: "https://www.instagram.com/shaimaaaliya/",
    arena: "are.na/shatma-aaliya",
    linkedin: "linkedin.com/in/shatma-aaliya",
    substack: "shatma.substack.com"
  }
};

export const initialProjects: Project[] = [
  {
    id: "neelgar-nocturne",
    number: "N°01",
    title: "Neelgar: Nocturne Couture",
    subtitle: "High Fashion Archive & Handloom Silk Corsetry",
    client: "Neelgar Atelier",
    category: "Neelgar Archives",
    year: "2025",
    role: "Apprentice Designer, Archival Textile Research, Pattern Drafting",
    heroImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "A haunting editorial capsule exploring the tension between structured corset architecture and fluid midnight silks for Neelgar's winter salon.",
    challenge: "Reconciling Neelgar's traditional hand-embroidery legacy with a dangerous, razor-sharp femme fatale silhouette suitable for the modern global salon.",
    concept: "We constructed 'Nocturne' around chiaroscuro lighting, heavy zardozi wirework, and high-tensile boned bodices covered in pure mulberry silk.",
    outcome: "Featured in editorial portfolios across Vogue India and international design reviews; capsule praised by jury for uncompromising technical craftsmanship.",
    tags: ["Neelgar Atelier", "Couture Corsetry", "Zardozi", "Silk Architecture"],
    metrics: [
      { label: "Artisanal Hours", value: "320+ Hours" },
      { label: "Handloom Weft", value: "Varanasi Silk" },
      { label: "Atelier Presentation", value: "Neelgar Salon" }
    ]
  },
  {
    id: "lethal-silhouette-indus",
    number: "N°02",
    title: "Lethal Grace: Indus '27",
    subtitle: "Graduating Runway Collection · Architectural Femme Fatale",
    client: "Indus Design School",
    category: "Femme Fatale",
    year: "2026",
    role: "Lead Fashion Designer, Silhouette Engineering",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "The signature graduating capsule from Indus Design School: razor-cut lapels, floor-sweeping noir cloaks, and sculpted obsidian bodices.",
    challenge: "Designing an unapologetic femme fatale wardrobe that communicates authority, mystery, and physical dominance without relying on costume tropes.",
    concept: "Using mathematical tailoring, heavy virgin wool, and structured leather breastplates overlaid on transparent black organza.",
    outcome: "Selected as the Headline Showcase for Indus Design School Graduating Show 2027; recipient of the Avant-Garde Patternmaking Honor.",
    tags: ["Indus 2027", "Femme Fatale", "Sculptural Tailoring", "Noir Silhouette"],
    metrics: [
      { label: "Academic Honor", value: "Best Patternmaking" },
      { label: "Ensembles Built", value: "8 Complete Looks" },
      { label: "Runway Feature", value: "Indus Gala '27" }
    ]
  },
  {
    id: "subversive-menswear",
    number: "N°03",
    title: "Obsidian Drapes: Menswear",
    subtitle: "Deconstructed Tailoring & Fluid Asymmetry",
    client: "Shatma Studio & Indus Laboratory",
    category: "Menswear",
    year: "2025",
    role: "Concept, Tailoring, Drape Choreography",
    heroImage: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "Subversive masculine tailoring fusing traditional sherwani chest lines with dropped armholes, raw-edged pleating, and asymmetric closures.",
    challenge: "Evolving conventional South Asian menswear into a dark, sensual, and architectural form language that rejects rigid conservative boxes.",
    concept: "Merging British bespoke suit canvasing with asymmetric bias-cut panels in charcoal khadi wool and raw tusser silk.",
    outcome: "Exhibited at the Ahmedabad Contemporary Design Biennale; acquired by private collectors and editorial stylists.",
    tags: ["Menswear", "Deconstruction", "Bespoke Tailoring", "Khadi Wool"],
    metrics: [
      { label: "Garment Types", value: "Tailored Outerwear" },
      { label: "Textile Sourcing", value: "Gujarat Khadi" },
      { label: "Biennale Selection", value: "Ahmedabad '25" }
    ]
  },
  {
    id: "indian-textile-modernity",
    number: "N°04",
    title: "Heritage Metallurgy: Zardozi & Silk",
    subtitle: "Indian Textile Craftsmanship & High-Tension Wefts",
    client: "Indus Craft Research & Neelgar",
    category: "Indian Textiles",
    year: "2025",
    role: "Textile Artisan Collaboration, Surface Design",
    heroImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "Re-imagining sacred zardozi gold-wire embroidery as an aggressive, biomechanical spine down structured velvet trench coats.",
    challenge: "Elevating heirloom embroidery beyond bridal wear, transforming it into an armor of psychological strength.",
    concept: "Using oxidized gunmetal and dark silver bullion thread embroidered directly into heavy unwashed raw silk.",
    outcome: "Documented in the Indus Research Journal of Contemporary Textiles; exhibited in collaboration with master craftsmen.",
    tags: ["Indian Textiles", "Zardozi Metallurgy", "Handloom Craft", "Velvet Armor"],
    metrics: [
      { label: "Craft Guild", value: "Old Delhi Masters" },
      { label: "Technique", value: "Oxidized Zardozi" },
      { label: "Research Archive", value: "Indus Design Vol. 4" }
    ]
  },
  {
    id: "neelgar-archival-thread",
    number: "N°05",
    title: "Neelgar: Archival Tome",
    subtitle: "Couture Retrospective Monograph & Exhibition Stills",
    client: "Neelgar Foundation",
    category: "Neelgar Archives",
    year: "2024",
    role: "Archival Research, Curation, Editorial Styling",
    heroImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "A comprehensive archival study documenting two decades of Neelgar's master drapes, indigo resist dyeing, and silhouette experiments.",
    challenge: "Synthesizing generational artisan knowledge into a sleek editorial tome that resonates with contemporary fashion critics.",
    concept: "Structured into five chromatic stages of night: Twilight, Obsidian, Eclipse, Zardozi Gold, and Ash.",
    outcome: "Archived in the Indus Design School Library and presented to international fashion luminaries.",
    tags: ["Neelgar Archive", "Editorial Tome", "Indigo Dyeing", "Curation"],
    metrics: [
      { label: "Archival Garments", value: "120 Pieces" },
      { label: "Research Tenure", value: "Neelgar Studio" }
    ]
  },
  {
    id: "monolith-relique",
    number: "N°06",
    title: "Relique: Obsidian Adornment",
    subtitle: "Structural Hardware & Body Armor Accents",
    client: "Shatma Studio Experiments",
    category: "Femme Fatale",
    year: "2024",
    role: "Metal Smithing, Leather Mold Craft, Creative Direction",
    heroImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "Custom blackened brass harnesses, sharp knuckle clasps, and sculpted waist clinchers designed to cinch voluminous wool cloaks.",
    challenge: "Creating structural body jewelry that feels lethal yet seamlessly integrates into luxury couture garments.",
    concept: "Cold-forged steel and carved obsidian stone fastened with hand-stitched saddle leather straps.",
    outcome: "Featured as statement accessories across the Indus 2027 graduate runway presentations.",
    tags: ["Body Jewelry", "Cold Forging", "Leather Craft", "Femme Fatale"],
    metrics: [
      { label: "Metals", value: "Blackened Brass" },
      { label: "Runway Integration", value: "SS26 Looks" }
    ]
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "Shatma brings a dangerous, venomous clarity to the cutting table. At Neelgar, she took our archival handloom silks and gave them a predatory, architectural silhouette that commanded attention. She designs for women who yield to nothing.",
    author: "Elena Neelgar",
    role: "Founder & Creative Principal",
    organization: "Neelgar Couture",
    year: "2025"
  },
  {
    id: "test-2",
    quote: "Shatma's work at Indus Design School represents the future of Indian fashion: deeply conscious of our heritage textile metallurgy, yet radically subversive, sensual, and fearless. Her femme fatale tailoring is unmatched in her graduating class.",
    author: "Prof. Priya Varma",
    role: "Dean of Fashion & Textile Studies",
    organization: "Indus Design School",
    year: "2026"
  },
  {
    id: "test-3",
    quote: "Her menswear silhouettes have that rare balance of restraint and provocation. In a world full of conventional wedding sherwanis, Shatma's obsidian drapes are a masterclass in modern structural elegance.",
    author: "Rohan Singhania",
    role: "Senior Menswear Stylist",
    organization: "Bombay Editorial House",
    year: "2025"
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 — 2027",
    company: "Indus Design School",
    role: "Fashion Design Degree Candidate · Class of 2027",
    location: "Ahmedabad, India",
    isCurrent: true,
    description: "Rigorous 4-year curriculum specializing in advanced pattern drafting, menswear tailoring, surface embellishment, and contemporary couture architecture.",
    deliverables: [
      "Headline showcase designer for the 2027 Graduating Runway Presentation.",
      "Recipient of the Dean's Merit Award for Technical Patternmaking and Textile Innovation.",
      "Conducted 12-month field research on Gujarat and Rajasthan indigenous handlooms."
    ]
  },
  {
    id: "exp-2",
    period: "2024 — Present",
    company: "Neelgar Atelier",
    role: "Fashion Design & Haute Couture Apprentice",
    location: "Ahmedabad & Mumbai",
    isCurrent: true,
    isNeelgar: true,
    description: "Immersive tenure within the prestigious Neelgar atelier, working under master tailors on bespoke client garments, runway lookbooks, and archival preservation.",
    deliverables: [
      "Developed technical pattern sets for Neelgar's bespoke corsetry and silk outerwear.",
      "Co-authored the archival monograph 'Neelgar: Obsidian & Handloom Thread'.",
      "Managed backstage styling and fittings for high-profile seasonal runway showcases."
    ]
  },
  {
    id: "exp-3",
    period: "2023 — 2024",
    company: "Textile Laboratory of Western India",
    role: "Archival Weaver & Craft Fellow",
    location: "Patan & Ahmedabad",
    description: "Hands-on apprenticeship with generational master weavers specializing in double ikats, pure chanderi weaves, and oxidized metallic bullion embroidery.",
    deliverables: [
      "Produced experimental swatch catalog combining stainless steel wires with organic cottons.",
      "Documented fading dye formulations for sustainable midnight black indigo pigments."
    ]
  }
];

export const editorialTenets = [
  {
    number: "01",
    title: "Calculated Seduction",
    subtitle: "Power Through Restraint",
    description: "We do not overwhelm the gaze with frivolous ornamentation. We withhold and frame the body to establish authority, seduction, and absolute composure."
  },
  {
    number: "02",
    title: "Subverted Heritage",
    subtitle: "Ancient Weft, Lethal Cut",
    description: "Re-engineering generational Indian textiles (Varanasi silks, Zardozi wirework, Patan weaves) into uncompromising, razor-edged silhouettes."
  },
  {
    number: "03",
    title: "Architectural Bone",
    subtitle: "Structure as Armor",
    description: "Every corset, jacket lapel, and asymmetric menswear fold is engineered with brutalist discipline. Clothing as an instrument of psychological dominance."
  }
];
