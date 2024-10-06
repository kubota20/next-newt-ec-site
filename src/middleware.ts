import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isCartRoute = createRouteMatcher(["/carts(.*)"]);

export default clerkMiddleware((auth, req) => {
  // カートルートの保護
  if (isCartRoute(req)) {
    const { userId } = auth();
    // ユーザーがカートページを使用する時ログインしていない場合、ログインページにリダイレクト
    if (!userId) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  // 認証されている場合は次に進む
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
