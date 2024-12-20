"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// components
import Container from "@/components/ui/container";
import { NewsBox } from "@/components/news-box";
import NewsImage from "@/components/pages/home/news-image";

// test
import { NewsData } from "@/datatest/news-data";

const EventNews = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observerを使って、スクロール位置を監視
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 見えたらアニメーションを開始
        }
      },
      {
        threshold: 0.1, // 要素が10%表示された時に発動
      }
    );

    const element = document.getElementById("event-news");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="event-news" className="bg-[#B5ADA8]">
      <Container>
        <div className="my-20 ">
          <div className="flex items-center justify-between ">
            <div className="w-full flex flex-col max-md:items-center justify-center ">
              <h2 className="mb-10 text-2xl sm:text-4xl font-bold ">
                近日行われるイベント
              </h2>
              {/* News */}
              <div className="flex-1 mr-4">
                {NewsData.map((item) => (
                  <NewsBox key={item.id} item={item} />
                ))}
              </div>
            </div>
            {/* News Image */}
            <div className="flex-1 max-md:hidden w-full">
              <NewsImage isVisible={isVisible} />
            </div>
          </div>

          {/* Products Link */}
        </div>
        <div className="text-right underline mb-2">
          <Link href="/news">イベントを見に行く</Link>
        </div>
      </Container>
    </section>
  );
};

export default EventNews;
