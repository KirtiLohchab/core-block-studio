import { useEffect } from "react";
import { Link } from "react-router-dom";

const Redirect = () => {
  useEffect(() => {
    // Auto-redirect after 3 seconds
    const timer = setTimeout(() => {
      window.open("https://www.makemytrip.com", "_blank");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="text-2xl font-bold text-primary">
            StudentPerks
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-2xl font-bold mb-6">
            We are redirecting you to MMT portal
          </h1>

          {/* Brand Logos */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-primary font-bold text-xl">
              StudentPerks
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className="text-orange-500 font-bold text-xl">
              make mytrip
            </div>
          </div>

          {/* Loading Spinner */}
          <div className="flex justify-center mb-6">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>

          <p className="text-muted-foreground text-sm">
            Please do not press or switch to another site/app
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          If you are not redirected automatically,{" "}
          <a 
            href="https://www.makemytrip.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Redirect;