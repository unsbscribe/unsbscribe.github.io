import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownload = () => {
    window.location.href = "https://github.com/unsbscribe/unsbscribe.github.io/releases/download/v1.1/unsbscribe.zip";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-100"
          : "bg-white/80 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/UNSBSCRIBE.png" 
              alt="Unsubscribe logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-sf-pro-display font-semibold text-lg text-apple-black">
            Unsbscribe
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-apple-black transition-colors font-sf-pro"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-apple-black transition-colors font-sf-pro"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-600 hover:text-apple-black transition-colors font-sf-pro"
            >
              Reviews
            </button>
          </nav>

          {/* Desktop CTA */}
          <Button
            onClick={handleDownload}
            className="hidden md:flex bg-apple-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-all duration-200 shadow-apple"
          >
            Download for Mac
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-apple-black" />
            ) : (
              <Menu className="w-6 h-6 text-apple-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-apple-black transition-colors font-sf-pro text-left px-4"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-apple-black transition-colors font-sf-pro text-left px-4"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 hover:text-apple-black transition-colors font-sf-pro text-left px-4"
              >
                Reviews
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={handleDownload}
                  className="w-full bg-apple-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-all duration-200 shadow-apple"
                >
                  Download for Mac
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
