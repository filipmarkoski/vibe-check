import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Welcome to Product Aggregator
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover and explore our curated collection of premium products from various categories.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </Link>
          <Link
            href="/about"
            className="px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Latest Products</h2>
          <p className="text-gray-600">Discover our newest additions to the store.</p>
          <Link 
            href="/products" 
            className="inline-block mt-4 text-blue-600 hover:text-blue-800"
          >
            View Latest →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Popular Categories</h2>
          <p className="text-gray-600">Browse through our most popular product categories.</p>
          <Link 
            href="/products" 
            className="inline-block mt-4 text-blue-600 hover:text-blue-800"
          >
            Explore Categories →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Special Deals</h2>
          <p className="text-gray-600">Check out our limited-time offers and promotions.</p>
          <Link 
            href="/products" 
            className="inline-block mt-4 text-blue-600 hover:text-blue-800"
          >
            See Deals →
          </Link>
        </div>
      </div>
    </div>
  );
}
