import { NextRequest, NextResponse } from "next/server";
import * as JWT from "@/helpers/jwt";
import { NextURL } from "next/dist/server/web/next-url";
import { getAuthCookie } from "@/actions/cookies";

const AUTH_PAGES = ["/dashboard"];
const isAuthPages = (url: string) =>
  AUTH_PAGES.some((page: string) => page.startsWith(url));

const goToLoginPage = (url: string, nextUrl: NextURL) => {
  const searchParams = new URLSearchParams(nextUrl.searchParams);
  searchParams.set("next", nextUrl.pathname);
  return NextResponse.redirect(new URL(`/login?${searchParams}`, url));
};

export const middleware = async (request: NextRequest) => {
  const { url, nextUrl } = request;
  const { value: token } = getAuthCookie() ?? { value: null };
  let hasVerifiedToken = false;
  if (token) {
    const decoded = await JWT.verifyJwtToken(token);
    if (decoded) {
      hasVerifiedToken = !!decoded;
    }
  }

  if (request.nextUrl.pathname === "/login" && hasVerifiedToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const isAuthPageRequested = isAuthPages(nextUrl.pathname);
  if (isAuthPageRequested && !hasVerifiedToken) {
    return goToLoginPage(url, nextUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/login", "/dashboard", "/dashboard/:path*"],
};
