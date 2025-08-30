import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Example: protect /cart and /checkout routes
  if (req.nextUrl.pathname.startsWith("/cart") || req.nextUrl.pathname.startsWith("/checkout")) {
    const token = req.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
