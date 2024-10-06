// components
import Container from "@/components/ui/container";
import { Info } from "@/components/ui/info";

// test
import { NewsData } from "@/datatest/news-data";

const News = () => {
  const item = NewsData[0];
  return (
    <>
      <Container>
        <div className="my-32">
          <Info title={item.title} />
          <div className="mt-10">
            <p>{item.date}</p>
            <p>{item.description}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default News;
