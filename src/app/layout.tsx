import "~/styles/globals.css";

import { Inter, Space_Grotesk } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/app/_components/Navbar";
import Footer from "~/app/_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Vibe Check | Product Aggregator",
  description: "Compare and find the best products across multiple marketplaces",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col bg-background`}>
        <TRPCReactProvider>
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
