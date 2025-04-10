"use server";

import type { Product } from "~/types/product";
import { calculateDiscountedPrice, createSafeProduct } from "~/utils/product-utils";
import { ProductInfo } from "./ProductInfo";

interface ProductInfoServerProps {
  product: Product;
}

export async function ProductInfoServer({ product }: ProductInfoServerProps) {
  // Apply all safety checks and pre-calculations on the server
  const safeProduct = createSafeProduct(product);
  
  // Pre-calculate the discounted price on the server
  const discountedPrice = calculateDiscountedPrice(
    safeProduct.price,
    safeProduct.discountPercentage
  );
  
  // Pass both the safe product and pre-calculated values to the client component
  return <ProductInfo 
    product={safeProduct} 
    discountedPrice={discountedPrice}
  />;
}