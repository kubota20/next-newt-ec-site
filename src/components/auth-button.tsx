"use client";

import { useEffect, useState, Suspense, useMemo, memo } from "react";

// clerk
import {
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
  ClerkLoading,
  ClerkLoaded,
} from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";

// icon
import { LogIn } from "lucide-react";

// components
import { UserLoading } from "@/components/loadings/user-loading";

export const AuthButton = () => {
  const { session } = useSession();
  // const [isSessionReady, setIsSessionReady] = useState(false);

  // // セッションが準備できたら表示
  // useEffect(() => {
  //   if (session !== undefined) {
  //     setIsSessionReady(true);
  //   }
  // }, [session]);

  // // ロード時に表示
  // if (!isSessionReady) {
  //   // セッション準備中ローディング表示
  //   // if文を使わずそのままreturn内に入れたがローディング表示されなかったのでif文を作りました。
  //   return (
  //     <div className="w-7">
  //       <ClerkLoading>
  //         <UserLoading />
  //       </ClerkLoading>
  //     </div>
  //   );
  // }

  if (!session) {
    return (
      <>
        <SignUpButton mode="modal">
          <p className="hover:text-slate-600 hover:cursor-pointer">会員登録</p>
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
