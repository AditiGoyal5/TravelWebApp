import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { location } from "../assets/utilities/cardList";

export default function Cards() {
    return (
        <div className="m-16  p-11 bg-[#ffff] rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Get to know itinerary with traveller-loved spots</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {location.map((place, index) => (
                    <div key={index} className="max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800 relative">
                        <div className="relative group">
                            <Link to={place.path}>
                                <img className="rounded-t-lg w-full h-56 object-cover opacity-80 group-hover:opacity-55 transition-opacity duration-300" src={place.img} alt={place.name} />
                                <div className="absolute top-3 left-4 bg-white p-1 rounded-full">
                                    <SlLocationPin className="text-xl text-gray-800" />
                                </div>
                                <h1 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{place.name}</h1>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
