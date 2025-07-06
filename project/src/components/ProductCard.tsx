import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Product {
  name: string;
  description: string;
  images: (string | undefined)[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const validImages = product.images.filter((image): image is string => !!image);

  return (
    <div className="border rounded-lg p-4 flex flex-col h-full">
      <div className="mb-4 flex-grow">
        {validImages.length > 0 ? (
          <Slider {...settings}>
            {validImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-navy-900">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <Link
        to="/contact"
        className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 mt-auto text-center"
      >
        Interested
      </Link>
    </div>
  );
};

export default ProductCard;
