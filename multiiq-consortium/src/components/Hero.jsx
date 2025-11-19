import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import bannerOne from "../assets/banner.mp4";
import { useInvestorForm } from "../contexts/InvestorFormContext";
const Hero = () => {
  const [api, setApi] = useState(null);
  const { openForm } = useInvestorForm();
  const backgroundVideos = [bannerOne];

  useEffect(() => {
    if (!api) return;
  }, [api]);
  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Carousel
          setApi={setApi}
          className="w-full h-full videoParent"
          plugins={[Autoplay({ delay: 5000 })]}
          opts={{ loop: true }}
        >
          <CarouselContent className="h-full ml-0">
            {backgroundVideos.map((video, index) => (
              <CarouselItem key={index} className="pl-0 h-full">
                <div className="relative w-full h-full ">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-white/5"></div>
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-navy-light/20 to-primary/30"></div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="container mx-auto px-4 pt-10 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-black leading-tight text-shadow-white">
            Your Complete Multifamily Investment Solution <br />- 100% Turnkey.
            100% Hassle-Free.
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={openForm}
              className="bg-accent text-primary hover:bg-gold-light font-semibold text-lg px-8 py-4 h-auto shadow-gold-glow transition-all hover:scale-105"
            >
              Start Investing Today
              <ArrowRight className="ml-2 h-3 w-5" />
            </Button>

            <Button
              size="lg"
              onClick={openForm}
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent font-semibold text-lg px-8 py-4 h-auto transition-all hover:scale-105"
            >
              Download Investor Guide
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
            {[
              { value: "5%", label: "Down Payment" },
              { value: "50 Year", label: "Amortization" },
              { value: "Monthly", label: "Cash Flow Secured" },
            ].map((item, index) => (
              <div
                key={index}
                className="
        group relative rounded-2xl p-6 backdrop-blur-xl
        bg-white/5 border border-gold/30 
        shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        transition-all duration-500

        hover:-translate-y-3 
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
        hover:bg-white/10 
        hover:border-gold

        animate-[floatUp_4s_ease-in-out_infinite,glowPulse_6s_ease-in-out_infinite]
      "
              >
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold text-black tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-black/75 mt-1 text-lg">{item.label}</div>
                </div>

                {/* Subtle gold shine */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-20 shine-animation"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
