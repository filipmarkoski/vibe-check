"use client";

import { useState, useEffect } from "react";
import ProductFilters from "~/app/_components/products/ProductFilters";
import ProductGrid from "~/app/_components/products/ProductGrid"; // Assuming you have this component

export default function ProductsPage() {
  // State for categories and selected category
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category-list');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products based on selected category
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Use category endpoint if a category is selected, otherwise get all products
        const url = activeCategory 
          ? `https://dummyjson.com/products/category/${activeCategory}`
          : 'https://dummyjson.com/products';
        
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory]); // Re-fetch when category changes

  // Handler to update the active category
  const handleCategoryChange = (category: string) => {
    console.log("Parent received category change:", category);
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      
      {/* Pass the state and handler to ProductFilters */}
      <ProductFilters 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      {loading ? (
        <div className="text-center py-12">Loading products...</div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}
