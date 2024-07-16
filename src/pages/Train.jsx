
import Navbar from "../components/Navbar"
import TrainMain from "../components/TrainMain"
import Fotter from "../components/Footer"
export default function Contact(){

    return(

        <div className="relative bg-[#edede9]">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <TrainMain />
        <Fotter />
      </div>
    )
}