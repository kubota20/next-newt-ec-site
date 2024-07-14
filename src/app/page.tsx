import EventNews from "@/features/home/event-news";
import ProductList from "@/features/home/product-list";
import TopSlides from "@/features/home/top-slides";
import Footer from "@/features/home/home-footer";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <TopSlides />
      <ProductList />
      <EventNews />
      <Footer />
    </div>
  );
};

export default HomePage;
