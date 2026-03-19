import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What financing options do you offer?",
    a: "We partner with multiple lenders to offer competitive rates. Whether you have excellent credit or are rebuilding, we'll work to find a plan that fits your budget.",
  },
  {
    q: "Do you offer trade-ins?",
    a: "Absolutely. Bring your current vehicle in for a free appraisal. We offer fair market value and can apply it directly to your new purchase.",
  },
  {
    q: "What does your vehicle inspection cover?",
    a: "Every vehicle undergoes a rigorous 150-point inspection covering engine, transmission, brakes, electrical systems, interior, and exterior — ensuring top quality.",
  },
  {
    q: "Can I schedule a test drive online?",
    a: "Yes! Use our contact form or call us directly to schedule a test drive at a time that works for you. Walk-ins are also welcome.",
  },
  {
    q: "Do you offer warranties?",
    a: "All our certified vehicles come with a complimentary limited warranty. Extended warranty packages are also available for additional peace of mind.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Common <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card border border-border rounded-lg overflow-hidden"
            >
              <summary className="flex items-center gap-3 px-6 py-5 cursor-pointer list-none text-foreground font-display font-medium hover:text-primary transition-colors">
                <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                {faq.q}
                <span className="ml-auto text-muted-foreground group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-5 pl-14 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
