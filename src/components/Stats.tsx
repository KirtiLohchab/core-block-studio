import { Users, Building2, ShieldCheck } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Students",
      description: "Verified students saving money"
    },
    {
      icon: Building2,
      value: "500+",
      label: "Brands",
      description: "Trusted partner brands"
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Trusted Verification",
      description: "Government-backed security"
    }
  ];

  return (
    <section className="py-16 bg-hero-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Students Nationwide
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join the growing community of students who are saving money with verified discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-white/90">
                    {stat.label}
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;