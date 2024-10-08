import EventNews from "@/components/pages/home/event-news";
import ProductList from "@/components/pages/home/product-list";
import TopSlides from "@/components/pages/home/top-slides";
import Footer from "@/components/pages/home/home-footer";

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
