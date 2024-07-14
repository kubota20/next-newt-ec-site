import React from "react";
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
      href: `/order-details`,
      label: "注文履歴",
      active: `/order-details`,
    },
    {
      href: `/contact`,
      label: "お問い合わせ",
      active: `/contact`,
    },
  ];

  return (
    <nav>
      <ul className="flex space-x-4">
        {routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
