import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FuelIcon as GasPump, Gauge, Users } from "lucide-react"
import Image from "next/image"

function CarCard({ car }) {
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <Card className="flex h-full flex-col">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div>
                    <h3 className="font-semibold text-lg">{car.name}</h3>
                    <p className="text-sm text-muted-foreground">{car.type}</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsFavorite(!isFavorite)}>
                    <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                </Button>
            </CardHeader>
            <CardContent className="py-4">
                <div className="relative h-[120px] w-full">
                    <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-contain" />
                </div>
                <div className="grid grid-cols-3 gap-2 py-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <GasPump className="h-4 w-4" />
                        <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Gauge className="h-4 w-4" />
                        <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{car.capacity}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-auto">
                <div>
                    <p className="text-lg font-semibold">
                        ${car.price.toFixed(2)}
                        <span className="text-sm text-muted-foreground">/day</span>
                    </p>
                    {car.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">${car.originalPrice.toFixed(2)}</p>
                    )}
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Rent Now</Button>
            </CardFooter>
        </Card>
    )
}

export default CarCard;