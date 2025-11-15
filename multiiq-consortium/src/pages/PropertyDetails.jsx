import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import infoProductOne from "../assets/pdfs/product1/Design-Floorplan Drwings-8102-33 Ave NW, Calgary (Bowness)-11-05-2025.pdf";
import financingProductOne from "../assets/pdfs/product1/Proforma-8102-33 Ave NW, (Bowness)-Calgary-(Multi-IQ).pdf";
import infoProductTwo from "../assets/pdfs/product2/Design & Drawings-8126 77 AVENU-575- SAD25-751-1.pdf";
import financingProductTwo from "../assets/pdfs/product2/Proforma-8126 -77th Ave, (King Edward)-Edmonton - 7 Plex-(Multi-IQ).pdf";
import infoProductThree from "../assets/pdfs/product3/Design & Drawings- 740 Forelee Drive-2025-09-25  SE - DP Drawings.pdf";
import financingProductThree from "../assets/pdfs/product3/Proforma-740 Forlee St, Calgary-(Multi-IQ).pdf";
import infoProductFour from "../assets/pdfs/product4/Design & Drawings - 1504 36 ST SE -2025-07-14.pdf";
import financingProductFour from "../assets/pdfs/product4/Proforma-1504 36th St, Calgary-(Multi-IQ).pdf";
import infoProductFive from "../assets/pdfs/product5/Design & Drawings-4336 72 st NW, Calgary.pdf";
import financingProductFive from "../assets/pdfs/product5/Proforma-4336 72st NW, Calgary-(Multi-IQ).pdf";
import infoProductSix from "../assets/pdfs/product6/Design & Drawings-6336 Bowmont Crescent NW - 2025-08-18.pdf";
import financingProductSix from "../assets/pdfs/product6/Proforma-6336 Bowmont Cresc  NW, Calgary-(Multi-IQ).pdf";
import {
  MapPin,
  Building2,
  TrendingUp,
  DollarSign,
  // Home,
  // Calendar,
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
    name: "8-Plex",
    city: "Calgary",
    community: "Bowness",
    location: "8102-33 Ave NW",
    image: duplexImg,
    price: "$2,865,789",
    dscr: "115.27%",
    lendingType: "5%, Take Out",
    depositDetails: "$10k initial, Balance upon Firm",
    closingOn: "Closing on 26 October, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Available",
    pdfs: {
      infoPackage: infoProductOne,
      financing: financingProductOne,
    },
    description:
      "A beautifully designed 8-plex offering modern living with high-end finishes throughout. Each unit features a private entrance, contemporary kitchens equipped with stainless steel appliances, and outdoor spaces ideal for relaxation or entertaining. Perfect for investors seeking both comfort and functionality in a multi-family property.",
    yearBuilt: "2021",
    squareFeet: "3,200",
    lotSize: "6,500 sq ft",
    parking: "4 spaces",
    heating: "Gas forced air",
    cooling: "Central A/C",
  },
  {
    id: 2,
    name: "7-Plex",
    city: "Edmonton",
    community: "King Edward",
    location: "8126 -77th Ave",
    image: fourplexImg,
    price: "$2,097,899",
    dscr: "125.53%",
    lendingType: "5%, Take Out",
    depositDetails: "$10k initial, Balance upon Firm",
    closingOn: "Closing on 26 October, 2025",
    features: [
      "(4 )Three BR Main",
      "(3) 2BR Basement",
      "(1) 2 BR Basement NO STOVE",
    ],
    status: "Available",
    pdfs: {
      infoPackage: infoProductTwo,
      financing: financingProductTwo,
    },
    description:
      "A beautifully designed 8-plex offering modern living with high-end finishes throughout. Each unit features a private entrance, contemporary kitchens equipped with stainless steel appliances, and outdoor spaces ideal for relaxation or entertaining. Perfect for investors seeking both comfort and functionality in a multi-family property.",
    yearBuilt: "2019",
    squareFeet: "5,200",
    lotSize: "9,800 sq ft",
    parking: "8 spaces",
    heating: "Gas forced air",
    cooling: "Central A/C",
  },
  {
    id: 3,
    name: "8-Plex",
    city: "Calgary",
    community: "Forest Lawn",
    location: "740 Forlee St",
    image: sixplexImg,
    price: "$2,587,290",
    dscr: "120.27%",
    lendingType: "5%, Take Out",
    depositDetails: "$10k initial, Balance upon Firm",
    closingOn: "Closing on 26 November, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Available",
    pdfs: {
      infoPackage: infoProductThree,
      financing: financingProductThree,
    },
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
    name: "8-Plex",
    city: "Calgary",
    community: "Forest Lawn",
    location: "1504 36TH Strret",
    image: eightplexImg,
    price: "$2,745,789",
    dscr: "115.64%",
    lendingType: "5%, Take Out",
    depositDetails: "$10k initial, Balance upon Firm",
    closingOn: "Closing on 26 November, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Featured",
    pdfs: {
      infoPackage: infoProductFour,
      financing: financingProductFour,
    },
    description:
      "Premier eightplex offering luxury living with resort-style amenities. Features include high-end finishes, expansive rooftop terrace, integrated smart home technology, and a private fitness center for residents.",
    yearBuilt: "2023",
    squareFeet: "11,500",
    lotSize: "18,000 sq ft",
    parking: "16 spaces",
    heating: "Gas forced air",
    cooling: "Central A/C",
  },
  {
    id: 5,
    name: "8-Plex",
    city: "Calgary",
    community: "Bowness",
    location: "4336 72nd St",
    image: eightplexImg,
    price: "$2,897,999",
    dscr: "111.54%",
    lendingType: "5%, Take Out",
    depositDetails: "$10k initial, Balance upon Firm",
    closingOn: "Closing on 26 November, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Featured",
    pdfs: {
      infoPackage: infoProductFive,
      financing: financingProductFive,
    },
    description:
      "Premier eightplex offering luxury living with resort-style amenities. Features include high-end finishes, expansive rooftop terrace, integrated smart home technology, and a private fitness center for residents.",
    yearBuilt: "2023",
    squareFeet: "11,500",
    lotSize: "18,000 sq ft",
    parking: "16 spaces",
    heating: "Gas forced air",
    cooling: "Central A/C",
  },
  {
    id: 6,
    name: "8-Plex",
    city: "Calgary",
    community: "Bowness",
    location: "6336 Bowmont Cres",
    image: eightplexImg,
    price: "$2,897,789",
    dscr: "116.11%",
    lendingType: "5%, Take Out",
    depositDetails: "$10k initial, Balance upon Firm",
    closingOn: "Closing on 26 November, 2025",
    features: ["(4 )Three BR Main", "(4) 2BR Basement"],
    status: "Sold",
    pdfs: {
      infoPackage: infoProductSix,
      financing: financingProductSix,
    },
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
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
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
                {property.city}
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
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-2 border-border">
              <CardContent className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-muted-foreground mb-2">Purchase Price</p>
                    <p className="text-5xl font-bold text-primary">
                      {property.price}
                    </p>
                  </div>
                  {/* <div className="text-right">
                    <p className="text-muted-foreground mb-2">ROI</p>
                    <p className="text-4xl font-bold text-accent">
                      {property.roi}
                    </p>
                  </div> */}
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">DSCR</p>
                    <p className="text-xl font-bold text-primary">
                      {property.dscr}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Lending Type
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {property.lendingType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Deposit Details
                    </p>
                    <p className="text-xl font-bold text-accent">
                      {property.depositDetails}
                    </p>
                  </div>
                  {/* <div>
                    <p className="text-sm text-muted-foreground mb-1">Units</p>
                    <p className="text-xl font-bold text-primary">
                      {property.units}
                    </p>
                  </div> */}
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
                      <p className="text-sm text-muted-foreground">Community</p>
                      <p className="font-semibold text-primary">
                        {property.community}
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex items-center gap-4">
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
                  </div> */}
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
                    <span>sales@multi-iq.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>+1 (905) 781-7664</span>
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
                    <a
                      href={property.pdfs.infoPackage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request Info Package
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-12 text-lg font-semibold"
                  >
                    <a
                      href={property.pdfs.financing}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Calculate Financing
                    </a>
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
