import Link from "next/link";

// components
import Container from "@/components/elements/container";
import { MainNav } from "@/components/layouts/main-nav";
import { Navbar } from "@/components/layouts/navbar";

const HeaderNav = () => {
  return (
    <header className="fixed z-10 w-full">
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
            <nav className="flex gap-4 lg:gap-6">
              <MainNav />
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderNav;
