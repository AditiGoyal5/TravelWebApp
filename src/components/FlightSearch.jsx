import { useState, useEffect } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from 'axios';
import { airlines } from "../assets/utilities/cardList.js";
import { Slider } from "@material-tailwind/react";
import { useTripNames } from "../assets/utilities/cardList.js";

export default function FlightSearch({ starting, destination }) {
  const [flights, setFlights] = useState([]);    
  const [priceRange, setPriceRange] = useState([2800, 72050]);
  const [durationRange, setDurationRange] = useState([75, 1545]);
  const tripNames = useTripNames();

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/flight/${starting}/${destination}`);
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    if (starting && destination) {
      fetchFlights();
    }
  }, [starting, destination]);

  const handleAddToTrip = async (flightId, tripId) => {
    try {
      await axios.put(`http://localhost:8080/trips/${tripId}/add-flight/${flightId}`);
      alert('Flight added to trip successfully!');
    } catch (error) {
      console.error('Error adding flight to trip:', error);
    }
  };

  return (
    <div className="flex gap-2 mx-2 mt-[-155px]">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-white border-r border-gray-200 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="mb-4">
          <h4 className="text-md font-medium mb-2">Airlines</h4>
          <ul>
            {airlines.map((airline, index) => (
              <li key={index} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                <span>{airline}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-medium mb-2">Price</h4>
          <div className="w-full mb-2">
            <Slider value={priceRange} onChange={setPriceRange} color="blue" />
          </div>
          <div className="flex justify-between text-sm mt-5">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
        <div>
          <h4 className="text-md font-medium">Duration</h4>
          <div className="w-full mb-2">
            <Slider value={durationRange} onChange={setDurationRange} color="blue"/>
          </div>
          <div className="flex justify-between text-sm mt-5">
            <span>{Math.floor(durationRange[0] / 60)}h {durationRange[0] % 60}m</span>
            <span>{Math.floor(durationRange[1] / 60)}h {durationRange[1] % 60}m</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-3/4 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Flights from {starting} to {destination}</h2>
        <div className="grid grid-cols-1 gap-6">
          {flights.map(flight => (
            <div key={flight.flight_id} className="bg-white rounded-lg shadow-lg p-4 flex justify-between border border-gray-200">
              <div className="flex items-center">
                <img src={flight.airlineLogo} alt="Airline Logo" className="h-12 mr-4 w-20" />
                <div>
                  <div className="text-xl font-semibold">{flight.airline}</div>
                  <div className="text-sm text-gray-600">{flight.starting }<IoIosArrowRoundForward className='inline text-lg font-bold'/>{ flight.destination}</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <div className="text-lg font-medium text-gray-700">Departure</div>
                  <div>{flight.departure_time}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-medium text-gray-700">Arrival</div>
                  <div>{flight.arrival_time}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-medium text-gray-700">Duration</div>
                  <div>{flight.duration}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-green-500 font-bold text-lg">₹{flight.price}</span>
                <p className='mb-2 text-gray-600 text-sm'>per adult</p>
                <div className="relative group">
                  <button className="bg-[#f4978e] text-white px-4 py-2 rounded hover:bg-[#DB877F] transition duration-200">
                    Add to Trip
                  </button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 z-10 w-48">
                    <ul className="list-none p-2 m-0">
                      {tripNames.map(trip => (
                        <li key={trip.tripId} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleAddToTrip(flight.flight_id, trip.tripId)}>
                          {trip.tripName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
