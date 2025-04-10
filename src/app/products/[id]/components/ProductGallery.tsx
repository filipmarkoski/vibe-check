"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Product } from "~/types/product";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [productImages, setProductImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState<string>('/images/blocko-vibing.png');
  
  // Process product data in useEffect to avoid state updates during render
  useEffect(() => {
    // Use the images directly from the product object that were already processed by the server component
    const images = product.images || [];
    setProductImages(images);
    
    // Use a valid image for display with fallback
    setActiveImage(images[activeImageIndex] ?? images[0] ?? '/images/blocko-vibing.png');
  }, [product, activeImageIndex]);

  return (
    <div className="p-4 flex flex-col gap-4 border-r-0 md:border-r-2 border-black">
      {/* Main Image */}
      <div className="relative aspect-square w-full border-2 border-black bg-gray-50">
        <Image
          src={activeImage}
          alt={product.title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        
        {product.discountPercentage > 0 && (
          <div className="absolute top-0 right-0 bg-primary border-l-2 border-b-2 border-black py-2 px-4 font-bold transform rotate-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="text-lg font-black animate-pulse">SAVE</div>
            <div className="text-2xl font-black">{Math.round(product.discountPercentage)}%</div>
          </div>
        )}
      </div>
      
      {/* Thumbnail Gallery */}
      {productImages.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {productImages.map((image, idx) => (
            <button 
              type="button"
              key={`thumb-${idx}`} 
              onClick={() => setActiveImageIndex(idx)}
              className={`relative aspect-square border-2 ${
                activeImageIndex === idx ? 'border-primary' : 'border-black'
              } hover:border-primary transition-colors`}
            >
              <Image
                src={image}
                alt={`${product.title} - image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}