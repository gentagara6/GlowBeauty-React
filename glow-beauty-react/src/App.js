import Header from "./components/Header";
import Hero from "./components/Hero";
import ShopSection from "./components/ShopSection";
import Deals from "./components/Deals";
import PromoBanner from "./components/PromoBanner";
import NewArrivals from "./components/NewArrivals";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShopSection />
        <Deals />
        <PromoBanner />
        <NewArrivals />
        <section className="pt-5 pb-0">
           <Newsletter />
        </section>
      </main>
      <Footer />
    </>
  );
}