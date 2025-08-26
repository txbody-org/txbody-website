import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/swiper-bundle.css";

// import required modules
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProductSection from "@/components/product-section";
import ProposalSection from "@/components/proposal-section";
import { Mousewheel, Pagination } from "swiper/modules";
import { ChevronsDown } from "lucide-react";

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
            <div className="w-full h-full flex items-center justify-center relative">
              <HeroSection />
              <div className="">
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center text-muted gap-2">
                    Scroll Down
                    <ChevronsDown className="animate-bounce " size={32} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <ProductSection />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center flex-col">
              <ProposalSection />
              <Footer />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div id="footer">
        <Footer />
      </div> */}
    </>
  );
}
