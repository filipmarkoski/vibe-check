import { type Product } from "~/types/product";
import ProductCard from "~/app/_components/ProductCard";
import { createPlaceholderProducts } from "~/utils/product-utils";

interface ProductListProps {
  products?: Product[];
  isLoading: boolean;
  limit: number;
  onClearFilters: () => void;
}

export default function ProductList({ 
  products, 
  isLoading, 
  limit,
  onClearFilters
}: ProductListProps) {
  const placeholders = createPlaceholderProducts(limit);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholders.map((placeholder) => (
          <div key={placeholder.id} className="border rounded-lg overflow-hidden shadow-md bg-white">
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4 mb-3"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-full mb-3"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg shadow">
        <p className="text-lg text-gray-600 mb-4">No products found.</p>
        <button
          onClick={onClearFilters}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
