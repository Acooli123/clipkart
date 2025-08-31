import "./globals.css";

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
