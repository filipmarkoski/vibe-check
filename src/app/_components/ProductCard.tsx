import Link from "next/link";
import { type Product } from "~/types/product";
import { calculateDiscountedPrice, getFallbackValue } from "~/utils/product-utils";
import ImageCard from "~/components/ui/image-card";

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
    <Link href={`/products/${product.id}`} className="block">
      <ImageCard
        imageUrl={thumbnail}
        caption={
          <div>
            <div className="flex justify-between items-start mb-1">
              <h2 className="text-lg font-semibold line-clamp-1">
                {title}
              </h2>
              <div className="flex flex-col items-end">
                <span className="text-blue-600 font-medium">${discountedPrice.toFixed(2)}</span>
                {discountPercentage > 0 && (
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 line-through mr-1">${price.toFixed(2)}</span>
                    <span className="text-xs bg-green-500 text-white font-bold px-1 rounded ml-1">
                      {Math.round(discountPercentage)}% OFF
                    </span>
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-600 mb-2 text-sm line-clamp-2">{description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="inline-block px-2 py-1 text-xs bg-primary border-black border rounded-full text-black">
                  {category}
                </span>
                <div className="flex items-center text-amber-500 text-sm">
                  <span className="mr-1">★</span>
                  <span>{rating.toFixed(1)}</span>
                </div>
              </div>
              <span className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                View Details →
              </span>
            </div>
          </div>
        }
        className="w-full transform transition-transform hover:scale-[1.02] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
      />
    </Link>
  );
}
