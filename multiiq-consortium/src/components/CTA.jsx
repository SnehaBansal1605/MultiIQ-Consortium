import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Start Your Investment Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team to learn more about CMHC MLI Select
              opportunities
            </p>

            <Card className="border-2">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+1 (905) 781-7664" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your investment goals..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent text-primary hover:bg-gold-light font-semibold py-6 text-lg shadow-gold-glow"
                  >
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-luxury">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-navy-light rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get detailed information about our investment opportunities
                </p>
                <a
                  href="mailto:sales@multi-iq.com"
                  className="text-accent font-semibold hover:text-gold-light transition-colors"
                >
                  sales@multi-iq.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-luxury">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-navy-light rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our investment specialists
                </p>
                <a
                  href="tel:+15551234567"
                  className="text-accent font-semibold hover:text-gold-light transition-colors"
                >
                  +1 (905) 781-7664
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-luxury">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-navy-light rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Serving All of Canada
                </h3>
                <p className="text-muted-foreground">
                  Invest in premium multifamily properties across Canada with
                  our turnkey solution
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
