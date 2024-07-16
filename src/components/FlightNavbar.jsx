import { useState, useRef, useEffect } from 'react';
import { IoPeople } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
// import img from "/public/aeroplane.jpg";
import FlightSearch from './FlightSearch';


export default function FlightNavbar() {
  const [dates, setDates] = useState({ startDate: '', endDate: '' });
  const [guests, setGuests] = useState({ adults: 2, seniors: 0, children: 0 });
  const [flightClass, setFlightClass] = useState('Economy');
  const [starting, setStarting] = useState('');
  const [destination, setDestination] = useState('');
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const guestDropdownRef = useRef();
  const flightClassRef = useRef();
  const [showFlightSearch, setShowFlightSearch] = useState(false);

  const handleDateChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const handleGuestChange = (type, increment) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: increment ? prevGuests[type] + 1 : Math.max(0, prevGuests[type] - 1),
    }));
  };

  const toggleGuestDropdown = () => {
    setShowGuestDropdown(!showGuestDropdown);
  };

  const handleClickOutside = (event) => {
    if (
      guestDropdownRef.current &&
      !guestDropdownRef.current.contains(event.target) &&
      flightClassRef.current &&
      !flightClassRef.current.contains(event.target)
    ) {
      setShowGuestDropdown(false);
    }
  };

  const handleFlightClassChange = (e) => {
    setFlightClass(e.target.value);
  };
  const handleFindFlights = () => {
    setShowFlightSearch(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="https://t4.ftcdn.net/jpg/02/44/61/09/240_F_244610919_QsikXnS8sUhOeHqGbbifNx1pzjikzgLG.jpg"
        className="absolute top-0 left-0 w-full h-3/4 object-cover opacity-85"
        alt="background"
      />
      <div className="relative z-10 flex flex-col items-center mt-44 w-full h-full text-[#ffffff]">
        <h1 className="text-4xl font-bold mb-4">Smooth Flights, Memorable Journeys.</h1>
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col space-y-2 w-full max-w-3xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="round-trip"
                name="trip-type"
                value="round-trip"
                className="form-radio mr-2"
                checked
              />
              <label htmlFor="round-trip" className="mr-4 text-gray-600">Round Trip</label>
              <input
                type="radio"
                id="one-way"
                name="trip-type"
                value="one-way"
                className="form-radio mr-2 text-[#f4978e]"
              />
              <label htmlFor="one-way" className="mr-4 text-gray-600">One-way</label>
              <input
                type="radio"
                id="multi-city"
                name="trip-type"
                value="multi-city"
                className="mr-2 form-radio"
              />
              <label htmlFor="multi-city" className='text-gray-600'>Multi-city</label>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="relative w-full">
              <FaLocationDot className='text-gray-600 absolute top-3 left-3'/>
              <input
                type="text"
                placeholder="From: Mumbai (BOM)"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg text-gray-600"
                value={starting}
                onChange={(e) => setStarting(e.target.value)}
              />
            </div>
            <div className="relative w-full">
              <FaLocationDot className='text-gray-600 absolute top-3 left-3'/>
              <input
                type="text"
                placeholder="To: Banglore"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg text-gray-600"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <input
              type="date"
              name="startDate"
              value={dates.startDate}
              onChange={handleDateChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-600"
            />
            <input
              type="date"
              name="endDate"
              value={dates.endDate}
              onChange={handleDateChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-600"
            />
            <div className="relative w-full p-2 border border-gray-300 rounded-lg flex items-center cursor-pointer" onClick={toggleGuestDropdown}>
              <IoPeople className="mr-2 text-gray-600"/>
              <span className="text-gray-600">{`${guests.adults + guests.seniors + guests.children} People, ${flightClass}`}</span>
              {showGuestDropdown && (
                <div ref={guestDropdownRef} className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg p-4 z-20">
                  <div className="flex flex-col mb-2" ref={flightClassRef}>
                    <label className="text-gray-600 mb-1">Class</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-lg text-gray-600"
                      value={flightClass}
                      onChange={handleFlightClassChange}
                    >
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business Class">Business Class</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Adults (18-64)</span>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-600" onClick={() => handleGuestChange('adults', false)}>-</button>
                      <span>{guests.adults}</span>
                      <button className="text-gray-600" onClick={() => handleGuestChange('adults', true)}>+</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Seniors (65+)</span>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-600" onClick={() => handleGuestChange('seniors', false)}>-</button>
                      <span>{guests.seniors}</span>
                      <button className="text-gray-600" onClick={() => handleGuestChange('seniors', true)}>+</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Children (0-17)</span>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-600" onClick={() => handleGuestChange('children', false)}>-</button>
                      <span>{guests.children}</span>
                      <button className="text-gray-600" onClick={() => handleGuestChange('children', true)}>+</button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="text-blue-500" onClick={toggleGuestDropdown}>Close</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button className="bg-[#f4978e] text-white p-2 rounded-lg mt-4 font-semibold tracking-wider" onClick={handleFindFlights}>Find Flights</button>
        </div>
      </div>
    </div>

    {showFlightSearch && <FlightSearch starting={starting} destination={destination} />}
    </>
  );
}
