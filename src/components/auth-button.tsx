// clerk
import {
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
  ClerkLoading,
  ClerkLoaded,
} from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

// icon
import { LogIn } from "lucide-react";

// components
import { UserLoading } from "@/components/loadings/user-loading";

export const AuthButton = async () => {
  const user = await currentUser();
  const { userId } = auth();

  if (!userId) {
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
