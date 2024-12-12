/**
 * Protect your origin and even cached routes and pages by implementing middleware.
 * This middleware will run on a request before it is completed.
 */
import { type NextConfig } from 'next';
import { type NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url));
}

export const config: NextConfig = {
  matcher: '/about/:path*',
};
