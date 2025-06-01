import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Native macOS Design",
    description: "Built with Apple's Human Interface Guidelines for a familiar, intuitive experience.",
    color: "bg-apple-blue",
  },
  {
    title: "Keyboard Shortcuts",
    description: "Full keyboard navigation and shortcuts for power users who love efficiency.",
    color: "bg-apple-green",
  },
  {
    title: "Menu Bar Integration",
    description: "Quick access to your subscription overview right from the menu bar.",
    color: "bg-purple-500",
  },
];

export default function AppShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-sf-pro-display font-bold mb-6 text-apple-black">
              Beautiful. Powerful. Native.
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-sf-pro leading-relaxed">
              Designed from the ground up for macOS with native performance,
              intuitive gestures, and seamless integration with your workflow.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-8 h-8 ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-sf-pro-display font-semibold mb-2 text-apple-black">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 font-sf-pro">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/attached_assets/unsubscribe.png"
              alt="Clean Apple-style interface showing subscription management"
              className="rounded-2xl shadow-apple-lg w-full"
            />
            {/* Floating UI elements for enhanced visual appeal */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-apple-lg"
            >
              <div className="w-8 h-8 bg-apple-green rounded-lg flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
