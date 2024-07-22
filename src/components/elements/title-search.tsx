// components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/elements/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/elements/command";
import { Button } from "@/components/elements/button";

// icon
import { Search } from "lucide-react";

export const TitleSearch = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon" className="border">
            <Search />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-white">
          <Command>
            <CommandInput placeholder="タイトル検索" />
            <CommandList>
              <CommandEmpty>見つかりませんでした</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
