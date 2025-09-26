import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import studentsImage from "@/assets/students-celebration.jpg";
import Header from "@/components/Header";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrMobile: "",
    password: ""
  });
  const [showOTP, setShowOTP] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpTimer, setOtpTimer] = useState(14);
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md space-y-8">
            {/* Back Button and Step Indicator */}
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <span className="text-xs mt-1 text-primary font-medium">CREATE</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm">
                    2
                  </div>
                  <span className="text-xs mt-1 text-muted-foreground">VERIFY APAAR ID</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-foreground">Create your account</h1>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-muted-foreground">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Mohit"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-muted-foreground">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Arora"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emailOrMobile" className="text-sm font-medium text-muted-foreground">
                    Email or Mobile no.
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="emailOrMobile"
                      name="emailOrMobile"
                      value={formData.emailOrMobile}
                      onChange={handleInputChange}
                      placeholder="9873018991"
                      className="flex-1 h-12"
                    />
                    {!showOTP ? (
                      <Button
                        onClick={handleVerify}
                        variant="outline"
                        className="px-6 h-12 text-primary border-primary hover:bg-primary/10"
                      >
                        VERIFY
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="px-6 h-12"
                        disabled
                      >
                        {otpTimer > 0 ? `00:${otpTimer.toString().padStart(2, '0')}` : 'EXPIRED'}
                      </Button>
                    )}
                  </div>
                </div>

                {showOTP && (
                  <div className="space-y-3">
                    <InputOTP
                      maxLength={4}
                      value={otpValue}
                      onChange={setOtpValue}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                    <p className="text-xs text-muted-foreground">
                      You will receive an OTP within 00:{otpTimer.toString().padStart(2, '0')} secs
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-muted-foreground">
                    Password (enter 8 character)
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password (enter 8 character)"
                    minLength={8}
                    className="h-12"
                  />
                </div>

                <div className="text-xs text-muted-foreground">
                  By clicking Create Account, you agree to our{" "}
                  <Link to="#" className="text-foreground underline hover:no-underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-foreground underline hover:no-underline">
                    T&Cs
                  </Link>
                  .
                </div>

                <Button
                  onClick={handleCreateAccount}
                  className="w-full h-12 bg-[#6366F1] hover:bg-[#5856F0] text-white font-medium rounded-lg"
                  size="lg"
                >
                  Create account
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-foreground hover:underline">
                    Sign In
                  </Link>
                </div>
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

export default SignUp;