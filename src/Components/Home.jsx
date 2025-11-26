import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Paintbrush,
  Shield,
  PenTool,
  ArrowRight,
} from "lucide-react";
import Carousel from "./Carousel";
import img1 from "../assets/galleryImg1.jpg";
import img2 from "../assets/galleryImg2.jpg";
import img3 from "../assets/galleryImg3.jpg";
import img4 from "../assets/galleryImg4.jpg";
import painted from "../assets/painted.jpeg";
import painter from "../assets/painter.jpeg";
import painter1 from "../assets/painter1.jpeg";
import painter2 from "../assets/painter2.jpeg";
import video1 from "../assets/macvide (2).mp4";
import video2 from "../assets/work.mp4";

const images = [img1, img2, img3, img4, painted, painter, painter1, painter2];
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // WhatsApp Configuration
  const phoneNumber = "919465530005"; // Replace with actual number
  const message = "Sat Sri Akal! I am interested in your coating services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <div className="font-sans text-gray-800 bg-gray-50">
        {/* Navigation */}

        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-gray-900 to-gray-800 z-10"></div>
          {/* Abstract Background mimicking industrial coating */}
          <div
            className="absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="container mx-auto px-4 relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              PREMIUM INDUSTRIAL{" "}
              <span className="text-orange-500">COATING</span> SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Providing durable, high-quality powder coating and paint finishes
              in Ludhiana since 1995.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div
                onClick={() => scrollToSection("contact")}
                className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight size={20} />
              </div>
              <div
                onClick={() => scrollToSection("services")}
                className="bg-transparent border-2 cursor-pointer border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-bold text-lg transition-colors"
              >
                Our Services
              </div>
            </div>
          </div>
        </section>

        <section>
          <Carousel />
        </section>
        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Expertise
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                We use advanced technology to ensure the perfect finish for
                every metal surface.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Shield className="text-orange-600 group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Powder Coating</h3>
                <p className="text-gray-600">
                  Electrostatic powder coating offering a harder finish that is
                  tougher than conventional paint.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <PenTool className="text-orange-600 group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Liquid Spray Painting
                </h3>
                <p className="text-gray-600">
                  High-quality wet paint applications for specialized colors,
                  textures, and surface requirements.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Paintbrush className="text-orange-600 group-hover:text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Surface Treatment</h3>
                <p className="text-gray-600">
                  Sandblasting and chemical pretreatment to ensure maximum
                  adhesion and corrosion resistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="pt-10 bg-gray-50 pb-10 lg:pb-30">
          <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">
                Our Workplace Gallery
              </h2>
              <p className="text-gray-600 mt-2">
                A glimpse of our industrial facility & coating process.
              </p>
            </div>

            {/* Auto Scroll Slider */}
            <div className="overflow-hidden">
              <div className="scroll-track flex gap-6">
                {[...images, ...images].map((img, index) => (
                  <div
                    key={index}
                    className="relative w-[300px] h-64 overflow-hidden rounded-xl shadow-md"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      onClick={() => setSelectedImage(img)}
                      className="cursor-pointer w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="videos" className=" bg-gray-50 pb-10 lg:pb-20">
          <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">
                Our Video Gallery
              </h2>
              <p className="text-gray-600 mt-2">
                A glimpse of our industrial processes in action.
              </p>
            </div>

            <div className="flex w-full flex-col lg:flex-row justify-center gap-6 overflow-hidden">
              {/* Video 1 */}
              <div className="flex justify-center overflow-hidden w-full">
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.volume = 0;
                      el.autoplay = false;

                      el.addEventListener("volumechange", () => {
                        if (el.volume !== 0 || !el.muted) {
                          el.muted = true;
                          el.volume = 0;
                        }
                      });
                    }
                  }}
                  muted={true}
                  src={video1}
                  controls
                  className="cursor-pointer w-full h-64 object-cover rounded-2xl lg:h-94"
                />
              </div>

              {/* Video 2 — SAME CODE */}
              <div className="flex justify-center overflow-hidden w-full ">
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.volume = 0;
                      el.autoplay = false;

                      el.addEventListener("volumechange", () => {
                        if (el.volume !== 0 || !el.muted) {
                          el.muted = true;
                          el.volume = 0;
                        }
                      });
                    }
                  }}
                  muted={true}
                  src={video2}
                  controls
                  className="cursor-pointer w-full h-64  lg:h-94  object-cover rounded-2xl"
                />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                WHY CHOOSE AZ COATING SERVICCES ?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 p-1 rounded-full mt-1">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Quality Assurance:</strong>{" "}
                    We use only premium grade powders and paints from certified
                    suppliers.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 p-1 rounded-full mt-1">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Fast Turnaround:</strong>{" "}
                    Located in the heart of Ludhiana's industrial hub, we ensure
                    timely delivery.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 p-1 rounded-full mt-1">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Custom Colors:</strong> We
                    can match any RAL color or custom finish you require.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-lg"
                >
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                Get in touch for a free consultation and quote.
              </p>
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
                      <p className="font-medium">singhsatvir034@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">
                        2099 ST NO 9 ARJUN NAGAR ON RADHA SWAMI ROAD NEAR GILL
                        ROAD,
                        <br />
                        LUDHIANA, PUNJAB 141001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map for Ludhiana Industrial Area B */}
              <div className="h-full min-h-[300px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3424.2165320354356!2d75.85162867558627!3d30.880603074513232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDUyJzUwLjIiTiA3NcKwNTEnMTUuMSJF!5e0!3m2!1sen!2sin!4v1763824305968!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
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
          <p>&copy; 2025 A Z COATING. All Rights Reserved.</p>
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
          className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 hover:rotate-12 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <i className="bi bi-whatsapp text-green-500  text-4xl"></i>
        </a>
      </div>
      {selectedImage && (
        <div
          className="cursor-pointer fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="cursor-pointer absolute top-4 right-4 text-white p-2 text-2xl rounded-full transition"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-full h-3/4 md:h-9/12 md:w-1/2 object-cover max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
            alt="Full Preview"
          />
        </div>
      )}
    </>
  );
};

export default Home;
