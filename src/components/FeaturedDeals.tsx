import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedDeals = () => {
  const deals = [
    {
      id: 1,
      brand: "AIRINDIA",
      category: "Travel",
      title: "Save up to 25% on Flight Bookings",
      description: "Students can save up to 25% on domestic flight bookings",
      discount: "Up to 25% OFF",
      type: "DOMESTIC FLIGHTS"
    },
    {
      id: 2,
      brand: "ZOMATO",
      category: "Food",
      title: "Flat Rs100 OFF on Food Orders",
      description: "Eat More, Spend Less – Weekend Brunch at Half Price",
      discount: "Rs100 OFF",
      type: "ONLINE ORDER"
    },
    {
      id: 3,
      brand: "MMT",
      category: "Travel",
      title: "Get up to 70% off on Hotel Bookings",
      description: "Students can save up to 70% on hotel bookings worldwide",
      discount: "Up to 70% OFF",
      type: "HOTELS"
    },
    {
      id: 4,
      brand: "AIRINDIA",
      category: "Travel",
      title: "Save up to 20% on International Flights",
      description: "Students can save up to 20% on international flight bookings",
      discount: "Up to 20% OFF",
      type: "INTERNATIONAL FLIGHTS"
    },
    {
      id: 5,
      brand: "TRIPBEAM",
      category: "Travel",
      title: "Secret Hacks To Get Student Discount",
      description: "Save up to 76000 on flight journeys with exclusive student rates",
      discount: "Up to ₹76,000 OFF",
      type: "FLIGHTS"
    },
    {
      id: 6,
      brand: "FOODHUB",
      category: "Food",
      title: "Student Special Food Discounts",
      description: "Exclusive food delivery discounts for verified students",
      discount: "Up to 40% OFF",
      type: "FOOD DELIVERY"
    }
  ];

  const categories = ["All", "Travel", "Food", "Shopping"];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Exclusive Offers for Students
          </h2>
          <p className="text-xl text-muted-foreground">
            Discounts that move with your student life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-0">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {deal.type}
                  </Badge>
                  <Badge className="bg-accent text-accent-foreground">
                    {deal.discount}
                  </Badge>
                </div>
                <h3 className="font-bold text-lg text-card-foreground">
                  {deal.brand}
                </h3>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2 text-card-foreground">
                  {deal.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {deal.description}
                </p>
                <Button 
                  className="w-full group-hover:bg-primary/90 transition-all"
                  size="sm"
                >
                  Get Deal
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-hero-gradient rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Saving?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Get verified in minutes and unlock exclusive student discounts
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;