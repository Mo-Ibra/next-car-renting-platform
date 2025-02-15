import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularCars from "@/sections/PopularCars";
import RecomendationCars from "@/sections/RecomendationCars";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularCars />
      <RecomendationCars />
    </div>
  );
}
