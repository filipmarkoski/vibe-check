/**
 * Define the Product interface
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail?: string;
  features?: string[];
  // Add other required fields
}

/**
 * Fetches random products to show as related products
 * @param limit The number of products to fetch
 * @returns Array of product objects
 */
export async function getRandomProducts(limit: number = 4): Promise<Product[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}`);
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    return Array.isArray(data.products) ? data.products : [];
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
}

/**
 * Fetch a product by its ID
 */
export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * Fetch related products with a specified limit
 */
export async function getRelatedProducts(limit = 4): Promise<Product[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}`);
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    return Array.isArray(data.products) ? data.products : [];
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
}