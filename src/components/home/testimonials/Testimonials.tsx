import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import React from 'react';
import { useState } from 'react';


// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from '../../../variants';

const testimonials = [
  {
    name: 'John Doe',
    quote: 'This is an amazing product! Highly recommend it to everyone.',
    image: 'https://preview.colorlib.com/theme/banker/images/person_4.jpg'
  },
  {
    name: 'Jane Smith',
    quote: 'A game-changer in the industry. Excellent customer service.',
    image: 'https://preview.colorlib.com/theme/banker/images/person_3.jpg'
  },
  {
    name: 'Mike Johnson',
    quote: 'I am extremely satisfied with my purchase. Five times stars!',
    image: 'https://preview.colorlib.com/theme/banker/images/person_2.jpg'
  }
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>

      <div className='container justify-center my-5  flex items-center' >
        <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7  }} className="relative w-full max-w-5xl  my-4">
          <div className="flex items-center shadow-xl justify-center">
            <button onClick={prevSlide} className="absolute left-0 z-10 p-2 text-2xl text-gray-700 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none">
              <ArrowLeftToLine />
            </button>
            <div className="w-full px-8 py-4 text-center bg-white shadow-md rounded-lg">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={index === current ? 'block' : 'hidden'}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 mx-auto mb-4 rounded-full"
                  />
                  <p className="mb-4 mx-5 text-lg italic text-gray-600">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              ))}
            </div>
            <button onClick={nextSlide} className="absolute right-0 z-10 p-2 text-2xl text-gray-700 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none">
              <ArrowRightToLine />
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TestimonialsCarousel;