export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  client: string;
  category: 'Neelgar Archives' | 'Femme Fatale' | 'Menswear' | 'Indian Textiles' | 'Haute Editorial' | 'Spatial & Campaign' | 'Visual Identity';
  year: string;
  role: string;
  heroImage: string;
  galleryImages: string[];
  excerpt: string;
  challenge: string;
  concept: string;
  outcome: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  year: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  isCurrent?: boolean;
  isNeelgar?: boolean;
  description: string;
  deliverables: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  city: string;
  tagline: string;
  heroHighlight: string;
  heroSecondary: string;
  availability: string;
  bioHeadline: string;
  bioParagraphs: string[];
  neelgarHighlight: {
    role: string;
    period: string;
    tagline: string;
    summary: string;
    achievements: string[];
  };
  pullQuote: {
    quote: string;
    author: string;
    context: string;
  };
  contactEmail: string;
  whatsappNumber: string;
  callingNumber: string;
  socials: {
    instagram: string;
    arena: string;
    linkedin: string;
    substack: string;
  };
}
