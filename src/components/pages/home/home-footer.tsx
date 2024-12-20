"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// 画像
import Footer1 from "@/images/footer1.jpg";
import Footer2 from "@/images/footer2.jpg";

// components
import { Button } from "@/components/ui/button";

const Footer = () => {
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

    const element = document.getElementById("footer");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  return (
    <footer id="footer" className="bg-[#191919] text-white px-4">
      <div className="flex items-center justify-around max-md:h-[300px] md:justify-between ">
        {/* マップ 住所 */}
        <div className="flex flex-col items-center md:mr-16">
          <div className="space-y-4 md:space-y-6 md:mb-14">
            <p className="font-bold max-sm:text-xl sm:text-2xl md:text-3xl">
              現在、
              <br />
              実店舗があります
            </p>
            <p className="max-sm:text-xl sm:text-2xl md:text-3xl pb-6">
              小浜市南区元町1-23
            </p>
            <div className="flex items-center justify-center">
              <Button className="text-black rounded-none">マップで確認</Button>
            </div>
          </div>

          {/* 768px以内で画像が消えます */}
          <div className="max-md:hidden">
            <Image
              src={Footer1}
              alt="Footer Image1"
              className={`h-[380px] ${
                isVisible ? "animate-slide-in-left" : ""
              }`}
            />
          </div>
        </div>

        {/* 連絡先 */}
        <div className="flex flex-col">
          {/* 768px以内で画像が消えます */}
          <div className="max-md:hidden">
            <Image
              src={Footer2}
              alt="Footer Image2"
              className={`h-[380px] ${
                isVisible ? "animate-slide-in-right" : ""
              }`}
            />
          </div>

          <div className="space-y-4 md:space-y-6 md:my-14">
            <p className="font-bold text-2xl md:text-3xl">連絡先</p>

            <div>
              <p>ソーシャルメディア-23</p>
              <p>@subarashiisaito.co.jp</p>
            </div>

            <div>
              <p>メールアドレス</p>
              <p>hello@subarashiisaito.co.jp </p>
            </div>

            <div>
              <p>電話番号</p>
              <p>01-2345-6789</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center py-6">© 2024 books All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
