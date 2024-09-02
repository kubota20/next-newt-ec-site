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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
