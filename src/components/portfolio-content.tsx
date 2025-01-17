import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioData } from "@/data/portfolio-data"
import { FileText, Github } from 'lucide-react'

export function PortfolioContent() {
    return (
        <div className="space-y-12 pb-8">
            {/* About Section */}
            <section id="about" className="space-y-4">
                <h2 className="text-2xl font-bold">About Me</h2>
                <p className="text-muted-foreground">{portfolioData.about.description}</p>
                <p>
                    Feel free to{" "}
                    <a href={`mailto:${portfolioData.about.contact}`} className="text-primary hover:underline">
                        contact me
                    </a>{" "}
                    if you are interested in my work.
                </p>
            </section>

            {/* Publications Section */}
            <section id="publications" className="space-y-4">
                <h2 className="text-2xl font-bold">Publications</h2>
                <div className="grid gap-6">
                    {portfolioData.publications.map((pub, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <div className="grid md:grid-cols-[1fr] gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold">{pub.title}</h3>
                                            <p className="text-sm text-muted-foreground">{pub.subtitle}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {pub.authors.map((author, idx) => (
                                                <span key={idx}>
                                                    {author.link ? (
                                                        <a href={author.link} className="text-primary hover:underline">
                                                            {author.name}
                                                        </a>
                                                    ) : (
                                                        author.name
                                                    )}
                                                    {idx < pub.authors.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={pub.links.paper}>
                                                    <FileText className="w-4 h-4 mr-2" />
                                                    Paper
                                                </a>
                                            </Button>
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={pub.links.code}>
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Research Section */}
            <section id="research" className="space-y-4">
                <h2 className="text-2xl font-bold">Research Works</h2>
                <div className="grid gap-6">
                    {portfolioData.research.map((pub, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <div className="grid md:grid-cols-[1fr] gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold">{pub.title}</h3>
                                            <p className="text-sm text-muted-foreground">{pub.subtitle}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {pub.authors.map((author, idx) => (
                                                <span key={idx}>
                                                    {author.link ? (
                                                        <a href={author.link} className="text-primary hover:underline">
                                                            {author.name}
                                                        </a>
                                                    ) : (
                                                        author.name
                                                    )}
                                                    {idx < pub.authors.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={pub.links.paper}>
                                                    <FileText className="w-4 h-4 mr-2" />
                                                    Paper
                                                </a>
                                            </Button>
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={pub.links.code}>
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="space-y-4">
                <h2 className="text-2xl font-bold">Education</h2>
                <div className="grid gap-4">
                    {portfolioData.education.map((edu, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <div className="space-y-1">
                                    <div className="text-sm text-muted-foreground">{edu.period}</div>
                                    <div className="font-medium">{edu.degree} | {edu.cgpa}</div> 
                                    <div className="text-sm">{edu.institution}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Honors Section */}
            <section id="honors" className="space-y-4">
                <h2 className="text-2xl font-bold">Honors and Awards</h2>
                <div className="grid gap-4">
                    {portfolioData.honors.map((honor, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <div className="space-y-2">
                                    <div className="font-medium">{honor.title}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {honor.institution} ({honor.year || honor.period})
                                    </div>
                                    {honor.description && (
                                        <p className="text-sm text-muted-foreground">{honor.description}</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* experience Section */}
            <section id="experience" className="space-y-4">
                <h2 className="text-2xl font-bold">Academic Services</h2>
                <div className="grid gap-4">
                    {portfolioData.experience.map((service, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <div className="space-y-2">
                                    <div className="font-medium">{service.position}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {service.institution} ({service.period})
                                    </div>
                                    <ul className="text-sm list-disc list-inside space-y-1">
                                        {service.courses.map((course, idx) => (
                                            <li key={idx}>{course}</li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="space-y-4">
                <h2 className="text-2xl font-bold">Projects</h2>
                <div className="grid gap-4">
                    {portfolioData.projects.map((project, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="font-medium">{project.title}</div>
                                        <Badge variant="secondary">{project.type}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                    {project.domain && (
                                        <div className="flex flex-wrap gap-1">
                                            {project.domain.map((tech) => (
                                                <Badge key={tech} variant="outline">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}

