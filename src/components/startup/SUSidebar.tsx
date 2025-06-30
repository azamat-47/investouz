import { BriefcaseBusiness, Earth, Factory } from "lucide-react"
import { Link } from "react-router-dom"

const SUSidebar = () => {


    return (
        <>
            <h5 className='my-3 mx-4'>Filter bo'yicha</h5>

            <div className=" shadow-xl ">
                <div className="flex  ">
                    <Link to="/business" className="no-underline md:px-4 m-0!   w-1/2 ">
                        <button className={`w-full h-full py-2   bg-gray-200 `}>
                            Sotiladigan

                        </button>
                    </Link>

                    <Link to="/startup" className="no-underline md:px-4 m-0!   w-1/2">
                        <button className={` w-full h-full py-2 bg-white`} >
                            StartUplar


                        </button>
                    </Link>
                </div>

                <div className="p-4 bg-white  ">

                    <div id="bitimlar" className="flex flex-col">
                        <div className="flex items-center">
                            <BriefcaseBusiness size={16} strokeWidth={1.75} />
                            <p className="font-bold mb-0 ">Bitim turlari</p>
                        </div>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="option" className="w-4 h-4  text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700 items-center ml-2!">Hammasi</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="option" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Mobile Ilovalar</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="option" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Kuchmas Mulklar</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="option" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Texnalogiyalar</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="option" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Kompaniyalar</span>
                        </label>
                    </div>

                    <hr />

                    <div id="location" className="flex  flex-col">
                        <div className="flex items-center">
                            <Earth size={16} strokeWidth={1.75} />
                            <p className="font-bold mb-0 ">Tumanlar</p>
                        </div>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4  text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700 items-center ml-2!">Hammasi</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Toshkent shahri</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Toshkent vil.</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Samarqand vil</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Andijon vil</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Namangan vil</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Farg'ona vil</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Qashqadaryo vil</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Surxondaryo vil</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Buxoro vil</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Navoi vil</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Xorazim vil</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="location" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Qoraqalpog'iston</span>
                        </label>
                    </div>

                    <hr />

                    <div id="location" className="flex  flex-col">
                        <div className="flex items-center">
                            <Factory size={16} strokeWidth={1.75} />
                            <p className="font-bold mb-0 ">Biznes Turlari</p>
                        </div>


                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="types" className="w-4 h-4  text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700 items-center ml-2!">Hammasi</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="types" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Dasturiy taminot</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="types" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Moliya</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="types" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Sanoat</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="types" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Logistika</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="types" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">OAV</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="types" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Do'konlar</span>
                        </label>

                        <label className="flex items-center my-1 cursor-pointer">
                            <input type="radio" name="types" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300" />
                            <span className="text-gray-700  items-center ml-2!">Boshqa</span>
                        </label>


                    </div>

                </div>
            </div>



        </>
    )
}

export default SUSidebar
