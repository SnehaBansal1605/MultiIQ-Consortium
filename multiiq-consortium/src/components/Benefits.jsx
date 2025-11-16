import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  TrendingUp,
  Home,
  Shield,
  DollarSign,
  Clock,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Low Down Payment",
    description:
      "Start investing with as little as 5% down payment through CMHC MLI Select Program",
    stat: "5-10%",
  },
  {
    icon: Clock,
    title: "Extended Amortization",
    description:
      "50-year amortization periods for maximum cash flow and affordability",
    stat: "50 Years",
  },
  {
    icon: TrendingUp,
    title: "Below-Prime Rates",
    description:
      "Access competitive interest rates ranging from 3.5% to 4%, below prime lending rates",
    stat: "3.5-4%",
  },
  {
    icon: Shield,
    title: "Government Backed",
    description:
      "Full CMHC backing provides security and stability for your investment",
    stat: "100%",
  },
  {
    icon: Home,
    title: "Turnkey Solution",
    description:
      "Complete end-to-end service from property selection to tenant management (can be managed no matter where you lived in the world).",
    stat: "Turnkey",
  },
  {
    icon: Award,
    title: "Positive Cash Flow",
    description:
      "Guaranteed positive cash flow with minimum 1.1 debt coverage ratio ENSURING POSITIVE CASH FLOW 100%",
    stat: "1.1 DCR",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Why MultiFamily Investing is a Smart Investment Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of government-backed financing combined with
            expert turnkey property management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-luxury group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-navy-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-primary">{benefit.title}</span>
                    <span className="text-2xl font-bold text-accent">
                      {benefit.stat}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
