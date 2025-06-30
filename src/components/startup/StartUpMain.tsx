import { data } from '../../constants/startupdata'
import StartUpCard from './StartUpCard'

const StartUpMain = () => {
    
    return (
        <>
            <div className="bus_main">
                <div className="container">

                    <div className="row m-3 md:m-0">
                        <h2 className="text-2xl font-bold! text-gray-800">Investitsiya uchun StartUp lar</h2>
                        <p className="opacity-70"> 1 - {data.length} ta bizneslar koʻrsatilgan. Biznes sotib oling yoki investitsiya qiling. To'g'ridan-to'g'ri biznes egalari va biznes brokerlari tomonidan ro'yxatga olingan.
                        </p>
                        {data.map((startup) => (
                            <StartUpCard key={startup.id} startup={startup} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartUpMain