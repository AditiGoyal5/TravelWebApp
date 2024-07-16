import Navbar from "../components/Navbar"
import FlightMain from "../components/FlightNavbar"
import Fotter from "../components/Footer"
export default function Flight(){

    return(

        <div className="relative bg-[#ffffff]">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <FlightMain />
        <Fotter />
       
      </div>
    )
}