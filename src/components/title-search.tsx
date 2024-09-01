"use client";

import { useState } from "react";
import Link from "next/link";

import { useParams, useRouter } from "next/navigation";

// components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcnUi/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcnUi/command";
import { Button } from "@/components/shadcnUi/button";

// icon
import { Search } from "lucide-react";

// type
import { ProductProps } from "@/types/types";

type Props = {
  productData: ProductProps[];
};

export const TitleSearch = ({ productData }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const params = useParams();
  const router = useRouter();

  const fromattedItems = productData.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const handleSelect = (item: { value: string; label: string }) => {
    router.push(`/products/${item.value}`);
    setOpen(false);
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="border"
            role="combobox"
            aria-expanded={open}
          >
            <Search />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-white">
          <Command
            value={value}
            onValueChange={(newValue) => setValue(newValue)}
          >
            <CommandInput placeholder="タイトル検索" />
            <CommandList>
              <CommandEmpty>見つかりませんでした</CommandEmpty>
              <CommandGroup>
                {fromattedItems.map((item, index) => (
                  <CommandItem
                    key={item.label}
                    value={item.label}
                    onSelect={() => handleSelect(item)}
                  >
                    {index < 5 && item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
