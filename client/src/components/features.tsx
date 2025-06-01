import { motion } from "framer-motion";
import { Eye, Shield, TrendingUp, Bell } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Instant Detection",
    description: "Automatically scans your Mac and finds all subscription services. No manual entry required.",
    color: "bg-apple-blue",
  },
  {
    icon: Shield,
    title: "Local Privacy",
    description: "All analysis happens locally on your Mac. Your financial data never touches our servers.",
    color: "bg-apple-green",
  },
  {
    icon: TrendingUp,
    title: "Smart Analytics",
    description: "Beautiful insights into your spending patterns with native macOS design language.",
    color: "bg-purple-500",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified about upcoming renewals and potential savings opportunities.",
    color: "bg-orange-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-apple-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sf-pro-display font-bold mb-6 text-apple-black">
            Built for Mac. Built for Privacy.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sf-pro">
            Every feature designed with Apple's principles in mind.
            Your subscription data never leaves your Mac.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-apple hover:shadow-apple-lg transition-all duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-sf-pro-display font-semibold mb-4 text-apple-black">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-sf-pro leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
