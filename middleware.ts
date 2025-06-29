import { NextRequest, NextResponse } from "next/server";
import _config from "@/config/config"; 

export async function middleware(req: NextRequest) {
  const projectId = _config.SUPABASE_CLIENT_PROJECT_ID;

  const token = req.cookies.get(`sb-${projectId}-auth-token`)?.value;
  const codeVerifierToken = req.cookies.get(
    `sb-${projectId}-auth-token-code-verifier`
  )?.value;

  const { pathname } = req.nextUrl;

  const protectedPaths = ["/"];

  if (codeVerifierToken && !pathname.startsWith("/auth/verify-email")) {
    return NextResponse.redirect(new URL("/auth/verify-email", req.url));
  }

  if (!codeVerifierToken && pathname.startsWith("/auth/verify-email")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/auth/") && token && !codeVerifierToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (protectedPaths.includes(pathname) && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}