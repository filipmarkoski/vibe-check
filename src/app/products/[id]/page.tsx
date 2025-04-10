import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import ProductRelated from './components/ProductRelated';
import { getProductById } from '~/lib/api';
import { createSafeProduct, getSafeProductImages } from '~/utils/product-utils';
import { tryCatch } from '~/lib/try-catch';

export default async function ProductPage({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  const awaitedParams = await params;
  // Convert string ID from URL params to number
  const productId = parseInt(awaitedParams.id, 10);
  
  // Handle invalid numeric ID
  if (isNaN(productId)) {
    notFound();
  }
  
  // Fetch product data - handle error properly instead of ignoring it
  const { data: product, error: fetchError } = await tryCatch(getProductById(productId));
  
  // If there's an error or no product, show 404
  if (fetchError || !product) {
    console.error('Error fetching product:', fetchError);
    notFound();
  }
  
  // Process data on the server side
  const safeProduct = createSafeProduct(product);
  const productImages = getSafeProductImages(safeProduct);
  
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <Suspense fallback={
            <div className="h-80 bg-gray-200 animate-pulse border-2 border-black"></div>
          }>
            <ProductGallery 
              images={productImages}
              title={safeProduct.title} 
              productId={safeProduct.id} 
            />
          </Suspense>
          
          <Suspense fallback={
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 animate-pulse border-2 border-black w-3/4"></div>
              <div className="h-6 bg-gray-200 animate-pulse border-2 border-black w-1/4"></div>
              <div className="h-20 bg-gray-200 animate-pulse border-2 border-black"></div>
              <div className="h-10 bg-gray-200 animate-pulse border-2 border-black w-1/2"></div>
            </div>
          }>
            <ProductInfo product={safeProduct} />
          </Suspense>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <Suspense fallback={
        <div className="h-40 bg-gray-200 animate-pulse border-2 border-black"></div>
      }>
        <ProductTabs product={safeProduct} />
      </Suspense>
      
      {/* Related Products Suggestion */}
      <Suspense fallback={
        <div className="h-60 bg-gray-200 animate-pulse border-2 border-black"></div>
      }>
        <ProductRelated />
      </Suspense>
    </div>
  );
}
