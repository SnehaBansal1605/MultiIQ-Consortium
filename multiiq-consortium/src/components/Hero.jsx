import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import logoNavy from "../assets/Logo-Dark.PNG";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import bannerOne from "../assets/bannerTwo.mp4";
const Hero = () => {
  const [api, setApi] = useState(null);

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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={logoNavy}
            alt="MultiIQ Consortium"
            className="w-64 h-64 mx-auto mb-8 drop-shadow-2xl"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black leading-tight text-shadow-black">
            The Intelligent Choice for Multifamily Investors
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-black/90 leading-relaxed text-shadow-black">
            Leverage government-backed CMHC financing with as little as{" "}
            <span className="font-bold text-gold-light">5% down</span>,{" "}
            <span className="font-bold text-gold-light">
              50-year amortization
            </span>
            , and{" "}
            <span className="font-bold text-gold-light">below-prime rates</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-gold-light font-semibold text-lg px-8 py-6 h-auto shadow-gold-glow transition-all hover:scale-105"
            >
              Start Investing Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold text-lg px-8 py-6 h-auto transition-all hover:scale-105"
            >
              Download Investor Guide
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
              <div className="text-4xl font-bold text-gold mb-2">$200M+</div>
              <div className="text-accent/80">MLI Select Inventory Sold</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
              <div className="text-4xl font-bold text-gold mb-2">450+</div>
              <div className="text-accent/80">Housing Units Built</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
              <div className="text-4xl font-bold text-gold mb-2">$2M+</div>
              <div className="text-accent/80">Cash Flow Secured</div>
            </div>
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
