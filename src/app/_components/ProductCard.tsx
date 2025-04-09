import Image from "next/image";
import Link from "next/link";
import { type Product } from "~/types/product";
import { calculateDiscountedPrice, getFallbackValue } from "~/utils/product-utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Apply fallbacks for essential properties
  const title = getFallbackValue(product.title, "Untitled Product");
  const description = getFallbackValue(product.description, "No description available");
  const price = getFallbackValue(product.price, 0);
  const discountPercentage = getFallbackValue(product.discountPercentage, 0);
  const rating = getFallbackValue(product.rating, 0);
  const category = getFallbackValue(product.category, "Uncategorized");
  const thumbnail = getFallbackValue(
    product.thumbnail, 
    "https://placehold.co/300x200?text=No+Image"
  );

  // Calculate the discounted price if there's a discount
  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
      <Link href={`/products/${product.id}`} className="group">
        <div className="relative h-48 w-full bg-gray-100">
          <Image 
            src={thumbnail} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZWVlZSIvPjwvc3ZnPg=="
          />
          {discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              {Math.round(discountPercentage)}% OFF
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/products/${product.id}`} className="group">
            <h2 className="text-lg font-semibold line-clamp-1 group-hover:text-blue-600 transition-colors">
              {title}
            </h2>
          </Link>
          <div className="flex flex-col items-end">
            <span className="text-blue-600 font-medium">${discountedPrice.toFixed(2)}</span>
            {discountPercentage > 0 && (
              <div className="flex items-center">
                <span className="text-xs text-gray-500 line-through mr-1">${price.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-600 mb-3 text-sm line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-700">
              {category}
            </span>
            <div className="flex items-center text-amber-500 text-sm">
              <span className="mr-1">★</span>
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
          <Link 
            href={`/products/${product.id}`} 
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
