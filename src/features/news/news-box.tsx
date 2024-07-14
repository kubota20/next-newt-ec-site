import { NewsDataProps } from "@/datatest/news-data";
import React from "react";

interface NewsProps {
  item: NewsDataProps;
}

export const NewsBox: React.FC<NewsProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-start justify-between w-[406px]">
      <div className="my-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold mb-1">{item.title}</h4>
          <p className="text-xs">投稿日: {item.date}</p>
        </div>
        <p className="line-clamp-3">{item.description}</p>
      </div>
    </div>
  );
};
