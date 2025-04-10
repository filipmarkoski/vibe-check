"use client";

import { Product } from "~/types/product";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "~/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs";

interface ProductTabsProps {
  product: Product;
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="details" className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <TabsList className="grid grid-cols-3 border-b-2 border-black">
        <TabsTrigger value="details" className="font-bold border-r-2 border-black data-[state=active]:bg-primary data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none">Details</TabsTrigger>
        <TabsTrigger value="specifications" className="font-bold border-r-2 border-black data-[state=active]:bg-primary data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none">Specifications</TabsTrigger>
        <TabsTrigger value="reviews" className="font-bold data-[state=active]:bg-primary data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none">Reviews</TabsTrigger>
      </TabsList>
      
      {/* Details Tab */}
      <TabsContent value="details" className="p-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="description" className="border-2 border-black mb-3">
            <AccordionTrigger className="font-bold px-3 py-2 bg-gray-50 hover:bg-gray-100">Full Description</AccordionTrigger>
            <AccordionContent className="p-3">
              <p>{product.description}</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="shipping" className="border-2 border-black mb-3">
            <AccordionTrigger className="font-bold px-3 py-2 bg-gray-50 hover:bg-gray-100">Shipping Information</AccordionTrigger>
            <AccordionContent className="p-3">
              {product.shippingInformation ? (
                <p>{product.shippingInformation}</p>
              ) : (
                <p>Free shipping on all orders over $50. Standard delivery takes 3-5 business days.</p>
              )}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="returns" className="border-2 border-black">
            <AccordionTrigger className="font-bold px-3 py-2 bg-gray-50 hover:bg-gray-100">Return Policy</AccordionTrigger>
            <AccordionContent className="p-3">
              {product.returnPolicy ? (
                <p>{product.returnPolicy}</p>
              ) : (
                <p>30-day returns on unopened items. Please contact our customer support team to initiate a return.</p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
      
      {/* Specifications Tab */}
      <TabsContent value="specifications" className="p-4">
        <div className="border-2 border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
            <div className="p-3">
              <table className="w-full">
                <tbody className="divide-y-2 divide-black">
                  <tr>
                    <td className="py-2 pr-4 font-bold">Brand</td>
                    <td className="py-2">{product.brand}</td>
                  </tr>
                  {product.sku && (
                    <tr>
                      <td className="py-2 pr-4 font-bold">SKU</td>
                      <td className="py-2">{product.sku}</td>
                    </tr>
                  )}
                  {product.weight && (
                    <tr>
                      <td className="py-2 pr-4 font-bold">Weight</td>
                      <td className="py-2">{product.weight} kg</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-2 pr-4 font-bold">Stock</td>
                    <td className="py-2">{product.stock} units</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3">
              <table className="w-full">
                <tbody className="divide-y-2 divide-black">
                  {product.dimensions && (
                    <tr>
                      <td className="py-2 pr-4 font-bold">Dimensions</td>
                      <td className="py-2">
                        {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                      </td>
                    </tr>
                  )}
                  {product.warrantyInformation && (
                    <tr>
                      <td className="py-2 pr-4 font-bold">Warranty</td>
                      <td className="py-2">{product.warrantyInformation}</td>
                    </tr>
                  )}
                  {product.minimumOrderQuantity && (
                    <tr>
                      <td className="py-2 pr-4 font-bold">Min. Order</td>
                      <td className="py-2">{product.minimumOrderQuantity} units</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </TabsContent>
      
      {/* Reviews Tab */}
      <TabsContent value="reviews" className="p-4">
        <div className="border-2 border-black">
          <div className="p-3 bg-gray-50 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black">{product.rating}</span>
              <div>
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={`star-${i}`} className={i < Math.floor(product.rating) ? "text-amber-500" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <div className="text-xs font-medium">Based on {product.reviews?.length ?? 0} reviews</div>
              </div>
            </div>
          </div>
          <div className="p-3">
            {(product.reviews && product.reviews.length > 0) ? (
              <div className="divide-y-2 divide-black">
                {product.reviews.map((review, idx) => (
                  <div key={`review-${idx}`} className="py-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold">{review.reviewerName}</div>
                      <div className="bg-primary px-2 py-1 border-2 border-black text-xs font-medium">
                        {new Date(review.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex mb-2 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={`review-star-${i}`} className={i < review.rating ? "text-amber-500" : "text-gray-300"}>★</span>
                      ))}
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <h3 className="font-bold mb-2">No Reviews Yet</h3>
                <p>Be the first to review this product!</p>
              </div>
            )}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}