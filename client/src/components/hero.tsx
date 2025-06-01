import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Apple } from "lucide-react";

export default function Hero() {
  const handleDownload = () => {
    window.location.href = "https://github.com/unsbscribe/unsbscribe.github.io/releases/download/v1.1/unsbscribe.zip";
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-apple-subtle/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-sf-pro-display font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-apple-black to-gray-600 bg-clip-text text-[#0b0a09]">
              See All Your Subscriptions.
            </span>
            <br />
            <span className="text-apple-blue">Instantly.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-sf-pro">
            The first macOS app that automatically discovers all your subscriptions,
            helps you understand your spending, and saves you money. No data leaves your Mac.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownload}
              className="bg-apple-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-all duration-200 shadow-apple-lg flex items-center gap-3"
            >
              <Apple className="w-6 h-6" />
              Download for macOS
            </Button>
            <p className="text-sm text-gray-500 font-sf-pro">
              Free • macOS 11.0 or later • 1MB
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* MacBook mockup */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative bg-gray-800 rounded-t-xl shadow-apple-lg overflow-hidden">

              {/* App screenshot */}
              <div className="relative overflow-hidden">
                <img
                  src="/attached_assets/unsubscribe.png"
                  alt="Unsubscribe dashboard interface showing subscription management"
                  className="w-full rounded-t-lg"
                />
                {/* Overlay gradient for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent"></div>
              </div>
            </div>
            {/* MacBook base */}
            <div className="h-6 bg-gray-300 rounded-b-xl shadow-apple-lg relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-400 rounded-b-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
