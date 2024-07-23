import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import axios from 'axios';
import TripSearch from "../components/MyTripSeach"; 

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

  const handleCreateTripClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tripData = {
      tripName,
      description,
      startDate,
      endDate,
      destination,
      startPost,
      numberOfPeople
    };

    try {
      const response = await axios.post('http://localhost:8080/trips', tripData);
      console.log(response.data);
      // Handle success notification or update the UI here
    } catch (error) {
      console.error("There was an error adding the trip!", error);
    }

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
    
  };

  return (
    <div className="mx-20 mt-5 mb-2">
      <div>
        <div className="flex justify-between mb-5">
          <h1 className="text-2xl font-bold">My Trips</h1>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleCreateTripClick}
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
                      <label className="block text-gray-700 font-bold mb-2">
                        Trip Name
                      </label>
                      <input
                        type="text"
                        className="border rounded-lg w-full p-2"
                        value={tripName}
                        onChange={(e) => setTripName(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Trip Description
                      </label>
                      <textarea
                        className="border rounded-lg w-full p-2"
                        value={description}
                        onChange={(e) => setTripDescription(e.target.value)}
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
                      <label className="block text-gray-700 font-bold mb-2">
                        Origin
                      </label>
                      <input
                        type="text"
                        className="border rounded-lg w-full p-2"
                        value={startPost}
                        onChange={(e) => setStartPost(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Destination
                      </label>
                      <input
                        type="text"
                        className="border rounded-lg w-full p-2"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
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
      </div>
    </div>
  );
}
