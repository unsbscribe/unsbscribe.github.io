import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote: "Found 3 subscriptions I completely forgot about! Saved me $47/month. The app is beautifully designed and feels native to macOS.",
    author: "Sarah Chen",
    title: "Product Designer",
  },
  {
    rating: 5,
    quote: "As a privacy-conscious user, I love that everything stays local. The insights helped me save over $200 this year!",
    author: "Mike Rodriguez",
    title: "Software Engineer",
  },
  {
    rating: 5,
    quote: "Finally, an app that feels like it belongs on Mac! Clean design, great performance, and it found subscriptions I didn't even remember.",
    author: "Emma Thompson",
    title: "Marketing Manager",
  },
];

const stats = [
  {
    value: "100+",
    label: "Happy Users",
    color: "text-apple-blue",
  },
  {
    value: "$6800",
    label: "Money Saved",
    color: "text-apple-green",
  },
  {
    value: "$73",
    label: "Average Monthly Savings",
    color: "text-orange-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sf-pro-display font-bold mb-6 text-apple-black">
            Loved by Mac Users
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-sf-pro">
            Join thousands of users who have discovered hidden subscriptions and saved money.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-apple hover:shadow-apple-lg transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-sf-pro">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-sf-pro-display font-semibold text-apple-black">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 font-sf-pro">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <div className={`text-4xl font-sf-pro-display font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <p className="text-gray-600 font-sf-pro">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
