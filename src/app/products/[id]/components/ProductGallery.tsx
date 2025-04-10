'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  title: string;
  // productId is a number consistent with DummyJSON API product identifiers
  productId: number;
}

export default function ProductGallery({ images, title, productId }: ProductGalleryProps) {
  // Fix: Ensure we always return a string from the initializer
  const [selectedImage, setSelectedImage] = useState<string>(() => {
    return images.length > 0 ? images[0] ?? '' : '';
  });
  
  // Update selected image when navigating between products
  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0] ?? '');
    }
  }, [images, productId]);

  // If no images, show placeholder
  if (images.length === 0) {
    return (
      <div className="relative aspect-square w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Main image display */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
        <Image
          src={selectedImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Only show thumbnails if there are multiple images */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={`image-${index}`}
              onClick={() => setSelectedImage(image ?? '')}
              className={`relative aspect-square rounded overflow-hidden border-2 ${
                selectedImage === image ? 'border-blue-500' : 'border-transparent'
              }`}
              aria-label={`Select image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}