import { 
  Zap, 
  LineChart, 
  Users, 
  CheckCircle2 
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Competitive Programming</h2>
          <p className="text-muted-foreground text-lg">
            Learn Programming With Me and Get a vast Knowledge!
          </p>
        </div>
      </div>
    </section>
  )
}