export const NAV_ITEMS = [
  { label: 'Offres', href: '/offres' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Résultats', href: '/resultats' },
  { label: 'À propos', href: '/a-propos' },
] as const;

export const TESTIMONIALS = [
  {
    text: "Philippe m'a apporté une vision synthétique et claire des bases du marketing avec le coaching Tempo. Je le recommande pour son côté bien structuré.",
    author: 'Rym Michaut',
    role: 'Responsable Marketing, Datasulting',
  },
  {
    text: "Depuis 3 ans, l'équipe Poppy Jikko nous accompagne. Coaching Tempo, Audits, Assistant SEO… Efficace, direct, orienté client et des résultats flagrants.",
    author: 'Lisa Salleron',
    role: 'Director, Windward Yachts',
  },
  {
    text: "Je collabore avec Poppy Jikko depuis près de 2 ans. L'équipe s'est avérée être un élément déterminant pour le développement de notre entreprise.",
    author: 'Guillaume Boulanger',
    role: 'Founder & CEO, EDN',
  },
] as const;

export const OFFERS = [
  {
    slug: 'diagnostic',
    title: 'Diagnostic',
    promise: 'Qualifiez votre situation + obtenez un plan actionnable',
    forWho: 'Pour les fondateurs qui veulent clarifier leurs priorités',
    ctaText: 'Découvrir',
    ctaLink: '/offres/diagnostic',
    index: 1,
  },
  {
    slug: 'growth-tempo',
    title: 'Growth Tempo',
    promise: 'Done-with-you: pilotage, orga, rythme, KPIs',
    forWho: 'Pour les équipes qui veulent un rythme et des priorités claires',
    ctaText: 'Découvrir',
    ctaLink: '/offres/growth-tempo',
    index: 2,
  },
  {
    slug: 'lead-gen',
    title: 'Lead Gen',
    promise: 'Done-for-you Demand Capture (SEO + SEA + CRO + tracking)',
    forWho: 'Pour les entreprises qui veulent capter l\'intention existante',
    ctaText: 'Découvrir',
    ctaLink: '/offres/lead-gen',
    index: 3,
  },
  {
    slug: 'automation-ai-ops',
    title: 'Automation & AI Ops',
    promise: 'Done-for-you: n8n, agents, intégrations, data pipelines',
    forWho: 'Pour les équipes qui veulent automatiser les flux réels',
    ctaText: 'Découvrir',
    ctaLink: '/offres/automation-ai-ops',
    index: 4,
  },
] as const;

export const SOLUTIONS = [
  {
    slug: 'founder-bottleneck',
    title: 'Founder Bottleneck',
    description: 'Le fondateur est le goulot d\'étranglement de la croissance',
  },
  {
    slug: 'leads-quality',
    title: 'Qualité des leads',
    description: 'Trop de leads, mais peu de qualité et de conversion',
  },
  {
    slug: 'no-reliable-metrics',
    title: 'Pas de métriques fiables',
    description: 'Impossible de prendre des décisions basées sur les données',
  },
  {
    slug: 'too-many-projects',
    title: 'Trop de projets',
    description: 'Trop de projets en parallèle, rien n\'avance vraiment',
  },
  {
    slug: 'slow-ops-manual-work',
    title: 'Ops lentes et travail manuel',
    description: 'Trop de tâches répétitives qui ralentissent l\'équipe',
  },
  {
    slug: 'scale-without-bureaucracy',
    title: 'Scaler sans bureaucratie',
    description: 'Grandir sans créer de couches administratives inutiles',
  },
] as const;

export const INDUSTRIES = [
  {
    slug: 'services-locaux-b2b',
    title: 'Services locaux B2B',
    description: 'Comptables, intégrateurs Odoo, avocats, etc.',
  },
  {
    slug: 'services-terrain',
    title: 'Services terrain',
    description: 'Pest control, nettoyage, facility, yacht/brokerage',
  },
  {
    slug: 'saas',
    title: 'SaaS',
    description: 'Logiciels en tant que service',
  },
  {
    slug: 'dtc-ecommerce',
    title: 'DTC E-commerce',
    description: 'Vente directe au consommateur',
  },
] as const;
