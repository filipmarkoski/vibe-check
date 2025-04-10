// This is a Server Component that wraps the client ProductInfo
import { type Product } from '~/types/product';
import ProductInfo from './ProductInfo';
import { createSafeProduct } from '~/utils/product-utils';
import { cache } from 'react';

// Cache the product processing to avoid redundant calculations
const getProcessedProduct = cache((product: Product) => {
  return createSafeProduct(product);
});

interface ProductInfoWrapperProps {
  product: Product;
}

export default function ProductInfoWrapper({ product }: ProductInfoWrapperProps) {
  // Process data on the server and pass it directly to the client component
  const safeProduct = getProcessedProduct(product);
  
  return <ProductInfo product={safeProduct} />;
}
