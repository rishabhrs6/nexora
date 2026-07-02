import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyNexora from "@/components/WhyNexora";
import Process from "@/components/Process";
import AIShowcase from "@/components/AIShowcase";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/contact/ContactSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#050816]">
      <LoadingScreen />

      <ScrollProgress />

      <BackToTop />

      <Navbar />

      <Hero />

      <Services />

      <WhyNexora />

      <Process />

      <AIShowcase />

      <Testimonials />

      <CaseStudies />

      <Pricing />

      <FAQ />

      <ContactSection />

      <CTA />

      <Footer />
    </main>
  );
}