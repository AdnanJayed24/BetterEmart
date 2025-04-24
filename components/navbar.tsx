"use client"

import * as React from "react"
import Link from "next/link"
import { LucideMonitor } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <LucideMonitor className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Green_Heaven</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="hidden md:flex">Log in</Button>
            <Button>Sign up</Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}