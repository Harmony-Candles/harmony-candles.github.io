/**
 * Category slug → display name mapping.
 * This is the single source of truth for category display names.
 */
export const CATEGORY_NAMES: Record<string, string> = {
  "velas-aromaticas": "Velas Aromáticas",
  "velas-decorativas": "Velas Decorativas",
  bouquets: "Bouquet de Velas",
  bases: "Bases",
  "porta-inciensos": "Porta Inciensos",
  sets: "Sets",
  floreros: "Floreros",
  recordatorios: "Recordatorios",
  regalos: "Regalos",
};

/**
 * Ordered list of category slugs for navigation and section display.
 */
export const CATEGORY_ORDER = [
  "velas-aromaticas",
  "velas-decorativas",
  "bouquets",
  "bases",
  "porta-inciensos",
  "sets",
  "floreros",
  "recordatorios",
  "regalos",
] as const;

/**
 * Get the display name for a category slug.
 * Falls back to the slug itself if not found.
 */
export function getCategoryName(slug: string): string {
  return CATEGORY_NAMES[slug] || slug;
}