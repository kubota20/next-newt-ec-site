// components
import { Button } from "@/components/shadcnUi/button";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white">
      <div className="flex items-center justify-around h-[300px] gap-2">
        {/* マップ 住所 */}
        <div className="flex flex-col items-center">
          <div className="space-y-4">
            <p className="font-bold text-2xl md:text-3xl">
              現在、
              <br />
              実店舗があります
            </p>
            <p className="text-2xl md:text-3xl pb-6">小浜市南区元町1-23</p>
            <div className="flex items-center justify-center">
              <Button className="text-black rounded-none">マップで確認</Button>
            </div>
          </div>
        </div>

        {/* 連絡先 */}
        <div className="flex flex-col ">
          <div className="space-y-4 ">
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
