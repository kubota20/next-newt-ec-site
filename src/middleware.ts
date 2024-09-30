import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  // カート関連のパスをチェック
  if (req.nextUrl.pathname.startsWith("/carts") && !userId) {
    // ユーザーがログインしていない場合、ログインページにリダイレクト
    const loginUrl = new URL("/sign-in", req.url);
    loginUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
