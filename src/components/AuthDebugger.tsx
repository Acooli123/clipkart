"use client";
import { useUser } from "@/context/UserContext";

export default function AuthDebugger() {
  const { user, isAuthenticated } = useUser();

  return (
    <div className="fixed top-4 right-4 bg-black text-white p-4 rounded-lg text-xs z-50 max-w-xs">
      <h3 className="font-bold mb-2">🔐 Auth Debug</h3>
      <div className="space-y-1">
        <p><strong>Authenticated:</strong> {isAuthenticated ? '✅ Yes' : '❌ No'}</p>
        <p><strong>User:</strong> {user ? user.name : 'None'}</p>
        <p><strong>Email:</strong> {user ? user.email : 'None'}</p>
        <p><strong>ID:</strong> {user ? user._id : 'None'}</p>
      </div>
    </div>
  );
}
