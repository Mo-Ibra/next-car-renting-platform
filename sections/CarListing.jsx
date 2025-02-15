"use client"

import FilterSidebar from "@/components/CarFilterSidebar"
import CarCard from "@/components/CarCard"

import { popularCars, recommendationCars } from "@/data/cars"

function CarListing() {

    const allCars = [...popularCars, ...recommendationCars];

    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <aside className="md:col-span-1">
                        <FilterSidebar />
                    </aside>
                    <main className="md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {allCars.map((car) => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-8">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Load More</button>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}

export default CarListing;