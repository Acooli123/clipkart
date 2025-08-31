import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Routes that require authentication
  const protectedRoutes = [
    '/home',
    '/t-shirt',
    '/accessories', 
    '/mugs',
    '/product',
    '/cart',
    '/checkout',
    '/order'
  ];
  
  // Check if the current route requires authentication
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // For now, we'll let the client-side handle authentication
  // The middleware will be updated when we implement JWT tokens
  // This prevents the middleware from blocking requests while we use localStorage
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
