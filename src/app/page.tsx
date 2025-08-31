"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isAuthenticated, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log('🔄 Main page useEffect - isAuthenticated:', isAuthenticated, 'user:', user);
    
    // Add a small delay to ensure UserContext is properly initialized
    const timer = setTimeout(() => {
      if (isAuthenticated && user) {
        console.log('✅ User authenticated, redirecting to /home');
        router.push('/home');
      } else {
        console.log('❌ User not authenticated, redirecting to /login');
        router.push('/login');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isAuthenticated, user, router]);

  // Show loading while redirecting
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500"></div>
      <p className="mt-4 text-gray-600">Redirecting...</p>
    </div>
  );
}
