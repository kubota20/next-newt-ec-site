import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/elements/select";

export const CategorySelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="カテゴリー選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="教育">教育</SelectItem>
            <SelectItem value="文学">文学</SelectItem>
            <SelectItem value="ノンフィクション">ノンフィクション</SelectItem>
            <SelectItem value="ビジネス">ビジネス</SelectItem>
            <SelectItem value="歴史">歴史</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
