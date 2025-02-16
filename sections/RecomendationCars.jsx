"use client"

import Link from "next/link"

import { recommendationCars } from "@/data/cars"

import CarCard from "@/components/CarCard"

function RecomendationCars({ withButton = true, carLimit}) {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-md text-gray-500 font-semibold">Recommendation Car</h2>
                    <Link href="/category" className="text-blue-600 hover:underline">
                        View All
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {recommendationCars.slice(0, carLimit).map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
                {withButton && (
                    // See more cars button
                    <div className="flex justify-center my-16">
                        <Link href="/category" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">See More Cars</Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default RecomendationCars;