"use client"

import { useState, useEffect } from "react"
import { Bell, Filter, Heart, Moon, Search, Settings, Sun } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useTheme } from "@/context/ThemeContext"

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`sticky top-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''
            } border-b dark:border-gray-800`}>
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between gap-4">

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        MORENT
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden flex-1 max-w-xl mx-4 lg:flex items-center gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                            <Input type="search" placeholder="Search something here" className="pl-9 w-full dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <Button variant="outline" size="icon" className="shrink-0 dark:border-gray-700 dark:hover:bg-gray-800">
                            <Filter className="h-4 w-4" />
                            <span className="sr-only">Filter</span>
                        </Button>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2">

                        {/* Theme Toggle Button */}
                        <Button variant="ghost" size="icon" className="hidden sm:inline-flex" onClick={toggleTheme}>
                            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>

                        {/* Favorites Button */}
                        <Button variant="ghost" size="icon" className="hidden sm:inline-flex dark:hover:bg-gray-800 dark:text-gray-300">
                            <Heart className="h-5 w-5" />
                            <span className="sr-only">Favorites</span>
                        </Button>

                        {/* Mobile Search Button */}
                        <Button variant="ghost" size="icon" className="lg:hidden dark:hover:bg-gray-800 dark:text-gray-300">
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>

                        <div className="relative">
                            <Button variant="ghost" size="icon">
                                <Bell className="h-5 w-5" />
                                <span className="sr-only">Notifications</span>
                            </Button>
                            {/* Notification indicator */}
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
                        </div>

                        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Button>

                        <Avatar className="h-8 w-8 cursor-pointer">
                            <AvatarImage src="/images/avatar/1.svg" alt="User" />
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;