import Link from "next/link";

// features
import NewsImage from "@/features/home/news-image";

// components
import Container from "@/components/container";
import { NewsBox } from "@/components/news-box";

// test
import { NewsData } from "@/datatest/news-data";

const EventNews = () => {
  return (
    <section className="bg-[#B5ADA8]">
      <Container>
        <div className="my-20">
          <div className="flex items-center justify-between">
            <div className="w-full flex flex-col max-md:items-center justify-center">
              <h2 className="mb-10 text-4xl font-bold">近日行われるイベント</h2>
              {/* News */}
              <div className="flex-1 mr-4">
                {NewsData.map((item) => (
                  <NewsBox key={item.id} item={item} />
                ))}
              </div>
            </div>
            {/* News Image */}
            <div className="flex-1 max-md:hidden w-full">
              <NewsImage />
            </div>
          </div>

          {/* Products Link */}
        </div>
        <div className="text-right underline mb-2">
          <Link href="/">イベントを見に行く</Link>
        </div>
      </Container>
    </section>
  );
};

export default EventNews;
