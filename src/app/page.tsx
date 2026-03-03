import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import UnitExplorer from "@/components/UnitExplorer";
import Amenities from "@/components/Amenities";
import Technology from "@/components/Technology";
import Gallery from "@/components/Gallery";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Overview />
      <UnitExplorer />
      <Amenities />
      <Technology />
      <Gallery />
      <Register />
      <Footer />
    </main>
  );
}
