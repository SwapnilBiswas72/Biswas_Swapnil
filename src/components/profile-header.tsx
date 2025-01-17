import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, GraduationCap, Linkedin, Mail } from 'lucide-react'

export function ProfileHeader() {
    return (
        <div className="flex items-center justify-between w-full py-4">
            <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                    <AvatarImage src="/swapnil.png" alt="Swapnil Biswas" />
                    <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-medium">Swapnil Biswas</h1>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                    <a href="mailto:sbiswas@siue.edu" aria-label="Email">
                        <Mail className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/swapnil-biswas-6447b5218/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/SwapnilBiswas72" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://scholar.google.com/citations?user=-BgBK3kAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                        <GraduationCap className="h-5 w-5" />
                    </a>
                </Button>
            </div>
        </div>
    )
}
