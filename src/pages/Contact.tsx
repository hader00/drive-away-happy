import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-3">
              Reach Out
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
          </motion.div>
        </div>
      </div>
      <ContactCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Contact;
