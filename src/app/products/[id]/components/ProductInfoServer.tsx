import { type Product } from '~/types/product';
import { createSafeProduct } from '~/utils/product-utils';

interface ProductInfoServerProps {
  product: Product;
}

// Server component to prepare data for client component
export default function ProductInfoServer({ product }: ProductInfoServerProps) {
  // Process data on the server side - NO hooks or state updates
  const safeProduct = createSafeProduct(product);
  
  // Pass processed data as serializable props to client component
  return (
    <div 
      id="product-info-data"
      data-product={JSON.stringify(safeProduct)}
    />
  );
}