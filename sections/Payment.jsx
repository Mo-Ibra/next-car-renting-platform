"use client"

import { useState } from "react"
import RentalSummary from "@/components/RentalSummary"
import BillingInfo from "@/components/BillingInfo"
import RentalInfo from "@/components/RentalInfo"
import PaymentMethod from "@/components/PaymentMethod"
import PaymentConfirmation from "@/components/PaymentConfirmation"

function PaymentForm() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        pickupLocation: "",
        pickupDate: "",
        pickupTime: "",
        dropoffLocation: "",
        dropoffDate: "",
        dropoffTime: "",
        paymentMethod: "credit-card",
        cardNumber: "",
        expirationDate: "",
        cardHolder: "",
        cvc: "",
        marketingConsent: false,
        termsAccepted: false,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
                <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">

                    {/* Billing Info */}
                    <BillingInfo formData={formData} handleInputChange={handleInputChange} />

                    {/* Rental Info */}
                    <RentalInfo />

                    {/* Payment Method */}
                    <PaymentMethod formData={formData} setFormData={setFormData} handleInputChange={handleInputChange} />

                    {/* Confirmation */}
                    <PaymentConfirmation formData={formData} setFormData={setFormData} />
                </form>

                {/* Rental Summary */}
                <RentalSummary />
            </div>
        </div>
    )
}

export default PaymentForm;