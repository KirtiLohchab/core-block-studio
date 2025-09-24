import logo from "@/assets/logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Categories",
      links: [
        { name: "Travel", href: "#" },
        { name: "Food", href: "#" },
        { name: "Shopping", href: "#" },
        { name: "Education", href: "#" }
      ]
    },
    {
      title: "Help & Support",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" }
      ]
    },
    {
      title: "Partner With Us",
      links: [
        { name: "Become a Partner", href: "#" },
        { name: "Partner Portal", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Resources", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="StudentPerks Logo" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Making student life more affordable with exclusive discounts and offers.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Government Verified Platform</span>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-card-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2025 StudentPerks. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>APAR Verified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;