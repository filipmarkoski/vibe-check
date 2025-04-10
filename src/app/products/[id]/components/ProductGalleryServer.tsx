"use server";

import type { Product } from "~/types/product";
import { getSafeProductImages } from "~/utils/product-utils";
import { ProductGallery } from "./ProductGallery";

interface ProductGalleryServerProps {
  product: Product;
}

export async function ProductGalleryServer({ product }: ProductGalleryServerProps) {
  // Safety checks and data preparation can happen server-side
  // This component can pre-compute values and pass only what's needed to the client component
  
  // Prepare data for the client component
  const safeProduct = {
    ...product,
    images: getSafeProductImages(product),
    title: product.title || "Product",
    discountPercentage: product.discountPercentage || 0
  };

  // Pass the prepared data to the client component
  return <ProductGallery product={safeProduct} />;
}