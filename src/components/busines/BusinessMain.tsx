
import { data } from "../../constants/index"
import BusinessCard from "./BusinessCard"

const BusinessMain = () => {
    return (
        <>
            <div className="bus_main ">
                <div className="container">

                    <div className="row m-3 md:m-0">
                        <h2 className="text-2xl font-bold! ">Sotish uchun korxonalar</h2>
                        <p className="opacity-70"> 1 - {data.length} ta bizneslar koʻrsatilgan. Biznes sotib oling yoki investitsiya qiling. To'g'ridan-to'g'ri biznes egalari va biznes brokerlari tomonidan ro'yxatga olingan.
                        </p>
                        {data.map((business) => (
                            <BusinessCard key={business.id} business={business} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessMain
