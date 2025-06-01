import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Download",
    description: "Download the .dmg file and drag Smart Subscriptions Sniffer to your Applications folder. Launch it like any other Mac app.",
    color: "bg-apple-blue",
  },
  {
    number: "2",
    title: "Open",
    description: "The app automatically scans your Mac for subscription services. Grant permission and watch as it discovers your subscriptions.",
    color: "bg-apple-green",
  },
  {
    number: "3",
    title: "Save Money",
    description: "Review your subscriptions, identify unused services, and start saving money immediately. Track your savings over time.",
    color: "bg-orange-500",
  },
];

export default function HowItWorks() {
  const handleDownload = () => {
    console.log("Download initiated");
  };

  return (
    <section id="how-it-works" className="py-20 bg-apple-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sf-pro-display font-bold mb-6 text-apple-black">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sf-pro">
            Get started in under a minute. No account required, no data shared.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-apple`}>
                <span className="text-2xl font-sf-pro-display font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-sf-pro-display font-semibold mb-4 text-apple-black">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-sf-pro">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={handleDownload}
            className="bg-apple-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-all duration-200 shadow-apple-lg"
          >
            Start Saving Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
