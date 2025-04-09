import { type Product } from "~/types/product";
import { calculateDiscountedPrice, getStockStatus, getFallbackValue } from "~/utils/product-utils";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  // Apply fallbacks for essential properties
  const title = getFallbackValue(product.title, "Untitled Product");
  const description = getFallbackValue(product.description, "No description available");
  const brand = getFallbackValue(product.brand, "Unknown Brand");
  const category = getFallbackValue(product.category, "Uncategorized");
  const price = getFallbackValue(product.price, 0);
  const discountPercentage = getFallbackValue(product.discountPercentage, 0);
  const rating = getFallbackValue(product.rating, 0);
  const stock = getFallbackValue(product.stock, 0);

  // Calculate the discounted price
  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);
  
  // Get stock status
  const stockStatus = getStockStatus(stock);

  return (
    <div className="p-6 flex flex-col">
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-700">
            {category}
          </span>
          <div className="flex items-center">
            <span className="text-amber-500 mr-1">★</span>
            <span className="text-sm font-medium">{rating} / 5</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">{title}</h1>
        <p className="text-sm text-gray-600">Brand: {brand}</p>
      </div>
      
      {/* Price */}
      <div className="mb-4">
        <div className="flex items-end gap-2">
          <div className="text-2xl font-bold text-blue-600">
            ${discountedPrice.toFixed(2)}
          </div>
          {discountPercentage > 0 && (
            <>
              <div className="text-lg text-gray-500 line-through">
                ${price.toFixed(2)}
              </div>
              <div className="text-sm bg-green-100 text-green-800 px-2 rounded-full">
                {discountPercentage}% OFF
              </div>
            </>
          )}
        </div>
        
        <div className="mt-2 text-sm flex items-center gap-2">
          <span className={stockStatus.colorClass}>
            {stockStatus.text}
          </span>
          {stock > 0 && (
            <span className="text-gray-600">
              ({stock} available)
            </span>
          )}
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      
      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, idx) => (
              <span 
                key={`tag-${idx}`} 
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Actions */}
      <div className="flex space-x-4 mt-auto">
        <button 
          type="button"
          className={`px-6 py-3 rounded-md flex-1 font-medium transition-colors ${
            stock > 0 
              ? "bg-blue-600 text-white hover:bg-blue-700" 
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          disabled={stock === 0}
        >
          {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
        <button 
          type="button" 
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
        >
          ♥ Save
        </button>
      </div>
    </div>
  );
}
