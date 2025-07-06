import React from 'react';
import { Link } from 'react-router-dom';
import images from './loadImages';
import ProductCard from './ProductCard';

const KitchenHardware = () => {
  // Replace with your actual product data
  const products = [
    {
      name: "CUTLERY RACK",
      description: "Organize your cutlery with ease.",
      images: [ 
        images['CUTLERY RACK'],
        images['cutlery rack (2)'],
      ]
    },
    {
      name: "GLASS CUP HOLDER",
      description: "Keep your glassware secure and accessible.",
      images: [
        images['GLASS CUP HOLDER'], 
        images['GLASS CUP HOLDER (2)'],
      ]
    },
    {
       name: "Pull-Out Spice Rack",
        description: "Maximize your kitchen space with this pull-out spice rack.",
        images: [
         images['PULL-OUT WIRE BASKET'],
         images['spice rack'],
         ]
      },
      {
        name: "Pull-Out Trash Bin",
        description: "Keep your kitchen clean and tidy with a pull-out trash bin.",
        images:[ 
          images['INBUILT DOUBLE DUSTBIN'],
          images['trash bin']
         ]
      },
      {
        name: "Pull-Out Dish Rack",
        description: "Conveniently store your dishes out of sight.",
        images: [
          images['PULL-DOWN PLATE RACK'], 
          images['pull down plate rack '],
          images['PULL-DOWN PLATE RACK (2)'],
          images['PULL-DOWN PLATE RACK (3)'],
          images['PULL-OUT DISH STAINLESS STEEL'],
        ] 
    },
    {
      name: "Pull-Out Pantry",
      description: "Easy access to all your pantry items.",
      images: [
        images['PULLOUT PANTRY'], 
        images['PULLOUT PANTRY (2)'],
        images['PULLOUT PANTRY (3)'],
        images['PULLOUT PANTRY (4)'],
        images['PULLOUT PANTRY (DOOR TYPE) GLASS '],
        images['PULLOUT PANTRY (DOOR TYPE) GLASS (2)'],
        images['PULLOUT PANTRY (DOOR TYPE) STEEL'],
      ]
    },
    {
      name: "magic corner",
      description: "Store your wine bottles elegantly.",
      images: [ 
        images['LUXURY MAGIC CONER'],
        images['LUXURY MAGIC CONER (2)'],
        images['LUXURY MAGIC CONER (3)'],
       ]
    },
    {
      name: "luxury kitchen sink",
      description: "A luxurious addition to your kitchen.",
      images: [
        images['L kitchen sink'],
        images['L kitchen sink (2)'],
      ]
    },
    {
      name: "kitchen sink tap",
      description: "Modern kitchen sink tap with sleek design.",
      images: [
        images['kitchen sink tap (1)'],
        images['kitchen sink tap (2)'],
        images['kitchen sink tap (3)'],

      ]
    },
    {
      name: "kitchen sink",
      description: "Stylish and functional kitchen sink.",
      images: [
        images['kitchen sink'],
        images['kitchen sink (2)'], 
        images['kitchen sink (3)'], 
        images['kitchen sink (4)'],
        images['kitchen sink (5)'], 
      ] 
    }
    
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
          Inbuilt Kitchen Hardware
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

export default KitchenHardware;
