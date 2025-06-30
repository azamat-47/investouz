import './App.css'
import Header from './components/home/header/Header'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/home/footer/Footer'
import HomePage from './pages/HomePage'
import Business from './pages/Business'
import StartUp from './pages/StartUp'
import Investor from './pages/Investor'
import Group from './pages/Group'
import AddBusines from './components/addNewPost/AddBusines'
import AddStartUp from './components/addNewPost/AddStartUp'
import AddInvestor from './components/addNewPost/AddInvestor'
import AddGroup from './components/addNewPost/AddGroup'
import BusinessDetail from './components/busines/BusinessDetail'

function App() {

  return (
    <>
    
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/business"  element={<Business />}/>
        <Route path="/startup" element={<StartUp />}/>
        <Route path="/investors" element={<Investor />} />
        <Route path="/group" element={<Group />} />
        <Route path="/addbusines" element={<AddBusines />} />
        <Route path="/addstartup" element={<AddStartUp />} />
        <Route path="/addinvestor" element={<AddInvestor />} />
        <Route path="/addgroup" element={<AddGroup />} />
        <Route path="/business/:id" element={<BusinessDetail />} />
      </Routes>
    
      <Footer />

      
      
    </>
  )
}

export default App
