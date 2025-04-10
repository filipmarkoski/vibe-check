import type { Product } from '~/lib/api';

// Define the SafeProduct type
export interface SafeProduct {
  id: number; // Make sure this is number to match API
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail?: string;
  images: string[];
  features?: string[];
  // Add any other properties needed
}

/**
 * Creates a safe product object with default values when properties are missing
 */
export function createSafeProduct(product: Product): SafeProduct {
  return {
    id: product.id,
    title: product.title ?? '',
    description: product.description ?? '',
    price: product.price ?? 0,
    discountPercentage: product.discountPercentage ?? 0,
    rating: product.rating ?? 0,
    stock: product.stock ?? 0,
    brand: product.brand ?? '',
    category: product.category ?? 'Uncategorized',
    thumbnail: product.thumbnail ?? '',
    images: product.images ?? [],
    features: Array.isArray(product.features) ? product.features : []
    // Map other properties as needed
  };
}

/**
 * Extract images from a product
 */
export function getSafeProductImages(product: SafeProduct): string[] {
  // For now, just return an array with the thumbnail if it exists
  return product.thumbnail ? [product.thumbnail] : [];
}

/**
 * Calculate the discounted price of a product
 */
export function calculateDiscountedPrice(price: number, discountPercentage: number): number {
  return discountPercentage > 0 ? price * (1 - discountPercentage / 100) : price;
}

/**
 * Get a fallback value for potentially undefined data
 */
export function getFallbackValue<T>(value: T | undefined | null, fallback: T): T {
  return value ?? fallback;
}

/**
 * Get stock status text and color based on stock quantity
 */
export function getStockStatus(stock: number | undefined | null): { text: string; colorClass: string } {
  // Use the existing getFallbackValue function to handle undefined or null
  const safeStock = getFallbackValue(stock, 0);
  
  if (safeStock > 10) {
    return { text: 'In Stock', colorClass: 'text-green-600' };
  } else if (safeStock > 0) {
    return { text: 'Low Stock', colorClass: 'text-orange-500' };
  } else {
    return { text: 'Out of Stock', colorClass: 'text-red-500' };
  }
}

/**
 * Create placeholder product for loading states
 */
export function createPlaceholderProducts(count: number): Partial<Product>[] {
  return Array(count).fill({}).map((_, idx) => ({ 
    id: idx, 
    title: 'Loading...',
    description: 'Loading product description...',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    thumbnail: 'https://placehold.co/300x200?text=Loading',
    images: ['https://placehold.co/300x200?text=Loading'],
    category: 'loading',
    brand: 'Loading...',
  }));
}
