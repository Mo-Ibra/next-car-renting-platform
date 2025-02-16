"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Star } from "lucide-react"

const thumbnails = [
    {
        id: 1,
        src: "/images/car-info/1.svg",
        alt: "Nissan GT-R Exterior",
    },
    {
        id: 2,
        src: "/images/car-info/2.svg",
        alt: "Nissan GT-R Interior Dashboard",
    },
    {
        id: 3,
        src: "/images/car-info/3.svg",
        alt: "Nissan GT-R Interior Seats",
    },
]

const specifications = [
    { label: "Type Car", value: "Sport" },
    { label: "Capacity", value: "2 Person" },
    { label: "Steering", value: "Manual" },
    { label: "Gasoline", value: "70L" },
]

export default function CarInfo() {

    const [selectedImage, setSelectedImage] = useState(thumbnails[0])
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid xl:grid-cols-2 gap-8">
                {/* Left Column - Images */}
                <div className="space-y-4">
                    
                    {/* Main Image */}
                    <Card className="relative aspect-[16/10] overflow-hidden bg-blue-600 rounded-3xl">
                        <Image
                            src={selectedImage.src || "/placeholder.svg"}
                            alt={selectedImage.alt}
                            fill
                            className="object-cover"
                            quality={100}
                            priority
                        />
                        <div className="absolute inset-0 bg-blue-600/10" />
                    </Card>

                    {/* Thumbnails */}
                    <div className="flex gap-4">
                        {thumbnails.map((thumbnail) => (
                            <button
                                key={thumbnail.id}
                                onClick={() => setSelectedImage(thumbnail)}
                                className={`relative aspect-[16/10] flex-1 rounded-xl overflow-hidden ${selectedImage.id === thumbnail.id ? "ring-2 ring-blue-600" : ""
                                    }`}
                            >
                                <Image 
                                    src={thumbnail.src || "/placeholder.svg"} 
                                    alt={thumbnail.alt} 
                                    fill 
                                    className="object-cover"
                                    quality={90}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Nissan GT-R</h2>
                            <div className="flex items-center gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                                {[...Array(1)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-gray-300" />
                                ))}
                                <span className="text-muted-foreground ml-2">440+ Reviewer</span>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setIsFavorite(!isFavorite)}>
                            <Heart className={`h-6 w-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
                        </Button>
                    </div>

                    <p className="text-lg text-muted-foreground">
                        NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving
                        proving ground, the "race track".
                    </p>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {specifications.map((spec) => (
                            <div key={spec.label} className="space-y-1">
                                <p className="text-muted-foreground">{spec.label}</p>
                                <p className="font-semibold">{spec.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-6">
                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold">$80.00</span>
                                <span className="text-muted-foreground">/ days</span>
                            </div>
                            <span className="text-muted-foreground line-through">$100.00</span>
                        </div>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                            Rent Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}