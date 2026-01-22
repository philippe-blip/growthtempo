# Growth Tempo - Site Web

Site web pour Growth Tempo, construit avec Astro et Tailwind CSS.

## Structure

- **Stack**: Astro + Tailwind CSS
- **Contenu**: MDX pour pages statiques + collections Astro pour cas studies
- **Routing**: File-based routing Astro

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

## Build

```bash
npm run build
```

## Structure des pages

- `/` - Accueil
- `/offres` - Hub offres
  - `/offres/diagnostic`
  - `/offres/growth-tempo`
  - `/offres/lead-gen`
  - `/offres/automation-ai-ops`
- `/solutions` - Hub solutions
  - `/solutions/founder-bottleneck`
  - `/solutions/leads-quality`
  - `/solutions/no-reliable-metrics`
- `/industries` - Hub industries
  - `/industries/services-locaux-b2b`
  - `/industries/services-terrain`
  - `/industries/saas`
- `/resultats` - Hub résultats
  - `/resultats/cas/[slug]` - Cas studies dynamiques
- `/a-propos` - À propos
- `/contact` - Contact

## Composants réutilisables

- `OfferCard` - Carte d'offre
- `ScopeBlock` - Bloc "On fait / On ne fait pas / On fait parfois"
- `HowWeWork` - Section "Comment on travaille"
- `ProofStrip` - Logos, métriques, témoignages
- `CaseStudyTeaser` - Teaser de cas study
- `FAQAccordion` - Accordéon FAQ
- `CTASection` - Section CTA
- `IndustryFit` - "Pour vous si..." / "Pas pour vous si..."
- `ServiceModules` - Modules de service
- `Hero` - Section hero

## Collections Astro

Les cas studies sont dans `src/content/cas/` et utilisent la collection `cas` définie dans `src/content/config.ts`.

## SEO

- Meta tags (Open Graph, Twitter)
- Sitemap automatique (via @astrojs/sitemap)
- Tracking events (CTA clicks, scroll depth)

## Notes

- Le contenu est en français
- Architecture i18n ready (pas de contenu EN pour MVP)
- Design inspiré du template Kreativ Software
