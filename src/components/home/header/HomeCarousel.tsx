import Carousel from 'react-bootstrap/Carousel';
import "./header.css"
// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from '../../../variants';

function HomeCarousel():JSX.Element {
  return (
    <>

      <Carousel data-bs-theme="dark" >
        <Carousel.Item>
          <div className='d-block carusel1'>
            <div className="carusel-block">
              <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.4}}
              
              className='carusel-info'>
                <h1 className='sm:text-5xl! sm:py-0 px-5 py-4 text-2xl' >StartUp uchun Investorlar qidir!</h1>
                <p className='md:text-2xl text-xl px-5'>InvestorUz bilan Investorlar topish tez va oson.</p>
              </motion.div>
            </div>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-block carusel2'>
            <div className="carusel-block">

              <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.4}}

              className='carusel-info'>
                <h1 className='sm:text-5xl! sm:py-0 px-5 py-4 text-2xl' >Katta Hamjamiyatga qo'shil!</h1>
                <p className='md:text-2xl text-xl px-5'>Bizda 1000dan ortiq Investorlar va StartUp perlar mavjud.</p>
              </motion.div>
            </div>

          </div>


        </Carousel.Item>
        <Carousel.Item>
          <div className='d-block carusel3'>

            <div className="carusel-block">

              <motion.div 
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.4}}

              className='carusel-info'>
                <h1 className='sm:text-5xl! sm:py-0 px-5 py-4 text-2xl' >Super StartUplarni Toping</h1>
                <p className='md:text-2xl text-xl px-5'>
                  Bu yerda Uzbekistonni eng zo'r StartUp lari mavjud.
                </p>
              </motion.div>
            </div >
          </div>
        </Carousel.Item>
      </Carousel>

    </>
  );
}

export default HomeCarousel;