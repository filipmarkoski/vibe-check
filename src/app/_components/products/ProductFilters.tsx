"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import type { CategoryObject } from "~/types/product";

interface ProductFiltersProps {
  categories: Array<string | CategoryObject>;
  activeCategory?: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    setIsOpen(false);
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
