import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedDeals from "@/components/FeaturedDeals";
import HowItWorks from "@/components/HowItWorks";
import GovernmentVerification from "@/components/GovernmentVerification";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedDeals />
        <HowItWorks />
        <GovernmentVerification />
        <Stats />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
