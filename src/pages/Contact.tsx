import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
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
      <div className="w-full h-[400px] bg-card border-t border-border">
        <iframe
          title="Apex Motors Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.26107785!3d34.0407543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
