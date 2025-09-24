import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "How can I avail student discounts?",
      answer: "Simply sign up with your student email, verify your student status through our government-backed APAR verification system, and start browsing exclusive deals from 500+ partner brands. The verification process is quick and secure."
    },
    {
      id: "item-2",
      question: "Do I need to verify every time I want to use a discount code?",
      answer: "No, once you're verified as a student through our APAR system, you'll have continuous access to all student discounts. Your verification status remains active as long as your student status is valid."
    },
    {
      id: "item-3",
      question: "How long does the student verification process take?",
      answer: "The verification process typically takes 2-5 minutes. Our APAR API integration allows for real-time verification with government databases, ensuring quick and secure authentication of your student status."
    },
    {
      id: "item-4",
      question: "Is it necessary to sign up using the same email ID used for verification?",
      answer: "Yes, it's recommended to use your official student email address for both signup and verification. This ensures seamless integration with our verification system and helps maintain the security and authenticity of your student status."
    },
    {
      id: "item-5",
      question: "What information is required for verification?",
      answer: "You'll need your student ID, official student email address, and basic information about your educational institution. All data is processed securely through our government-backed verification system."
    },
    {
      id: "item-6",
      question: "Are there any fees for using StudentPerks?",
      answer: "No, StudentPerks is completely free for verified students. There are no subscription fees, membership costs, or hidden charges. Simply verify your student status and start saving immediately."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about StudentPerks and our verification process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-card rounded-lg border px-6 py-2"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;