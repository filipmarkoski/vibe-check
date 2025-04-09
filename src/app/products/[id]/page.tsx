"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { api } from "~/trpc/react";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = Number(params.id as string);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { 
    data: product, 
    isLoading,
    error 
  } = api.product.getById.useQuery(
    { id: productId },
    {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false
    }
  );

  // Calculate discounted price
  const discountedPrice = product
    ? product.price * (1 - product.discountPercentage / 100)
    : 0;

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-96 bg-gray-200 animate-pulse rounded"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 animate-pulse rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4"></div>
            <div className="h-24 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-10 bg-gray-200 animate-pulse rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-10 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6 text-gray-600">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link
          href="/products"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Ensure product.images is always an array, even if the API returns null
  const productImages = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.thumbnail || 'https://placehold.co/300x200?text=No+Image'];
  
  // Use a valid image for display
  const activeImage = productImages[activeImageIndex] || 'https://placehold.co/300x200?text=No+Image';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="p-6">
          <div className="relative h-80 w-full mb-4 bg-gray-50 rounded">
            <Image
              src={activeImage}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          {/* Thumbnail Gallery */}
          {productImages.length > 1 && (
            <div className="flex overflow-x-auto gap-2 pb-2">
              {productImages.map((image, idx) => (
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
                    alt={`${product.title} - image ${idx + 1}`}
                    fill
                    className="object-cover rounded"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-6 flex flex-col">
          <div className="mb-2">
            <div className="flex items-center justify-between">
              <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-700">
                {product.category}
              </span>
              <div className="flex items-center">
                <span className="text-amber-500 mr-1">★</span>
                <span className="text-sm font-medium">{product.rating} / 5</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.title}</h1>
            <p className="text-sm text-gray-600">Brand: {product.brand}</p>
          </div>
          
          {/* Price */}
          <div className="mb-4">
            <div className="flex items-end gap-2">
              <div className="text-2xl font-bold text-blue-600">
                ${discountedPrice.toFixed(2)}
              </div>
              {product.discountPercentage > 0 && (
                <>
                  <div className="text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </div>
                  <div className="text-sm bg-green-100 text-green-800 px-2 rounded-full">
                    {product.discountPercentage}% OFF
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-2 text-sm flex items-center gap-2">
              <span className={`${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-orange-500' : 'text-red-500'}`}>
                {product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'} 
              </span>
              {product.stock > 0 && (
                <span className="text-gray-600">
                  ({product.stock} available)
                </span>
              )}
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
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
                product.stock > 0 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button 
              type="button" 
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            >
              ♥ Save
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Details Section */}
      <div className="border-t border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <table className="min-w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">Brand</td>
                  <td className="py-2 font-medium">{product.brand}</td>
                </tr>
                {product.sku && (
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">SKU</td>
                    <td className="py-2 font-medium">{product.sku}</td>
                  </tr>
                )}
                {product.weight && (
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">Weight</td>
                    <td className="py-2 font-medium">{product.weight} kg</td>
                  </tr>
                )}
                {product.dimensions && (
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">Dimensions</td>
                    <td className="py-2 font-medium">
                      {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div>
            <table className="min-w-full">
              <tbody>
                {product.warrantyInformation && (
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">Warranty</td>
                    <td className="py-2 font-medium">{product.warrantyInformation}</td>
                  </tr>
                )}
                {product.shippingInformation && (
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">Shipping</td>
                    <td className="py-2 font-medium">{product.shippingInformation}</td>
                  </tr>
                )}
                {product.returnPolicy && (
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">Returns</td>
                    <td className="py-2 font-medium">{product.returnPolicy}</td>
                  </tr>
                )}
                {product.minimumOrderQuantity && (
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">Min. Order</td>
                    <td className="py-2 font-medium">{product.minimumOrderQuantity} units</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="border-t border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {product.reviews.map((review, idx) => (
              <div key={`review-${idx}`} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">{review.reviewerName}</div>
                  <div className="text-gray-500 text-sm">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span 
                      key={`star-${i}`} 
                      className={`${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Back to Products */}
      <div className="p-6 border-t">
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}
