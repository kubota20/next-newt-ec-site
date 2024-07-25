import Link from "next/link";

export const MainNav = () => {
  const routes = [
    {
      href: `/products`,
      label: "商品",
      active: `/products`,
    },
    {
      href: `/carts`,
      label: "カート",
      active: `/carts`,
    },
    {
      href: `/news`,
      label: "イベント",
      active: `/news`,
    },
    {
      href: `/contact`,
      label: "お問い合わせ",
      active: `/contact`,
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <p key={route.href}>
          <Link href={route.href} className="hover:text-slate-600">
            {route.label}
          </Link>
        </p>
      ))}
    </>
  );
};
