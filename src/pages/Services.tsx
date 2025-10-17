import Navigation from "@/components/Navigation";
import { FileText, Hammer, Truck, PenTool, Building, Lightbulb, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { companyConfig } from "@/config/company";
import servicesImage from "@/assets/services-signage.jpg";

const Services = () => {
  const iconMap = {
    PenTool,
    FileText,
    Hammer,
    Truck,
    Building,
    Lightbulb
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive signage solutions from design to installation, delivered by qualified experts.
            </p>
          </div>

          <div className="mb-16 rounded-xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img 
              src={servicesImage} 
              alt="Various professional signage solutions" 
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyConfig.services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Card 
                  key={index}
                  className="border-2 hover:shadow-[var(--shadow-elegant)] hover:scale-105 transition-all duration-300"
                >
                  <CardHeader>
                    <IconComponent className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 bg-card border-2 rounded-xl p-12 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Complete End-to-End Service</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              From initial consultation and design, through council approvals and manufacturing, to professional installation anywhere in South Africa - we handle every aspect of your signage project with expertise and care.
            </p>
            <p className="text-base text-muted-foreground">
              <strong>Located at:</strong> {companyConfig.contact.address}
            </p>
          </div>

          {/* Process Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Consultation</h3>
                <p className="text-muted-foreground">We discuss your requirements and provide expert advice on the best signage solution for your business.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Design & Planning</h3>
                <p className="text-muted-foreground">Our team creates custom designs and handles all council applications and architectural drawings.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Manufacturing</h3>
                <p className="text-muted-foreground">High-quality manufacturing using the latest techniques and premium materials.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Installation</h3>
                <p className="text-muted-foreground">Professional installation by our qualified team, anywhere in South Africa.</p>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Industries We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Retail & Shopping Centers</h3>
                <p className="text-muted-foreground">Storefront signs, directional signage, and promotional displays for retail environments.</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Corporate Offices</h3>
                <p className="text-muted-foreground">Professional building signage, reception areas, and corporate identity displays.</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Healthcare Facilities</h3>
                <p className="text-muted-foreground">Medical facility signage, wayfinding systems, and compliance signage.</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Educational Institutions</h3>
                <p className="text-muted-foreground">School signage, campus wayfinding, and educational facility displays.</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Restaurants & Hospitality</h3>
                <p className="text-muted-foreground">Restaurant signage, hotel displays, and hospitality branding solutions.</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Industrial & Manufacturing</h3>
                <p className="text-muted-foreground">Factory signage, safety displays, and industrial facility identification.</p>
              </div>
            </div>
          </div>

          {/* Future Technologies Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Future-Ready Signage Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Digital Innovation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Embracing the future with smart digital displays, interactive signage, and IoT-connected solutions that adapt to your business needs in real-time.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• LED video walls and digital displays</li>
                  <li>• Interactive touch-screen kiosks</li>
                  <li>• Smart signage with remote content management</li>
                  <li>• Augmented reality integration</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Sustainable Future</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Committed to environmental responsibility with eco-friendly materials, energy-efficient lighting, and sustainable manufacturing processes.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Recycled and biodegradable materials</li>
                  <li>• Solar-powered illuminated signs</li>
                  <li>• Energy-efficient LED technology</li>
                  <li>• Carbon-neutral installation processes</li>
                </ul>
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

export default Services;
