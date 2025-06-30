import { useEffect, useRef, useState } from "react";
import { KeySquare,  LogOut, User, UserCog, UserRoundPen } from "lucide-react";
import { motion } from "framer-motion";
import "./header.css";

const DropdownAcc = ():JSX.Element => {
    const [click, setClick] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

  // Tashqariga bosilganda menyuni yopish
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setClick(false);
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
                <button
                    onClick={() => setClick(!click)}
                    className="acc_btn"
                >
                    <UserCog color="#04f500" size={34} />
                </button>

                

                {/* Dropdown menyusi */}
                {click && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: .3, ease: "easeOut" }} 
                        className="z-index-20">

                            


                        <div className="acc_menu right-0 mt-2 shadow-lg rounded-lg overflow-hidden z-20">
                            <div className="acc_menu_title  flex items-center py-2 ">
                                <User color="#04f500" size={30} className="mx-2"/><span className="name_acc ">Azamat Pulatov</span> 
                            </div>
                            <div className="acc_menu_title flex items-center  py-2 ">
                                <UserRoundPen color="#04f500"  size={22} className="mx-2"/> Profile
                            </div >
                            <div className="acc_menu_title flex items-center  py-2 ">
                                <KeySquare size={22} color="#04f500" className="mx-2"/> Change Password
                            </div >
                            <div className="acc_menu_title flex items-center  py-2 ">
                                <LogOut size={22} color="#04f500" className="mx-2"/> Log Out
                            </div >
                        </div>
                    </motion.div>
                )}
            </div >
        </>
    )
}

export default DropdownAcc
