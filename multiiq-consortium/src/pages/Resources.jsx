import { FileText, Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Resources = () => {
  const resources = [
    {
      title: "Investment Guide 2024",
      description:
        "Complete guide to multi-family property investment in Canada",
      url: "#",
      size: "2.4 MB",
    },
    {
      title: "CMHC Financing Overview",
      description: "Understanding government-backed financing options",
      url: "#",
      size: "1.8 MB",
    },
    {
      title: "Property Management Guide",
      description: "Best practices for managing multi-unit properties",
      url: "#",
      size: "3.1 MB",
    },
    {
      title: "Tax Benefits for Investors",
      description: "Maximize your returns with tax optimization strategies",
      url: "#",
      size: "1.5 MB",
    },
    {
      title: "Market Analysis Report",
      description: "Current trends and projections for Canadian real estate",
      url: "#",
      size: "4.2 MB",
    },
    {
      title: "ROI Calculator Template",
      description: "Calculate your potential returns on investment",
      url: "#",
      size: "0.9 MB",
    },
    {
      title: "Due Diligence Checklist",
      description: "Essential checks before purchasing investment property",
      url: "#",
      size: "1.2 MB",
    },
    {
      title: "Legal Framework Guide",
      description: "Understanding landlord-tenant laws across Canada",
      url: "#",
      size: "2.7 MB",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
              Investment Resources
            </h1>
            <p className="text-lg md:text-xl text-white">
              Download our comprehensive guides and resources to make informed
              investment decisions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/40 bg-card hover:border-gold/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 text-navy" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {resource.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {resource.size}
                    </span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-navy font-semibold"
                      asChild
                    >
                      <a href={resource.url} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-navy via-navy to-navy-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Need More Information?
            </h2>
            <p className="text-lg text-white mb-8">
              Our team is ready to answer your questions and guide you through
              your investment journey
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-navy font-semibold"
              asChild
            >
              <a href="/contact-us">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
