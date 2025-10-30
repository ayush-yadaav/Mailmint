import React, { useState } from "react";
import { HelpCircle, Sparkles, Shield, Zap, ChevronDown } from "lucide-react";
import Navigation from "../components/Navbar";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: Sparkles,
      question: "How does the AI email generator work?",
      answer:
        "Our AI analyzes your prompt and context to create personalized, well-structured emails. It considers tone, purpose, and recipient context to generate appropriate content that matches your needs.",
    },
    {
      icon: Shield,
      question: "Is my data secure?",
      answer:
        "Absolutely! All your data is encrypted and stored securely. We never share your information with third parties, and you have full control over your saved emails. Your privacy is our top priority.",
    },
    {
      icon: Zap,
      question: "Can I customize the tone of generated emails?",
      answer:
        "Yes! You can adjust the tone slider from professional to friendly, allowing you to match the email's style to your specific situation and relationship with the recipient.",
    },
    {
      icon: HelpCircle,
      question: "How do I save generated emails?",
      answer:
        "After generating an email, simply click the 'Save' button. Your email will be stored in your Saved Emails page, where you can access, copy, or delete them anytime.",
    },
    {
      icon: Sparkles,
      question: "What types of emails can MailMint create?",
      answer:
        "MailMint can create various types of emails including follow-ups, introductions, thank you notes, professional requests, friendly messages, and much more. Just describe what you need!",
    },
    {
      icon: Zap,
      question: "How many emails can I generate?",
      answer:
        "Currently, there are no limits on email generation. You can create as many emails as you need, whenever you need them. Generate freely and experiment with different tones and styles!",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted dark:from-black dark:to-slate-950 text-foreground">
      {/* ✅ Navbar */}
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about MailMint
            </p>
          </div>

          {/* ✅ Custom Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-gradient-card border border-border rounded-2xl px-6 shadow-soft hover:shadow-lift transition-all animate-slide-up ${
                    isOpen ? "ring-1 ring-primary/30" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Trigger */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-6 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-display text-lg">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-48 mb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-muted-foreground pb-4 pl-14">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ✅ Contact Section */}
          <div className="mt-12 text-center bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-display mb-3">Still need help?</h3>
            <p className="text-muted-foreground mb-6">
              We're here to assist you with any questions or concerns
            </p>
            <a href="/contact">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:shadow-glow transition-all">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
