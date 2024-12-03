"use client";

import Link from "next/link";

interface MainNavProps {
  onClose?: (value: boolean) => void;
}

export const MainNav: React.FC<MainNavProps> = ({ onClose }) => {
  const routes = [
    {
      href: `/`,
      label: "ホーム",
    },
    {
      href: `/products`,
      label: "商品",
    },
    {
      href: `/news`,
      label: "イベント",
    },
    {
      href: `/carts`,
      label: "カート",
    },
    {
      href: `/contact`,
      label: "お問い合わせ",
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <p key={route.href}>
          <Link
            href={route.href}
            className="hover:text-slate-600"
            onClick={() => onClose?.(false)}
          >
            {route.label}
          </Link>
        </p>
      ))}
    </>
  );
};
