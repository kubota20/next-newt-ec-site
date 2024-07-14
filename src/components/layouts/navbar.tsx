import Link from "next/link";
import Container from "../elements/container";
import { MainNav } from "./main-nav";

const Navbar = () => {
  return (
    <header className="fixed z-10 w-full">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">Books</h1>
          </Link>

          <MainNav />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
