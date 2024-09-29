import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import moment from 'moment';

import axios from 'axios';
// import moment from 'moment';
import TripSearch from "../components/MyTripSeach"; 
import { useAllTrips } from "../assets/utilities/cardList"
import img from "/public/trip4.jpg"
import { IoTimeOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { MdTrain } from "react-icons/md";
import {user2} from "../assets/utilities/cardList";

export default function MyTrips() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [tripName, setTripName] = useState("");
  const [description, setTripDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [destination, setDestination] = useState("");
  const [startPost, setStartPost] = useState("");
  const [numberOfPeople, setPeople] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false); 
  const trips = useAllTrips();

  // function handleCreateTripClick(){
  //   console.log("open");
  //   setIsModalOpen(true);
  //   console.log("open");
    
  // }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStep(1);
  };

  const userId  = user2.userId;
  console.log(userId);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const tripData = {
      tripName,
      description,
      startDate,
      endDate,
      destination,
      startPost,
      numberOfPeople,
      userId 
    };
    console.log(tripData);
  
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No token found in localStorage.");
      }
  
      const response = await axios.post(
        'http://localhost:8080/trips',
        tripData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
  
      console.log("Trip added successfully:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  
    // Reset form and state
    setIsModalOpen(false);
    setStep(1);
    setTripName("");
    setTripDescription("");
    setStartDate("");
    setEndDate("");
    setDestination("");
    setStartPost("");
    setPeople(2);
  };
  
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setShowSearchResults(!showSearchResults); 
    setSearchTerm("");
    
  };

  return (
    <div className="mx-20 mt-5 mt-10">
       {/* <div> */}
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">My Trips</h1>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          + Create Trip
        </button>
      </div>
        <div className="flex justify-between">
          <div>
            <button className="bg-green-600 rounded-xl p-2 text-white">
              Upcoming
            </button>
            <button className="border p-2 rounded-xl ml-5">Past</button>
          </div>
          <div className="relative ml-44">
            <IoMdSearch className="absolute text-xl text-gray-500 left-2 top-4" />
            <input
              type="text"
              placeholder="Search trip"
              className="border rounded-full pl-8 py-3"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              className="absolute bg-blue-500 text-white py-2 px-3 rounded-full right-1 ml-2 top-1.5"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
          
        </div>

        
        <div className="mt-7 grid grid-cols-2 gap-4">
          {trips.map((trip) => (
            <div key={trip.tripId} className="mb-4 border rounded-lg p-4">

              <div className="h-56 relative w-full">
                <img src={img} alt="img"  className="h-full w-full"/>

                <div className="flex absolute top-20 left-44  bg-opacity-75 p-2 rounded text-white">
                  <h4 className="text-2xl font-bold">{trip.start_post} </h4>
                  <FaArrowRightLong className="mx-2 mt-1.5 font-bold" />
                  <h4 className="text-2xl font-bold"> {trip.destination?.name}</h4>
                </div>
               
              </div>

              <div className="flex justify-between mt-4 py-1">

                <div>
                  <h2 className="text-xl font-bold text-[#212529] tracking-wide">{trip.tripName}</h2>
                  <p>{trip.description}</p>
                  <p><IoPeople className="inline text-2xl"/> {trip.number_of_people}</p>
                </div>

                <div className="flex items-center">
                <p className="text-[#212529]">
                  {new Date(trip.start_date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' } )} - 
                </p>
                <p className="text-[#212529]">
                  {new Date(trip.end_date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
                </div>

              </div>
              
              {trip.flight && (
                <div className="mt-4 py-1">
                  <h3 className="text-lg font-semibold text-[#212529]">Flight Details:</h3>

                  <div className="flex justify-between">
                    <div>
                      <div className="flex">
                        <MdOutlineFlightTakeoff className="mx-2 mt-1.5 font-bold"/>
                        <h4 className="text-lg font-normal text-[#212529]">{trip.flight.starting} </h4>
                        <FaArrowRightLong className="mx-2 mt-1.5 font-bold" />
                        <h4 className="text-lg font-normal text-[#212529]"> {trip.flight.destination}</h4>
                      </div>

                      <div className="flex">

                        <IoTimeOutline className="mx-2 mt-1 font-bold" />
                        { moment(trip.flight.departure_time, 'HH:mm:ss').format('HH:mm')}
                        <p>-</p>
                        {moment(trip.flight.arrival_time, 'HH:mm:ss').format('HH:mm') }
                      </div>
                    </div>
                    <p>₹{trip.flight.price}</p>
                  </div>

                 
                  {/* <p>
                    <strong>Airline:</strong> {trip.flight.airline}
                  </p> */}
                 
                </div>
              )}

              {(trip.train &&

                <div className="mt-4 py-1">

                  <h3 className="text-lg font-semibold text-[#212529]">Train Details:</h3>

                  <div className="flex justify-between">
                    <div>
                      <div className="flex">
                        <MdTrain className="mx-2 mt-1.5 font-bold"/>
                        <h4 className="text-lg font-normal text-[#212529]">{trip.train.starting} </h4>
                        <FaArrowRightLong className="mx-2 mt-1.5 font-bold" />
                        <h4 className="text-lg font-normal text-[#212529]"> {trip.train.destination}</h4>
                      </div>

                      <div className="flex">

                        <IoTimeOutline className="mx-2 mt-1 font-bold" />
                        { moment(trip.train.departure_time, 'HH:mm:ss').format('HH:mm')}
                        <p>-</p>
                        {moment(trip.train.arrival_time, 'HH:mm:ss').format('HH:mm') }
                      </div>
                    </div>
                    <p>₹{trip.trainClass.price}</p>
                  </div>

                </div>

              )}
              {trip.accommodation?.length > 0 && (
                <div className="mt-4 py-1">
                  <h3 className="text-lg font-semibold text-[#212529]">Accommodation:</h3>
                  {trip.accommodation.map((acc) => (
                    <div key={acc.accommodation_id}>

                      <div className="flex justify-between">
                        <div>
                          <h1><MdHotel className="inline mx-2"/> {acc.name}</h1>
                          <p><MdLocationPin className="inline mx-2"/> {acc.address}</p>
                        </div>
                        <p>₹{acc.price_per_night}</p>
                      </div>
                     
                 
                    </div>
                  ))}
                </div>
              )}
              {trip.attractions?.length > 0 && (
                <div className="mt-4 py-1" >
                  <h3 className="text-lg font-semibold text-[#212529]">Activities:</h3>
                  {trip.attractions.map((attraction) => (

                    <div key={attraction.attraction_id} className="flex justify-between"> 
                       <p className="text-[#333533]"><VscCircleFilled className="inline "/>{attraction.attractionName}</p>
                      <p>₹{attraction.entryFee}</p>
                    </div>
                    
                  ))}
                </div>
              )}
              <div className="flex justify-between mt-5 py-1">
                  <p className="font-bold">Total:</p>
                  <p>{trip.fare}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
            {showSearchResults && <TripSearch tripName={searchTerm} />}
          </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Create Trip</h2>
                <button onClick={handleCloseModal}>
                  <IoClose className="text-2xl text-gray-600" />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="tripName">
                        Trip Name
                      </label>
                      <input
                        type="text"
                        className="border rounded-lg w-full p-2"
                        value={tripName}
                        onChange={(e) => setTripName(e.target.value)}
                        required
                        name="tripName"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="description"> 
                        Trip Description
                      </label>
                      <textarea
                        className="border rounded-lg w-full p-2"
                        value={description}
                        onChange={(e) => setTripDescription(e.target.value)}
                        name="description"
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-blue-500 text-white p-2 rounded"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="startPost">
                        Origin
                      </label>
                      <input
                        type="text"
                        className="border rounded-lg w-full p-2"
                        value={startPost}
                        onChange={(e) => setStartPost(e.target.value)}
                        name="startPost"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="destination">
                        Destination
                      </label>
                      <input
                        type="text"
                        className="border rounded-lg w-full p-2"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        name="destination"
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        className="bg-gray-300 text-gray-700 p-2 rounded"
                        onClick={prevStep}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        className="bg-blue-500 text-white p-2 rounded"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="border rounded-lg w-full p-2"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="border rounded-lg w-full p-2"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Number of People
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="bg-gray-300 p-2 rounded-l"
                          onClick={() => setPeople(numberOfPeople - 1)}
                          disabled={numberOfPeople <= 1}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="border w-16 text-center"
                          value={numberOfPeople}
                          onChange={(e) => setPeople(Number(e.target.value))}
                          required
                        />
                        <button
                          type="button"
                          className="bg-gray-300 p-2 rounded-r"
                          onClick={() => setPeople(numberOfPeople + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        className="bg-gray-300 text-gray-700 p-2 rounded"
                        onClick={prevStep}
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        )}
      {/* </div> */}
    </div>
  );
}
