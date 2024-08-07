
import img from "/public/home.jpg";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={img}
        alt="img"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
        <h1 className="text-5xl font-bold mb-4">Your Journey Your Story</h1>
        <h4 className="text-2xl mb-8">Choose Your Favourite Destination</h4>
        <Link to="/mytrips" className="bg-white text-[#080708] px-6 py-3 rounded transition duration-300 hover:bg-[#439A86] hover:text-white">
          Travel Plan
        </Link>
      </div>
    </div>
  );
}
