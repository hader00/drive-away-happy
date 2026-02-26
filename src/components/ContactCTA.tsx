import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Visit Our <span className="text-gradient-gold">Showroom</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-md">
              Experience our collection in person. Our team of automotive experts 
              is ready to help you find the perfect vehicle.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "123 Apex Boulevard, Los Angeles, CA 90001" },
                { icon: Phone, label: "(555) 123-4567" },
                { icon: Mail, label: "info@apexmotors.com" },
                { icon: Clock, label: "Mon–Sat: 9AM–8PM | Sun: 10AM–6PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-secondary-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-card border border-border rounded-lg p-8 space-y-5">
              <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                Schedule a Visit
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Tell us what you're looking for..."
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-sm text-sm font-semibold uppercase tracking-wider hover:bg-gold-glow transition-colors duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
