import Navbar from "../components/Navbar"
import FlightMain from "../components/FlightNavbar"
export default function Flight(){

    return(

        <div className="relative bg-[#edede9] pb-4">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <FlightMain />
       
      </div>
    )
}