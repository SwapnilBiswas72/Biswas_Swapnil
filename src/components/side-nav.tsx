import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Github, Globe, Linkedin, Mail } from 'lucide-react'

export function SideNav() {
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src="/swapnil.png" alt="Swapnil Biswas" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Swapnil Biswas</h2>
          <p className="text-sm text-muted-foreground">Research Scientist</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
            <a href="mailto:sbiswas@siue.edu">
              <Mail className="w-4 h-4" />
              Email
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
            <a href="https://github.com/SwapnilBiswas72" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Github
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
            <a href="https://www.linkedin.com/in/swapnil-biswas-6447b5218/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
            <a href="https://scholar.google.com/citations?user=-BgBK3kAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
              <Globe className="w-4 h-4" />
              Google Scholar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

