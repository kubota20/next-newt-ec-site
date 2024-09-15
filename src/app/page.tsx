import EventNews from "@/pages/home/event-news";
import ProductList from "@/pages/home/product-list";
import TopSlides from "@/pages/home/top-slides";
import Footer from "@/pages/home/home-footer";

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
