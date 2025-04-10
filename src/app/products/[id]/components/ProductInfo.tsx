'use client';

import { type Product } from '~/types/product';
import { getStockStatus, calculateDiscountedPrice } from '~/utils/product-utils';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const stockStatus = getStockStatus(product.stock);
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discountPercentage
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
      
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl">${discountedPrice.toFixed(2)}</span>
        {product.discountPercentage > 0 && (
          <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <span className={stockStatus.colorClass}>{stockStatus.text}</span>
        {product.stock > 0 && (
          <span className="text-gray-600">({product.stock} available)</span>
        )}
      </div>
      
      {product.rating > 0 && (
        <div className="flex items-center gap-2">
          <span>Rating: {product.rating.toFixed(1)} / 5</span>
        </div>
      )}
      
      <div className="mt-2">
        <span className="text-gray-600">Brand: {product.brand}</span>
      </div>
      
      <div className="mt-2">
        <span className="text-gray-600">Category: {product.category}</span>
      </div>
    </div>
  );
}