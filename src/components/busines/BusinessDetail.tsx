import { useParams } from "react-router-dom"
import { data } from "../../constants"
import { ArrowUpWideNarrow, BadgeCent, Banknote, BanknoteIcon, BriefcaseBusiness, Building2, CalendarArrowUp, CircleAlert, Clock, LayoutPanelTop, Mail, MapPinCheck, MessageCircle, PhoneCall, Star, UsersRound } from "lucide-react";


const BusinessDetail = (): JSX.Element => {
    let { id } = useParams()

    const item = data.filter(i => i.id.toString() === id);
    const mainItem = item[0]

    return (
        <>
            <div id="busines-detail" className="bg-gray-200">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ">
                            <div className="m-4 shadow-xl px-4 py-3 bg-white rounded-sm ">
                                <h4 className="text-blue-700">{mainItem.companyName}</h4>
                                <h2>{mainItem.titleInfo}</h2>

                                <img src={mainItem.image} className=" w-full h-110" alt="" />
                                <div className="flex justify-center ">


                                    <div className="bg-green-700 text-yellow-100 border-yarm rounded-sm mt-3 my-auto w-full md:w-2/3">

                                        <div className="flex justify-between items-center m-2">
                                            <h6 className="mb-0 font-bold!">Umumiy rating</h6>
                                            <h6 className="mb-0 flex gap-2 items-center">

                                                <Star color="#FFA500" size={15} strokeWidth={3} />

                                                {mainItem.reyting}</h6>
                                        </div>

                                        <div className="w-full h-px bg-gray-300 my-1" />

                                        <div className="flex justify-between items-center m-2">
                                            <h6 className="mb-0 font-bold!">Xodimlar</h6>
                                            <h6 className="mb-0 flex gap-2 items-center">

                                                <UsersRound color="#FFA500" size={15} strokeWidth={3} />

                                                {mainItem.ishchiSoni}</h6>
                                        </div>

                                        <div className="w-full h-px bg-gray-300 my-1" />

                                        <div className="flex justify-between items-center m-2">
                                            <h6 className="mb-0 font-bold!">Yuridik shaxs</h6>
                                            <h6 className="mb-0 flex gap-2 items-center">

                                                <Building2 color="#FFA500" size={15} strokeWidth={3} />

                                                MCHJ</h6>
                                        </div>

                                        <div className="w-full h-px bg-gray-300 my-1" />

                                        <div className="flex justify-between items-center m-2">
                                            <h6 className="mb-0 font-bold!">Tashkil et. v.</h6>
                                            <h6 className="mb-0 flex gap-2 items-center">

                                                <CalendarArrowUp color="#FFA500" size={15} strokeWidth={3} />

                                                {mainItem.date}</h6>
                                        </div>

                                        <div className="w-full h-px bg-gray-300 my-1" />

                                        <div className="flex justify-between items-center m-2">
                                            <h6 className="mb-0 font-bold!">Status </h6>
                                            <h6 className="mb-0 flex gap-2 items-center">

                                                <CircleAlert color="#FFA500" size={15} strokeWidth={3} />

                                                {mainItem.status ? "Faol" : "Nofaol"}</h6>
                                        </div>

                                        <div className="w-full h-px bg-gray-300 my-1" />


                                        <div className="flex justify-between items-center m-2">
                                            <h6 className="mb-0 font-bold! ">Sotish narxi </h6>
                                            <h6 className="mb-0 flex gap-2 items-center">

                                                <BadgeCent color="#FFA500" size={15} strokeWidth={3} />

                                                {mainItem.investmentSize.toLocaleString()}</h6>
                                        </div>

                                        <div className="w-full h-px bg-gray-300 my-1" />

                                        <div className="flex justify-between items-center m-2">
                                            <h6 className="mb-0 font-bold!">Sotish valyutasi </h6>
                                            <h6 className="mb-0 flex gap-2 items-center">

                                                <Banknote color="#FFA500" size={15} strokeWidth={3} />

                                                {mainItem.investmentValyuta}</h6>
                                        </div>

                                        <div className="w-full h-px bg-gray-300 my-1" />

                                        <div className="flex justify-between items-center m-2">
                                            <h6 className="mb-0 font-bold!">Sotish qismi </h6>
                                            <h6 className="mb-0 flex gap-2 items-center">

                                                <LayoutPanelTop color="#FFA500" size={15} strokeWidth={3} />

                                                {mainItem.investmentVolume}</h6>
                                        </div>



                                    </div>
                                </div>


                                <h5 className="mt-3">Biznes haqida malumotlar.</h5>
                                <p className="text-blue-500">Biznes taglari: #{mainItem.companyType}</p>
                                <p>{mainItem.titleInfo}. {mainItem.info}</p>

                                <h5 className="mt-1!">Joylashuv afzalliklari: </h5>

                                <div className="flex items-center gap-2">
                                    <MapPinCheck size={19} color="gray" /> <span className="text-xl cursor-pointer text-blue-800">{mainItem.locationPreference}</span>

                                </div>

                                <h5 className="mt-3">Ismi Familiasi:</h5>
                                <div className="flex items-center gap-2">
                                    <Clock size={19} color="gray" /> <span className="text-gray-800 font-medium">Tasdiqlangandan keyin ko'rinadi</span>

                                </div>

                                <h5 className="mt-3">Biznes nomi:</h5>
                                <div className="flex items-center gap-2">
                                    <Clock size={19} color="gray" /> <span className="text-gray-800 font-medium">Tasdiqlangandan keyin ko'rinadi</span>

                                </div>

                                <h5 className="mt-3">Telefon raqami:</h5>
                                <div className="flex items-center gap-2">
                                    <Clock size={19} color="gray" /> <span className="text-gray-800 font-medium">Tasdiqlangandan keyin ko'rinadi</span>

                                </div>

                                <h5 className="mt-3">Biznes email/Telegramm:</h5>
                                <div className="flex items-center gap-2">
                                    <Clock size={19} color="gray" /> <span className="text-gray-800 font-medium">Tasdiqlangandan keyin ko'rinadi</span>

                                </div>

                            </div>
                        </div>



                        <div className="col-md-4">
                            <div className="my-4 shadow-sm p-3 bg-white rounded-sm">
                                <div className="flex justify-center gap-2">
                                    <Mail size={25} color="green" />
                                    <h5 >Biznes bilan bog'lanish</h5>
                                </div>
                                <div className="flex gap-1">
                                    <ArrowUpWideNarrow size={50} color="Green" />
                                    <p>Hozirda bu biznes haqida 6 ta xaridor qiziqmoqda.</p>
                                </div>
                                <hr />

                                <p className="text-xs">Bu kompaniya bilan bogʻlanish uchun quyida maʼlumotlarni toʻldiring</p>
                                <form action="">
                                    <label htmlFor="fullname" >To'liq ism-familiya</label>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text bg-green-400!" id="basic-addon1">
                                            <UsersRound size={20} color="red" />
                                        </span>
                                        <input type="text" className="form-control" id="fullname" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>

                                    <label htmlFor="nomer" >Tel raqam</label>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text bg-green-400!" id="basic-addon1">
                                            <PhoneCall size={20} color="red" />
                                        </span>
                                        <input type="number" className="form-control" id="nomer" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>

                                    <label htmlFor="your" >Kasbingiz</label>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text bg-green-400!" id="basic-addon1">
                                            <BriefcaseBusiness size={20} color="red" />
                                        </span>
                                        <input type="text" className="form-control" id="your" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>

                                    <label htmlFor="your" >Narx Taklifingiz</label>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text bg-green-400!" id="basic-addon1">
                                            <BanknoteIcon size={20} color="red" />
                                        </span>
                                        <input type="number" className="form-control" id="your" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>

                                    <label htmlFor="mess" >O'zingizni tanishtiring va ushbu biznes egasiga xabar yuboring</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-green-400!">
                                            <MessageCircle size={20} color="red" />
                                        </span>
                                        <textarea className="form-control" id="mess" aria-label="With textarea"></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-success w-full mt-4">Yuborish</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default BusinessDetail
