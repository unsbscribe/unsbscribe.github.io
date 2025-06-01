import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

export default function CTA() {
  const handleDownload = () => {
    window.location.href = "https://github.com/unsbscribe/unsbscribe.github.io/releases/download/v1.1/unsbscribe.zip";
  };

  return (
    <section className="py-20 bg-gradient-to-r from-apple-blue to-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sf-pro-display font-bold mb-6 text-[#007aff]">
            Ready to take control of your subscriptions?
          </h2>
          <p className="text-xl mb-12 leading-relaxed font-sf-pro text-[#000000]">
            Join thousands of Mac users who have discovered hidden subscriptions
            and saved money with Smart Subscriptions Sniffer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownload}
              className="bg-white text-apple-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-apple-lg flex items-center gap-3"
            >
              <Apple className="w-6 h-6" />
              Download for macOS
            </Button>
            <p className="text-sm font-sf-pro text-[#000000]">
              Free download • No account required • macOS 11.0+
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
