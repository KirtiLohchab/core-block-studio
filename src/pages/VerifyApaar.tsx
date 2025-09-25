import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const VerifyApaar = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const [apaarId, setApaarId] = useState("9878 1232 3456");
  const [showOTP, setShowOTP] = useState(false);
  const [otpTimer, setOtpTimer] = useState(74);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleGetOTP = () => {
    setShowOTP(true);
    // Start countdown timer
    const timer = setInterval(() => {
      setOtpTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerifyOTP = () => {
    // Navigate to redirect page
    navigate("/redirect");
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold text-primary">
            StudentPerks
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              VERIFY APAAR ID
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Verify any of this and get the exclusive student offers
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Tabs */}
            <div className="flex bg-secondary rounded-lg p-1">
              {["Mobile", "Apaar ID", "Aadhaar"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.toLowerCase().replace(" ", "") 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* APAAR ID Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Enter 12 digit Apaar ID</label>
              <Input
                value={apaarId}
                onChange={(e) => setApaarId(e.target.value)}
                placeholder="9878 1232 3456"
                className="text-center tracking-wider"
              />
            </div>

            {/* OTP Section */}
            {showOTP && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Please enter the OTP sent on your mobile number (******8991)
                </p>
                
                <div className="flex justify-center gap-2">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <Input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg font-semibold"
                      value={otp[index] || ""}
                      onChange={(e) => {
                        const newOtp = otp.split("");
                        newOtp[index] = e.target.value;
                        setOtp(newOtp.join(""));
                        
                        // Auto-focus next input
                        if (e.target.value && index < 5) {
                          const nextInput = e.target.parentElement?.nextElementSibling?.querySelector("input");
                          nextInput?.focus();
                        }
                      }}
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  Resend OTP in {formatTime(otpTimer)} secs
                </p>

                <Button
                  onClick={handleVerifyOTP}
                  className="w-full bg-purple text-purple-foreground hover:bg-purple/90"
                  size="lg"
                  disabled={otp.length < 6}
                >
                  Verify OTP
                </Button>
              </div>
            )}

            {/* Get OTP Button */}
            {!showOTP && (
              <Button
                onClick={handleGetOTP}
                className="w-full bg-purple text-purple-foreground hover:bg-purple/90"
                size="lg"
              >
                Get OTP
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerifyApaar;