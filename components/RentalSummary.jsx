import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RentalSummary = () => {
    return (
        <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-1">Rental Summary</h3>
                        <p className="text-sm text-muted-foreground">
                            Prices may change depending on the length of the rental and the price of your rental car.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="h-20 w-20 bg-blue-100 rounded-lg overflow-hidden">
                            <Image
                                src="/images/car-info/1.svg"
                                alt="Nissan GT-R"
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-semibold">Nissan GT-R</h4>
                            <div className="flex items-center gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <Star className="w-4 h-4 text-gray-200" />
                                <span className="text-sm text-muted-foreground ml-1">440+ Reviewer</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>$80.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Tax</span>
                            <span>$0</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Input placeholder="Apply promo code" className="flex-1" />
                            <Button variant="outline">Apply now</Button>
                        </div>
                    </div>

                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Total Rental Price</p>
                                <p className="text-sm text-muted-foreground">Overall price and includes rental discount</p>
                            </div>
                            <span className="text-2xl font-bold">$80.00</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default RentalSummary;