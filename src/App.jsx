import { Routes, Route } from "react-router-dom"

import Navbar from './Components/Navbar/Navbar'

import Hero from './Components/Hero/Hero'
import Hero2 from './Components/Hero2/Hero2'
import Hero3 from './Components/Hero3/Hero3'
import Hero4 from './Components/Hero4/Hero4'
import Hero5 from './Components/Hero5/Hero5'
import Hero6 from './Components/Hero6/Hero6'
import Hero7 from './Components/Hero7/Hero7'
import Hero8 from './Components/Hero8/Hero8'
import Hero9 from './Components/Hero9/Hero9'
import Hero10 from './Components/Hero10/Hero10'
import Hero11 from './Components/Hero11/Hero11'

import Footer from './Components/Footer/Footer'

import Cologne from "./Pages/cologne"

function App() {

  return (
    <div>

    

      <Routes>

        {/* Home Page */}
        <Route path="/" element={
          <>
           <Navbar />
            <Hero/>
            <Hero2/>
            <Hero3/>
            <Hero4/>
            <Hero5/>
            <Hero6/>
            <Hero7/>
            <Hero8/>
            <Hero9/>
            <Hero10/>
            <Hero11/>
            <Footer/>
          </>
        }/>

       
        <Route path="/cologne" element={<Cologne/>} />

      </Routes>

    </div>
  )
}

export default App