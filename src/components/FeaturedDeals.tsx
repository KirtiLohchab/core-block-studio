import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import tripbeamImage from "@/assets/tripbeam-card.jpg";
import zomatoImage from "@/assets/zomato-card.jpg";
import flightImage from "@/assets/flight-card.jpg";
import flightSavingsImage from "@/assets/flight-savings.jpg";
import hotelImage from "@/assets/hotel-card.jpg";

const FeaturedDeals = () => {
  const topDeals = [
    {
      id: 1,
      brand: "TripBeam",
      title: "Secret Hacks To Get Student Discount For Your Flight Journeys",
      image: tripbeamImage,
      category: "travel"
    },
    {
      id: 2,
      brand: "AIRINDIA",
      title: "Students can save up to 25% on flight bookings",
      image: flightImage,
      category: "travel"
    },
    {
      id: 3,
      brand: "PASSPORT",
      title: "DOMESTIC FLIGHTS - Students can save up to 25% on flight bookings",
      image: flightSavingsImage,
      category: "travel"
    },
    {
      id: 4,
      brand: "FOODHUB",
      title: "Eat More, Spend Less – Weekend Brunch at Half Price",
      image: zomatoImage,
      category: "food"
    },
    {
      id: 5,
      brand: "MMT - FLIGHTS",
      title: "Students can save up to 25% on flight bookings",
      image: flightImage,
      category: "travel"
    }
  ];

  const bottomDeals = [
    {
      id: 6,
      brand: "AIRINDIA - INTERNATIONAL FLIGHTS",
      title: "Students can save up to 20% on flight bookings",
      image: flightSavingsImage,
      category: "travel"
    },
    {
      id: 7,
      brand: "ZOMATO ONLINE ORDER",
      title: "Eat More, Spend Less – Weekend Brunch at Half Price",
      image: zomatoImage,
      category: "food"
    },
    {
      id: 8,
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

        {/* Top Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {topDeals.map((deal) => (
            <Card key={deal.id} className="group hover:shadow-card transition-all duration-300 border rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-3">
                <h3 className="font-bold text-xs text-foreground mb-2">
                  {deal.brand}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
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

        {/* Promotional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Flight Savings Promo */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Save up to ₹76000 on Flights
            </h3>
          </div>

          {/* Food Order Promo */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">
              Flat Rs100 OFF on Food Orders
            </h3>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-full font-semibold"
            >
              ORDER NOW
            </Button>
          </div>
        </div>

        {/* Bottom Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {bottomDeals.map((deal) => (
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