import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Paintbrush, Shield, PenTool, ArrowRight, MessageCircle } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // WhatsApp Configuration
  const phoneNumber = "919465530005"; // Replace with actual number
  const message = "Sat Sri Akal! I am interested in your coating services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Clickable Logo Section */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
              <Paintbrush className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'} transition-colors duration-300 group-hover:opacity-90`}>
              AZ COATING SOLUTIONS
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`font-medium hover:text-orange-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-orange-500">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-gray-800' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl py-4 px-6 flex flex-col space-y-4">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 font-medium py-2 border-b border-gray-100"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-gray-900 to-gray-800 z-10"></div>
        {/* Abstract Background mimicking industrial coating */}
        <div className="absolute inset-0 z-0 opacity-40" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            PREMIUM INDUSTRIAL <span className="text-orange-500">COATING</span> SOLUTIONS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Providing durable, high-quality powder coating and paint finishes in Ludhiana since 1995.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2">
              Get a Quote <ArrowRight size={20} />
            </a>
            <a href="#services" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-bold text-lg transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We use advanced technology to ensure the perfect finish for every metal surface.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Shield className="text-orange-600 group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Powder Coating</h3>
              <p className="text-gray-600">
                Electrostatic powder coating offering a harder finish that is tougher than conventional paint.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <PenTool className="text-orange-600 group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Liquid Spray Painting</h3>
              <p className="text-gray-600">
                High-quality wet paint applications for specialized colors, textures, and surface requirements.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Paintbrush className="text-orange-600 group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Surface Treatment</h3>
              <p className="text-gray-600">
                Sandblasting and chemical pretreatment to ensure maximum adhesion and corrosion resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Industrial Workshop" 
              className="rounded-lg shadow-2xl border-4 border-orange-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">WHY CHOOSE AZ COATING SERVICCES ?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-1 rounded-full mt-1">
                  <ArrowRight size={16} className="text-white" />
                </div>
                <p className="text-gray-300"><strong className="text-white">Quality Assurance:</strong> We use only premium grade powders and paints from certified suppliers.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-1 rounded-full mt-1">
                  <ArrowRight size={16} className="text-white" />
                </div>
                <p className="text-gray-300"><strong className="text-white">Fast Turnaround:</strong> Located in the heart of Ludhiana's industrial hub, we ensure timely delivery.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-1 rounded-full mt-1">
                  <ArrowRight size={16} className="text-white" />
                </div>
                <p className="text-gray-300"><strong className="text-white">Custom Colors:</strong> We can match any RAL color or custom finish you require.</p>
              </div>
            </div>
            <div className="mt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-lg">
                Chat with us directly <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">Get in touch for a free consultation and quote.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">+91 9465530005</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">info@gobindcoating.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Plot No. 123, Industrial Area B,<br/>Ludhiana, Punjab 141003</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map for Ludhiana Industrial Area B */}
            <div className="h-full min-h-[300px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27387.57582079883!2d75.86418566013178!3d30.893753988404862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a830d51850101%3A0x300a124501099707!2sIndustrial%20Area-B%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0, minHeight: '300px'}} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Google Map Location"
               ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p>&copy; 2025 Gobind Coating. All Rights Reserved.</p>
        <p className="text-sm mt-2 flex items-center justify-center gap-1">
          Made with ❤️ by 
          <a 
            href="https://sharpgbs.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 font-semibold transition-colors"
          >
            Sharp Gbs
          </a>
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110 hover:rotate-12 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
      </a>

    </div>
  );
};

export default App;
