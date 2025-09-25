import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrMobile: "",
    password: ""
  });
  const [showOTP, setShowOTP] = useState(false);
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
              Create your account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emailOrMobile">Email or Mobile no.</Label>
              <div className="flex gap-2">
                <Input
                  id="emailOrMobile"
                  name="emailOrMobile"
                  value={formData.emailOrMobile}
                  onChange={handleInputChange}
                  placeholder="Enter email or mobile"
                  className="flex-1"
                />
                {!showOTP ? (
                  <Button
                    onClick={handleVerify}
                    variant="outline"
                    className="px-4"
                  >
                    VERIFY
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="px-4"
                    disabled
                  >
                    {otpTimer > 0 ? `00:${otpTimer.toString().padStart(2, '0')}` : 'EXPIRED'}
                  </Button>
                )}
              </div>
              {showOTP && (
                <p className="text-xs text-muted-foreground">
                  You will receive an OTP within 00:{otpTimer.toString().padStart(2, '0')} secs
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password (enter 8 character)</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                minLength={8}
              />
            </div>

            <div className="text-xs text-muted-foreground">
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
              className="w-full bg-purple text-purple-foreground hover:bg-purple/90"
              size="lg"
            >
              Create account
            </Button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary hover:underline">
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;