import SUSidebar from '../components/startup/SUSidebar'
import StartUpMain from '../components/startup/StartUpMain'

const StartUp = () => {
  return (
    <>
      <div className="busines_main bg-gray-200">
        


        <div className="sidebar hidden md:block">
          <SUSidebar />
        </div>
        <div className="mainCards w-full">
          <StartUpMain />
        </div>
      </div>
    </>
  )
}

export default StartUp
