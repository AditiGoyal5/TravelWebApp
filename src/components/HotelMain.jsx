import { useState } from 'react';
// import { IoIosSearch } from 'react-icons/io';
import { IoPeople } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { Link } from 'react-router-dom';
import img from '/public/hotelBG.jpg';
import ItemCards from "../components/ItemCards"
import { hotels } from "../assets/utilities/cardList";
import Hotel from "../components/Hotel"

export default function HotelMain() {

  const [destination, setDestination] = useState();
  const [dates, setDates] = useState({ startDate: '', endDate: '' });
  const [guests, setGuests] = useState({ rooms: 1, adults: 2, children: 0 });
  const [showHotelSearch, setShowHotelSearch] = useState(false);

  const handleDateChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const handleGuestChange = (e, type) => {
    setGuests({ ...guests, [type]: e.target.value });
  };
  const handleDestination = (e) => {
    setDestination( e.target.value );
  };
  const handleFindHotels = () => {
    setShowHotelSearch(true);
  };


  return (

    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={img}
          alt="img"
          className="absolute top-0 left-0 w-full h-3/4 object-cover opacity-85"
        />
        <div className="relative z-10 flex flex-col items-center mt-44 w-full h-full text-[#ffffff]">
          <h1 className="text-4xl font-bold mb-4">Latest reviews. Lowest prices.</h1>
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
            <input
              type="text"
              placeholder="Hotel name or destination"
              className="px-4 py-2 bg-gray-100 text-gray-800 border-none rounded-lg"
              onChange={(e) => handleDestination(e)}
            />
            <input
              type="date"
              name="startDate"
              value={dates.startDate}
              onChange={handleDateChange}
              className="px-4 py-2 bg-gray-100 text-gray-800 border-none rounded-lg"
            />
            <input
              type="date"
              name="endDate"
              value={dates.endDate}
              onChange={handleDateChange}
              className="px-4 py-2 bg-gray-100 text-gray-800 border-none rounded-lg"
            />
            <div className="flex items-center space-x-2">
              <IoBed className='text-[#212529]'/>
              <input
                type="number"
                value={guests.rooms}
                onChange={(e) => handleGuestChange(e, 'rooms')}
                className="w-12 px-2 py-1 bg-gray-100 text-gray-800 border-none rounded-lg"
                min="1"
              />
            </div>
            <div className="flex items-center space-x-2">
              <IoPeople className='text-[#212529]'/>
              <input
                type="number"
                value={guests.adults}
                onChange={(e) => handleGuestChange(e, 'adults')}
                className="w-12 px-2 py-1 bg-gray-100 text-gray-800 border-none rounded-lg"
                min="1"
              />
              {/* <input
                type="number"
                value={guests.children}
                onChange={(e) => handleGuestChange(e, 'children')}
                className="w-12 px-2 py-1 bg-gray-100 text-gray-800 border-none rounded-lg"
                min="0"
              /> */}
            </div>
            <Link to="">
              <button className="px-4 py-2 bg-[#99582a] text-white rounded-lg" onClick={handleFindHotels}>Find Hotels</button>
            </Link>
          </div>
        </div>
      </div>
      {!showHotelSearch &&  <ItemCards list={hotels} heading="Travellers' Choice: Top hotels"></ItemCards>}
      {showHotelSearch && <Hotel destination={destination}/>}
    </>
  );
}