import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import AppShowcase from "@/components/app-showcase";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
