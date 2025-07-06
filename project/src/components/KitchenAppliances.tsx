import React from 'react';
import { Link } from 'react-router-dom';
import images from './loadImages';
import ProductCard from './ProductCard';

const KitchenAppliances = () => {
  // Replace with your actual product data
  const products = [
    {
      name: "Gas & Electric Burner",
      description: "Versatile cooking options for every chef.",
      images: [
        images['GAS & ELECTRIC BURNER'],
        images['gas & electric burner (2)'],
      ]
    },
    {
      name: "Gas Burner",
      description: "High-efficiency gas burner for quick cooking.",
      images: [
        images['GAS BURNER'],
        images['GAS BURNER (2)'],
        images['GAS BURNER (3)'],
        images['GAS BURNER (4)'],
      ]
    },
    {
      name: "Electric Microwave Oven",
      description: "Quick and convenient cooking with our electric microwave oven.",
      images: [
        images['INBUILT MICRO-WAVE'],
        images['INBUILT MICRO-WAVE (2)'],
      ]
    },
    {
      name: "Gas & Electric Oven",
      description: "Versatile cooking options for every chef.",
      images: [
        images['electric oven'],
        images['electric oven 2'],
      ]
    },
    {
      name: " Electric Oven",
      description: "Versatile cooking options for every chef.",
      images: [
        images['electric oven 2'],
        images['electric oven']
      ]
    },
    {
      name: " Smoke Extractor",
      description: "Efficient smoke extraction for a cleaner kitchen environment.",
      images: [
        images['SMOKE EXTRACTOR'],
        images['smoke extractor (2)'],
        images['smoke extractor (3)'],
        images['smoke extractor (4)'],
      ]
    },
    {
      name: " Water Heater",
      description: "Efficient water heating for your kitchen needs.",
      images: [
        images['WATER HEATER'],
        images['WATER HEATER (2)'],
        images['WATER HEATER (3)'],
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
          Built-in Kitchen Appliances
        </h2>
        <div className="w-20 h-1 bg-teal-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200">
            Contact Us for a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KitchenAppliances;
