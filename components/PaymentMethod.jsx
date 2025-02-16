import Image from "next/image";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

const PaymentMethod = ({ formData, handleInputChange, setFormData }) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">Payment Method</h2>
                    <p className="text-sm text-muted-foreground">Please enter your payment method</p>
                </div>
                <span className="text-sm text-muted-foreground">Step 3 of 4</span>
            </div>

            <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
                className="space-y-4"
            >
                <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="credit-card" id="credit-card" />
                            <Label htmlFor="credit-card">Credit Card</Label>
                        </div>
                        <div className="flex gap-2">
                            <Image src="/images/payment/visa.svg" alt="Visa" width={32} height={20} />
                            <Image src="/images/payment/mastercard.svg" alt="Mastercard" width={32} height={20} />
                        </div>
                    </div>

                    {formData.paymentMethod === "credit-card" && (
                        <div className="mt-4 grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input
                                    id="cardNumber"
                                    name="cardNumber"
                                    placeholder="Card number"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="expirationDate">Expiration Date</Label>
                                <Input
                                    id="expirationDate"
                                    name="expirationDate"
                                    placeholder="DD/MM/YY"
                                    value={formData.expirationDate}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cardHolder">Card Holder</Label>
                                <Input
                                    id="cardHolder"
                                    name="cardHolder"
                                    placeholder="Card holder"
                                    value={formData.cardHolder}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" name="cvc" placeholder="CVC" value={formData.cvc} onChange={handleInputChange} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        <Image src="/images/payment/paypal.svg" alt="PayPal" width={80} height={20} />
                    </div>
                </div>

                <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bitcoin" id="bitcoin" />
                            <Label htmlFor="bitcoin">Bitcoin</Label>
                        </div>
                        <Image src="/images/payment/bitcoin.svg" alt="Bitcoin" width={80} height={20} />
                    </div>
                </div>
            </RadioGroup>
        </div>
    )
}

export default PaymentMethod;