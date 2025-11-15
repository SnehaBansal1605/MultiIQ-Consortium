import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the CMHC MLI Select Program?",
      answer:
        "The CMHC MLI Select Program is a government-backed financing solution that offers investors up to 95% loan-to-value ratio, 50-year amortization, and below-prime interest rates for eligible multifamily properties. This makes multifamily investing more accessible and profitable.",
    },
    {
      question: "How much do I need for a down payment?",
      answer:
        "With CMHC MLI Select financing, you only need as little as 5% down payment. For example, on a $1,000,000 property, your down payment would be just $50,000, making multifamily investment accessible to more investors.",
    },
    {
      question:
        "What is the typical timeline from purchase to positive cash flow?",
      answer:
        "Most investors see positive cash flow within the first month of ownership. Our turnkey solution ensures properties are tenant-ready, and with CMHC financing's favorable terms, your rental income typically exceeds all expenses including mortgage, taxes, insurance, and property management from day one.",
    },
    {
      question: "Can I invest if I live outside the property location?",
      answer:
        "Absolutely! Our full turnkey solution is designed for investors across Canada. We handle everything from property selection, financing, tenant placement, to ongoing property management. You can invest confidently from anywhere in the country.",
    },
    {
      question: "What kind of returns can I expect?",
      answer:
        "Our properties typically deliver 8-12% annual ROI through rental income, with additional equity growth averaging $150,000 to $1,000,000 over 5 years through appreciation and mortgage paydown. Specific returns vary by property and market conditions.",
    },
    {
      question: "How does the 50-year amortization benefit me?",
      answer:
        "A 50-year amortization significantly reduces your monthly mortgage payment compared to traditional 25-year mortgages. This means higher monthly cash flow and better returns on your investment while building equity over time.",
    },
    {
      question: "What properties qualify for CMHC MLI Select financing?",
      answer:
        "Properties with 5+ rental units (duplexes with garden suites, fourplexes, sixplexes, eightplexes, etc.) in good condition typically qualify. All our properties are pre-screened to ensure they meet CMHC requirements, so you can invest with confidence.",
    },
    {
      question: "What services are included in your turnkey solution?",
      answer:
        "Our turnkey solution includes property acquisition, CMHC financing arrangement, legal services, tenant placement, property management setup, and ongoing support. We handle everything so you can enjoy passive income without the hassle.",
    },
    {
      question: "Are there any geographic restrictions?",
      answer:
        "CMHC MLI Select financing is available across Canada. We focus on markets with strong rental demand, population growth, and appreciation potential to maximize your investment returns.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple! Schedule a consultation with our team to discuss your investment goals. We'll assess your financial situation, show you available properties that match your criteria, and guide you through the entire process from financing to closing.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about multifamily investing and
            CMHC financing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 hover:border-gold transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-gold hover:no-underline">
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

export default FAQ;
