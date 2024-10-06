import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    // idが違えばsign-inページに行く
    redirect("/sign-in");
  }

  return <>{children}</>;
}
