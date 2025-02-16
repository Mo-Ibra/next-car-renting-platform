"use client"

import FilterSidebar from "@/components/CarFilterSidebar"
import CarCard from "@/components/CarCard"

import { popularCars, recommendationCars } from "@/data/cars"
import { useState } from "react";
import { Loader2 } from "lucide-react";

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
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <aside className="lg:col-span-1">
                        <FilterSidebar />
                    </aside>
                    <main className="lg:col-span-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {allCars.map((car) => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-8">
                            {
                                isLoading ? (
                                    <div className="flex justify-center">
                                        <Loader2 className="w-4 h-4 animate-spin text-gray-600 dark:text-gray-400" />
                                    </div>
                                ) : (
                                    <button 
                                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors" 
                                        onClick={loadingButton}
                                    >
                                        Load More
                                    </button>
                                )
                            }
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}

export default CarListing;