"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Django/Flask", level: 80 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 85 },
        { name: "Testing", level: 90 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Linux", level: 80 }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer - Associate",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Scrum Master Certified (CSM)"
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels 
              across various technologies and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="glass-card hover-glow transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 glass-card"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="glass-card hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <span className="text-2xl">🏆</span>
                Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="glass-card hover-glow p-3 text-sm justify-start"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;