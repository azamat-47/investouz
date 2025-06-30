
import { ChartNoAxesCombined,  HandCoins, Layers, Users } from "lucide-react"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import "./mijozlar.css"

// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from '../../../variants';


const Mijozlar = (): JSX.Element => {
    const [countState, setCountState] = useState(false);
    return (
        <>
            <div className="mijozlar">
                <div className="container">
                    {/* Bu scroll bulganda ishlaydi kutubxona react scroll-trigger */}
                    <ScrollTrigger
                        onEnter={() => setCountState(true)}
                        
                        >


                        <div className="row">
                            <div className="col-md-3">
                                <motion.div
                                    variants={fadeIn("up", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 0.7 }}

                                    className="mijoz_card">
                                    <Users size={100} color="#e1ff00" strokeWidth={1} />
                                    <h3>
                                        {/* Bu CountUp sanaydi  */}
                                        {countState && 
                                        
                                        <CountUp end={204} duration={3} />}

                                    </h3>
                                    <p>Foydalanuvchilar</p>
                                </motion.div>
                            </div>
                            <div className="col-md-3">
                                <motion.div
                                    variants={fadeIn("up", 0.4)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 0.7 }}

                                    className="mijoz_card">
                                    <HandCoins size={100} color="#e1ff00" strokeWidth={1} />
                                    <h3>{countState && 
                                        <CountUp end={34} duration={3} />}
                                    </h3>
                                    <p>Investorlar</p>
                                </motion.div>


                            </div>
                            <div className="col-md-3">
                                <motion.div
                                    variants={fadeIn("up", 0.6)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 0.7 }}

                                    className="mijoz_card">
                                    <ChartNoAxesCombined size={100} color="#e1ff00" strokeWidth={1} />
                                    <h3>{countState && 
                                        <CountUp end={56} duration={3} />}
                                    </h3>
                                    <p>Rivojlangan Startuplar</p>
                                </motion.div>


                            </div>
                            <div className="col-md-3">
                                <motion.div
                                    variants={fadeIn("up", 0.8)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 0.7 }}

                                    className="mijoz_card">
                                    <Layers size={100} color="#e1ff00" strokeWidth={1} />
                                    <h3>
                                        {countState && 
                                        <CountUp end={193} duration={3} />}
                                    </h3>
                                    <p>Active Startuplar</p>
                                </motion.div>


                            </div>
                        </div>

                    </ScrollTrigger>
                </div>
            </div>
        </>
    )
}

export default Mijozlar
