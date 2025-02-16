"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

const typeFilters = [
    { id: "sport", label: "Sport", count: 10 },
    { id: "suv", label: "SUV", count: 12 },
    { id: "mpv", label: "MPV", count: 16 },
    { id: "sedan", label: "Sedan", count: 20 },
    { id: "coupe", label: "Coupe", count: 14 },
    { id: "hatchback", label: "Hatchback", count: 14 },
]

const capacityFilters = [
    { id: "2", label: "2 Person", count: 10 },
    { id: "4", label: "4 Person", count: 14 },
    { id: "6", label: "6 Person", count: 12 },
    { id: "8", label: "8 or More", count: 16 },
]

export default function FilterSidebar() {
    return (
        <div className="space-y-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            {/* Type Filter */}
            <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground dark:text-gray-300 tracking-wide">TYPE</h3>
                <div className="space-y-3">
                    {typeFilters.map((type) => (
                        <div key={type.id} className="flex items-center space-x-2">
                            <Checkbox id={type.id} className="border-gray-300 dark:border-gray-600" />
                            <Label
                                htmlFor={type.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-200"
                            >
                                {type.label} ({type.count})
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Capacity Filter */}
            <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground dark:text-gray-300 tracking-wide">CAPACITY</h3>
                <div className="space-y-3">
                    {capacityFilters.map((capacity) => (
                        <div key={capacity.id} className="flex items-center space-x-2">
                            <Checkbox id={capacity.id} className="border-gray-300 dark:border-gray-600" />
                            <Label
                                htmlFor={capacity.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-200"
                            >
                                {capacity.label} ({capacity.count})
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground dark:text-gray-300 tracking-wide">PRICE</h3>
                <div className="space-y-4">
                    <Slider
                        defaultValue={[100]}
                        max={100}
                        step={1}
                        className="w-full"
                    />
                    <div className="text-sm dark:text-gray-200">Max. $100.00</div>
                </div>
            </div>
        </div>
    )
}
