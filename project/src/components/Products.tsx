import React from 'react';
import { Link } from 'react-router-dom';
import { Bath, Wrench, Zap, ArrowRight } from 'lucide-react';
import sanitaryWareImage from '../../assets/images/download.jpg';

const Products = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      icon: <Bath className="h-8 w-8" />,
      title: "SANITARY WARES",
      description: "Complete bathroom solutions for modern living",
      items: [
        "Wall-hung & One-piece Toilets",
        "Smart/Bidet Toilets",
        "Countertop & Wall-hung Basins",
        "Rain Shower & Glass Enclosures",
        "Freestanding & Whirlpool Bathtubs",
        "Basin & Shower Mixers",
        "Mirrors & Accessories"
      ],
      image: sanitaryWareImage,
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "INBUILT KITCHEN HARDWARE",
      description: "Smart storage and functional kitchen solutions",
      items: [
        "Soft-close Hinges & Tandem Boxes",
        "Push-to-Open Drawers",
        "Pull-out Pantries & Corner Units",
        "Hydraulic Lifts & Magic Corners",
        "Under-sink Bin Units",
        "Granite & Stainless Steel Sinks",
        "Pull-out Kitchen Taps"
      ],
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "BUILT-IN KITCHEN APPLIANCES",
      description: "Premium integrated cooking and cooling solutions",
      items: [
        "Built-in Ovens & Hobs",
        "Induction Cooktops & Microwaves",
        "Built-in Chimney Hoods",
        "Island Hoods & Extractors",
        "Built-in Dishwashers",
        "Integrated Refrigerators",
        "Coffee Machines & Wine Coolers"
      ],
      image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Explore Our Full Catalog
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From premium sanitary wares to smart kitchen solutions, we offer everything you need to create beautiful, functional spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className={`rounded-2xl border-2 ${category.color} p-8 hover:shadow-xl transition-all duration-300 group`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg text-teal-600 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="mb-6">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-2 mb-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                to={
                  category.title === "SANITARY WARES" ? "/sanitary-wares" :
                  category.title === "INBUILT KITCHEN HARDWARE" ? "/kitchen-hardware" :
                  "/kitchen-appliances"
                }
                className="w-full bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold border-2 border-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-navy-900 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need help designing your kitchen or bathroom?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you create the perfect space. Get a free consultation and personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200"
            >
              Request Free Consultation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-navy-900 transition-all duration-200"
            >
              Start Building Your List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
