"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      firstname: formData.get('firstName') as string,
      lastname: formData.get('lastName') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };
    
    try {
      const response = await fetch('https://n8n.flla.my.id/webhook/2b5243aa-a396-4f57-b264-3462e58a9c23', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.status === 200) {
         toast({
           title: "Message sent successfully!",
           description: result.message || "Thank you for reaching out. I'll get back to you soon.",
         });
         (e.target as HTMLFormElement).reset();
       } else if (response.status === 429) {
         toast({
           title: "Rate limit exceeded",
           description: result.message || "Please try again later.",
           variant: "destructive"
         });
       } else {
         toast({
           title: "Failed to send message",
           description: result.message || "Something went wrong. Please try again.",
           variant: "destructive"
         });
       }
     } catch (error) {
       console.error('Error sending message:', error);
       toast({
         title: "Network Error",
         description: "Failed to connect to server. Please check your internet connection and try again.",
         variant: "destructive"
       });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "me@flla.my.id",
      href: "mailto:me@flla.my.id"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 85155100526",
      href: "tel:+6285155100526"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/fllaa",
      username: "@fllaa"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/fallah-andy-prakasa",
      username: "Fallah Andy Prakasa"
    }
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your next project to life? I'd love to hear about your ideas 
              and discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        placeholder="John" 
                        required 
                        className="glass-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        placeholder="Doe" 
                        required 
                        className="glass-card"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="glass-card"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="Project Collaboration" 
                      required 
                      className="glass-card"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project..." 
                      required 
                      rows={6}
                      className="glass-card resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full glass-card hover-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="glass-card hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg glass-card hover-glow transition-all hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="glass-card hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Available for new projects</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Currently accepting freelance projects and full-time opportunities. 
                      Expected response time: 24-48 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;