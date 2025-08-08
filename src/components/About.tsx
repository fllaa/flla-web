"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, user experience, and search engine visibility."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams to deliver exceptional products."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying current with emerging technologies and implementing cutting-edge solutions."
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              DevOps and Full-Stack Developer dedicated to optimizing performance, reducing costs, and delivering robust, scalable cloud-based solutions.  
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a versatile and adaptable professional with a strong foundation in both software development and operations,
                  driven by a passion for clean code, scalability, and performance optimization.
                  My journey reflects a deep commitment to building efficient and continuously expanding my technical horizons.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a mindset rooted in collaboration, problem-solving, and lifelong learning,
                  i bring a balanced perspective to practical implementation with innovative thinking.
                  My interest in cloud platforms, and modern development practices highlights my dedication to impactful solutions.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-medium">Current Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Building AI-powered web applications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Exploring serverless architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Contributing to open-source projects
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="glass-card hover-glow transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;