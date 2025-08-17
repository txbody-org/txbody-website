import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/swiper-bundle.css";

// import required modules
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProductSection from "@/components/product-section";
import ProposalSection from "@/components/proposal-section";
import { Mousewheel, Pagination } from "swiper/modules";

export default function Home2() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={{
            releaseOnEdges: true,
            sensitivity: 1,
            thresholdDelta: 50,
            thresholdTime: 500,
          }}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <HeroSection />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <ProductSection />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <ProposalSection />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
