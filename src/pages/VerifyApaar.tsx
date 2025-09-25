import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import studentsImage from "@/assets/students-celebration.jpg";

const VerifyApaar = () => {
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
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">📁</span>
            </div>
            <Link to="/" className="text-xl font-semibold text-foreground">
              StudentPerks
            </Link>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                ✓
              </div>
              <span className="text-sm font-medium text-green-600">CREATED</span>
            </div>
            <div className="flex-1 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm font-medium text-foreground">VERIFY APAAR ID</span>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Verify any of this and get the exclusive student offers
            </h1>

            <div className="space-y-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Enter 12 digit Apaar ID</label>
                <Input
                  value={apaarId}
                  onChange={(e) => setApaarId(e.target.value)}
                  placeholder="9878 1232 3456"
                  className="w-full h-12 bg-muted/30 border-0 rounded-lg text-center tracking-wider font-semibold"
                />
              </div>

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
                        className="w-12 h-12 text-center text-lg font-semibold bg-muted/30 border-0 rounded-lg"
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
                </div>
              )}

              {showOTP ? (
                <Button
                  onClick={handleVerifyOTP}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-base"
                  disabled={otp.length < 6}
                >
                  Verify OTP
                </Button>
              ) : (
                <Button
                  onClick={handleGetOTP}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-base"
                >
                  Get OTP
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1 relative">
        <img 
          src={studentsImage}
          alt="Happy students celebrating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default VerifyApaar;