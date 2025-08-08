"use client"

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="mesh-gradient"></div>
      
      {/* Hero Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/hero-gradient.jpg)` }}
      ></div>
      
      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-float-up">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Fallah Andy Prakasa</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
                Software Engineer | Cloud Engineer
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-float-up animate-delay-100">
              Empowering digital transformation with expertise in cloud platforms, full-stack development, and resilient system design.  
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-float-up animate-delay-200">
              <Button 
                size="lg" 
                className="glass-card hover-glow text-base px-8 py-6"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card hover-glow text-base px-8 py-6"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 pt-8 animate-float-up animate-delay-300">
              <a 
                href="https://github.com/fllaa" 
                className="p-3 glass-card hover-glow rounded-full transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/fallah-andy-prakasa" 
                className="p-3 glass-card hover-glow rounded-full transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:me@flla.my.id"
                className="p-3 glass-card hover-glow rounded-full transition-all hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;