"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// types
import { CategoryProps } from "@/types/types";
import { useRouter, useParams } from "next/navigation";

type CategorySelectProps = {
  catItem: CategoryProps[] | undefined;
};

export const CategorySelect = ({ catItem }: CategorySelectProps) => {
  const router = useRouter();

  const params = useParams();

  if (!catItem) {
    return <div>中身なし</div>;
  }

  const handleChange = (value: string) => {
    // 選択されたカテゴリのslugに基づいてページ遷移
    router.push(`/categories/${value}`);
  };

  const currentCategory = catItem.find((cat) => cat._id === params?.category);

  return (
    <div>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="min-w-[180px] bg-white ">
          <SelectValue
            placeholder={
              // カテゴリページ遷移したらplaceholderの表示が選択したカテゴリ名になる
              // それ以外は"カテゴリ選択"と表示
              currentCategory ? currentCategory.name : "カテゴリ選択"
            }
          />
        </SelectTrigger>
        <SelectContent>
          {catItem.map((item) => (
            <SelectGroup key={item._id}>
              <SelectItem value={item._id}>{item.name}</SelectItem>
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
