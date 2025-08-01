import { motion } from "framer-motion";
import { Info, MapPinCheck, Star } from "lucide-react";
import { StartUPData } from "../../interfaces";

const StartUpCard = ({ startup }: { startup: StartUPData }) => {
    return (
        <>

            <div className="col-xl-4 col-md-6 mt-4  ">
                <div className=" bg-white shadow m-1 px-3 py-4 h-full border rounded min-h-82 ">
                    <div className="flex items-center gap-2">

                        <motion.div
                            className="w-3 h-3 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }} // Kattalashib, keyin qaytib kichrayadi
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} // Cheksiz takrorlanadi
                        />
                        <p className="m-0! opacity-60" >
                            {startup.titleInfo.split(" ").slice(0, 5).join(" ")}
                            {startup.titleInfo.split(" ").length > 5 && " ..."}

                        </p>
                    </div>
                    <h2 className="text-xl font-bold mb-0 text-gray-800">{startup.companyName}</h2>
                    <p className="text-sm  text-blue-700">#{startup.companyType}</p>
                    <p className="opacity-80 ">
                        {startup.info.split(" ").slice(0, 10).join(" ")}
                        {startup.info.split(" ").length > 10 && " ..."}
                    </p>
                    <img src={startup.image} className="h-40 w-full" alt={startup.companyName} />
                    <p className="text-sm text-gray-600 flex mt-1 gap-1 mb-0">

                        <MapPinCheck size={19} strokeWidth={1.5} absoluteStrokeWidth />
                        {startup.locationPreference}
                        <span>

                            <p className="flex items-center">
                                <Star size={22} color="#fff700" className="inline" strokeWidth={1.5} absoluteStrokeWidth />
                                {startup.reyting}
                            </p>
                        </span>

                    </p>

                    <div className="flex mt-3 grid-cols-2">
                        <div className="border-r-1 w-1/2 ">
                            <p className="card_type_info opacity-70 mb-0 items-center">
                                Investitsiya miqdori
                                <Info size={10} strokeWidth={2.5} color="#4B5563" className="inline " />
                            </p>
                            <p className="text-xl font-bold text-blue-900 mb-0"> <span className="text-orange-400 text-sm font-bold">{startup.investmentValyuta}</span>  {startup.investmentSize.toLocaleString()} </p>
                        </div>
                        <div className="flex flex-col justify-center  w-1/2">
                            <button className="btn btn-success w-full mx-1">Bog'lanish</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default StartUpCard
