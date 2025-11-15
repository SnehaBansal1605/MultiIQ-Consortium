import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import {
  MapPin,
  Building2,
  TrendingUp,
  DollarSign,
  ArrowRight,
} from "lucide-react";

import duplexImg from "../assets/duplex.jpg";
import fourplexImg from "../assets/fourplex.jpg";
import sixplexImg from "../assets/sixplex.jpg";
import eightplexImg from "../assets/eightplex.jpg";

const properties = [
  {
    id: 1,
    name: "Modern Duplex",
    type: "Duplex",
    units: 2,
    location: "Calgary, AB",
    image: duplexImg,
    price: "$895,000",
    downPayment: "$44,750",
    monthlyRent: "$3,800",
    cashFlow: "$850",
    roi: "12.5%",
    equityGrowth: "$125K → $450K",
    features: [
      "High-end finishes",
      "Separate entrances",
      "Modern kitchens",
      "Private yards",
    ],
    status: "Available",
  },
  {
    id: 2,
    name: "Brick Fourplex",
    type: "Fourplex",
    units: 4,
    location: "Edmonton, AB",
    image: fourplexImg,
    price: "$1,450,000",
    downPayment: "$72,500",
    monthlyRent: "$6,800",
    cashFlow: "$1,650",
    roi: "14.2%",
    equityGrowth: "$180K → $650K",
    features: [
      "Brick exterior",
      "Individual meters",
      "On-site parking",
      "Energy efficient",
    ],
    status: "Available",
  },
  {
    id: 3,
    name: "Urban Sixplex",
    type: "Sixplex",
    units: 6,
    location: "Winnipeg, MB",
    image: sixplexImg,
    price: "$2,100,000",
    downPayment: "$105,000",
    monthlyRent: "$10,200",
    cashFlow: "$2,450",
    roi: "15.8%",
    equityGrowth: "$250K → $850K",
    features: [
      "Modern balconies",
      "Elevator access",
      "Secure entry",
      "Storage lockers",
    ],
    status: "Available",
  },
  {
    id: 4,
    name: "Premium Eightplex",
    type: "8-Unit Building",
    units: 8,
    location: "Saskatoon, SK",
    image: eightplexImg,
    price: "$2,850,000",
    downPayment: "$142,500",
    monthlyRent: "$14,400",
    cashFlow: "$3,200",
    roi: "16.5%",
    equityGrowth: "$350K → $1.2M",
    features: [
      "Luxury finishes",
      "Rooftop terrace",
      "Smart home tech",
      "Fitness center",
    ],
    status: "Featured",
  },
];

const Properties = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Featured Investment Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium multifamily properties with CMHC MLI Select financing
            available
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-luxury group"
            >
              {/* Property Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary text-accent font-semibold">
                    {property.type}
                  </Badge>

                  {property.status === "Featured" && (
                    <Badge className="bg-accent text-primary font-semibold">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-primary font-bold text-lg px-4 py-2">
                    {property.price}
                  </Badge>
                </div>
              </div>

              {/* Property Details */}
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      {property.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="h-5 w-5" />
                    <span className="font-bold">{property.units} Units</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Financial Overview */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-secondary rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Down Payment (5%)
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {property.downPayment}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Monthly Rent
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {property.monthlyRent}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Monthly Cash Flow
                    </p>
                    <p className="text-xl font-bold text-accent">
                      {property.cashFlow}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Annual ROI
                    </p>
                    <p className="text-xl font-bold text-accent">
                      {property.roi}
                    </p>
                  </div>
                </div>

                {/* Equity Growth */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-primary to-navy-light rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <span className="text-accent font-semibold">
                      5-Year Equity Growth
                    </span>
                  </div>
                  <span className="text-accent font-bold">
                    {property.equityGrowth}
                  </span>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Key Features
                  </h4>

                  <div className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <Button className="w-full bg-accent text-primary hover:bg-gold-light font-semibold py-6 text-base group">
                  Request Property Details
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-primary to-navy-light border-accent/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-accent mb-4">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-xl text-accent/90 mb-6">
                We have access to exclusive multifamily properties across
                Canada. Contact us for personalized property recommendations.
              </p>
              <Button
                size="lg"
                className="bg-accent text-primary hover:bg-gold-light font-semibold text-lg px-8 py-6 h-auto shadow-gold-glow"
              >
                Schedule a Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Properties;
