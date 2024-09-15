import Image from "next/image";

// test
import News1 from "@/images/news1.jpg";
import News2 from "@/images/news2.jpg";

const NewsImage = () => {
  return (
    <div className="flex items-center justify-center w-[320px] lg:w-[535px] lg:h-[402px] overflow-hidden">
      <Image
        src={News1}
        alt="news image1"
        className="object-cover  aspect-square"
      />
      <Image
        src={News2}
        alt="news image2"
        className="object-cover aspect-square"
      />
    </div>
  );
};

export default NewsImage;
