import React from 'react';
import { MapPin, Clock, Phone, Star, ChevronRight, Menu, X, Utensils, Zap, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Tacos al Pastor",
      description: "Carne de cerdo marinada con piña, servida en tortillas de maíz",
      price: "$12",
      popular: true,
      image: "https://placehold.co/400x300/8B4513/FFFFFF?text=Tacos+al+Pastor"
    },
    {
      name: "Tacos de Carnitas",
      description: "Carnitas de cerdo slow-cooked, jugosas y crujientes",
      price: "$14",
      popular: true,
      image: "https://placehold.co/400x300/CD853F/FFFFFF?text=Tacos+de+Carnitas"
    },
    {
      name: "Tacos de Barbacoa",
      description: "Carne de res cocida al vapor con especias tradicionales",
      price: "$16",
      popular: false,
      image: "https://placehold.co/400x300/A0522D/FFFFFF?text=Tacos+de+Barbacoa"
    },
    {
      name: "Tacos de Pescado",
      description: "Filete de pescado fresco empanizado con chipotle y limón",
      price: "$18",
      popular: false,
      image: "https://placehold.co/400x300/4682B4/FFFFFF?text=Tacos+de+Pescado"
    },
    {
      name: "Quesadillas",
      description: "Queso Oaxaca fundido con flor de calabaza o huitlacoche",
      price: "$10",
      popular: false,
      image: "https://placehold.co/400x300/FFD700/000000?text=Quesadillas"
    },
    {
      name: "Guacamole Casero",
      description: "Aguacate fresco con tomate, cebolla y cilantro",
      price: "$8",
      popular: false,
      image: "https://placehold.co/400x300/32CD32/FFFFFF?text=Guacamole+Casero"
    }
  ];

  const testimonials = [
    {
      name: "María Rodríguez",
      rating: 5,
      comment: "¡Los mejores tacos al pastor que he probado! El sabor auténtico me transportó directamente a México.",
      avatar: "https://placehold.co/60x60/8B4513/FFFFFF?text=MR"
    },
    {
      name: "Carlos Mendoza",
      rating: 5,
      comment: "Ambiente familiar increíble y servicio excepcional. ¡Volveré cada semana!",
      avatar: "https://placehold.co/60x60/CD853F/FFFFFF?text=CM"
    },
    {
      name: "Ana López",
      rating: 4,
      comment: "Excelente calidad de ingredientes y porciones generosas. Recomiendo los tacos de carnitas.",
      avatar: "https://placehold.co/60x60/A0522D/FFFFFF?text=AL"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-red-600 p-2 rounded-full">
              <Utensils className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-amber-900">Tacos Charros</h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Menú', 'Sobre Nosotros', 'Contacto'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-amber-900 hover:text-red-600 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-amber-900" /> : <Menu className="h-6 w-6 text-amber-900" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden bg-white py-4 px-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {['Inicio', 'Menú', 'Sobre Nosotros', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block py-2 text-amber-900 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-amber-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
              Auténtica Comida Mexicana
            </h2>
            <p className="text-xl md:text-2xl text-amber-800 mb-8">
              Sabores tradicionales que te transportarán directamente a México
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.a
                href="#menu"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
              >
                Ver Menú <ChevronRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#contacto"
                className="border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
              >
                Reservar Mesa
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-amber-900 mb-4">Nuestra Historia</h3>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>
          
          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:w-1/2">
              <img 
                src="https://placehold.co/600x400/8B4513/FFFFFF?text=Tacos+Charros+Restaurant" 
                alt="Restaurante Tacos Charros" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-2xl font-bold text-amber-900 mb-4">Tradición y Pasión en Cada Bocado</h4>
              <p className="text-amber-800 mb-6 leading-relaxed">
                Fundado en 2015 por la familia Martínez, Tacos Charros nació del amor por la cocina mexicana 
                tradicional. Cada receta ha sido transmitida de generación en generación, utilizando ingredientes 
                frescos y técnicas auténticas que garantizan una experiencia culinaria inolvidable.
              </p>
              <p className="text-amber-800 mb-8 leading-relaxed">
                Nuestro compromiso es preservar la autenticidad de la cocina mexicana mientras innovamos con 
                sabores contemporáneos. En Tacos Charros, no solo servimos comida, creamos recuerdos.
              </p>
              <div className="flex items-center gap-4 text-red-600 font-semibold">
                <Zap className="h-6 w-6" />
                <span>Ingredientes 100% frescos diariamente</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-amber-900 mb-4">Nuestro Menú</h3>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            <p className="text-amber-800 mt-4 max-w-2xl mx-auto">
              Descubre nuestros platillos más populares elaborados con recetas tradicionales
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover"
                  />
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                      <Flame className="h-4 w-4" />
                      <span className="text-sm font-semibold">Popular</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-amber-900">{item.name}</h4>
                    <span className="text-red-600 font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-amber-800">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-amber-900 mb-4">Lo que dicen nuestros clientes</h3>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-amber-50 p-6 rounded-2xl"
                variants={fadeInUp}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-amber-800 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-red-600 to-amber-600">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-white mb-4">Visítanos</h3>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-white mb-6">Información de Contacto</h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Dirección</p>
                    <p className="text-white/80">Av. México 123, Colonia Centro, Ciudad</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Horarios</p>
                    <p className="text-white/80">Lunes a Domingo: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Teléfono</p>
                    <p className="text-white/80">+52 55 1234 5678</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h5 className="text-white font-semibold mb-4">Síguenos en redes sociales</h5>
                <div className="flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-amber-900 mb-6">Reserva tu Mesa</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-900 font-medium mb-2">Nombre</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-900 font-medium mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-red-600 focus;border-transparent"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-900 font-medium mb-2">Fecha</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-900 font-medium mb-2">Hora</label>
                    <select className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-900 font-medium mb-2">Número de personas</label>
                  <select className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                    <option>1-2 personas</option>
                    <option>3-4 personas</option>
                    <option>5-6 personas</option>
                    <option>7+ personas</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-900 font-medium mb-2">Notas adicionales</label>
                  <textarea 
                    rows="3" 
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Alérgenos, celebraciones especiales, etc."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reservar Mesa
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-red-600 p-2 rounded-full">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Tacos Charros</h2>
            </div>
            <p className="text-amber-200 mb-6">Auténtica comida mexicana desde 2015</p>
            <div className="border-t border-amber-800 pt-6">
              <p className="text-amber-300">
                © 2025 Tacos Charros. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
