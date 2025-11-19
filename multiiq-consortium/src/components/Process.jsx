import { Card, CardContent } from "../components/ui/card";
import { UserCheck, FileSearch, Home, Key } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    number: "01",
    title: "Qualification",
    description:
      "We help you understand CMHC requirements and ensure you meet the criteria for MLI Select financing",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Property Selection",
    description:
      "Access our curated portfolio of pre-approved multifamily properties across Canada",
  },
  {
    icon: Home,
    number: "03",
    title: "Financing & Closing",
    description:
      "We manage the entire CMHC application process and coordinate closing with our lending partners",
  },
  {
    icon: Key,
    number: "04",
    title: "Turnkey Management",
    description:
      "Sit back and collect cash flow while we handle all property management and tenant relations",
  },
];
const stepsTwo = [
  {
    number: "01",
    title: "Land Acquisition",
  },
  {
    number: "02",
    title: "Entitlements",
  },
  {
    number: "03",
    title: "Site Plan and Design",
  },
  {
    number: "04",
    title: "CMHC Application",
  },
  {
    number: "05",
    title: "Construction",
  },
  {
    number: "06",
    title: "Lease Up and Stabilization",
  },
  {
    number: "07",
    title: "Ongoing Property Management",
  },
];

const Process = () => {
  return (
    <>
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Simple Investment Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From qualification to cash flow in four streamlined steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="relative border-2 hover:border-accent transition-all duration-300 hover:shadow-luxury group overflow-hidden"
                >
                  {/* Step number background */}
                  <div className="absolute top-4 right-4 text-8xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors">
                    {step.number}
                  </div>

                  <CardContent className="p-8 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-navy-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>

                    <div className="text-sm font-bold text-accent mb-2">
                      STEP {step.number}
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 z-0"></div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              What Exactly is <span className="text-accent">Handled</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of experienced professionals includes analysts, brokers,
              builders, and developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {stepsTwo.map((step, index) => {
              return (
                <Card
                  key={index}
                  className="relative border-2 hover:border-accent transition-all duration-300 hover:shadow-luxury group overflow-hidden"
                >
                  <CardContent className="p-4 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent text-white text-3xl font-bold to-navy-light rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>

                    <h3 className="text-xl font-bold text-primary hover:text-accent text-left">
                      {step.title}
                    </h3>
                  </CardContent>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 z-0"></div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
