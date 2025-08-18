import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Global Navbar can go here if you want it on all pages */}

        {/* Page-specific content */}
        {children}

        {/* Global Footer can go here if you want it on all pages */}
      </body>
    </html>
  );
}
