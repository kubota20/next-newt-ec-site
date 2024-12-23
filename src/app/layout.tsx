import type { Metadata } from "next";

import { Noto_Sans_JP } from "next/font/google";

// providers
import ToastProvider from "@/providers/toast-providers";
import ModalProvider from "@/providers/modal-provider";

// styles
import "./globals.css";

// components
import HeaderNav from "@/components/layouts/header-nav";
import CartAction from "@/components/layouts/cart-action";

import Footer from "@/components/layouts/footer";

// clerk 認証機能
import { ClerkProvider } from "@clerk/nextjs";
import { jaJP } from "@clerk/localizations"; // 日本言語を取得

const inter = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <ClerkProvider localization={jaJP}>
        <body className={inter.className}>
          <HeaderNav />

          {children}
          <CartAction />
          <Footer />

          <ModalProvider />
          <ToastProvider />
        </body>
      </ClerkProvider>
    </html>
  );
}
