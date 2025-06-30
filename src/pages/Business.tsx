
import BusinessMain from '../components/busines/BusinessMain'
import SideBar from '../components/busines/SideBar'

const Business = () => {
  return (
    <>
      <div className="busines_main bg-gray-200">
        


          <div className="sidebar hidden sm:block ">
            <SideBar />
          </div>
          <div className="mainCards w-full">
            <BusinessMain />
          </div>
        </div>
      
    </>
  )
}

export default Business
