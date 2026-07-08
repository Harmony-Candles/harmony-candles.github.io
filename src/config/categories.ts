/**
 * Category slug → display name mapping.
 * This is the single source of truth for category display names.
 */
export const CATEGORY_NAMES: Record<string, string> = {
  aromaticas: "Velas Aromáticas",
  decorativas: "Velas Decorativas",
  bouquets: "Bouquet de Velas",
  bandejas: "Bases",
  "porta-inciensos": "Porta Inciensos",
  sets: "Sets",
  floreros: "Floreros",
  recordatorios: "Recordatorios",
};

/**
 * Ordered list of category slugs for navigation and section display.
 */
export const CATEGORY_ORDER = [
  "aromaticas",
  "decorativas",
  "bouquets",
  "bandejas",
  "porta-inciensos",
  "sets",
  "floreros",
  "recordatorios",
] as const;

/**
 * Get the display name for a category slug.
 * Falls back to the slug itself if not found.
 */
export function getCategoryName(slug: string): string {
  return CATEGORY_NAMES[slug] || slug;
}