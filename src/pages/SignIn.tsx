import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import studentsImage from "@/assets/students-celebration.jpg";
import Header from "@/components/Header";

const SignIn = () => {
  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignIn = () => {
    // Handle sign in logic
    console.log("Sign in:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md space-y-8">
            {/* Back Button */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-foreground">Sign In</h1>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="emailOrMobile" className="text-sm font-medium text-muted-foreground">
                    Email or Mobile no.
                  </Label>
                  <Input
                    id="emailOrMobile"
                    name="emailOrMobile"
                    value={formData.emailOrMobile}
                    onChange={handleInputChange}
                    placeholder="Enter email or mobile"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-muted-foreground">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    className="h-12"
                  />
                </div>

                <div className="text-right">
                  <Link to="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  onClick={handleSignIn}
                  className="w-full h-12 bg-[#6366F1] hover:bg-[#5856F0] text-white font-medium rounded-lg"
                  size="lg"
                >
                  Sign In
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-foreground hover:underline">
                    Sign Up
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

export default SignIn;