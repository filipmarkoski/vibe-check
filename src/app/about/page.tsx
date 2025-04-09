export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Our Aggregator</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          We strive to provide a comprehensive collection of the best products available online.
          Our platform aggregates products from various sources to help you make informed decisions
          and find exactly what you're looking for.
        </p>
        <p className="text-gray-700">
          Whether you're looking for electronics, home furniture, kitchen appliances, or decorative
          items, our platform brings everything together in one convenient place.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-700">
            Our dedicated team of experts works tirelessly to curate the best products and ensure
            our platform provides an excellent user experience. With backgrounds in e-commerce,
            technology, and customer service, we're committed to helping you find what you need.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Our Technology</h2>
          <p className="text-gray-700">
            Built with the T3 Stack (TypeScript, Tailwind CSS, and tRPC), our platform
            delivers a fast, responsive, and user-friendly experience. We leverage modern
            web technologies to ensure reliability and performance.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Have questions or suggestions? We'd love to hear from you! Reach out to our team at:
        </p>
        <p className="text-blue-600">contact@aggregator.example.com</p>
      </div>
    </div>
  );
}
