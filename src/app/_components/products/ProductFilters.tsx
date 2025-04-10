"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import type { CategoryObject } from "~/types/product";

interface ProductFiltersProps {
  categories: Array<string | CategoryObject>;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function ProductFilters({
  categories,
  activeCategory: externalActiveCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  // Internal state to track selected category when no external state management is provided
  const [internalActiveCategory, setInternalActiveCategory] = useState<string | undefined>(externalActiveCategory);
  
  // Keep internal state in sync with external props
  useEffect(() => {
    setInternalActiveCategory(externalActiveCategory);
  }, [externalActiveCategory]);

  // Use either external or internal active category
  const activeCategory = externalActiveCategory !== undefined ? externalActiveCategory : internalActiveCategory;

  // Debug info - log whenever the component renders with its current state
  useEffect(() => {
    console.log("ProductFilters rendered with:", { 
      activeCategory, 
      externalActiveCategory, 
      internalActiveCategory,
      hasCallback: typeof onCategoryChange === 'function' 
    });
  }, [activeCategory, externalActiveCategory, internalActiveCategory, onCategoryChange]);

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked:", category);
    
    // Update internal state regardless
    setInternalActiveCategory(category);
    
    // Call external handler if provided
    if (typeof onCategoryChange === 'function') {
      console.log("Calling onCategoryChange with:", category);
      onCategoryChange(category);
    } else {
      console.log("No onCategoryChange function provided - using internal state only");
      console.warn("IMPORTANT: For filtering to work, the parent component must pass an onCategoryChange function that updates the product list");
    }
  };

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          // Extract the necessary values based on whether it's a string or object
          const categorySlug = typeof category === "object" ? category.slug : category;
          const categoryName = typeof category === "object" ? category.name : category;
          
          // Use categorySlug as the unique key
          return (
            <Button
              key={categorySlug}
              variant={activeCategory === categorySlug ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryClick(categorySlug)}
              className="capitalize"
            >
              {categoryName}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
