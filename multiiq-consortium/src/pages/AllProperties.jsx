import { useState } from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  MapPin,
  Building2,
  TrendingUp,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    priceValue: 895000,
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
    priceValue: 1450000,
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
    priceValue: 2100000,
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
    priceValue: 2850000,
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

const AllProperties = () => {
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredProperties = properties.filter((property) => {
    if (typeFilter !== "all" && property.type !== typeFilter) return false;
    if (locationFilter !== "all" && property.location !== locationFilter)
      return false;

    if (priceFilter !== "all") {
      if (priceFilter === "under1m" && property.priceValue >= 1000000)
        return false;
      if (
        priceFilter === "1m-2m" &&
        (property.priceValue < 1000000 || property.priceValue > 2000000)
      )
        return false;
      if (priceFilter === "over2m" && property.priceValue <= 2000000)
        return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-dark to-navy">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Investment Properties
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Browse our premium multifamily properties with CMHC MLI Select
            financing
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filter Properties:</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Type Filter */}
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Duplex">Duplex</SelectItem>
                <SelectItem value="Fourplex">Fourplex</SelectItem>
                <SelectItem value="Sixplex">Sixplex</SelectItem>
                <SelectItem value="8-Unit Building">8-Unit Building</SelectItem>
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Calgary, AB">Calgary, AB</SelectItem>
                <SelectItem value="Edmonton, AB">Edmonton, AB</SelectItem>
                <SelectItem value="Winnipeg, MB">Winnipeg, MB</SelectItem>
                <SelectItem value="Saskatoon, SK">Saskatoon, SK</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under1m">Under $1M</SelectItem>
                <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                <SelectItem value="over2m">Over $2M</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="mb-8 text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredProperties.length}
            </span>{" "}
            {filteredProperties.length === 1 ? "property" : "properties"}
          </p>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No properties match your filters. Try adjusting your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProperties.map((property) => (
                <Card
                  key={property.id}
                  className="overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-luxury group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

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

                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-primary font-bold text-lg px-4 py-2">
                        {property.price}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {property.name}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{property.location}</span>
                        </div>
                      </div>

                      <div className="text-right flex items-center gap-1 text-primary">
                        <Building2 className="h-5 w-5" />
                        <span className="font-semibold">
                          {property.units} Units
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Down Payment (5%)
                        </p>
                        <p className="text-lg font-bold text-primary">
                          {property.downPayment}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Monthly Rent
                        </p>
                        <p className="text-lg font-bold text-accent">
                          {property.monthlyRent}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Net Cash Flow
                        </p>
                        <p className="text-lg font-bold text-green-600">
                          {property.cashFlow}/mo
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          ROI
                        </p>
                        <p className="text-lg font-bold text-accent flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {property.roi}
                        </p>
                      </div>
                    </div>

                    {/* Equity Growth */}
                    <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/30">
                      <p className="text-sm text-muted-foreground mb-1">
                        5-Year Equity Growth
                      </p>
                      <p className="text-xl font-bold text-primary">
                        {property.equityGrowth}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {property.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-accent to-accent-light hover:opacity-90 text-primary font-semibold"
                    >
                      <Link to={`/property/${property.id}`}>
                        Request Property Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProperties;
