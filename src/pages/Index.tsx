import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import FeaturedCollections from "@/components/FeaturedCollections";
import NewArrivals from "@/components/NewArrivals";
import SaleSection from "@/components/SaleSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroBanner />
      <FeaturedCollections />
      <NewArrivals />
      <SaleSection />
      <Footer />
    </div>
  );
};

export default Index;
