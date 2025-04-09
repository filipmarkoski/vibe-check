import { type Product } from "~/types/product";

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
  return (value === undefined || value === null) ? fallback : value;
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
 * Get safe product images with fallbacks
 */
export function getSafeProductImages(product: Product): string[] {
  if (!product) return ['https://placehold.co/300x200?text=No+Image'];
  
  // If images is empty or not an array, use thumbnail as fallback
  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [];
  
  // Ensure thumbnail is defined
  const thumbnail = product.thumbnail || 'https://placehold.co/300x200?text=No+Image';
  
  // If there are no valid images, return an array with just the thumbnail
  return images.length > 0 ? images : [thumbnail];
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

/**
 * Ensure safe product properties with fallbacks
 */
export function createSafeProduct(product: Product): Product {
  return {
    ...product,
    title: getFallbackValue(product.title, 'Untitled Product'),
    description: getFallbackValue(product.description, 'No description available'),
    category: getFallbackValue(product.category, 'Uncategorized'),
    price: getFallbackValue(product.price, 0),
    discountPercentage: getFallbackValue(product.discountPercentage, 0),
    rating: getFallbackValue(product.rating, 0),
    stock: getFallbackValue(product.stock, 0),
    brand: getFallbackValue(product.brand, 'Unknown Brand'),
    thumbnail: getFallbackValue(product.thumbnail, 'https://placehold.co/300x200?text=No+Image'),
    images: Array.isArray(product.images) ? 
      product.images : ['https://placehold.co/300x200?text=No+Image'],
  };
}
