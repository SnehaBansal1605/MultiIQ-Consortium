import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  MapPin,
  Building2,
  TrendingUp,
  DollarSign,
  Home,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  Phone,
  Mail,
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
    description:
      "A stunning modern duplex featuring high-end finishes throughout. Each unit offers separate entrances for maximum privacy, modern kitchens with stainless steel appliances, and private yards perfect for outdoor living.",
    yearBuilt: "2021",
    squareFeet: "3,200",
    lotSize: "6,500 sq ft",
    parking: "4 spaces",
    heating: "Gas forced air",
    cooling: "Central A/C",
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
    description:
      "Classic brick fourplex with timeless appeal. Features individual meters for each unit, ample on-site parking, and energy-efficient upgrades that reduce operating costs while maximizing rental income.",
    yearBuilt: "2019",
    squareFeet: "5,200",
    lotSize: "9,800 sq ft",
    parking: "8 spaces",
    heating: "Gas forced air",
    cooling: "Central A/C",
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
    description:
      "Contemporary urban sixplex designed for modern living. Each unit features private balconies with city views, elevator access for convenience, secure entry system, and individual storage lockers.",
    yearBuilt: "2022",
    squareFeet: "7,800",
    lotSize: "12,000 sq ft",
    parking: "12 spaces",
    heating: "Gas forced air",
    cooling: "Central A/C",
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
    description:
      "Premier eightplex offering luxury living with resort-style amenities. Features include high-end finishes, expansive rooftop terrace, integrated smart home technology, and a private fitness center for residents.",
    yearBuilt: "2023",
    squareFeet: "11,500",
    lotSize: "18,000 sq ft",
    parking: "16 spaces",
    heating: "Gas forced air",
    cooling: "Central A/C",
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Property Not Found
          </h1>
          <Link to="/">
            <Button className="bg-accent text-primary hover:bg-accent/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>

        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Link to="/">
            <Button
              variant="secondary"
              className="bg-white/90 hover:bg-white text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Button>
          </Link>
        </div>

        {/* Property Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge className="bg-accent text-primary font-semibold text-sm px-4 py-1">
                {property.type}
              </Badge>
              {property.status === "Featured" && (
                <Badge className="bg-primary text-accent font-semibold text-sm px-4 py-1">
                  Featured Property
                </Badge>
              )}
              <Badge
                variant="secondary"
                className="bg-white/90 text-primary font-semibold text-sm px-4 py-1"
              >
                {property.status}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-accent mb-4">
              {property.name}
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-lg">
              <MapPin className="h-5 w-5" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & Key Stats */}
            <Card className="border-2 border-border">
              <CardContent className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-muted-foreground mb-2">Purchase Price</p>
                    <p className="text-5xl font-bold text-primary">
                      {property.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground mb-2">ROI</p>
                    <p className="text-4xl font-bold text-accent">
                      {property.roi}
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                      Cash Flow
                    </p>
                    <p className="text-xl font-bold text-accent">
                      {property.cashFlow}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Units</p>
                    <p className="text-xl font-bold text-primary">
                      {property.units}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Description */}
            <Card className="border-2 border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Property Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card className="border-2 border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Property Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Property Type
                      </p>
                      <p className="font-semibold text-primary">
                        {property.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Year Built
                      </p>
                      <p className="font-semibold text-primary">
                        {property.yearBuilt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Home className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Square Feet
                      </p>
                      <p className="font-semibold text-primary">
                        {property.squareFeet}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Lot Size</p>
                      <p className="font-semibold text-primary">
                        {property.lotSize}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Parking</p>
                      <p className="font-semibold text-primary">
                        {property.parking}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Heating/Cooling
                      </p>
                      <p className="font-semibold text-primary">
                        {property.heating} / {property.cooling}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="border-2 border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Investment Breakdown */}
            <Card className="border-2 border-accent/50 bg-accent/5">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Investment Opportunity
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-2">
                        Low Down Payment
                      </h3>
                      <p className="text-muted-foreground">
                        Start with just 5% down ({property.downPayment}) using
                        CMHC MLI Select financing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-2">
                        Strong Cash Flow
                      </h3>
                      <p className="text-muted-foreground">
                        Generate {property.cashFlow} monthly positive cash flow
                        from day one
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-2">
                        Equity Growth
                      </h3>
                      <p className="text-muted-foreground">
                        Expected equity growth: {property.equityGrowth} over 5
                        years
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-accent sticky top-8 shadow-luxury">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Interested in This Property?
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>info@plex5.ca</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>1-800-PLEX-NOW</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-accent text-primary hover:bg-accent/90 h-12 text-lg font-semibold">
                    Schedule Viewing
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-12 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-accent"
                  >
                    Request Info Package
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-12 text-lg font-semibold"
                  >
                    Calculate Financing
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    <span className="font-semibold text-primary">
                      Property ID:
                    </span>{" "}
                    #{property.id}
                  </p>
                  <p>
                    <span className="font-semibold text-primary">Status:</span>{" "}
                    {property.status}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
