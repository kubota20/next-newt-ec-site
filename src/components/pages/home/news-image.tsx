import Image from "next/image";

// test
import News1 from "@/images/news1.jpg";
import News2 from "@/images/news2.jpg";

interface EventNewsProps {
  isVisible: boolean;
}

const NewsImage: React.FC<EventNewsProps> = ({ isVisible }) => {
  return (
    <div
      className={`flex items-center justify-center w-[320px] lg:w-[535px] lg:h-[402px] overflow-hidden ${
        isVisible ? "animate-slide-in-right" : ""
      }`}
    >
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
