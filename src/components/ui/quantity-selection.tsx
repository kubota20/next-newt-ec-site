"use client";

// type
import type { Dispatch, SetStateAction } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type QuantitySelectionProps = {
  setQuantity: Dispatch<SetStateAction<number>>;
};

const QuantitySelection = ({ setQuantity }: QuantitySelectionProps) => {
  // 選択された個数を管理する状態を定義

  // 個数を選択したときに状態を更新
  const handleQuantityChange = (value: string) => {
    setQuantity(Number(value)); // 選択された個数を状態に保存
  };

  // 個数選択肢を生成する関数
  const generateSelectItems = (max: number) => {
    return Array.from({ length: max }).map((_, index) => {
      const value = (index + 1).toString();
      return (
        <SelectItem key={value} value={value}>
          {value}
        </SelectItem>
      );
    });
  };

  return (
    <Select onValueChange={handleQuantityChange}>
      <SelectTrigger className="bg-white w-[80px]">
        <SelectValue placeholder="個数" />
      </SelectTrigger>
      <SelectContent className="bg-white min-w-[60px]">
        {generateSelectItems(5)}
      </SelectContent>
    </Select>
  );
};

export default QuantitySelection;
