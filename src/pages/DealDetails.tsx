import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DealDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Deal Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              MMT - FLIGHTS OFFER
            </h1>
            <p className="text-lg text-muted-foreground">
              Flat 25% discount on domestic flight bookings for verified students.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About the offer */}
              <Card>
                <CardHeader>
                  <CardTitle>About the offer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Valid Upto:</span>
                    <span>30 Sep 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Savings:</span>
                    <span>Students can save up to 25% on flight bookings</span>
                  </div>
                </CardContent>
              </Card>

              {/* How to redeem */}
              <Card>
                <CardHeader>
                  <CardTitle>How to redeem</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Click on 'Redeem now'.</li>
                    <li>Select the flight you want to book.</li>
                    <li>Discount is automatically applied on checkout.</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Terms & conditions */}
              <Card>
                <CardHeader>
                  <CardTitle>Terms & conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>This offer cannot be clubbed with any other offer of MakeMyTrip.</li>
                    <li>Offer is only valid on the eligible BINs shared by RuPay. If the BIN series of the card does not match with the one provided by RuPay to MakeMyTrip, then the cardholder will need to approach RuPay and MakeMyTrip shall be entitled to withhold or deny the offer to the customer.</li>
                    <li>MakeMyTrip & RuPay reserves the right, at any time, without prior notice and liability and without assigning any reason whatsoever, to add/alter/modify/change or vary all of these terms and conditions or to replace, wholly or in part, this offer by another offer, whether similar to this offer or not, or to extend or withdraw it altogether.</li>
                    <li>For any card related claims, the customer will need to approach the Bank. MakeMyTrip shall not entertain any such claims.</li>
                    <li>MakeMyTrip is the sole authority for the interpretation of these terms.</li>
                    <li>User Agreement and Privacy Policy of the MakeMyTrip website will apply.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-primary mb-2">
                      Up to 25% OFF
                    </div>
                    <p className="text-muted-foreground">
                      on domestic flights
                    </p>
                  </div>
                  
                  <Link to="/redirect" className="block">
                    <Button 
                      size="lg" 
                      className="w-full bg-purple text-purple-foreground hover:bg-purple/90 mb-4"
                    >
                      Redeem now
                    </Button>
                  </Link>
                  
                  <div className="text-xs text-muted-foreground text-center">
                    You will be redirected to MakeMyTrip to complete your booking
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealDetails;