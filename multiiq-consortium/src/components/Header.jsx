import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
//import { NavLink } from "../components/NavLink";
import logoNavy from "../assets/Logo-Dark.PNG";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Resources", href: "/resources" },
    { name: "FAQ", href: "/faqs" },
  ];

  const scrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logoNavy}
              alt="Logo"
              className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-accent rounded-md hover:bg-accent/10"
              >
                {item.name}
              </a>
            ))}
            <Button
              size="lg"
              className="ml-4 bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-navy font-semibold shadow-md"
              asChild
            >
              <a href="/contact-us">Contact Us</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-4 py-3 text-base font-medium text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}

              <Button
                size="lg"
                className="mx-4 mt-2 bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-navy font-semibold"
                asChild
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
