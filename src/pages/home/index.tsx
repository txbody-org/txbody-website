import HeroSection from "@/components/hero-section";
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Pagination } from "swiper/modules";
import ProductSection from "@/components/product-section";
import ProposalSection from "@/components/proposal-section";
import Footer from "@/components/footer";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SwiperRef } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// Import custom styles for the home page
export default function HomePage() {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const [isMousewheelEnabled, setIsMousewheelEnabled] = useState(true);
  const [lastScrollDirection, setLastScrollDirection] = useState<
    "up" | "down" | null
  >(null);
  const [scrollAttempts, setScrollAttempts] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSettledOnLastSlide, setIsSettledOnLastSlide] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle swiper initialization
  const handleSwiper = useCallback((swiper: SwiperType) => {
    setSwiperInstance(swiper);
  }, []);

  // Handle slide change start
  const handleSlideChangeTransitionStart = useCallback(() => {
    setIsTransitioning(true);
    setIsSettledOnLastSlide(false);
    setScrollAttempts(0);
  }, []);

  // Handle slide change end
  const handleSlideChangeTransitionEnd = useCallback((swiper: SwiperType) => {
    setIsTransitioning(false);

    // Set a small delay to ensure we're fully settled on the slide
    setTimeout(() => {
      setIsSettledOnLastSlide(swiper.activeIndex === 2);
    }, 100);
  }, []);

  // Handle wheel events for custom scroll behavior
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (!swiperInstance || isTransitioning) return;

      const isScrollingDown = event.deltaY > 0;

      setLastScrollDirection(isScrollingDown ? "down" : "up");

      // Only handle footer scroll logic if we're settled on the last slide
      if (isSettledOnLastSlide && isScrollingDown && isMousewheelEnabled) {
        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Increment scroll attempts
        const newScrollAttempts = scrollAttempts + 1;
        setScrollAttempts(newScrollAttempts);

        // After second scroll attempt on last slide, disable mousewheel and scroll to footer
        if (newScrollAttempts >= 2) {
          event.preventDefault();
          event.stopPropagation();

          setIsMousewheelEnabled(false);
          swiperInstance.mousewheel.disable();

          // Smooth scroll to footer with a slight delay
          scrollTimeoutRef.current = setTimeout(() => {
            const footerElement = document.querySelector("#footer");
            if (footerElement) {
              footerElement.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }
    },
    [
      swiperInstance,
      isTransitioning,
      isSettledOnLastSlide,
      isMousewheelEnabled,
      scrollAttempts,
    ]
  );

  // Handle scroll events to detect when user scrolls back up from footer
  const handleScroll = useCallback(() => {
    if (!swiperInstance || !containerRef.current) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const swiperHeight = containerRef.current.offsetHeight;

    // If user scrolls back up and we're near the swiper area, re-enable mousewheel
    if (
      scrollTop < swiperHeight &&
      !isMousewheelEnabled &&
      lastScrollDirection === "up"
    ) {
      setIsMousewheelEnabled(true);
      swiperInstance.mousewheel.enable();
      setScrollAttempts(0);
      setIsSettledOnLastSlide(true);

      // Ensure we're on the last slide when re-entering swiper
      swiperInstance.slideTo(2, 0);
    }
  }, [swiperInstance, isMousewheelEnabled, lastScrollDirection]);

  // Set up event listeners
  useEffect(() => {
    const swiperContainer = swiperRef.current?.swiper.el;

    if (swiperContainer) {
      swiperContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (swiperContainer) {
        swiperContainer.removeEventListener("wheel", handleWheel);
      }
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleWheel, handleScroll]);

  // Function to go back to top
  const goToTop = useCallback(() => {
    if (swiperInstance) {
      // Re-enable mousewheel if it was disabled
      if (!isMousewheelEnabled) {
        setIsMousewheelEnabled(true);
        swiperInstance?.mousewheel.enable();
      }

      swiperInstance.slideTo(0);
      setScrollAttempts(0);
      setIsSettledOnLastSlide(false);
    }

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [swiperInstance, isMousewheelEnabled]);
  return (
    <div className="overflow-auto relative" ref={containerRef}>
      <Swiper
        ref={swiperRef}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        speed={800}
        mousewheel={{
          enabled: isMousewheelEnabled,
          sensitivity: 1,
          thresholdDelta: 50,
          thresholdTime: 500,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          renderBullet: (index, className) =>
            `<span class="${className}" data-index="${index}"></span>`,
        }}
        modules={[Mousewheel, Pagination]}
        onSwiper={handleSwiper}
        onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
        onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
        className="mySwiper"
        style={{ height: "100vh" }}
      >
        <SwiperSlide>
          <div className="container mx-auto">
            <HeroSection />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSection />
        </SwiperSlide>
        <SwiperSlide>
          <ProposalSection />
        </SwiperSlide>
      </Swiper>
      <div id="footer">
        <Footer onBackToTop={goToTop} />
      </div>
    </div>
  );
}
