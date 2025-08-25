import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProductSection from "@/components/product-section";
import ProposalSection from "@/components/proposal-section";

const HomePageMobile = () => {
  return (
    <div className="container mx-auto space-y-4 ">
      <HeroSection />
      <ProductSection />
      <ProposalSection />
      <Footer />
    </div>
  );
};

export default HomePageMobile;
