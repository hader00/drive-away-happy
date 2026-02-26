import { motion } from "framer-motion";
import { Shield, Award, Wrench, Handshake } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Certified Quality",
    desc: "Every vehicle undergoes a rigorous 150-point inspection before hitting our showroom floor.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    desc: "We match or beat any competitor's price. Drive away knowing you got the best deal.",
  },
  {
    icon: Wrench,
    title: "Full Service Center",
    desc: "Factory-trained technicians and genuine parts keep your vehicle running perfectly.",
  },
  {
    icon: Handshake,
    title: "Flexible Financing",
    desc: "Custom financing solutions tailored to your budget with competitive rates.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-3">
            Why Apex Motors
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            The Apex <span className="text-gradient-gold">Difference</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
