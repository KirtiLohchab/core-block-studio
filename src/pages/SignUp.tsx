import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import studentsImage from "@/assets/students-celebration.jpg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrMobile: "",
    password: ""
  });
  const [showOTP, setShowOTP] = useState(false);
  const [otpTimer, setOtpTimer] = useState(14);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleVerify = () => {
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

  const handleCreateAccount = () => {
    // Navigate to APAAR verification
    navigate("/verify-apaar");
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
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="text-sm font-medium text-foreground">CREATE</span>
            </div>
            <div className="flex-1 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm font-medium text-muted-foreground">VERIFY APAAR ID</span>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground mb-8">
              Create your account
            </h1>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">First name</label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Mohit"
                  className="w-full h-12 bg-muted/30 border-0 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Last name</label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Arora"
                  className="w-full h-12 bg-muted/30 border-0 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email or Mobile no.</label>
                <div className="flex gap-2">
                  <Input
                    name="emailOrMobile"
                    value={formData.emailOrMobile}
                    onChange={handleInputChange}
                    placeholder="9873018991"
                    className="flex-1 h-12 bg-muted/30 border-0 rounded-lg"
                  />
                  <Button
                    onClick={handleVerify}
                    variant="ghost"
                    className="px-6 h-12 text-primary hover:bg-primary/10 font-semibold"
                  >
                    VERIFY
                  </Button>
                </div>
                
                {showOTP && (
                  <div className="mt-4 space-y-4">
                    <div className="flex gap-2 justify-center">
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
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      You will receive an OTP within 00:{otpTimer.toString().padStart(2, '0')} secs
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Password (enter 8 character)</label>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  minLength={8}
                  className="w-full h-12 bg-muted/30 border-0 rounded-lg"
                />
              </div>

              <div className="text-sm text-muted-foreground">
                By clicking Create Account, you agree to our{" "}
                <Link to="#" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-primary hover:underline">
                  T&Cs
                </Link>
                .
              </div>

              <Button
                onClick={handleCreateAccount}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-base"
              >
                Create account
              </Button>
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

export default SignUp;