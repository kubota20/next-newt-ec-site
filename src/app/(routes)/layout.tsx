import Footer from "@/components/layouts/footer";

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        {children}
        <Footer />
      </div>
    </>
  );
}
