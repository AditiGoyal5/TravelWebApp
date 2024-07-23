
import things from '/public/myTrip.png'
import MyTripsMain from "../components/MyTripsMain"


export default function ThingsMain() {

  return (

    <>
      <div className="relative w-full h-1/3 overflow-hidden">
        <img
          src={things}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative z-10 flex flex-col items-center mt-44 w-full h-full text-[#ffffff]">
            <h1 className="text-4xl font-bold mb-4">Latest reviews. Lowest prices.</h1>
        </div>
      </div>
      <MyTripsMain></MyTripsMain>
    </>
  );
}