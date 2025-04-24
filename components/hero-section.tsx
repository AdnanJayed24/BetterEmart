import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container flex flex-col items-center text-center">
        <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-muted">
          <span className="px-2 py-0.5 mr-2 text-xs rounded-full bg-primary text-primary-foreground">New</span>
          Hey There! I am Adnan Jayed.
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl animate-in fade-in slide-in-from-bottom-3 duration-700">
          Boost your CP Knowledge with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">Green_heaven</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          Stucked in Dynamic Programming?
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="mt-16 relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQG0gSOXfnuv2g/profile-displayphoto-shrink_800_800/B4EZWBR.oiGgAc-/0/1741630730941?e=1750896000&v=beta&t=tsJt2I6xDjdu-dJGo0mYNgczdLmdFIBtacqHehjEwzw"
                  height={200}
                  width={200}
                />  
        </div>
      </div>
    </section>
  )
}