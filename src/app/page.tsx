import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section with Left-side text / Right-side image Layout */}
      <section className="w-full py-16 bg-white relative overflow-hidden">
        <div className="absolute top-8 left-12 w-20 h-20 rounded-full bg-primary border-4 border-black"></div>
        <div className="absolute -top-6 right-1/3 w-16 h-16 rotate-12 bg-primary border-4 border-black"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="w-full md:w-1/2 text-left">
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight relative">
                <span className="relative z-10">
                  Find The 
                  <span className="inline-block bg-primary px-2 mx-2 border-4 border-black transform -rotate-2 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                    Best
                  </span>
                  Products
                </span>
                <div className="absolute -bottom-3 left-0 w-36 h-4 bg-accent"></div>
              </h1>
              
              <p className="text-lg md:text-xl font-medium mb-8 max-w-lg">
                Compare prices across marketplaces. Make smarter buying decisions in minutes, not hours.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="no-underline">
                  <Button size="lg" className="text-lg border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    Start Browsing
                  </Button>
                </Link>
                <Link href="/about" className="no-underline">
                  <Button size="lg" variant="outline" className="text-lg border-4 border-black bg-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Side - Hero Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded overflow-hidden hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src="/images/shopping-blocko-3-removebg-preview.png"
                    alt="Vibe Check Shopping Experience" 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-none"
                  />
                  <div className="absolute inset-0 bg-black/5"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent border-4 border-black z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-secondary border-y-4 border-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-extrabold mb-3">How It Works</h2>
            <div className="h-2 w-24 bg-accent mb-6 border-2 border-black"></div>
            <p className="text-xl max-w-2xl text-center">
              Our platform makes it easy to find and compare products across multiple marketplaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="transform transition-transform hover:translate-y-[-8px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="w-12 h-12 mb-4 bg-primary text-black flex items-center justify-center border-4 border-black rounded-full font-bold text-xl">1</div>
                <CardTitle>Search Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Find any product you&apos;re interested in using our powerful search engine.</p>
              </CardContent>
              <CardFooter>
                <Link href="/products" className="no-underline">
                  <Button variant="ghost" className="font-medium">
                    Try It Now →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            {/* Feature 2 */}
            <Card className="transform transition-transform hover:translate-y-[-8px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="w-12 h-12 mb-4 bg-accent text-white flex items-center justify-center border-4 border-black rounded-full font-bold text-xl">2</div>
                <CardTitle>Compare Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p>View detailed comparisons of prices, features, and reviews across platforms.</p>
              </CardContent>
              <CardFooter>
                <Link href="/products" className="no-underline">
                  <Button variant="ghost" className="font-medium">
                    Learn More →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            {/* Feature 3 */}
            <Card className="transform transition-transform hover:translate-y-[-8px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="w-12 h-12 mb-4 bg-primary text-black flex items-center justify-center border-4 border-black rounded-full font-bold text-xl">3</div>
                <CardTitle>Make Smart Choices</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get the best deals and make informed decisions with confidence.</p>
              </CardContent>
              <CardFooter>
                <Link href="/products" className="no-underline">
                  <Button variant="ghost" className="font-medium">
                    Get Started →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Product Categories - Left-side text / Right-side images */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="w-full md:w-1/3 text-left">
              <h2 className="text-4xl font-extrabold mb-3">Popular Categories</h2>
              <div className="h-2 w-24 bg-primary mb-6 border-2 border-black"></div>
              <p className="text-lg mb-8">
                Browse through our most popular product categories and find exactly what you&apos;re looking for.
              </p>
              
              <Link href="/products" className="no-underline">
                <Button size="lg" className="border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  View All Categories
                </Button>
              </Link>
            </div>
            
            {/* Right Side - Category Images Grid */}
            <div className="w-full md:w-2/3 grid grid-cols-2 gap-6">
              {/* Category 1 */}
              <Link href="/products?category=electronics" className="group cursor-pointer no-underline">
                <div className="aspect-square relative border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=2073"
                    alt="Electronics"
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white font-bold text-xl">Electronics</h3>
                  </div>
                </div>
              </Link>
              
              {/* Category 2 */}
              <Link href="/products?category=fashion" className="group cursor-pointer no-underline">
                <div className="aspect-square relative border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070"
                    alt="Fashion"
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white font-bold text-xl">Fashion</h3>
                  </div>
                </div>
              </Link>
              
              {/* Category 3 */}
              <Link href="/products?category=home" className="group cursor-pointer no-underline">
                <div className="aspect-square relative border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2031"
                    alt="Home"
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white font-bold text-xl">Home</h3>
                  </div>
                </div>
              </Link>
              
              {/* Category 4 */}
              <Link href="/products?category=beauty" className="group cursor-pointer no-underline">
                <div className="aspect-square relative border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070"
                    alt="Beauty"
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white font-bold text-xl">Beauty</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call-to-Action Section */}
      <section className="w-full py-20 bg-primary border-y-4 border-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-3/5 text-left">
              <h2 className="text-4xl font-extrabold mb-6">Ready to Start Saving?</h2>
              <p className="text-xl mb-8 md:mb-0">
                Join thousands of smart shoppers who are finding the best deals across the web with Vibe Check.
              </p>
            </div>
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
              <Link href="/signup" className="no-underline">
                <Button variant="accent" size="lg" className="text-white text-lg border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Left text, Right testimonials */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left Side - Heading */}
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl font-extrabold mb-3">What Our Users Say</h2>
              <div className="h-2 w-24 bg-accent mb-6 border-2 border-black"></div>
              <p className="text-lg mb-8">
                Don&apos;t just take our word for it. See what our users have to say about their experience with Vibe Check.
              </p>
            </div>
            
            {/* Right Side - Testimonial Grid */}
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <Card className="transform transition-transform hover:-translate-y-2 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4">
                    &quot;I saved over $300 on my laptop purchase by comparing prices across different stores. This site is a game-changer!&quot;
                  </p>
                  <p className="font-bold">- Sarah Johnson</p>
                </CardContent>
              </Card>
              
              {/* Testimonial 2 */}
              <Card className="transform transition-transform hover:-translate-y-2 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4">
                    &quot;The comparison tools are so easy to use. I can quickly see which store has the best price and shipping options.&quot;
                  </p>
                  <p className="font-bold">- Michael Chen</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
