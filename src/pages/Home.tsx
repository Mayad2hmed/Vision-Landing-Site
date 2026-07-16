import Hero from "../compnents/Hero/Hero";
import Features from "../compnents/Features/Features";
import Pricing from "../compnents/Pricing/Pricing";
import Testimonials from "../compnents/Testimonials/Testimonials";
import Footer from "../compnents/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}