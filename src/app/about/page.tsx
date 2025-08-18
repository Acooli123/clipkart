import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col -mt-5 min-h-screen w-full">
      {/* Navbar fixed at the top, full width */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* Page content */}
      <div className="flex-grow  p-6">
        It is the about page of clipkart.
      </div>

      <Footer />
    </div>
  );
}
