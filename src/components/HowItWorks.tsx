import { UserPlus, Shield, Gift } from "lucide-react";
import howItWorksImage from "@/assets/how-it-works.jpg";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account in minutes"
    },
    {
      id: 2,
      icon: Shield,
      title: "Verify with APAR",
      description: "Government-backed student verification"
    },
    {
      id: 3,
      icon: Gift,
      title: "Access Deals",
      description: "Start saving on exclusive offers"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <img 
              src={howItWorksImage} 
              alt="Students celebrating success" 
              className="w-full h-auto rounded-lg shadow-card"
            />
          </div>

          {/* Right side - Steps */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How it works
            </h2>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;