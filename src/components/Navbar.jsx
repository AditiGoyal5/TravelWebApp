import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { MdFlight } from "react-icons/md";

export default function Navbar() {
  const [hamburgerMenuVisibility, setHamburgerMenuVisibility] = useState(false);

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between mx-auto mt-5 py-3 bg-[#ffffff] text-dark px-7 shadow rounded-xl w-[95%] h-auto lg:h-[58px] z-50">
      <div className="flex justify-between w-full lg:w-auto">
        <Link to="/" className="text-3xl font-bold cursor-pointer">Trippy</Link>
        <div className="lg:hidden">
          {hamburgerMenuVisibility ? (
            <IoClose
              onClick={() => setHamburgerMenuVisibility(!hamburgerMenuVisibility)}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setHamburgerMenuVisibility(!hamburgerMenuVisibility)}
              className="text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col lg:ml-20 lg:flex-row lg:items-center lg:justify-between w-full">
        <ul className={`flex-col lg:flex-row lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-4 py-3 px-4 ${hamburgerMenuVisibility ? 'flex justify-center' : 'hidden'} lg:flex w-full lg:w-auto`}>
          <li className="w-full text-center lg:w-auto">
            <Link to="/flight" className="font-semibold transition ease-in-out duration-300 hover:bg-[#439A86] hover:text-white px-3 py-2 rounded block lg:inline-block">
              Flights
            </Link>
          </li>
          <li className="w-full text-center lg:w-auto">
            <Link to="/hotel" className="font-semibold transition ease-in-out duration-300 hover:bg-[#439A86] hover:text-white px-3 py-2 rounded block lg:inline-block">
              Hotels
            </Link>
          </li>
          <li className="w-full text-center lg:w-auto">
            <Link to="/train" className="font-semibold transition ease-in-out duration-300 hover:bg-[#439A86] hover:text-white px-3 py-2 rounded block lg:inline-block">
              Trains
            </Link>
          </li>
          <li className="w-full text-center lg:w-auto">
            <Link to="/things-to-do" className="font-semibold transition ease-in-out duration-300 hover:bg-[#439A86] hover:text-white px-3 py-2 rounded block lg:inline-block">
              Things To Do
            </Link>
          </li>
        </ul>

        <ul className={`flex-col lg:flex-row lg:flex items-center ml-auto space-y-4 lg:space-y-0 lg:space-x-4 py-3 px-4 ${hamburgerMenuVisibility ? 'flex justify-self-end' : 'hidden'} lg:flex w-full lg:w-auto`}>
          <div className='relative flex items-center py-2.5 ps-5'>
            <input type="text" placeholder='Search' className='pl-4 py-1.5 w-80 bg-[#e9ecef] text-sm border-none rounded-3xl text-[#6c757d]'/>
            <IoIosSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer '/>
          </div>
          <li className="w-full text-center lg:w-auto">
            <Link to="/mytrips" className="font-semibold transition ease-in-out duration-300 hover:bg-[#439A86] hover:text-white px-3 py-2 rounded block lg:inline-block">
            <MdFlight className="inline text-2xl pe-1"/>
              MyTrips
            </Link>
          </li>
          <li className="w-full text-center lg:w-auto">
            <Link to="/profile" className="font-semibold transition ease-in-out duration-300 hover:bg-[#439A86] hover:text-white px-3 py-2 rounded block lg:inline-block">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
