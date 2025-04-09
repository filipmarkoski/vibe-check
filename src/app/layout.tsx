import "~/styles/globals.css";

import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export const metadata = {
  title: "Vibe Check",
  description: "Your ultimate aggregator for discovering the best products across the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
