export interface Offer {
  slug: string;
  title: string;
  promise: string;
  forWho: string;
  ctaText: string;
  ctaLink: string;
  icon?: string;
}

export interface Solution {
  slug: string;
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  metrics: Array<{ label: string; value: string }>;
  challenge: string;
  solution: string;
  results: string;
  testimonial?: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ScopeBlock {
  do: string[];
  dont: string[];
  sometimes?: string[];
}

export interface ServiceModule {
  name: string;
  description: string;
  optional?: boolean;
}

export interface IndustryFit {
  typicalSituations: string[];
  antiFit: string[];
}
