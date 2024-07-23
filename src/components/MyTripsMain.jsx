import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function MyTrips() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tripName, setTripName] = useState("");
  const [tripDescription, setTripDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [destination, setDestination] = useState("");

  const handleCreateTripClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log({ tripName, tripDescription, startDate, endDate, destination });
    setIsModalOpen(false);
    
    setTripName("");
    setTripDescription("");
    setStartDate("");
    setEndDate("");
    setDestination("");
    setIsModalOpen(false);
  };

  return (
    <div className="mx-20 mt-5 mb-2">
      <div>
        <div className="flex justify-between mb-5">
          <h1 className="text-2xl font-bold">My Trips</h1>
          <button
            className="bg-blue-500 text-[#ffffff] p-2 rounded"
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
          <div className="relative">
            <IoMdSearch className="absolute top-3 text-lg text-gray-500 left-2" />
            <input
              type="text"
              placeholder="Search trip"
              className="border rounded-xl pl-7 py-2"
            />
          </div>
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
                    value={tripDescription}
                    onChange={(e) => setTripDescription(e.target.value)}
                  ></textarea>
                </div>
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
                    Destination
                  </label>
                  <input
                    type="text"
                    className="border rounded-lg w-full p-2"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
