import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Shield, Gift } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account in minutes with your student email",
      color: "text-blue-500"
    },
    {
      id: 2,
      icon: Shield,
      title: "Verify with APAR",
      description: "Government-backed student verification for secure access",
      color: "text-green-500"
    },
    {
      id: 3,
      icon: Gift,
      title: "Access Deals",
      description: "Start saving on exclusive offers from 500+ brands",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-feature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started with StudentPerks is simple and secure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="text-center bg-card-gradient border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                  <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-primary/30 border-y-2 border-y-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Government Verification Section */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 max-w-3xl mx-auto shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">
                Government-Backed Student Verification
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our platform uses APAR API for secure student verification, ensuring you get 
              genuine discounts while protecting your privacy. Your student status is verified 
              directly with government databases for maximum security and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;