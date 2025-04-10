"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

// Import modularized components
import { ProductGallery } from "./components/ProductGallery";
import { ProductInfo } from "./components/ProductInfo";
import { ProductTabs } from "./components/ProductTabs";
import { ProductRelated } from "./components/ProductRelated";
import { ProductErrorMessage } from "./components/ProductErrorMessage";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id as string);

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

  if (isLoading) {
    return (
      <div className="border-2 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-80 bg-gray-200 animate-pulse border-2 border-black"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 animate-pulse border-2 border-black w-3/4"></div>
            <div className="h-6 bg-gray-200 animate-pulse border-2 border-black w-1/4"></div>
            <div className="h-20 bg-gray-200 animate-pulse border-2 border-black"></div>
            <div className="h-10 bg-gray-200 animate-pulse border-2 border-black w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return <ProductErrorMessage />;
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Back to Products Button */}
      <div>
        <Link href="/products" className="no-underline">
          <Button variant="outline" className="border-2 border-black bg-white font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            ← Back to Products
          </Button>
        </Link>
      </div>
      
      {/* Product Card */}
      <div className="border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Images Section */}
          <ProductGallery product={product} />
          
          {/* Product Info Section */}
          <ProductInfo product={product} />
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <ProductTabs product={product} />
      
      {/* Related Products Suggestion */}
      <ProductRelated />
    </div>
  );
}
