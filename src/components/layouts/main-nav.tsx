export const MainNav = () => {
  const routes = [
    {
      href: `/products`,
      label: "商品",
      active: `/products`,
    },
    {
      href: `/news`,
      label: "イベント",
      active: `/news`,
    },
    {
      href: `/carts`,
      label: "カート",
      active: `/cart`,
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
          <a href={route.href} className="hover:text-slate-600">
            {route.label}
          </a>
        </p>
      ))}
    </>
  );
};
