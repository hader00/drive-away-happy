import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus J.",
    role: "Bought a 2023 BMW M4",
    quote: "The team at Apex made the entire process seamless. From test drive to financing, everything was handled with professionalism. Best dealership experience I've ever had.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Bought a 2024 Mercedes GLE",
    quote: "I was nervous about buying my first luxury vehicle, but Apex Motors took the time to walk me through every option. No pressure, just genuine help.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Returning Customer",
    quote: "This is my third purchase from Apex. The quality of their vehicles and after-sale service keeps me coming back. Wouldn't go anywhere else.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 relative group hover:border-primary/30 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
