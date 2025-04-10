import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import type { SafeProduct } from "~/utils/product-utils";

interface ProductTabsProps {
  product: SafeProduct;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  return (
    <div className="border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="description" className="font-bold">Description</TabsTrigger>
          <TabsTrigger value="specifications" className="font-bold">Specifications</TabsTrigger>
          <TabsTrigger value="reviews" className="font-bold">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="p-4">
          <h3 className="text-lg font-bold mb-2">Product Description</h3>
          <p>{product.description}</p>
        </TabsContent>
        <TabsContent value="specifications" className="p-4">
          <h3 className="text-lg font-bold mb-2">Technical Specifications</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Category: {product.category}</li>
            {product.features?.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="reviews" className="p-4">
          <h3 className="text-lg font-bold mb-2">Customer Reviews</h3>
          <p>No reviews yet. Be the first to review this product!</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}