
import ImgUploader from './imgUploader'

const AddInvestor = () => {
    return (
        <>
            <div id="addbusines">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">

                            <h3 className='opacity-65 my-3'>Investor Kompaniyangizni qo'shing</h3>
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
                                <h4 className='mt-2 mx-3'>Kompaniyangiz haqida</h4>
                                <p className='mx-3'>Bu yerga kiritilgan ma'lumotlar sizni to'g'ri StartUp erlar to'plamiga moslashtirish uchun ochiq ko'rsatiladi. Biznesni identifikatsiyalashi mumkin bo'lgan biznes nomi/ma'lumotlarini eslatmang.</p>
                                <hr />


                                <form className="form-group mx-3 md:mx-10!">


                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniyangiz maqsadi </label>
                                    <input required type="text" className="form-control" id="name" />

                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniya qachon tashkil etilgan </label>
                                    <input required type="number" className="form-control" id="name" />

                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniya sohasini kiriting: bir nechta </label>
                                    <input required type="text" className="form-control" id="name" placeholder='ex: Turarjoy, MobileApp, StartUp, SavdoMarkazi' />

                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniyaingiz qayerda joylashgan? </label>
                                    <input required type="text" className="form-control" id="name" placeholder='Bir-necha joy kiritishingiz mumkin' />


                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniyani bitta qatorda tasvirlab bering </label>
                                    <input required type="text" className="form-control" id="name" placeholder="Bu shior yoki reklama so'zlari bo'lishi mumkin" />

                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniyaingiz haqida to'liq malumot! </label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}
                                        placeholder="Kompaniyaning eng ko'p sotiladigan mahsulotlari va xizmatlari qanday, ulardan kim foydalanadi va qanday? Mijozlar soni, daromad modeli, promouter tajribasi, Kompaniya aloqalari, mukofotlar va hokazolarni o'z ichiga olgan Kompaniyaning muhim jihatlarini eslatib o'ting
                                    ">

                                    </textarea>


                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniyaingizni asosiy rasmi </label>
                                    <div className=" flex items-center justify-center bg-gray-100">
                                        <ImgUploader />
                                    </div>

                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniyaingizni 2-rasmi: Ihtiyoriy </label>
                                    <div className=" flex items-center justify-center bg-gray-100">
                                        <ImgUploader />
                                    </div>

                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniyaingizni 3-rasmi: Ihtiyoriy </label>
                                    <div className=" flex items-center justify-center bg-gray-100">
                                        <ImgUploader />
                                    </div>

                                    <label className=' mt-3! text-sm md:text-lg '>Kompaniyaning fonti </label>
                                    <input required type="number" className="form-control mb-3" id="name" placeholder='UZS' />

                                    <div className="items-center grid grid-cols-[70%_30%] mb-3 mt-5 gap-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                                checked
                                            />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Men shartnoma shartlarini qabul qilishga roziman
                                            </label>
                                        </div>

                                        <div className="flex justify-end">
                                            <button className="btn btn-success w-30" type="submit">
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
    )
}

export default AddInvestor
