import { Link } from "react-router-dom";
import headerlogo from "../..//../images/mainLogo.png";
import DropdownAcc from "./dropdown";


import "./header.css";
import ResMenu from "./res-menu";

const Header = (): JSX.Element => {




    return (
        <>
            <div className="header">
                <div className="header-container">
                    <div className="header_items">
                        <div className="logo">
                            <Link to="/">
                                <img src={headerlogo} className="logo_image" alt="Header" />
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden items-center justify-between md:flex">
                                <Link to="/business" className="link" >
                                    <a >Bizneslar</a>
                                </Link>

                                <Link to="/startup" className="link" >
                                    <a >StartUplar</a>
                                </Link>

                                <Link to="/investors" className="link" >
                                    <a>Investorlar</a>
                                </Link>

                                <Link to="/group" className="link" >
                                    <a>Jamoa Yig'moq</a>
                                </Link>

                                <div className="link add-butt">
                                    <a>Qo'shish</a>
                                    <div className="mylist-items hidden ">
                                        <Link to={'/addbusines'} className="Link">
                                            <h1>Biznes qo'shmoq</h1>

                                        </Link>
                                        <Link to={'/addstartup'} className="Link">
                                            <h1>StartUp qo'shmoq</h1>

                                        </Link>
                                        <Link to={'/addinvestor'} className="Link">
                                            <h1>Investor qo'shmoq</h1>

                                        </Link>
                                        <Link to={'/addgroup'} className="Link">
                                            <h1>Jamoa qo'shmoq</h1>

                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className="accaount">
                                {/* <img src={acc} className="acc" alt="" /> */}
                                <DropdownAcc />
                            </div>
                            <div className="md:hidden">
                                <ResMenu />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;




