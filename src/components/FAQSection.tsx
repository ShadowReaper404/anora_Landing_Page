import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my conversation really anonymous?",
    answer: "Yes, absolutely. When using our anonymous peer support feature, no personal information is collected or stored. You can choose a temporary username and your conversation is encrypted end-to-end. Your privacy and safety are our top priorities.",
  },
  {
    question: "How are volunteers verified?",
    answer: "All volunteers go through a rigorous verification process including background checks, mental health first aid training, and active listening certification. They're regularly evaluated and supervised by licensed professionals to ensure quality support.",
  },
  {
    question: "What should I do in a crisis?",
    answer: "If you're experiencing a mental health emergency, please use the SOS button on this page or call 988 (Suicide & Crisis Lifeline) immediately. You can also text HOME to 741741 for the Crisis Text Line. Our platform is for support, but emergency services are equipped for crisis situations.",
  },
  {
    question: "How much does it cost?",
    answer: "Anonymous peer support and volunteer connections are completely free. Professional therapy sessions are paid services, with rates varying by provider. Many therapists accept insurance, and we offer sliding scale options for those who need financial assistance.",
  },
  {
    question: "Can I use this on mobile?",
    answer: "Yes! Our platform is fully responsive and works on all devices. We also have dedicated mobile apps for iOS and Android with the same features, plus push notifications for important updates and appointment reminders.",
  },
  {
    question: "What if I'm not ready to talk yet?",
    answer: "That's completely okay. Take your time. You can browse our resources section, read articles about mental health, or just explore the platform. When you're ready, support will be here waiting for you. There's no pressure or obligation.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't see what you're looking for, reach out to us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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

export default FAQSection;
