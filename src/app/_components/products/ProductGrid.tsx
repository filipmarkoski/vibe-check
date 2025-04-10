import Image from "next/image";
import Link from "next/link";
import type { Product } from "~/types/product";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium text-gray-600">No products found</h2>
        <p className="mt-2 text-gray-500">Try selecting a different category or check back later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="relative h-48 w-full bg-gray-100">
            {product.thumbnail && (
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
          <div className="p-4">
            <h3 className="font-medium truncate">{product.title}</h3>
            <div className="mt-1 flex items-center justify-between">
              <p className="font-bold">${product.price.toFixed(2)}</p>
              {product.discountPercentage > 0 && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </div>
            <div className="mt-3">
              <Link 
                href={`/products/${product.id}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
