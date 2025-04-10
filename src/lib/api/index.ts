import { type Product } from '~/types/product';
import { tryCatch } from '~/lib/try-catch';

/**
 * Fetch a product by its ID
 * @param id The product ID to fetch
 * @returns The product data or null if not found
 */
export async function getProductById(id: string): Promise<Product | null> {
  const baseUrl = "https://dummyjson.com";

  // Fetch the product with tryCatch to simplify error handling
  const { data: response, error: fetchError } = await tryCatch(
    fetch(`${baseUrl}/products/${id}`)
  );
  
  if (fetchError || !response) {
    console.error('Error fetching product:', fetchError);
    return null;
  }
  
  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    console.error(`Failed to fetch product: ${response.statusText}`);
    return null;
  }
  
  try {
    const productData = await response.json() as Product;
    return productData;
  } catch (error) {
    console.error('Error parsing product JSON:', error);
    return null;
  }
}

/**
 * Fetch a list of products with pagination
 * @param limit Maximum number of products to fetch
 * @param skip Number of products to skip (for pagination)
 * @returns Object containing products array and total count
 */
export async function getProducts(limit = 20, skip = 0): Promise<{ products: Product[], total: number }> {
  const baseUrl = "https://dummyjson.com";

  // Fetch products with tryCatch
  const { data: response, error: fetchError } = await tryCatch(
    fetch(`${baseUrl}/products?limit=${limit}&skip=${skip}`)
  );
  
  if (fetchError || !response) {
    console.error('Error fetching products:', fetchError);
    return { products: [], total: 0 };
  }
  
  if (!response.ok) {
    console.error(`Failed to fetch products: ${response.statusText}`);
    return { products: [], total: 0 };
  }
  
  try {
    const result = await response.json() as { products: Product[], total: number };
    return result;
  } catch (error) {
    console.error('Error parsing products JSON:', error);
    return { products: [], total: 0 };
  }
}

/**
 * Fetch related products (or random products if related functionality is unavailable)
 * @param limit Maximum number of related products to fetch
 * @returns Array of product objects
 */
export async function getRelatedProducts(limit = 4): Promise<Product[]> {
  const baseUrl = "https://dummyjson.com";
  
  // Fetch from products endpoint with a limit
  const { data: response, error: fetchError } = await tryCatch(
    fetch(`${baseUrl}/products?limit=${limit}`)
  );
  
  if (fetchError || !response) {
    console.error('Error fetching related products:', fetchError);
    return [];
  }
  
  if (!response.ok) {
    console.error(`Failed to fetch related products: ${response.statusText}`);
    return [];
  }
  
  try {
    const result = await response.json() as { products: Product[] };
    return result.products || [];
  } catch (error) {
    console.error('Error parsing related products JSON:', error);
    return [];
  }
}
