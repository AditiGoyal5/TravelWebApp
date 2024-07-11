import img from "/public/travel.avif";
import { IoFastFood } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";

export default function Travel() {
    return (
        <div>
            <div className="flex">
                <img src={img} alt="" />
                <div className="pt-16 px-6">
                    <h1 className="text-4xl font-semibold leading-relaxed tracking-wider font-open-sans">Explore all the corners of<br/>The world with us</h1>
                    <p className="mt-10 leading-8 pr-20 tracking-wide">Great! Travel can be such an enriching experience. Whether it's exploring new cultures, trying local cuisines, or discovering hidden gems, there's always something fascinating about travel.</p>
                    <ul className="grid grid-cols-2 gap-4 mt-7">
                        <li className="flex items-center text-lg leading-10"><MdOutlineFlight className="mr-2.5 text-xl text-[#bc6c25]"/>Flight</li>
                        <li className="flex items-center text-lg leading-10"><FaHotel className="mr-2.5 text-xl text-[#bc6c25]"/>Hotel</li>
                        <li className="flex items-center text-lg leading-10"><FaWifi className="mr-2.5 text-xl text-[#bc6c25]" />Wifi</li>
                        <li className="flex items-center text-lg leading-10"><IoFastFood className="mr-2.5 text-xl text-[#bc6c25]" />Food</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
