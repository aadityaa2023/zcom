import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const FAQS = [
  { q: "How do I track my order?", a: "Once your order is dispatched, you will receive an SMS and email notification with your tracking link and carrier details. You can also view live tracking under 'My Orders' in your account." },
  { q: "What payment methods do you accept?", a: "We accept all major payment methods including UPI, Credit/Debit cards, Net Banking, Razorpay, Apple Pay, and Google Pay. All transactions are protected with 256-bit bank-grade encryption." },
  { q: "How long does shipping take?", a: "Standard dispatch takes 1–2 business days. Delivery typically takes 3–5 business days depending on your pincode. Express shipping options are available at checkout." },
  { q: "What is your return & exchange policy?", a: "We offer a 7-day hassle-free return and replacement policy for unused items in their original packaging. Damaged or defective items are eligible for an immediate replacement." },
  { q: "Are all products 100% genuine and authentic?", a: "Yes. Every item sold on Zyricx is directly sourced from authorized distributors and verified manufacturers with guaranteed authenticity." },
  { q: "Can I cancel or modify my order after placing it?", a: "You can modify or cancel your order within 2 hours of placement directly from your account page, or by contacting customer support before dispatch." },
  { q: "Do you offer corporate or bulk purchase discounts?", a: "Yes! We offer customized quotes and bulk pricing for corporate gifting and wholesale orders. Please reach out to support@zyricx.app with your requirements." },
];

const FAQ = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-brand-charcoal text-white py-12 sm:py-16 md:py-20 overflow-hidden mb-8 sm:mb-12">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-pink/20 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="pink-badge mb-3 sm:mb-4 inline-block text-xs">Got Questions?</span>
          <h1 className="text-2xl xs:text-3xl md:text-5xl font-extrabold mb-2.5 sm:mb-3">Frequently Asked Questions</h1>
          <p className="text-sm sm:text-base md:text-lg text-white/75">
            Find answers to the most common questions about our products and policies.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 pb-16 sm:pb-20">
        <Accordion type="single" collapsible className="space-y-0">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl mb-3">
              <AccordionTrigger className="px-4 sm:px-5 py-3.5 sm:py-4 text-left font-semibold text-sm sm:text-base">
                <span className="flex items-center gap-2.5 sm:gap-3">

                  <span className="leading-snug">{faq.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-5 pb-4 text-muted-foreground leading-relaxed pl-4 sm:pl-12 text-xs sm:text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-8 text-center rounded-2xl bg-gradient-to-br from-brand-pink/8 to-brand-pink/3 border border-brand-pink/15">
          <p className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2">Still have questions?</p>
          <p className="text-muted-foreground mb-3 text-xs sm:text-sm">Can't find what you're looking for? Reach out directly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-brand-pink font-semibold text-xs sm:text-sm">
            <a href="mailto:support@zyricx.app" className="hover:underline">
              support@zyricx.app
            </a>
            <span className="hidden sm:inline text-brand-pink/40">|</span>
            <a href="tel:+917088202122" className="hover:underline">
              +91 7088202122
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
