import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-3">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-gradient-gold">Apex Motors</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Founded in 2010, Apex Motors has grown from a small family-owned lot into 
              one of Los Angeles' most trusted dealerships. We believe buying a car should 
              be exciting, transparent, and hassle-free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional vehicles at fair prices while delivering a customer 
                experience that sets the standard in the automotive industry. Every car we 
                sell is backed by our commitment to quality and integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">Our Values</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• Transparency in every transaction</li>
                <li>• Quality vehicles, rigorously inspected</li>
                <li>• Customer-first approach, always</li>
                <li>• Fair pricing with no hidden fees</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "2,500+", label: "Vehicles Sold" },
                { number: "15+", label: "Years Experience" },
                { number: "4.9★", label: "Customer Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default About;
