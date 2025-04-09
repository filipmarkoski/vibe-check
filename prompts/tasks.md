# tasks.md

## Introduction

This document outlines the tasks for our T3-stack aggregator project, **excluding** any authentication (Clerk) or external storage (Upstash) for now. Our primary focus is to:
- Use **mock data** in a clean, minimal way.
- Build out a **presentable UI** with Tailwind (optionally with Shadcn UI or Radix UI if desired).

Everything is broken into phases. Complete each phase in order to ensure a stable, presentable final product.
- **Out of Scope** (for now): Drizzle, Prisma, real scraping logic, or advanced database integration.

### How to Use This Tasks File

1. **Check off tasks** as you (or the AI agent) complete them: `[ ]` becomes `[x]`.  
2. **Finish each phase** before moving on to the next one.  
3. **Add additional tasks** as needed, but keep them within the relevant phase.  
4. **Ensure the codebase remains minimal** and only includes what's necessary to reach the first milestone.
5. **Do not copy code** The file contains code example but you need to think for yourself and find the best solution for your given problem.

---

---

## Phase 1 (Completed)

- [x] **Initialize T3 Stack Project**  
  _Project has Next.js 15 App Router, TypeScript, Tailwind, and tRPC set up, confirmed working._

- [x] **Verify Basic Folder Structure**  
  _Confirmed `src/app/layout.tsx`, `src/app/page.tsx`, plus `src/server/api/routers` for tRPC, etc._

Since Phase 1 is already done, we move on.

---

## Phase 2: Organize Folder Structure & Placeholder Components

1. [x] **Review/Organize `src/app` Directory**  
   - Ensure `layout.tsx` includes a minimal HTML structure with `<main>` or `<section>` to render pages.  
   - If you have a `page.tsx` in `src/app`, confirm it renders a small greeting or info text (e.g., "Welcome to our aggregator!").

2. [x] **Create a Simple `Navbar` Component**  
   - Add a `src/app/(components)/Navbar.tsx` (or `src/components/Navbar.tsx` if you prefer).  
   - It should include a static logo or project title and a couple of placeholder nav links.

3. [x] **Integrate the Navbar**  
   - In `layout.tsx`, import the `Navbar` and place it at the top so it appears on all pages.  
   - Apply basic Tailwind classes for spacing, background color, or text styling.

4. [x] **Optional: Create a `Footer` Component**  
   - Similar approach: `src/app/(components)/Footer.tsx` or `src/components/Footer.tsx`.  
   - Provide some placeholder text, e.g., "© 2025 My Aggregator. All rights reserved."

5. [ ] **Linting & Formatting Check**  
   - Confirm you can run your linter and formatter with no major warnings (`npm run lint`, etc.).  
   - Fix any styling or formatting issues.

Once done, your project will have a minimal site frame with a Navbar (and possibly Footer).

---

## Phase 3: Mock Data & tRPC Integration

1. [ ] **Create a `mockData.ts`**  
   - Place it in `src/lib/mockData.ts` (or a suitable location).  
   - Export an array of items, for example:
     ```ts
     export const mockProducts = [
       { id: "p1", name: "Sample Product 1", price: 9.99 },
       { id: "p2", name: "Sample Product 2", price: 14.99 },
       // ...
     ];
     ```

2. [ ] **Set Up a Basic tRPC Router**  
   - In `src/server/api/routers`, create a `product.ts` (or `products.ts`) router.  
   - Add a `list` query that returns `mockProducts`. Example:
     ```ts
     import { publicProcedure } from "../trpc";
     import { mockProducts } from "~/lib/mockData";

     export const productRouter = {
       list: publicProcedure.query(() => mockProducts),
     };
     ```

3. [ ] **Add the Router to Root**  
   - In `src/server/api/root.ts`, import `productRouter` and merge it in:
     ```ts
     import { createTRPCRouter } from "./trpc";
     import { productRouter } from "./routers/product";

     export const appRouter = createTRPCRouter({
       product: productRouter,
       // ...other routers
     });

     export type AppRouter = typeof appRouter;
     ```

4. [ ] **Create a `ProductsPage`**  
   - In `src/app/products/page.tsx`, use the tRPC React hook to fetch `product.list`:
     ```ts
     import { api } from "~/utils/api"; // Adjust path as needed

     export default function ProductsPage() {
       const { data: products, isLoading } = api.product.list.useQuery();

       if (isLoading) return <div>Loading...</div>;

       return (
         <div>
           <h1 className="text-xl font-bold">Our Products</h1>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
             {products?.map((p) => (
               <div key={p.id} className="border p-4 rounded shadow">
                 <h2 className="font-semibold">{p.name}</h2>
                 <p>Price: ${p.price}</p>
               </div>
             ))}
           </div>
         </div>
       );
     }
     ```
   - Apply basic Tailwind classes for a presentable layout.

5. [ ] **Verify Data Flow**  
   - Run the dev server, navigate to `/products`, confirm the mock data renders.  
   - No errors in the console, no lint issues.

Once complete, you have a working example of how you’ll fetch and display data from tRPC, using in-memory mock data.

---

## Phase 4: UI & Styling Enhancements

1. [ ] **Refine Product Presentation**  
   - Add some Tailwind or Shadcn UI styling, e.g., hover effects, box shadows, or better typography.  
   - Possibly separate out a `ProductCard` component in `src/app/(components)/ProductCard.tsx` for clarity.

2. [ ] **Improve Navbar & Footer**  
   - Add minor styling to the navbar for a polished look (background color, spacing, etc.).  
   - If you have a footer, ensure it’s consistently styled with the overall theme.

3. [ ] **Add a Basic Home Page CTA**  
   - On `src/app/page.tsx`, add a short tagline or CTA button linking to the products page, e.g., “View Our Products.”

4. [ ] **Ensure Responsive Layout**  
   - Test the site on mobile widths.  
   - Adjust Tailwind classes if needed (e.g., `md:`, `lg:` breakpoints) to keep the design flexible.

5. [ ] **Accessibility Check**  
   - Use semantic HTML tags (`<nav>`, `<main>`, `<footer>`) if not already.  
   - Provide alt text for images (if any).  
   - Validate headings are logical (`<h1>`, `<h2>`, etc.).

6. [ ] **Lint & Final Verification**  
   - Confirm zero errors or warnings from ESLint and TypeScript.  
   - Confirm UI looks neat and consistent across at least a couple of viewport sizes.

---

## Phase 5: Final Review for Presentable Mock Demo

1. [ ] **Check Overall Flow**  
   - Home page → see a welcoming message → user navigates to `/products` → sees the mock products.  
   - Navbar links are consistent and functional.

2. [ ] **Optional Additional Pages**  
   - If desired, add a simple “About” page (`/about`) or “Contact” page (`/contact`) for completeness.  
   - Use the same layout with Navbar and Footer, verifying consistent styling.

3. [ ] **Polish & Clean-Up**  
   - Remove any unused files, variables, or example code leftover from the T3 scaffolding that you’re not actually using.  
   - Make sure you have a succinct `README.md` describing how to run and test the app.

Once Phase 5 is complete, you’ll have a **presentable T3-stack application** with:
- A minimal **layout** (Navbar, possibly Footer).
- **Mock data** displayed via tRPC queries.
- Tailwind styling for a responsive, user-friendly UI.

**End of tasks.md**
