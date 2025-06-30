import { Banknote, ChartCandlestick, Earth } from "lucide-react"
import aboutImage from "../../../images/23.png"
import "./infohome.css"
import { Parallax } from "react-parallax"
// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from '../../../variants';

const InfoHome = ():JSX.Element => {
    return (
        <>
            <div className="info_home md:flex block">
                <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.7}}
                
                
                className="infodiv">
                    <h1>Why choose Us?</h1>
                    <div className="info_p">

                        <Banknote  className="info_icon shadow-lg" strokeWidth={1} />

                        <div>
                            <h2>Tez & oson investitsion moslashuv </h2>
                            <h6>Our smart algorithms connect you with the right investors in minutes.</h6>
                        </div>
                    </div>
                    <div className="info_p">
                        <Earth  className="info_icon shadow-lg" strokeWidth={1} />

                        <div>
                            <h2>Investorlarning global tarmog'i
                            </h2>
                            <h6>Join a thriving community of investors and entrepreneurs from around the world.</h6>

                        </div>
                    </div>
                    <div className="info_p">
                        <ChartCandlestick  className="info_icon shadow-lg" strokeWidth={1} />
                        <div>
                            <h2>Funding Imkoniyatlari 
                            </h2>
                            <h6>Explore exclusive investment deals and secure funding effortlessly.</h6>
                        </div>


                    </div>
                </motion.div>
                <div className="info_image">
                    <Parallax bgImage={aboutImage}  blur={{min: 2, max: -1}} >
                        <div className="parallaks"></div>
                    </Parallax>
                </div>
            </div>
        </>
    )
}

export default InfoHome
