import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularCars from "@/sections/PopularCars";
import RecomendationCars from "@/sections/RecomendationCars";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularCars />
      <RecomendationCars />
      <Footer />
    </div>
  );
}
