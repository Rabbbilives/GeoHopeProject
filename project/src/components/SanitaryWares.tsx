import React from 'react';
import { Link } from 'react-router-dom';
import images from './loadImages';
import ProductCard from './ProductCard';
import coverImage from '../../assets/images/download.jpg';

const SanitaryWares = () => {
  // Replace with your actual product data
  const products = [
    {
      name: "Modern Wall-Hung Toilet",
      description: "Sleek and space-saving design.",
      images: [
        images['LUXURY WALL MOUNTED WATER CLOSLET'],
        images['LUXURY WALL MOUNTED WATER CLOSLET(WC) (2)'],
        images['LUXURY WALL MOUNTED WATER CLOSLET(WC) (3)'],
        images['LUXURY WALL MOUNTED WATER CLOSLET(WC)'],
        images['LUXURY WATER CLOSLET & LUXURY WALL MOUNTED WATER CLOSLET(WC) (2)'],
        images['LUXURY WATER CLOSLET & LUXURY WALL MOUNTED WATER CLOSLET(WC)'],
      ]
    },
    {
      name: "Smart Bidet Toilet",
      description: "Advanced features for ultimate comfort.",
      images: [
        images['LUXURY WATER CLOSLET(WC) (2).'],
        images['LUXURY WATER CLOSLET(WC) (3)'],
        images['LUXURY WATER CLOSLET(WC) (4)'],
        images['LUXURY WATER CLOSLET(WC) (5)'],
        images['LUXURY WATER CLOSLET(WC) (6)'],
        images['LUXURY WATER CLOSLET(WC) (7)'],
        images['LUXURY WATER CLOSLET(WC) (8)'],
        images['LUXURY WATER CLOSLET(WC) (9)'],
        images['LUXURY WATER CLOSLET(WC) (10)'],
        images['LUXURY WATER CLOSLET(WC) (11)'],
        images['LUXURY WATER CLOSLET(WC) '],
        images['LUXURY WC (12)'],
      ]
    },
    {
      name: "Luxury Freestanding Bathtub",
      description: "A stunning centerpiece for your bathroom.",
      images: [
        images['LUXURY BATHTUB'],
        images['LUXURY BATHTUB (2)'],
        images['LUXURY BATHTUB (3)'],
        images['LUXURY BATHTUB (4)'],
      ]
    },
    {
      name: "Elegant CONCEAL Shower System",
      description: "Transform your shower experience.",
      images: [
        images['CONCEALED SHOWER'],
        images['CONCEALED SHOWER (2)'],
        images['CONCEALED PRESSING SHOWER'],
      ]
    },
    {
      name: "Elegant Shower System",
      description: "Transform your shower experience.",
      images: [
        images['LUXURY PRESSING SHOWER'],
        images['LUXURY PRESSING SHOWER (2)'],
        images['LUXURY PRESSING SHOWER (3)'],
      ]
    },
    {
      name: "BASIN Mixer Tap",
      description: "Sleek design for modern sinks.",
      images: [
        images['BASIN MIXER'],
        images['BASIN MIXER (2)'],
        images['BASIN MIXER (3)'],
        images['BASIN MIXER (4)'],
      ]
    },
    {
      name: "BATHROOM CABINET",
      description: "Stylish storage solution for your bathroom.",
      images: [
        images['cabinate mirror'],
        images['LUXURY BATHROOM CABINET'],
        images['LUXURY BATHROOM CABINET (2)'],
        images['LUXURY BATHROOM CABINET (3)'],
        images['LUXURY BATHROOM CABINET (4)'],
        images['LUXURY BATHROOM CABINET (5)'],
        images['LUXURY BATHROOM CABINET (6)'],
      ]
    },
    {
      name: "Luxury LD Mirror",
      description: "Perfect for modern bathrooms.",
      images: [
        images['LUXURY LD MIRRORS'],
        images['LUXURY LD MIRRORS (2)'],
        images['LUXURY LD MIRRORS (3)'],
      ]
    },
    {
      name: "Countertop Basin",
      description: "Elegant and easy to install.",
      images: [
        images['LUXURY HANGING BASIN'],
        images['LUXURY HANGING BASIN (2) TOP'],
        images['LUXURY HANGING BASIN (3) TOP'],
        images['LUXURY HANGING BASIN (4) TOP'],
        images['LUXURY HANGING BASIN (5) TOP'],
      ]
    },
    {
      name: "TISSUE HOLDER",
      description: "Convenient and stylish tissue storage.",
      images: [
        images['TISSUE PAPER HOLDER'],
        images['TISSUE PAPER HOLDER (3)'],
      
      ]
    },
    {
      name: "Jaccuzi Bathtub",
      description: "Luxurious and relaxing bathing experience.",
      images: [
        images['LUXURY JUCCI'], 
        images['LUXURY JUCCI (2)']
      ]
    },
    {
      name: "Towel Rack",
      description: "Sleek and functional towel storage.",
      images: [
        images['TOWEL HOLDER'],
        images['TOWER RACK (2)'],
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <img src={coverImage} alt="Sanitary Wares Cover" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
          Sanitary Wares
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

export default SanitaryWares;
