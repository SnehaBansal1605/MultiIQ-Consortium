import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import logoNavy from "../assets/logo-navy.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-navy-light to-primary">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={logoNavy}
            alt="MultiIQ Consortium"
            className="w-64 h-64 mx-auto mb-8 drop-shadow-2xl"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent leading-tight">
            The Intelligent Choice for Multifamily Investors
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-accent/90 leading-relaxed">
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
