import { Shield } from "lucide-react";

const GovernmentVerification = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Government-Backed Student Verification
        </h2>
        
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our platform uses APAR API for secure student verification, ensuring you get 
          genuine discounts while protecting your privacy.
        </p>
      </div>
    </section>
  );
};

export default GovernmentVerification;