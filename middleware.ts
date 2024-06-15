import { NextRequest, NextResponse } from "next/server";
import { NextURL } from "next/dist/server/web/next-url";

const AUTH_PAGES = ["/dashboard"];
const isAuthPages = (url: string) =>
  AUTH_PAGES.some((page: string) => url.startsWith(page));

const goToLoginPage = (url: string, nextUrl: NextURL) => {
  const searchParams = new URLSearchParams(nextUrl.searchParams);
  searchParams.set("next", nextUrl.pathname);
  return NextResponse.redirect(new URL(`/login?${searchParams}`, url));
};

export const middleware = async (request: NextRequest) => {
  const { url, nextUrl } = request;
  const session = request.cookies.get("session")?.value;
  if (request.nextUrl.pathname === "/login" && !!session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const isAuthPageRequested = isAuthPages(nextUrl.pathname);
  if (isAuthPageRequested && !session) {
    return goToLoginPage(url, nextUrl);
  }

  return NextResponse.next();
};
