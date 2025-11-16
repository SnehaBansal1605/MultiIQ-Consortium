import logoGold from "../assets/Logo-White.PNG";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-navy-light to-primary py-12 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img
              src={logoGold}
              alt="MultiIQ Consortium"
              className="w-32 h-32 mb-4"
            />
            <p className="text-accent/80 mb-4">
              The intelligent choice for multifamily investors. Leveraging CMHC
              MLI Select Program to deliver superior investment opportunities
              across Canada.
            </p>
          </div>

          <div>
            <h4 className="text-accent font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#benefits"
                  className="text-accent/80 hover:text-accent transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-accent/80 hover:text-accent transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-accent/80 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-accent/80 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-accent/80 hover:text-accent transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#disclaimer"
                  className="text-accent/80 hover:text-accent transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center">
          <p className="text-accent/80">
            © {new Date().getFullYear()} MultiIQ Consortium. All rights
            reserved.
          </p>
          <p className="text-accent/60 text-sm mt-2">
            Investment opportunities subject to CMHC approval and qualification
            requirements.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
