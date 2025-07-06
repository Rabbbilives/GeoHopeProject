import React from 'react';
import { ShoppingBag, Phone, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern Kitchen and Bathroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Sanitary Wares & 
            <span className="text-teal-400"> Built‑In Kitchen Solutions</span>
            <span className="block text-2xl md:text-3xl mt-2 text-gray-200">in Abuja</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect blend of elegance, durability, and smart design with GeoHope Nigeria Limited — your trusted source for modern bathroom and kitchen solutions in Abuja.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="group bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              View Our Catalog
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-white text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-gray-100 transition-all duration-200 flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request a Quote
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-navy-900 transition-all duration-200 flex items-center"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Our Showroom
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-400">
            <p className="text-gray-300 mb-4">Trusted by 500+ customers across Abuja</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                High-Quality Brands
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                Expert Installation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                Fast Delivery in FCT
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;