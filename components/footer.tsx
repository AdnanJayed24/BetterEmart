import Link from "next/link"
import { LucideMonitor, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/40 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <LucideMonitor className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Green_Heaven</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              A CP community
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://github.com/AdnanJayed24" aria-label="Github">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.linkedin.com/in/greenheaven24" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with me.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-muted-foreground">
          <p>© 2025 Green_Heaven. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="mailto:muhammad.adnan.jayed@gmail.com" className="hover:text-foreground transition-colors">
              <Mail className="h-4 w-4 inline mr-1" />
              contact@Adnan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}