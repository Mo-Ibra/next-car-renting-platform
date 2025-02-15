"use client"

import Link from "next/link"

import { popularCars } from "@/data/cars"

import CarCard from "@/components/CarCard"

function PopularCars() {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-md text-gray-500 font-semibold">Popular Car</h2>
                    <Link href="/category" className="text-blue-600 hover:underline">
                        View All
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {popularCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularCars;