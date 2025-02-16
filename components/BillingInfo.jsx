import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const BillingInfo = ({ formData, handleInputChange }) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">Billing Info</h2>
                    <p className="text-sm text-muted-foreground">Please enter your billing info</p>
                </div>
                <span className="text-sm text-muted-foreground">Step 1 of 4</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                        id="address"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="city">Town / City</Label>
                    <Input
                        id="city"
                        name="city"
                        placeholder="Town or city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default BillingInfo;