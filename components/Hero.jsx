"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

function Hero() {
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Left Banner */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 p-8 min-h-[400px]">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-white mb-4 max-w-[300px]">The Best Platform for Car Rental</h2>
                            <p className="text-white/90 mb-6 max-w-[300px]">
                                Ease of doing a car rental safely and reliably. Of course at a low price.
                            </p>
                            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white" size="lg">
                                Rental Car
                            </Button>
                        </div>

                        {/* Car Image */}
                        <div className="absolute bottom-2 right-0">
                            <Image
                                src="/images/header-cars/1.svg"
                                alt="White Sports Car"
                                width={500}
                                height={500}
                                className="object-contain object-right-bottom"
                            />
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
                    </div>

                    {/* Right Banner */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-8 min-h-[400px]">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-white mb-4 max-w-[300px]">Easy way to rent a car at a low price</h2>
                            <p className="text-white/90 mb-6 max-w-[300px]">
                                Providing cheap car rental services and safe and comfortable facilities.
                            </p>
                            <Button className="bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-white" size="lg">
                                Rental Car
                            </Button>
                        </div>

                        {/* Car Image */}
                        <div className="absolute bottom-2 right-0">
                            <Image
                                src="/images/header-cars/2.svg"
                                alt="Silver Sports Car"
                                width={500}
                                height={500}
                                className="object-contain object-right-bottom"
                            />
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;