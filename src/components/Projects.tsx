"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Projector } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Tamago",
      description: "An anime streaming & manga reader application",
      longDescription: 
        "Tamago is an anime streaming and manga reader application that allows users to watch anime series and read manga chapters. Built with Flutter, Dart, and Firebase, it provides a seamless and enjoyable user experience for anime enthusiasts.",
      image: "https://r2.flla.my.id/20250816_215349.png",
      technologies: ["Flutter", "Dart", "Firebase"],
      githubUrl: "https://github.com/fllaa/tamago",
      featured: true
    },
    {
      title: "ZapCron",
      description: "A cron-based HTTP webhook automation tool designed to simplify task scheduling.",
      longDescription: "Built with Next.js, Bun, and PostgreSQL, featuring a user-friendly interface for managing cron jobs, webhook configurations, and real-time monitoring.",
      image: "https://r2.flla.my.id/Screenshot%202025-08-06%20171407-front.png",
      technologies: ["Next.js", "TypeScript", "Bun", "PostgreSQL", "Drizzle", "Docker"],
      liveUrl: "https://zapcron.flla.my.id",
      githubUrl: "https://github.com/fllaa/zapcron",
      featured: false
    },
    {
      title: "Personal Web",
      description: "A personal portfolio website showcasing my projects, skills, and experiences.",
      longDescription: "Developed using Waku and Tailwind CSS, featuring a responsive design, interactive project showcases, and a blog section.",
      image: "https://r2.flla.my.id/Screenshot%202025-08-06%20152212-front.png",
      technologies: ["Waku", "TypeScript", "Bun", "Tailwind CSS"],
      liveUrl: "https://flla.my.id",
      githubUrl: "https://github.com/fllaa/flla-web",
      featured: false
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my technical skills and passion for creating 
              innovative solutions to complex problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`glass-card hover-glow group transition-all duration-300 overflow-hidden ${
                  project.featured ? 'lg:h-auto' : ''
                }`}
              >
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-3'} gap-0`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden m-1 rounded-t-lg lg:rounded-t-none lg:rounded-l-lg ${project.featured ? 'lg:order-1' : ''}`}>
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center blur-2xl scale-110"
                      style={{
                        backgroundImage: `url(${project.image})`,
                      }}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-64 md:h-full object-contain transition-transform duration-500 scale-80 group-hover:scale-100 z-10"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div> */}
                  </div>

                  {/* Project Content */}
                  <div className={`${project.featured ? 'lg:col-span-1 lg:order-2' : 'md:col-span-2'}`}>
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                        {project.featured && (
                          <Badge variant="secondary" className="glass-card">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {project.featured && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                      )}

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline" 
                              className="glass-card text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-3 pt-2">
                        {project.liveUrl && (
                          <Button 
                            size="sm" 
                            className="glass-card hover-glow"
                            asChild
                          >
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="glass-card hover-glow"
                          asChild
                        >
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;