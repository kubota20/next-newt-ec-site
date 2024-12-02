"use server";
import { cache } from "react";

// lib
import { cdnClient } from "@/lib/newt";

// types
import { CategoryProps } from "@/types/types";

export const getCategory = cache(async () => {
  const { items } = await cdnClient.getContents<CategoryProps>({
    appUid: "product",
    modelUid: "category",
    query: {
      select: ["_id", "name", "slug"],
    },
  });

  return items;
});
