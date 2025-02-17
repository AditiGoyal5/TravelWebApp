
import things from '/public/trip5.jpg'
import MyTripsMain from "../components/MyTripsMain"


export default function ThingsMain() {

  return (

    <>
      <div className="relative w-full h-[450px] overflow-hidden">
        <img
          src={things}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative z-10 flex flex-col items-center mt-56 w-full h-full text-[#000000]">
            <h1 className="text-4xl font-bold">Effortlessly plan your next adventure with great prices.</h1>
        </div>
      </div>
      <MyTripsMain></MyTripsMain>
    </>
  );
}