import { motion } from "framer-motion";
import { Fuel, Gauge, Settings } from "lucide-react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

const vehicles = [
  {
    name: "Executive Sedan S",
    year: 2024,
    price: "$58,900",
    image: car1,
    specs: { power: "382 HP", fuel: "28 MPG", transmission: "Auto" },
    tag: "Luxury",
  },
  {
    name: "Vortex GT",
    year: 2025,
    price: "$124,500",
    image: car2,
    specs: { power: "620 HP", fuel: "18 MPG", transmission: "DCT" },
    tag: "Sport",
  },
  {
    name: "Summit XL",
    year: 2024,
    price: "$72,300",
    image: car3,
    specs: { power: "295 HP", fuel: "24 MPG", transmission: "Auto" },
    tag: "SUV",
  },
];

const FeaturedVehicles = () => {
  return (
    <section id="inventory" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-3">
            Our Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="text-gradient-gold">Vehicles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 hover:glow-gold"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  {car.tag}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    {car.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">{car.year}</span>
                </div>

                <p className="text-2xl font-display font-bold text-gradient-gold mb-5">
                  {car.price}
                </p>

                <div className="flex items-center gap-4 text-muted-foreground text-xs border-t border-border pt-4">
                  <div className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-primary" />
                    {car.specs.power}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Fuel className="w-3.5 h-3.5 text-primary" />
                    {car.specs.fuel}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Settings className="w-3.5 h-3.5 text-primary" />
                    {car.specs.transmission}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#inventory"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-sm text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            View All Vehicles
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
