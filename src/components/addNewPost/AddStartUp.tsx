
import ImgUploader from './imgUploader'

const AddStartUp = () => {
    return (
        <>
            <>
                <div id="addbusines">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">

                                <h3 className='opacity-65 my-3'>O'zingizni StartUpingizni qo'shing</h3>
                                <div className="shaxsiy-card border shadow-md rounded-md">
                                    <h4 className='mt-2 mx-3'>O'zingiz haqida malumotlar</h4>
                                    <p className='mx-3'>Tafsilotlaringizni shu yerga kiriting. Bu yerga kiritilgan ma'lumotlar hammaga ko'rsatilmaydi.</p>
                                    <hr />
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <div className="form-group mx-3">
                                                <label htmlFor="name" className=''>Ismingiz</label>
                                                <input required type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label className=' mt-3! '>Telefon Raqamingiz</label>
                                                <input required type="number" className="form-control" id="name" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mx-3">
                                                <label htmlFor="name" className=' mt-3! md:mt-0! '>Kompaniya Nomi</label>
                                                <input required type="text" className="form-control" id="name" placeholder="Company Name" />
                                                <label className=' mt-3! '>Offitsial Email</label>
                                                <input required type="text" className="form-control" id="name" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="addBusinesInfo my-3 border shadow-md rounded-md">
                                    <h4 className='mt-2 mx-3'>StartUp haqida</h4>
                                    <p className='mx-3'>Bu yerga kiritilgan ma'lumotlar sizni to'g'ri investorlar va xaridorlar to'plamiga moslashtirish uchun ochiq ko'rsatiladi. StartUpni identifikatsiyalashi mumkin bo'lgan StartUp nomi/ma'lumotlarini eslatmang.</p>
                                    <hr />


                                    <form className="form-group mx-3 md:mx-10!">
                                        <label htmlFor="name" className='text-sm md:text-lg'>Kasbingiz</label>
                                        <input required type="text" className="form-control" id="name" />

                                        <label className=' mt-3! text-sm md:text-lg '>Qiziqishingiz </label>
                                        <input required type="text" className="form-control" id="name" />

                                        <label className=' mt-3! text-sm md:text-lg '>StartUpingizni joylash sababi </label>
                                        <input required type="text" className="form-control" id="name" />

                                        <label className=' mt-3! text-sm md:text-lg '>StartUp qachon tashkil etilgan </label>
                                        <input required type="number" className="form-control" id="name" />

                                        <label className=' mt-3! text-sm md:text-lg '>StartUp sohasini kiriting: bir nechta </label>
                                        <input required type="text" className="form-control" id="name" placeholder='ex: Turarjoy, MobileApp, StartUp, SavdoMarkazi' />

                                        <label className=' mt-3! text-sm md:text-lg '>StartUpingiz qayerda joylashgan? </label>
                                        <input required type="text" className="form-control" id="name" placeholder='Bir-necha joy kiritishingiz mumkin' />

                                        <label className=' mt-3! text-sm md:text-lg '>StartUp/Korxonada qancha ishchi bor</label>
                                        <input required type="number" className="form-control" id="name" />

                                        <label className=' mt-3! text-sm md:text-lg '>Yuridik shaxsning tadbirkorlik turi </label>
                                        <input required type="text" className="form-control" id="name" />

                                        <label className=' mt-3! text-sm md:text-lg '>StartUpni bitta qatorda tasvirlab bering </label>
                                        <input required type="text" className="form-control" id="name" placeholder="Bu shior yoki reklama so'zlari bo'lishi mumkin" />

                                        <label className=' mt-3! text-sm md:text-lg '>StartUpingiz haqida to'liq malumot! </label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}
                                            placeholder="StartUpning eng ko'p sotiladigan mahsulotlari va xizmatlari qanday, ulardan kim foydalanadi va qanday? Mijozlar soni, daromad modeli, promouter tajribasi, StartUp aloqalari, mukofotlar va hokazolarni o'z ichiga olgan StartUpning muhim jihatlarini eslatib o'ting
                                    ">

                                        </textarea>

                                        <label className=' mt-3! text-sm md:text-lg '>StartUpingiz sotish qismi </label>
                                        <input required type="number" className="form-control mb-3" id="name" placeholder='Foiz%' />

                                        <label className=' mt-3! text-sm md:text-lg '>StartUpingiz usha qismi narxi </label>
                                        <input required type="number" className="form-control mb-3" id="name" placeholder='UZS' />


                                        <label className=' mt-3! text-sm md:text-lg '>StartUpingiz asosiy rasmi </label>
                                        <div className=" flex items-center justify-center bg-gray-100">
                                            <ImgUploader />
                                        </div>

                                        <label className=' mt-3! text-sm md:text-lg '>StartUpingiz 2-rasmi: Ihtiyoriy </label>
                                        <div className=" flex items-center justify-center bg-gray-100">
                                            <ImgUploader />
                                        </div>

                                        <label className=' mt-3! text-sm md:text-lg '>StartUpingiz 3-rasmi: Ihtiyoriy </label>
                                        <div className=" flex items-center justify-center bg-gray-100">
                                            <ImgUploader />
                                        </div>
                                    


                                        <div className="justify-between items-center grid grid-cols-[70%_30%] mb-3 mt-5">
                                            <div className="form-check">
                                                <input required
                                                    className="form-check-input "
                                                    type="checkbox"
                                                    value=""
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Men shartnoma shartlarini qabul qilishga roziman
                                                </label>
                                            </div>

                                            <div className="flex justify-end">
                                                <button className="btn btn-success w-40 " type="submit">
                                                    QO'SHMOQ
                                                </button>
                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        </>
    )
}

export default AddStartUp
