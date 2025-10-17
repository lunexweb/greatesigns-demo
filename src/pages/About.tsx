import Navigation from "@/components/Navigation";
import { Building2, Users, Award, Wrench, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { companyConfig } from "@/config/company";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl hero-title mb-6 text-foreground">
              About {companyConfig.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With 17 years of excellence in the signage industry, we've built our reputation on quality, expertise, and reliability, while embracing the future of smart signage solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-8">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Based at {companyConfig.contact.address}, we're strategically positioned to serve clients throughout the region with prompt, professional service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team consists of qualified and experienced workers who bring years of expertise to every signage project we undertake.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Qualified Architect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A qualified architect oversees all our council applications and drawings, ensuring compliance and professional standards in every project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Professional Installation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our qualified team of riggers travels throughout the country, delivering expert installation services wherever you need them.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary text-primary-foreground rounded-xl p-12 text-center shadow-[var(--shadow-elegant)]">
            <h2 className="text-4xl font-bold mb-6">17 Years of Excellence</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-95">
              Since our establishment in 2008, we've been committed to delivering exceptional signage solutions that help businesses stand out. Our longevity in the industry speaks to our dedication to quality and customer satisfaction, and we're excited about the future of signage technology.
            </p>
          </div>

          {/* Company History Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Journey</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">2008 - The Beginning</h3>
                  <p className="text-muted-foreground">Founded with a vision to provide professional signage solutions to businesses across South Africa.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">2010 - Expansion</h3>
                  <p className="text-muted-foreground">Expanded our team and services to include council applications and architectural drawings.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">2015 - Nationwide Service</h3>
                  <p className="text-muted-foreground">Launched nationwide installation services, bringing professional signage solutions to every corner of South Africa.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">2025 - Today</h3>
                  <p className="text-muted-foreground">Continuing to innovate and deliver exceptional signage solutions with 17 years of proven expertise.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">2025+ - Future Vision</h3>
                  <p className="text-muted-foreground">Expanding our digital signage capabilities, sustainable materials, and smart signage solutions for the modern business landscape.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  To provide innovative, high-quality signage solutions that help businesses establish their presence and connect with their customers effectively.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading signage company in South Africa, known for our quality, reliability, and customer-focused approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27725679274"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default About;
