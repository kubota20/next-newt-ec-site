"use client";

import { useState, useEffect } from "react";

interface CurrencyProps {
  value?: string | number;
}

// priceを日本の数値書式にします decimalで ¥ 記号を消します
const formatter = new Intl.NumberFormat("ja-JP", {
  style: "decimal",
  currency: "JPY",
});

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="font-semibold">{formatter.format(Number(value))}円</div>
  );
};

export default Currency;
