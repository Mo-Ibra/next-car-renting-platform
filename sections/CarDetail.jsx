"use client"

import FilterSidebar from "@/components/CarFilterSidebar"
import CarCard from "@/components/CarCard"

import { popularCars, recommendationCars } from "@/data/cars"
import { useState } from "react";
import { Loader2 } from "lucide-react";
import CarInfo from "@/components/CarInfo";

function CarListing() {

    const [isLoading, setIsLoading] = useState(false);

    const allCars = [...popularCars, ...recommendationCars];

    const loadingButton = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <aside className="md:col-span-1">
                        <FilterSidebar />
                    </aside>
                    <main className="md:col-span-3">
                        <CarInfo />
                    </main>
                </div>
            </div>
        </section>
    )
}

export default CarListing;