import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const PaymentConfirmation = ({ formData, setFormData }) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">Confirmation</h2>
                    <p className="text-sm text-muted-foreground">
                        We are getting to the end. Just few clicks and your rental is ready!
                    </p>
                </div>
                <span className="text-sm text-muted-foreground">Step 4 of 4</span>
            </div>

            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="marketing"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, marketingConsent: checked }))
                        }
                    />
                    <Label htmlFor="marketing" className="text-sm">
                        I agree with sending an Marketing and newsletter emails. No spam, promised!
                    </Label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, termsAccepted: checked }))}
                    />
                    <Label htmlFor="terms" className="text-sm">
                        I agree with our terms and conditions and privacy policy.
                    </Label>
                </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Rent Now
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-4 w-4">🔒</span>
                <div>
                    <p className="font-medium">All your data are safe</p>
                    <p>We are using the most advanced security to provide you the best experience ever.</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentConfirmation;