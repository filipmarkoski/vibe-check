import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to Vibe Check</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Your ultimate aggregator for discovering the best products across the web.
      </p>
      <Link 
        href="/products" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        View Our Products
      </Link>
    </div>
  );
}
