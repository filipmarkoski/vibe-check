import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { type ProductsResponse, type Product, type Category } from "~/types/product";

export const productRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().default(30),
        skip: z.number().default(0),
        sortBy: z.string().optional(),
        order: z.enum(["asc", "desc"]).nullable().transform((val) => val ?? "asc"), // Default to asc if null
        category: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      // Construct API URL based on inputs
      let url = 'https://dummyjson.com/products';
      
      if (input.category) {
        url += `/category/${input.category}`;
      }
      
      // Add query parameters
      const params = new URLSearchParams();
      
      if (input.limit) params.append('limit', input.limit.toString());
      if (input.skip) params.append('skip', input.skip.toString());
      if (input.sortBy) {
        params.append('sortBy', input.sortBy);
        // Make sure order is always specified when sortBy is provided
        params.append('order', input.order);
      }
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: `Failed to fetch products: ${response.statusText}`
        });
      }
      
      const data = await response.json() as ProductsResponse;
      return data;
    }),
  
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${input.id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new TRPCError({
              code: 'NOT_FOUND',
              message: `Product with ID ${input.id} not found`
            });
          }
          
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Failed to fetch product: ${response.statusText}`
          });
        }
        
        const product = await response.json() as Product;
        return product;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch product',
          cause: error
        });
      }
    }),
    
  getByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ input }) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${input.category}`);
        
        if (!response.ok) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Failed to fetch products in category ${input.category}: ${response.statusText}`
          });
        }
        
        const data = await response.json() as ProductsResponse;
        return data;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: `Failed to fetch products in category ${input.category}`,
          cause: error
        });
      }
    }),
    
  search: publicProcedure
    .input(z.object({ q: z.string() }))
    .query(async ({ input }) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(input.q)}`);
        
        if (!response.ok) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Failed to search products: ${response.statusText}`
          });
        }
        
        const data = await response.json() as ProductsResponse;
        return data;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to search products',
          cause: error
        });
      }
    }),
    
  categories: publicProcedure.query(async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/categories`);
      
      if (!response.ok) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: `Failed to fetch categories: ${response.statusText}`
        });
      }
      
      const categories = await response.json() as string[];
      return categories;
    } catch (error) {
      if (error instanceof TRPCError) throw error;
      
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch categories',
        cause: error
      });
    }
  }),
  
  categoryList: publicProcedure.query(async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/category-list`);
      
      if (!response.ok) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: `Failed to fetch category list: ${response.statusText}`
        });
      }
      
      const categoryList = await response.json() as string[];
      return categoryList;
    } catch (error) {
      if (error instanceof TRPCError) throw error;
      
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch category list',
        cause: error
      });
    }
  }),
  
  addProduct: publicProcedure
    .input(z.object({
      title: z.string().min(1, "Title is required"),
      description: z.string().optional(),
      price: z.number().min(0, "Price must be 0 or greater").optional(),
      discountPercentage: z.number().min(0).max(100).optional(),
      rating: z.number().min(0).max(5).optional(),
      stock: z.number().min(0).optional(),
      brand: z.string().optional(),
      category: z.string().optional(),
      thumbnail: z.string().url("Invalid thumbnail URL").optional(),
      images: z.array(z.string().url("Invalid image URL")).optional(),
    }))
    .mutation(async ({ input }) => {
      try {
        const response = await fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(input)
        });
        
        if (!response.ok) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Failed to add product: ${response.statusText}`
          });
        }
        
        const newProduct = await response.json() as Product;
        return newProduct;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to add product',
          cause: error
        });
      }
    }),
    
  updateProduct: publicProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().optional(),
      description: z.string().optional(),
      price: z.number().min(0).optional(),
      discountPercentage: z.number().min(0).max(100).optional(),
      rating: z.number().min(0).max(5).optional(),
      stock: z.number().min(0).optional(),
      brand: z.string().optional(),
      category: z.string().optional(),
      thumbnail: z.string().url("Invalid thumbnail URL").optional(),
      images: z.array(z.string().url("Invalid image URL")).optional(),
    }))
    .mutation(async ({ input }) => {
      try {
        const { id, ...updateData } = input;
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateData)
        });
        
        if (!response.ok) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Failed to update product: ${response.statusText}`
          });
        }
        
        const updatedProduct = await response.json() as Product;
        return updatedProduct;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to update product',
          cause: error
        });
      }
    }),
    
  deleteProduct: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${input.id}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Failed to delete product: ${response.statusText}`
          });
        }
        
        const deletedProduct = await response.json() as Product & { 
          isDeleted: boolean;
          deletedOn: string;
        };
        return deletedProduct;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to delete product',
          cause: error
        });
      }
    })
});
