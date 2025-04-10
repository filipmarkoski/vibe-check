"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

export function ProductErrorMessage() {
  return (
    <div className="text-center py-10 border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
      <p className="mb-6 text-gray-600">
        Sorry, we couldn&apos;t find the product you&apos;re looking for.
      </p>
      <Link href="/products" className="no-underline">
        <Button className="border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          Back to Products
        </Button>
      </Link>
    </div>
  );
}