import Link from "next/link"

import { footerLinks } from "@/data/footer-links"

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-32">

                <div className="flex flex-col md:flex-row gap-12 items-center justify-between">

                    {/* Brand Column */}
                    <div className="space-y-4 hidden md:block">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            MORENT
                        </Link>
                        <p className="text-muted-foreground max-w-xs text-sm">
                            Our vision is to provide convenience and help increase your sales business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">

                        {/* About Column */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">About</h3>
                            <ul className="space-y-3">
                                {footerLinks.about.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Community Column */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Community</h3>
                            <ul className="space-y-3">
                                {footerLinks.community.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Socials Column */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Socials</h3>
                            <ul className="space-y-3">
                                {footerLinks.socials.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>



                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t mt-12 pt-8">
                    <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} MORENT. All rights reserved</p>
                    <div className="flex gap-6">
                        <Link
                            href="/privacy-policy"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Privacy & Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Terms & Condition
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}