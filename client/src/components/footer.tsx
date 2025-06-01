import { Search } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Privacy", href: "#privacy" },
    { label: "System Requirements", href: "#requirements" },
  ],
  support: [
    { label: "Help Center", href: "#help" },
    { label: "Contact Us", href: "#contact" },
    { label: "Release Notes", href: "#releases" },
    { label: "Report Bug", href: "#bug-report" },
  ],
};

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-apple-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/UNSBSCRIBE.png" 
                alt="Unsubscribe logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-sf-pro-display font-semibold text-lg">
              Unsbscribe
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed font-sf-pro">
              The native macOS app for discovering and managing your subscriptions.
              Built with privacy in mind.
            </p>
          </div>

          <div>
            <h4 className="font-sf-pro-display font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-white transition-colors font-sf-pro text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sf-pro-display font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors font-sf-pro"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-sf-pro">
            © 2024 Smart Subscriptions Sniffer. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors font-sf-pro text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors font-sf-pro text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
