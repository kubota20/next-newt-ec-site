// ログイン用
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <p className="text-center m-12 font-bold text-2xl">ログインして下さい</p>
      <SignIn />
    </div>
  );
}
