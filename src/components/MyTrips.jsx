
import things from '/public/trip5.jpg'
import MyTripsMain from "../components/MyTripsMain"


export default function ThingsMain() {

  return (

    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={things}
          className="absolute top-0 left-0 w-full h-3/4 object-cover opacity-90"
        />
        <div className="relative z-10 flex flex-col items-center mt-56 w-full h-full text-[#000000]">
            <h1 className="text-4xl font-bold mb-4 ">Effortlessly plan your next adventure with great prices.</h1>
        </div>
      </div>
      <MyTripsMain></MyTripsMain>
    </>
  );
}