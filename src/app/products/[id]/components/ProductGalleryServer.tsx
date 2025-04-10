import { type Product } from '~/types/product';
import { getSafeProductImages } from '~/utils/product-utils';

interface ProductGalleryServerProps {
  product: Product;
}

// Server component to prepare data for client component
export default function ProductGalleryServer({ product }: ProductGalleryServerProps) {
  // Process data on the server side - NO hooks or state updates
  const images = getSafeProductImages(product);
  const defaultImage = images[0];
  
  // Pass processed data as serializable props to client component
  return (
    <div 
      id="product-gallery-data"
      data-images={JSON.stringify(images)}
      data-default-image={defaultImage}
      data-product-title={product.title}
    />
  );
}