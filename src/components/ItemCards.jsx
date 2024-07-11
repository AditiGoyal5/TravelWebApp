import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ItemCards({list , heading}) {
    return (
        <div className="p-11 mx-16 bg-[#ffff] rounded-lg mt-[-100px]"> 
            <h1 className="text-2xl font-semibold mb-4 mt-0"> 
                {heading}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {list.map((attraction, index) => (
                    <div key={index} className="max-w-sm border rounded-lg shadow bg-white relative">
                        <Link to={attraction.path} className="block group">
                            <img className="rounded-t-lg w-full h-56 object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-300" src={attraction.img} alt={attraction.name} />
                            <div className="p-4">
                                <h1 className="text-lg font-semibold mb-2">{attraction.desc}</h1>
                                <p className="text-gray-600">{attraction.price}</p>
                            </div>
                            <div className="absolute top-3 left-4 bg-white p-1 rounded-full group-hover:text-red-600 transition-colors duration-300">
                                <IoMdHeartEmpty className="text-xl text-gray-800" />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
