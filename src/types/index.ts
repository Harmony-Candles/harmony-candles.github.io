export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  featured: boolean;
  bestSeller: boolean;
  isNew: boolean;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  features: string[];
  seoTitle?: string;
  seoDescription?: string;
  whatsappMessage?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  cover: string;
  price?: number;
  duration: string;
  lessons: number;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  link?: string;
  nota?: string;
  whatsapp?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CategoryGroup {
  category: string;
  products: Product[];
}