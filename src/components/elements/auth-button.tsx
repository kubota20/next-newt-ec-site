// clerk
import {
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
  ClerkLoading,
  ClerkLoaded,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

// icon
import { LogIn } from "lucide-react";

// components
import { UserLoading } from "@/components/elements/loadings/user-loading";

export const AuthButton = () => {
  const { userId } = auth();

  if (!userId) {
    return (
      <>
        <SignUpButton mode="modal">
          <p className="hover:text-slate-600 hover:cursor-pointer">SignUp</p>
        </SignUpButton>
        <SignInButton mode="modal">
          <p className="hover:text-slate-600 hover:cursor-pointer">
            <LogIn size={25} />
          </p>
        </SignInButton>
      </>
    );
  }
  return (
    <>
      {/* ロード中に表示 */}
      <ClerkLoading>
        <UserLoading />
      </ClerkLoading>

      {/* ロード後に表示 */}
      <ClerkLoaded>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ClerkLoaded>
    </>
  );
};
