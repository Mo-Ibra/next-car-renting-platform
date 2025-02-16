import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const RentalInfo = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">Rental Info</h2>
                    <p className="text-sm text-muted-foreground">Please select your rental date</p>
                </div>
                <span className="text-sm text-muted-foreground">Step 2 of 4</span>
            </div>

            <div className="space-y-6">
                {/* Pick-Up Section */}
                <div>
                    <RadioGroup defaultValue="pickup" className="mb-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pickup" id="pickup" />
                            <Label htmlFor="pickup">Pick - Up</Label>
                        </div>
                    </RadioGroup>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Locations</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your city" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ny">New York</SelectItem>
                                    <SelectItem value="la">Los Angeles</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Date</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your date" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="today">Today</SelectItem>
                                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                            <Label>Time</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your time" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="9">09:00 AM</SelectItem>
                                    <SelectItem value="10">10:00 AM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Drop-Off Section */}
                <div>
                    <RadioGroup defaultValue="dropoff" className="mb-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="dropoff" id="dropoff" />
                            <Label htmlFor="dropoff">Drop - Off</Label>
                        </div>
                    </RadioGroup>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Locations</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your city" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ny">New York</SelectItem>
                                    <SelectItem value="la">Los Angeles</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Date</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your date" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="today">Today</SelectItem>
                                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                            <Label>Time</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your time" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="9">09:00 AM</SelectItem>
                                    <SelectItem value="10">10:00 AM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalInfo;