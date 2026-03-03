const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-10 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <span className="text-xl font-display font-bold text-gradient-gold tracking-wider">
            APEX MOTORS
          </span>
          <div className="flex gap-6">
            {[
              { label: "Inventory", id: "inventory" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Apex Motors. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            123 Apex Boulevard, Los Angeles, CA 90001 · (555) 123-4567
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
