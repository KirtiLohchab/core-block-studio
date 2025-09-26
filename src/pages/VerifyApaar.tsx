import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import studentsImage from "@/assets/students-celebration.jpg";
import Header from "@/components/Header";

const VerifyApaar = () => {
  const [apaarId, setApaarId] = useState("9878 1232 3456");
  const [showOTP, setShowOTP] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpTimer, setOtpTimer] = useState(74);
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
    // Navigate to redirect page or back to deals
    navigate("/");
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md space-y-8">
            {/* Back Button and Step Indicator */}
            <div className="flex items-center justify-between">
              <Link to="/signup" className="flex items-center text-muted-foreground hover:text-foreground">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="text-xs mt-1 text-green-500 font-medium">CREATED</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <span className="text-xs mt-1 text-primary font-medium">VERIFY APAAR ID</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">
                  Verify any of this and get the exclusive student offers
                </h1>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Enter 12 digit Apaar ID
                  </label>
                  <Input
                    value={apaarId}
                    onChange={(e) => setApaarId(e.target.value)}
                    placeholder="9878 1232 3456"
                    className="h-12 text-center tracking-wider"
                  />
                </div>

                {showOTP && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Please enter the OTP sent on your mobile number (******8991)
                    </p>
                    
                    <InputOTP
                      maxLength={6}
                      value={otpValue}
                      onChange={setOtpValue}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>

                    <p className="text-sm text-muted-foreground">
                      Resend OTP in {formatTime(otpTimer)} secs
                    </p>
                  </div>
                )}

                {showOTP ? (
                  <Button
                    onClick={handleVerifyOTP}
                    className="w-full h-12 bg-[#6366F1] hover:bg-[#5856F0] text-white font-medium rounded-lg"
                    size="lg"
                    disabled={otpValue.length < 6}
                  >
                    Verify OTP
                  </Button>
                ) : (
                  <Button
                    onClick={handleGetOTP}
                    className="w-full h-12 bg-[#6366F1] hover:bg-[#5856F0] text-white font-medium rounded-lg"
                    size="lg"
                    disabled={!apaarId.trim()}
                  >
                    Get OTP
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <img
            src={studentsImage}
            alt="Happy students celebrating"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyApaar;