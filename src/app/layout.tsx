import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import { UserProvider } from "@/context/UserContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <UserProvider>
          <CartProvider>
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50 w-full bg-white shadow-md">
              <Navbar />
            </div>

            {/* Page-specific content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <Footer />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
