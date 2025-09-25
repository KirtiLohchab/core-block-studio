import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import tripbeamImage from "@/assets/tripbeam-card.jpg";
import zomatoImage from "@/assets/zomato-card.jpg";
import flightImage from "@/assets/flight-card.jpg";
import flightSavingsImage from "@/assets/flight-savings.jpg";
import hotelImage from "@/assets/hotel-card.jpg";

const FeaturedDeals = () => {
  const deals = [
    {
      id: 1,
      brand: "TripBeam",
      title: "Secret Hacks To Get Student Discount For Your Flight Journeys",
      image: tripbeamImage,
      category: "travel"
    },
    {
      id: 2,
      brand: "ZOMATO",
      title: "Eat More, Spend Less – Weekend Brunch at Half Price",
      image: zomatoImage,
      category: "food"
    },
    {
      id: 3,
      brand: "MMT - FLIGHTS",
      title: "Students can save up to 25% on flight bookings",
      image: flightImage,
      category: "travel"
    },
    {
      id: 4,
      brand: "AIRINDIA - INTERNATIONAL FLIGHTS",
      title: "Students can save up to 20% on flight bookings",
      image: flightSavingsImage,
      category: "travel"
    },
    {
      id: 5,
      brand: "ZOMATO ONLINE ORDER",
      title: "Eat More, Spend Less – Weekend Brunch at Half Price",
      image: zomatoImage,
      category: "food"
    },
    {
      id: 6,
      brand: "MMT - HOTELS",
      title: "Get up to 70% off on Hotel Bookings",
      image: hotelImage,
      category: "travel"
    }
  ];

  const categories = ["All", "Travel", "Food"];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Exclusive Offers for Students
          </h2>
          <p className="text-muted-foreground">
            Discounts that move with your student life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`px-6 py-2 rounded-full ${
                category === "All" 
                  ? "bg-foreground text-background hover:bg-foreground/90" 
                  : "border-border hover:bg-secondary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {deals.map((deal) => (
            <Card key={deal.id} className="group hover:shadow-card transition-all duration-300 border rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm text-foreground mb-2">
                  {deal.brand}
                </h3>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                  {deal.title}
                </p>
                <Link to={`/deal/${deal.id}`}>
                  <Button 
                    className="w-full bg-purple text-purple-foreground hover:bg-purple/90"
                    size="sm"
                  >
                    Get Deal
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8 py-2 rounded-full">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;