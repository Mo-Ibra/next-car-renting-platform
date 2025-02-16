"use client"

import Link from "next/link"

import { recommendationCars } from "@/data/cars"

import CarCard from "@/components/CarCard"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

function RecomendationCars({ withButton = true, carLimit}) {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-md text-gray-500 dark:text-gray-400 font-semibold">Recommendation Car</h2>
                    <Link href="/category" className="text-blue-600 dark:text-blue-500 hover:underline">
                        View All
                    </Link>
                </div>
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <Loader2 className="h-10 w-10 animate-spin text-gray-500 dark:text-gray-400" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {recommendationCars.slice(0, carLimit).map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                )}
                {!isLoading && withButton && (
                    <div className="flex justify-center my-16">
                        <Link href="/category" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors">
                            See More Cars
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default RecomendationCars;