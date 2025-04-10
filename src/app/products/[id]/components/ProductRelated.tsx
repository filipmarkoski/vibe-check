import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { getRelatedProducts } from "~/lib/api";
import { createSafeProduct } from "~/utils/product-utils";
import { tryCatch } from "~/lib/try-catch";

export default async function ProductRelated() {
  const { data: relatedProducts = [] } = await tryCatch(getRelatedProducts(4));
  const safeRelatedProducts = relatedProducts.map(product => createSafeProduct(product));

  return (
    <div className="border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4">
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      {safeRelatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {safeRelatedProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="no-underline">
              <Card className="border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all h-full flex flex-col">
                <CardContent className="p-2 flex-grow">
                  <div className="relative w-full aspect-square mb-2 overflow-hidden">
                    {product.thumbnail && (
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <h3 className="font-bold line-clamp-2">{product.title}</h3>
                </CardContent>
                <CardFooter className="p-2 pt-0">
                  <div className="font-bold">${product.price}</div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <p>No related products found.</p>
        </div>
      )}
    </div>
  );
}