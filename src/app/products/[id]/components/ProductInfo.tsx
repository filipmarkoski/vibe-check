"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import type { Product } from "~/types/product";

interface ProductInfoProps {
  product: Product;
  discountedPrice: number;
}

export function ProductInfo({ product, discountedPrice }: ProductInfoProps) {
  // No need to calculate discounted price here anymore, it's passed from the server component

  return (
    <div className="p-4 flex flex-col">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="no-underline">
            <Badge className="border-2 border-black font-medium bg-accent text-black hover:bg-accent/80">
              {product.category}
            </Badge>
          </Link>
          <div className="flex items-center gap-1 border-2 border-black bg-white py-1 px-2">
            <span className="text-amber-500 font-bold">★</span>
            <span className="font-bold">{product.rating}</span>
          </div>
        </div>
        <h1 className="text-3xl font-black mb-1 leading-tight">{product.title}</h1>
        <p>Brand: <span className="font-medium">{product.brand}</span></p>
      </div>
      
      {/* Price Section */}
      <div className="border-2 border-black p-3 mb-4 bg-gray-50">
        <div className="flex flex-wrap items-end gap-3">
          <div className="text-2xl font-black">
            ${discountedPrice.toFixed(2)}
          </div>
          {product.discountPercentage > 0 && (
            <div className="text-lg text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </div>
          )}
        </div>
        
        <div className="mt-2 font-medium flex items-center gap-2">
          <span className={`${
            product.stock > 10 
              ? 'bg-green-200 text-green-900' 
              : product.stock > 0 
                ? 'bg-yellow-200 text-yellow-900' 
                : 'bg-red-200 text-red-900'
          } px-2 py-1 border-2 border-black text-sm`}>
            {product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'} 
          </span>
          {product.stock > 0 && (
            <span className="border-2 border-black bg-white px-2 py-1 text-sm">
              {product.stock} available
            </span>
          )}
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-4">
        <h2 className="font-bold text-lg mb-1 border-b-2 border-primary inline-block pb-1">Description</h2>
        <p>{product.description}</p>
      </div>
      
      {/* Tags as Category Links */}
      {product.tags && product.tags.length > 0 && (
        <div className="mb-4">
          <h2 className="font-bold text-lg mb-1 border-b-2 border-primary inline-block pb-1">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, idx) => (
              <Link 
                href={`/products?tag=${encodeURIComponent(tag)}`} 
                key={`tag-${idx}`}
                className="no-underline"
              >
                <Badge className="border-2 border-black bg-white hover:bg-gray-100 text-black transition-colors">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Price comparison callout for discounted items */}
      {product.discountPercentage > 5 && (
        <div className="bg-primary/20 border-2 border-black p-3 mb-4 flex items-center">
          <div className="bg-primary text-black p-2 border-2 border-black font-bold mr-3">SAVE ${(product.price - discountedPrice).toFixed(2)}</div>
          <div>
            <p className="font-medium text-sm">You&apos;re saving {Math.round(product.discountPercentage)}% compared to the regular price!</p>
          </div>
        </div>
      )}
      
      {/* Actions */}
      <div className="flex flex-wrap mt-auto gap-3">
        <Button 
          className={`border-2 border-black font-bold px-6 ${
            product.stock > 0 
              ? "bg-primary hover:bg-primary/90 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all" 
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          disabled={product.stock === 0}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </Button>
        <Button 
          variant="outline" 
          className="border-2 border-black bg-white font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          ♥ Save
        </Button>
      </div>
    </div>
  );
}