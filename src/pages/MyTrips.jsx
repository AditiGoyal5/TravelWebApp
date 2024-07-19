import Navbar from "../components/Navbar";
import Main from "../components/HotelMain";
import Card from "../components/Cards"
import Footer from "../components/Footer"
import MyTrip from "../components/MyTrips"

export default function MyTrips() {
  return (
    <div className="relative bg-[#fffff]">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/* <Main />
     <Card/> */}
     <MyTrip  />

      <Footer></Footer>
    </div>
  );
}