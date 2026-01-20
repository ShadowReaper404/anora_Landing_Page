import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/Logo anora side full.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Resources", href: "#resources" },
    { label: "Get Help", href: "#help" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="px-4 py-2.5 rounded-full bg-white backdrop-blur-md shadow-md border border-primary/20 hover-scale cursor-pointer group hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <img src={logo} alt="anora" className="h-10 md:h-12 lg:h-14 w-auto max-w-none object-contain group-hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Pill-Style Navigation */}
          <div className={`hidden lg:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
            isScrolled 
              ? "bg-background/95 backdrop-blur-xl shadow-lg border border-cyan-500/30" 
              : "bg-background/90 backdrop-blur-md shadow-md border border-cyan-500/20"
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-6 py-2 rounded-full text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 font-medium relative group hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link to="/get-started">
              <Button variant="hero" className="rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in backdrop-blur-xl bg-background/95 rounded-2xl border border-primary/20 shadow-xl">
            <div className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-full hover:bg-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-primary/20">
                <Link to="/get-started">
                  <Button variant="hero" className="w-full rounded-full shadow-lg shadow-cyan-500/20">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
