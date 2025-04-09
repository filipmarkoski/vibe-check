import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/app/_components/Navbar";
import Footer from "~/app/_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Product Aggregator",
  description: "A T3 Stack product aggregator application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased min-h-screen flex flex-col bg-gray-50`}>
        <TRPCReactProvider>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="max-w-screen-xl mx-auto">
              {children}
            </div>
          </main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
