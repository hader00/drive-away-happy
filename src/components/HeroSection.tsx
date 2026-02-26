import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury sports car in showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-4"
          >
            Premium Automotive Experience
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Drive Your{" "}
            <span className="text-gradient-gold">Dream</span>{" "}
            Today
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Discover our curated collection of luxury, sport, and premium vehicles. 
            Every car tells a story — find yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#inventory"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm font-semibold uppercase tracking-wider hover:bg-gold-glow transition-all duration-300 glow-gold"
            >
              View Inventory
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 rounded-sm text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
            >
              Book a Test Drive
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-12 mt-20"
        >
          {[
            { value: "500+", label: "Vehicles in Stock" },
            { value: "15+", label: "Years Experience" },
            { value: "10K+", label: "Happy Customers" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-display font-bold text-gradient-gold">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
