import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, CheckCircle, MessageCircle } from "lucide-react";
import { companyConfig } from "@/config/company";
import heroImage from "@/assets/hero-signage.jpg";
import teamImage from "@/assets/team-work.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://res.cloudinary.com/doqsolr8d/image/upload/v1760706795/Screenshot_2025-10-17_151147_aicyen.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl hero-title text-primary-foreground mb-6">
            {companyConfig.name}
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/95 mb-8 max-w-3xl mx-auto">
            {companyConfig.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="text-lg px-8 py-6 shadow-[var(--shadow-elegant)]">
                Our Services
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-background/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Why Choose {companyConfig.name}?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {companyConfig.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img 
                src={teamImage} 
                alt="Professional team installing signage" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
              <p className="text-muted-foreground">Successfully delivered signage solutions across South Africa</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">17</div>
              <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-muted-foreground">Proven track record in the signage industry, embracing future technologies</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-muted-foreground">Dedicated to exceeding customer expectations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="opacity-95">{companyConfig.contact.address}</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="opacity-95">{companyConfig.contact.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="opacity-95">{companyConfig.contact.email}</p>
            </div>
          </div>
          
          {/* Business Hours */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-semibold">Monday - Friday</p>
                <p className="opacity-95">8:00 AM - 5:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Saturday</p>
                <p className="opacity-95">8:00 AM - 12:00 PM</p>
              </div>
            </div>
            <p className="text-sm mt-4 opacity-90">Emergency installations available outside business hours</p>
          </div>
        </div>
      </section>

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

export default Index;
