// icon
import { Menu } from "lucide-react";

// components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MainNav } from "@/components/layouts/main-nav";
import CartButton from "@/components/ui/cart-button";
import { AuthButton } from "../auth-button";

export const Navbar = () => {
  return (
    <div className="flex items-center relative">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-white" side="left">
          <SheetHeader>
            <SheetTitle>メニュー</SheetTitle>
          </SheetHeader>
          <div className="my-10">
            <nav className="flex flex-col gap-2">
              <MainNav />
            </nav>
            <div className="mt-3 ml-auto flex items-center gap-x-4">
              <CartButton className="rounded-full bg-black px-4 py-2" />
              <AuthButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
