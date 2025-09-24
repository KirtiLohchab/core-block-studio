import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How can I avail it?",
      answer: "Simply sign up with your student email, verify your student status through our government-backed APAR verification system, and start browsing exclusive deals from 500+ partner brands."
    },
    {
      id: 2,
      question: "Do I need to verify every time I want to use the code?",
      answer: "No, once you're verified as a student through our APAR system, you'll have continuous access to all student discounts. Your verification status remains active as long as your student status is valid."
    },
    {
      id: 3,
      question: "How long does the student verification process take?",
      answer: "The verification process typically takes 2-5 minutes. Our APAR API integration allows for real-time verification with government databases."
    },
    {
      id: 4,
      question: "Is it necessary to sign up for student perks using the same email ID I used for verification?",
      answer: "Yes, it's recommended to use your official student email address for both signup and verification to ensure seamless integration with our verification system."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                  onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
                      openItem === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openItem === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;