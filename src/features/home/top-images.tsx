"use client";

import { useRef } from "react";
import Image from "next/image";

// test
import { TopData } from "@/datatest/top-data";

// components
import { Button } from "@/components/elements/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/elements/carousel";

// プラグインURL　https://www.embla-carousel.com/plugins/autoplay/
import Autoplay from "embla-carousel-autoplay";

export const TopImages = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="relative"
      >
        <CarouselContent>
          {TopData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[420px] sm:h-[720px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  // priorityはLCP画像用
                  priority={index === 0}
                  className="object-cover h-full"
                />
                {/* 黒い半透明のオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300 bg-black opacity-35" />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="absolute top-24 left-0 text-6xl md:text-7xl lg:text-9xl text-white ">
                    {item.title}
                  </h1>

                  <Button className="text-black absolute top-3/4 right-10 md:right-20 shadow-lg hover:cursor-pointer lg:p-8 lg:text-xl">
                    {item.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
