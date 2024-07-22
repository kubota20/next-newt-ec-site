// components
import Container from "@/components/elements/container";

// features
import { NewsBox } from "@/features/news/news-box";

// test
import { NewsData } from "@/datatest/news-data";

const NewsPage = () => {
  return (
    <div className="flex flex-col bg-[#B5ADA8]">
      <Container>
        <div className="my-32">
          <h2 className="text-center my-16 font-bold text-3xl">イベント</h2>

          {NewsData.map((item) => (
            <div key={item.id} className="hover:bg-neutral-400">
              <NewsBox item={item} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewsPage;
