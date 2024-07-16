import { useState, useRef } from 'react';
import { IoPeople } from "react-icons/io5";
import { FaLocationDot, FaTrainSubway } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import TrainSearch from './TrainSearch'; // Import the TrainSearch component

export default function TrainMain() {
  const [starting, setStarting] = useState('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState({ startDate: '' });
  const [trainClass, setTrainClass] = useState('All Class');
  const [showTrainClassOptions, setShowTrainClassOptions] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false); 
  const trainClassRef = useRef();

  const handleDateChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const handleTrainClassChange = (e) => {
    setTrainClass(e.target.value);
    setShowTrainClassOptions(false);
  };

  const toggleTrainClassOptions = () => {
    setShowTrainClassOptions(!showTrainClassOptions);
  };

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="https://img.freepik.com/free-photo/people-watching-as-train-approaches_1353-227.jpg?t=st=1721015799~exp=1721019399~hmac=9c644ac995d70cf2f53de1c1e4deddcc995d7a00b7edc3e4ffb7dd749a6cb9f7&w=740"
        className="absolute top-0 left-0 w-full h-3/4 object-cover opacity-90"
        alt="Train"
      />
      <div className="relative z-10 flex flex-col items-center mt-48 w-full h-full text-[#ffffff]">
        <h1 className="text-4xl font-bold mb-4">Comfortable Rails, Unforgettable Trips.</h1>
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col space-y-2 w-full max-w-3xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="round-trip"
                name="trip-type"
                value="round-trip"
                className="form-radio mr-2"
                defaultChecked
              />
              <label htmlFor="round-trip" className="mr-4 text-gray-600">Book Train Ticket</label>
              <input
                type="radio"
                id="one-way"
                name="trip-type"
                value="one-way"
                className="form-radio mr-2 text-[#f4978e]"
              />
              <label htmlFor="one-way" className="mr-4 text-gray-600">Check PNR Status</label>
              <input
                type="radio"
                id="multi-city"
                name="trip-type"
                value="multi-city"
                className="mr-2 form-radio"
              />
              <label htmlFor="multi-city" className='text-gray-600'>Live Train Status</label>
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
                placeholder="To: Bangalore"
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
            <div className="relative w-full p-2 border border-gray-300 rounded-lg flex items-center cursor-pointer" onClick={toggleTrainClassOptions}>
              <FaTrainSubway className="mr-2 text-gray-600"/>
              <span className="text-gray-600 flex-1">{trainClass}</span>
              <RiArrowDropDownLine className="ml-auto text-gray-600 text-3xl"/>
              {showTrainClassOptions && (
                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg p-4 z-20">
                  <div className="flex flex-col mb-2" ref={trainClassRef}>
                    <label className="text-gray-600 mb-1">Class</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-lg text-gray-600"
                      value={trainClass}
                      onChange={handleTrainClassChange}
                    >
                      <option value="All Classes">All Class</option>
                      <option value="Sleeper Class">Sleeper Class</option>
                      <option value="Third AC">Third AC</option>
                      <option value="Second AC">Second AC</option>
                      <option value="First AC">First AC</option>
                      <option value="First Class">First Class</option>
                      <option value="Tatkal">Tatkal</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button
            className="bg-[#f4978e] text-white p-2 rounded-lg mt-4 font-semibold tracking-wider"
            onClick={handleSearchClick}
          >
            Find Trains
          </button>
        </div>
        
      </div>
     
    </div>
    {searchClicked && (
          <TrainSearch starting={starting} destination={destination} />
        )}
    </>
  );
}
