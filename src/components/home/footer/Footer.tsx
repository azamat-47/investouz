import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, Youtube } from "lucide-react"
import fooImg from "../..//../images/mainLogo.png"
import "./footer.css"


function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="justify-between grid grid-cols-1 md:grid-cols-2 md:justify-start ">
                        <div className=" w-full md:w-60 md:h-20 ">
                            <img src={fooImg} alt="w-full " className="" />
                        </div>
                        <div className="flex mb-2 justify-around items-center md:justify-end ">
                            <Facebook className="mx-2" color="#949494" />
                            <Twitter className="mx-2" color="#949494" />
                            <Linkedin className="mx-2" color="#949494" />
                            <Instagram className="mx-2" color="#949494" />
                            <Youtube className="mx-2" color="#949494" />
                            <Send className="mx-2" color="#949494" />
                        </div>
                    </div>
                    <div className="justify-between!  mt-0 mx-4  grid grid-cols-1 md:grid-cols-2 md:justify-start  md:mt-3">
                        <div className="">
                            <h4 className="text-white text-start ">Contact Us</h4>
                            <div className="footer-card flex">
                                <MapPin className="mt-1" size={22} color="#949494" />
                                <p className="text-gray-400 text-start mx-2">Samarqand Ibn Sino 447a, <p className="text-gray-400 mb-0">Samarqand Uzbekistan </p></p>
                            </div>
                            <div className="footer-card flex">
                                <Phone className="mt-1" size={22} color="#949494" />
                                <p className="text-gray-400 text-start mx-2">+998 93 130 50 77</p>
                            </div>
                            <div className="footer-card flex">
                                <Mail className="mt-1" size={22} color="#949494" />
                                <p className="text-gray-400 text-start mx-2"> polatovazamat@gmail.com </p>
                            </div>
                        </div>

                        <div className="w-full justify-items-start">
                            <h4 className="text-white text-start ">Remain Updated</h4>
                            
                            <input type="text" id="input-group-1" className="footer-input w-70 md:w-84 mt-1 " placeholder="name@gmail.com" />
                            <div></div>
                            
                            <button className="footer-button mt-3">Subscribe</button>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
