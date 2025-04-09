"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "~/trpc/react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductFilters from "~/app/_components/products/ProductFilters";
import ProductList from "~/app/_components/products/ProductList";
import Pagination from "~/app/_components/products/Pagination";
import ProductErrorMessage from "~/app/_components/products/ProductErrorMessage";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Parse query parameters
  const currentPage = Number(searchParams.get("page") ?? "1");
  const limitParam = Number(searchParams.get("limit") ?? "9");
  const sortBy = searchParams.get("sortBy") ?? undefined;
  const order = searchParams.get("order") as "asc" | "desc" | undefined;
  const searchQuery = searchParams.get("q") ?? "";
  const categoryFilter = searchParams.get("category") ?? "";
  
  // Calculate skip for pagination
  const skip = (currentPage - 1) * limitParam;
  
  // State for UI
  const [limit, setLimit] = useState(limitParam);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch data based on parameters
  const { 
    data: productsData, 
    isLoading: isProductsLoading,
    error: productsError,
    refetch: refetchProducts
  } = categoryFilter 
    ? api.product.getByCategory.useQuery(
        { category: categoryFilter },
        { 
          retry: 1,
          staleTime: 60 * 1000, // 1 minute
          refetchOnWindowFocus: false
        }
      )
    : searchQuery 
      ? api.product.search.useQuery(
          { q: searchQuery },
          { 
            retry: 1,
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false 
          }
        )
      : api.product.list.useQuery(
          { limit, skip, sortBy, order },
          { 
            retry: 1,
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
            keepPreviousData: true // Keep showing previous page data while loading next page
          }
        );

  // Fetch categories
  const { 
    data: categories, 
    isLoading: isCategoriesLoading,
    error: categoriesError 
  } = api.product.categories.useQuery(
    undefined,
    { 
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false
    }
  );

  // Prefetch adjacent pages for better UX
  const utils = api.useUtils();
  
  useEffect(() => {
    // Prefetch next page if available
    if (!categoryFilter && !searchQuery && productsData?.total && currentPage < Math.ceil(productsData.total / limit)) {
      void utils.product.list.prefetch({ 
        limit, 
        skip: skip + limit,
        sortBy,
        order
      });
    }
    
    // Prefetch previous page if not on first page
    if (!categoryFilter && !searchQuery && currentPage > 1) {
      void utils.product.list.prefetch({ 
        limit, 
        skip: Math.max(0, skip - limit),
        sortBy,
        order
      });
    }
  }, [categoryFilter, currentPage, limit, order, productsData?.total, searchQuery, skip, sortBy, utils.product.list]);
  
  // Handle errors
  useEffect(() => {
    if (productsError) {
      setErrorMessage("Failed to load products. Please try again.");
      console.error("Products error:", productsError);
    } else if (categoriesError) {
      console.error("Categories error:", categoriesError);
    } else {
      setErrorMessage(null);
    }
  }, [productsError, categoriesError]);

  // Handle limit change
  const handleLimitChange = useCallback((newLimit: number) => {
    setLimit(newLimit);
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", newLimit.toString());
    params.set("page", "1"); // Reset to first page
    router.push(`/products?${params.toString()}`);
  }, [router, searchParams]);

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/products?${params.toString()}`);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [router, searchParams]);

  // Handle clear filters
  const handleClearFilters = useCallback(() => {
    router.push("/products");
  }, [router]);

  // Calculate total pages
  const totalPages = productsData 
    ? Math.ceil(productsData.total / limit) 
    : 0;
    
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 mb-6">
          Browse our selection of high-quality products from various categories.
        </p>
        
        <ProductFilters
          categories={categories || []}
          isCategoriesLoading={isCategoriesLoading}
          selectedCategory={categoryFilter}
          searchQuery={searchQuery}
          sortBy={sortBy}
          order={order}
          limit={limit}
          onLimitChange={handleLimitChange}
        />
      </div>

      <ProductErrorMessage 
        message={errorMessage} 
        onRetry={() => void refetchProducts()} 
      />

      <ProductList
        products={productsData?.products}
        isLoading={isProductsLoading}
        limit={limit}
        onClearFilters={handleClearFilters}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      
      {/* Stats display */}
      {productsData && (
        <div className="mt-4 text-sm text-gray-500 text-center">
          Showing {productsData.products.length} of {productsData.total} products
        </div>
      )}
    </div>
  );
}
