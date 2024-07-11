import { Link } from "react-router-dom";
import { location } from "../assets/utilities/cardList";

export default function Cards() {
    return (
        <div className="m-12 p-11 rounded-lg">
            <h1 className="text-3xl tracking-wider font-semibold mb-2 text-center">Explore Beautiful World!</h1>
            <p className="text-[#343a40] text-center tracking-wider mb-12">The right tour for right traveller</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to={location[0].path} className="col-span-2 group relative">
                    <img className="rounded-lg w-full h-56 object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-300" src={location[0].img} alt={location[0].name} />
                    <h1 className="absolute bottom-4 left-4 text-white text-2xl font-bold  transition-colors duration-300">{location[0].name}</h1>
                </Link>
                <Link to={location[1].path} className="row-span-2 group relative">
                    <img className="rounded-lg w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-300" src={location[1].img} alt={location[1].name} />
                    <h1 className="absolute bottom-4 left-4 text-white text-2xl font-bold  transition-colors duration-300">{location[1].name}</h1>
                </Link>
                {location.slice(2).map((place, index) => (
                    <Link to={place.path} key={index} className="group relative">
                        <img className="rounded-lg w-full h-56 object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-300" src={place.img} alt={place.name} />
                        <h1 className="absolute bottom-4 left-4 text-white text-2xl font-bold  transition-colors duration-300">{place.name}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}
