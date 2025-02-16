"use client"

import FilterSidebar from "@/components/CarFilterSidebar"
import CarInfo from "@/components/CarInfo";
import CarReview from "@/components/CarReview";

function CarListing() {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <aside className="md:col-span-1">
                        <FilterSidebar />
                    </aside>
                    <main className="md:col-span-3">
                        <CarInfo />
                        <CarReview />
                    </main>
                </div>
            </div>
        </section>
    )
}

export default CarListing;