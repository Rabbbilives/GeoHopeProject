import React from 'react';
import { Globe, Home, Wrench, Clock, DollarSign, MapPin } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "World-Class Manufacturers",
      description: "We partner with premium global brands to bring you the finest quality products that stand the test of time."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Abuja Housing Expertise",
      description: "Deep understanding of local housing demands and architectural styles across the Federal Capital Territory."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Space-Saving Solutions",
      description: "Elegant, functional designs that maximize utility while maintaining aesthetic appeal in any space."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast & Reliable Service",
      description: "Quick delivery and responsive customer service to keep your projects on schedule."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Pricing",
      description: "Affordable pricing with reliable after-sales support to ensure your investment pays off."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Physical Showroom",
      description: "Visit our showroom to see, touch, and experience our products before making your decision."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Abuja Trusts GeoHope
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            With years of experience and hundreds of satisfied customers, we've built a reputation for excellence in the Abuja market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">500+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">1000+</div>
            <div className="text-gray-300">Products Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">50+</div>
            <div className="text-gray-300">Partner Brands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">24/7</div>
            <div className="text-gray-300">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;