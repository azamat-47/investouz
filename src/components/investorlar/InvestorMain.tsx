
import { Info, MapPinCheck, Star } from "lucide-react";

import { investordata } from "../../constants/investors";

const InvestorMain = () => {
    return (
        <>
            <div className="row pb-2">
            <p className="opacity-70"> 1 - {investordata.length} ta Investorlar koʻrsatilgan. Siz o'zingizga mos Investorlarni tanlang!
            </p>
                {investordata.map((item) => (
                    <div className="col-md-4 col-xl-3 mb-3" key={item.id}>
                        <div className=" bg-white shadow m-1 px-3 h-full py-4 border rounded min-h-82 ">

                            <h2 className="text-xl font-bold mb-0 text-gray-800">{item.companyName}</h2>
                            <p className="text-sm  text-blue-700">#{item.companyType} </p>
                            <p className="opacity-80 ">
                                {item.info}
                            </p>
                            <img src={item.image} alt={item.companyName} className="h-45 w-full"/>
                            <p className="text-sm text-gray-600 flex mt-1 gap-1 mb-0">

                                <MapPinCheck size={19} strokeWidth={1.5} absoluteStrokeWidth />
                                {item.locationPreference}
                                <span>

                                    <p className="flex items-center">
                                        <Star size={22} color="#fff700" className="inline" strokeWidth={1.5} absoluteStrokeWidth />
                                        {item.reyting}
                                    </p>
                                </span>

                            </p>

                            <div className="flex mt-3 grid-cols-2">
                                <div className="border-r-1 w-1/2 ">
                                    <p className="card_type_info opacity-70 mb-0 items-center">
                                        <span className="text-amber-800 font-bold mr-1!">Byudjet</span>
                                        biznes sotish uchun!
                                        <Info size={10} strokeWidth={2.5} color="#4B5563" className="inline " />
                                    </p>
                                    <p className="text-xl font-bold text-blue-900 mb-0"> <span className="text-orange-400 text-sm font-bold">{item.investmentValyuta}</span> {item.investmentSize}</p>
                                </div>
                                <div className="flex flex-col justify-center  w-1/2">
                                    <button className="btn btn-success w-full mx-1">Bog'lanish</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default InvestorMain
