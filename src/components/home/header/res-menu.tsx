import { useEffect, useRef, useState } from "react";
import { X, Menu } from "lucide-react";
import { motion } from "framer-motion";
import "./header.css";

const ResMenu = ():JSX.Element => {
    const menuRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  // Tashqariga bosilganda menyuni yopish
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);


    return (
        <>
            <div className="relative" ref={menuRef}>
                {/* Admin icon */}
                <button onClick={toggle}>
                    {isOpen ? <X color="#04f500" size={34} /> : <Menu color="#04f500" size={34}/>}
                </button>

                {/* Dropdown menyusi */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: .3, ease: "easeOut" }} 
                        className="z-index-20">

                            


                        <div className="acc_menu right-0 mt-2 shadow-lg rounded-lg overflow-hidden z-20">
                            <div className="acc_menu_title  py-2 ">
                                Bizneslar
                            </div>
                            <div className="acc_menu_title  py-2 ">
                                 Inestorlar
                            </div >
                            <div className="acc_menu_title  py-2 ">
                                    Jamoa Yig'moq
                            </div >
                            <div className="acc_menu_title  py-2 ">
                                    Qo'shish
                            </div >
                        </div>
                    </motion.div>
                )}
            </div >
        </>
    )
}

export default ResMenu
