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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">StudentPerks</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Making student life more affordable with exclusive discounts and offers.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
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
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 StudentPerks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;