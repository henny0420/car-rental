import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";


export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;
    console.log("Middleware checking:", path, "Role:", token?.role);


    if (path.startsWith("/owner") && token?.role !== "owner") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {

      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/owner/:path*",
    "/profile",
  ],
};