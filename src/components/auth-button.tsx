"use client";

// clerk
import {
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
  ClerkLoading,
} from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";

// icon
import { LogIn } from "lucide-react";

// components
import { UserLoading } from "@/components/loadings/user-loading";

export const AuthButton = () => {
  const { session } = useSession();

  if (!session) {
    return (
      <>
        <SignUpButton mode="modal">
          <p className="hover:text-slate-600 hover:cursor-pointer max-sm:text-xs text-nowrap">
            会員登録
          </p>
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
      <ClerkLoading>
        <UserLoading />
      </ClerkLoading>
      {/* ロード後に表示 */}

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};
