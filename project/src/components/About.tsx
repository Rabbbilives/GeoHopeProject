import React from 'react';
import { Award, Users, Clock, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "High-Quality Brands",
      description: "Partnering with world-class manufacturers"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Consultations",
      description: "Professional guidance for your projects"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Delivery in FCT",
      description: "Quick and reliable service across Abuja"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Affordable Prices",
      description: "Competitive pricing without compromising quality"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            About GeoHope Nigeria Limited
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              GeoHope Nigeria Limited is a top-tier building solutions provider based in Abuja, specializing in the supply of premium sanitary wares, inbuilt kitchen hardware, and built-in kitchen appliances.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We deliver stylish, functional, and long-lasting solutions for both residential and commercial projects. Whether you're designing a new apartment or upgrading a smart kitchen, we bring global quality with local expertise.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Why Choose Us?</h3>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-teal-600 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200"
              >
                Learn More
              </button>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                <span>Trusted by 500+ customers</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Modern bathroom setup"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;