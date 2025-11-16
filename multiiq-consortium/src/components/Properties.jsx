import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import {
  MapPin,
  Building2,
  TrendingUp,
  // DollarSign,
  ArrowRight,
} from "lucide-react";

// import duplexImg from "../assets/duplex.jpg";
// import fourplexImg from "../assets/fourplex.jpg";
// import sixplexImg from "../assets/sixplex.jpg";
// import eightplexImg from "../assets/eightplex.jpg";
import fourthImg from "../assets/fourthImg.png";
import fifthImg from "../assets/fifthImg.PNG";
import eightPlexImg from "../assets/eightPlex.PNG";
import sevenPlex from "../assets/sevenPlex.PNG";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    name: "8-Plex",
    city: "Calgary",
    community: "Bowness",
    location: "8102-33 Ave NW",
    image: eightPlexImg,
    price: "$2,865,789",
    dscr: "115.27%",
    capRate: "5.75%",
    cashOnCash: "17.99%",
    roi: "142.64%",
    cashFlow: "$26,291",
    closingOn: "Closing on 26 October, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Available",
    downPayment: "$146,155",
  },
  {
    id: 2,
    name: "7-Plex",
    city: "Edmonton",
    community: "King Edward",
    location: "8126 -77th Ave",
    image: sevenPlex,
    price: "$2,097,899",
    dscr: "117.65%",
    capRate: "6.24%",
    cashOnCash: "23.44%",
    roi: "172.48%",
    cashFlow: "$25,074",
    closingOn: "Closing on 26 October, 2025",
    features: [
      "(4 )Three BR Main",
      "(3) 2BR Basement",
      "(1) 2 BR Basement NO STOVE",
    ],
    status: "Available",
    downPayment: "$106,993",
  },
  {
    id: 3,
    name: "8-Plex",
    city: "Calgary",
    community: "Forest Lawn",
    location: "740 Forlee St",
    image: eightPlexImg,
    price: "$2,587,290",
    dscr: "116.77%",
    capRate: "5.91%",
    cashOnCash: "20.06%",
    roi: "154.32%",
    cashFlow: "$26,471",
    closingOn: "Closing on 26 November, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Available",
    downPayment: "$131,952",
  },
  {
    id: 4,
    name: "8-Plex",
    city: "Calgary",
    community: "Forest Lawn",
    location: "1504 36TH Strret",
    image: fourthImg,
    price: "$2,745,789",
    dscr: "115.64%",
    capRate: "5.86%",
    cashOnCash: "18.73%",
    roi: "143.22%",
    cashFlow: "$26,231",
    closingOn: "Closing on 26 November, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Available",
    downPayment: "$140,035",
  },
  {
    id: 5,
    name: "8-Plex",
    city: "Calgary",
    community: "Bowness",
    location: "4336 72nd St",
    image: fifthImg,
    price: "$2,897,999",
    dscr: "111.54%",
    capRate: "5.54%",
    cashOnCash: "14.08%",
    roi: "138.80%",
    cashFlow: "$20,803",
    closingOn: "Closing on 26 November, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Available",
    downPayment: "$147,798",
  },
  {
    id: 6,
    name: "8-Plex",
    city: "Calgary",
    community: "Bowness",
    location: "6336 Bowmont Cres",
    image: eightPlexImg,
    price: "$2,897,789",
    dscr: "116.11%",
    capRate: "5.76%",
    cashOnCash: "18.89%",
    roi: "143.78%",
    cashFlow: "$27,912",
    closingOn: "Closing on 26 November, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Sold",
    downPayment: "$147,787",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-luxury group"
            >
              <div className="relative overflow-hidden h-64">
                <div className="absolute bottom-0 left-0 w-full flash-banner">
                  <div className="w-full bg-primary text-accent text-center font-extrabold text-xl py-3 shadow-xl">
                    Just {property.downPayment} Down!
                  </div>
                </div>
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary text-accent font-semibold">
                    {property.city}
                  </Badge>
                  {property.status === "Featured" && (
                    <Badge className="bg-accent text-primary font-semibold">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-primary font-bold text-lg px-4 py-2">
                    {property.price}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1 text-left">
                      {property.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="h-5 w-5" />
                    <span className="font-bold">{property.community}</span>
                  </div>
                </div>
              </CardHeader>

              <div className="bg-accent text-primary font-bold text-md px-4 py-2 rounded-lg shadow-lg flash-effect mb-2 mr-6 ml-6">
                Monthly Cash Flow - {property.cashFlow}
              </div>
              <CardContent className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">DSCR</p>
                      <p className="text-xl font-bold text-primary">
                        {property.dscr}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Cap Rate
                      </p>
                      <p className="text-xl font-bold text-primary">
                        {property.capRate}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Cash On Cash
                      </p>
                      <p className="text-xl font-bold text-primary">
                        {property.cashOnCash}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Anuual ROI
                      </p>
                      <p className="text-xl font-bold text-accent">
                        {property.roi}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-primary to-navy-light rounded-lg">
                  <span className="text-accent font-bold d-flex">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    5-Year Equity Growth
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-semibold">
                      {property.closingOn}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    {/* <DollarSign className="h-4 w-4" /> */}
                    Configurations
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
                <Link to={`/property/${property.id}`} className="block">
                  <Button className="w-full bg-accent text-primary hover:bg-gold-light font-semibold py-6 text-base group">
                    Request Property Details
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-primary to-navy-light border-accent/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-accent mb-4">
                We got you covered. Book Your Consultation Now
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
