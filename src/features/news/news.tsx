// components
import Container from "@/components/elements/container";
import { Info } from "@/components/elements/info";

// test
import { NewsData } from "@/datatest/news-data";

export const News = () => {
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
