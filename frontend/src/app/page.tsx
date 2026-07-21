import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SportsPrograms from "@/components/SportsPrograms";
import WhyChooseUs from "@/components/WhyChooseUs";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SportsPrograms />
      <WhyChooseUs />
      <Events />
      <Gallery />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
