import Image from 'next/image';
import Link from 'next/link';
import { Button } from '~/components/ui/button';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative border-4 border-black p-10 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12 overflow-hidden">
          <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-primary border-4 border-black transform rotate-12"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent border-l-4 border-t-4 border-black -mb-6 -mr-6"></div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 relative z-10 tracking-tight">
            About <span className="bg-primary px-4 py-2 inline-block transform -rotate-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Vibe Check</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-3xl">
            We&apos;re on a mission to revolutionize how people shop online by providing the most comprehensive product comparison platform on the web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] hover:shadow-[8px_13px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-3">
              Founded in 2023, Vibe Check began with a simple observation: online shopping is overwhelming.
            </p>
            <p className="mb-3">
              With countless options across dozens of marketplaces, finding the best products at the best prices had become a frustrating time sink for consumers.
            </p>
            <p>
              Our founders set out to create a solution that brings clarity to online shopping - a platform that aggregates products from multiple sources and provides straightforward comparisons.
            </p>
          </div>
          
          <div className="relative aspect-square border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000"
              alt="Vibe Check Team"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary p-3 border-t-4 border-black">
              <p className="font-bold text-center">The Vibe Check team, April 2025</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="mb-16">
        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="text-3xl font-extrabold mb-6">Our Mission</h2>
          <p className="text-xl font-medium mb-4">
            At Vibe Check, we&apos;re committed to bringing transparency and efficiency to online shopping through:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Comprehensive Coverage</h3>
              <p>Aggregating products from over 50+ marketplaces to ensure you never miss the best deal</p>
            </div>
            <div className="bg-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Real-Time Comparisons</h3>
              <p>Providing up-to-date pricing and availability information across all major retailers</p>
            </div>
            <div className="bg-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Unbiased Reviews</h3>
              <p>Collecting and analyzing customer reviews to give you the real story behind every product</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology */}
      <section className="mb-16">
        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-extrabold mb-6">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                We&apos;ve built Vibe Check using cutting-edge technologies to ensure a fast, reliable, and intuitive experience:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary inline-flex items-center justify-center border-2 border-black mr-2 flex-shrink-0">✓</span>
                  <span>Real-time product data synchronization across marketplaces</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary inline-flex items-center justify-center border-2 border-black mr-2 flex-shrink-0">✓</span>
                  <span>Advanced filtering and personalization algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary inline-flex items-center justify-center border-2 border-black mr-2 flex-shrink-0">✓</span>
                  <span>Lightning-fast search powered by modern T3 stack</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary inline-flex items-center justify-center border-2 border-black mr-2 flex-shrink-0">✓</span>
                  <span>Mobile-first design for shopping on the go</span>
                </li>
              </ul>
            </div>
            <div className="border-4 border-black p-5 bg-secondary">
              <h3 className="font-bold mb-3">Our Tech Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="border-4 border-black p-2 bg-white">
                  <p className="font-bold">Frontend</p>
                  <p className="text-sm">Next.js, React, TypeScript, Tailwind</p>
                </div>
                <div className="border-4 border-black p-2 bg-white">
                  <p className="font-bold">Backend</p>
                  <p className="text-sm">Node.js, tRPC, PostgreSQL</p>
                </div>
                <div className="border-4 border-black p-2 bg-white">
                  <p className="font-bold">Infrastructure</p>
                  <p className="text-sm">Vercel, Docker, AWS</p>
                </div>
                <div className="border-4 border-black p-2 bg-white">
                  <p className="font-bold">Data Processing</p>
                  <p className="text-sm">Redis, RabbitMQ, Python</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="mb-20">
        <div className="border-4 border-black p-8 bg-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-20 bg-accent border-r-4 border-b-4 border-black"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent border-l-4 border-t-4 border-black"></div>
          <h2 className="text-3xl font-extrabold mb-6 relative z-10">Join the Vibe Check Community</h2>
          <p className="text-lg font-medium mb-6 max-w-2xl mx-auto relative z-10">
            Start finding the best products at the best prices today. Create an account to save your favorites, get price drop alerts, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/signup" className="no-underline">
              <Button size="lg" className="text-lg border-4 border-black font-bold bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                Create an Account
              </Button>
            </Link>
            <Link href="/contact" className="no-underline">
              <Button size="lg" variant="outline" className="text-lg border-4 border-black bg-accent text-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
