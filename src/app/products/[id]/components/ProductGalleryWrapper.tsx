// This is a Server Component that wraps the client ProductGallery
import { type Product } from '~/types/product';
import ProductGallery from './ProductGallery';
import { getSafeProductImages } from '~/utils/product-utils';
import { cache } from 'react';

// Cache the image processing function to avoid redundant calculations
// This prevents unnecessary re-processing of the same product data
const getProcessedImages = cache((product: Product) => {
  return getSafeProductImages(product);
});

interface ProductGalleryWrapperProps {
  product: Product;
}

export default function ProductGalleryWrapper({ product }: ProductGalleryWrapperProps) {
  // Use the cached function to process images only once per product
  const images = getProcessedImages(product);
  
  // Extract only the necessary props to pass to the client component
  // This minimizes the data passed across the server/client boundary
  return <ProductGallery 
    images={images} 
    title={product.title || 'Product'} 
    productId={product.id}
  />;
}
