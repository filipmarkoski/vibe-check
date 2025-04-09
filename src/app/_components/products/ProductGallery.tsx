import { useState } from "react";
import Image from "next/image";
import { getSafeProductImages } from "~/utils/product-utils";
import { type Product } from "~/types/product";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const images = getSafeProductImages(product);
  // Use nullish coalescing instead of logical OR and provide fallback
  const activeImage = images[activeImageIndex] ?? images[0] ?? "/images/placeholder-product.png";
  
  // Handle category display - it might be a string or an object
  const categoryDisplay = typeof product.category === 'object' && product.category !== null
    ? product.category.name || product.category.slug || 'Unknown Category'
    : product.category || 'Unknown Category';

  return (
    <div className="p-6">
      <div className="relative h-80 w-full mb-4 bg-gray-50 rounded">
        <Image
          src={activeImage}
          alt={product.title || "Product image"}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      
      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex overflow-x-auto gap-2 pb-2">
          {images.map((image, idx) => (
            <button 
              type="button"
              key={`thumb-${idx}`} 
              onClick={() => setActiveImageIndex(idx)}
              className={`relative w-16 h-16 flex-shrink-0 rounded ${
                activeImageIndex === idx ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <Image
                src={image}
                alt={`${product.title || "Product"} - image ${idx + 1}`}
                className="object-cover rounded"
                fill
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
