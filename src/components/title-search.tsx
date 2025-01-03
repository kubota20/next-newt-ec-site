"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

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
                {fromattedItems.map((item) => (
                  <CommandItem
                    key={item.label}
                    value={item.label}
                    onSelect={() => handleSelect(item)}
                  >
                    {item.label}
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
