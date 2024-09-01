import Link from "next/link";

// components
import Container from "@/components/container";
import { AuthButton } from "@/components/shadcnUi/auth-button";
import { MainNav } from "@/components/layouts/main-nav";
import { Navbar } from "@/components/layouts/navbar";

const HeaderNav = () => {
  return (
    <header className="fixed z-10 w-full bg-black bg-opacity-80 text-white py-2 ">
      <Container>
        <div className="flex justify-between items-center">
          {/* ナビゲーションバー */}
          <div className="sm:hidden">
            <Navbar />
          </div>

          {/* ロゴ */}
          <div className="max-sm:w-full text-center">
            <Link href="/">
              <h1 className="text-2xl font-bold ">Books</h1>
            </Link>
          </div>

          {/* 640px以上で表示、ナビメニュー */}
          <div className="max-sm:hidden">
            <nav className="flex items-center  gap-x-4 lg:gap-6">
              <MainNav />
              {/* 認証ボタン */}
              <AuthButton />
            </nav>
          </div>

          {/* 認証ボタン スマホ用(640px以下) */}
          <div className="flex items-center gap-x-4 lg:gap-6 sm:hidden">
            <AuthButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderNav;
