import { Card, CardContent } from "./ui/card";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  {
    title: "High Quality Builds",
    description:
      "Premium construction standards ensuring long-term value and tenant satisfaction",
  },
  {
    title: "Full Turnkey Solution",
    description:
      "Invest with confidence from anywhere in Canada - we handle everything",
  },
  {
    title: "Government Backed Funding",
    description:
      "CMHC MLI Select Program provides secure, government-backed mortgage insurance",
  },
  {
    title: "Low Down Payment",
    description:
      "Start with just 5% of purchase price, making investment more accessible",
  },
  {
    title: "50 Years Amortization",
    description:
      "Extended amortization period maximizes monthly cash flow and affordability",
  },
  {
    title: "Low Interest Rates",
    description:
      "Competitive rates from 3.5% to 4%, significantly below prime lending rates",
  },
  {
    title: "Solid Net Cash Flow",
    description:
      "All expenses accounted for with guaranteed positive monthly cash flow",
  },
  {
    title: "Strong ROI",
    description:
      "Proven track record of delivering solid returns on investment for our partners",
  },
  {
    title: "Equity Growth",
    description:
      "Build wealth with projected equity growth from $150K to $1M in just 5 years",
  },
];

const InvestmentHighlights = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-navy-light to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
            Investment Highlights
          </h2>
          <p className="text-xl text-accent/80 max-w-3xl mx-auto">
            Everything you need for successful multifamily property investment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-accent/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-accent/80 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-accent/10 backdrop-blur-sm border-accent/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-accent mb-4">
                Build Generational Wealth
              </h3>
              <p className="text-xl text-accent/90 mb-6">
                Project equity growth from{" "}
                <span className="font-bold text-gold-light">
                  $150,000 to $1,000,000
                </span>{" "}
                in just 5 years
              </p>

              <div className="flex justify-center gap-12 flex-wrap">
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">$150K</div>
                  <div className="text-accent/80">Starting Equity</div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-1 bg-accent/30"></div>
                  <div className="text-2xl mx-4 text-accent">→</div>
                  <div className="w-16 h-1 bg-accent/30"></div>
                </div>

                <div>
                  <div className="text-4xl font-bold text-gold mb-2">$1M</div>
                  <div className="text-accent/80">5-Year Projection</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentHighlights;
