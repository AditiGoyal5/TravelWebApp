import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Slider } from "@material-tailwind/react";
import { trainsList , trainsClassFilters } from '../assets/utilities/cardList';

const TrainSearch = ({ starting, destination }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/train/${starting}/${destination}`);
        setTrains(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    if (starting && destination) {
      fetchTrains();
    }
  }, [starting, destination]); 

  return (
    <div className="flex gap-4 mx-3 mt-[-150px] w-full ">
      <div className="w-1/4 p-4 bg-white border-r border-gray-200 rounded-xl h-fit">
        <h3 className="text-lg font-semibold mb-4 text-gray-600">Filters</h3>
        <div className="mb-4 border-bottom">
          <h4 className="text-md font-medium mb-2 text-gray-600">Trains</h4>
          <ul>
            {trainsList.map((train, index) => (
              <li key={index} className="flex items-center mb-1 text-gray-600">
                <input type="checkbox" className="mr-2" />
                <span>{train}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4 border-bottom">
          <h4 className="text-md font-medium mb-2 text-gray-600">Journey Class Filters</h4>
          <ul>
            {trainsClassFilters.map((tf, index) => (
              <li key={index} className="flex items-center mb-1 text-gray-600">
                <input type="checkbox" className="mr-2" />
                <span>{tf}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-medium mb-2 text-gray-600">Price</h4>
          <div className="w-full mb-2">
            <Slider defaultValue={50}  />
          </div>
          <div className="flex justify-between text-sm mt-5 text-[#000000]">
            <span> ₹100</span>
            <span>₹6000</span>
          </div>
        </div>
        <div>
          <h4 className="text-md font-medium text-gray-600">Duration</h4>
          <div className="w-full mb-2">
            <Slider defaultValue={50} />
          </div>
          <div className="flex justify-between text-sm mt-5 text-[#000000]">
            <span> 1h </span>
            <span>27h 30m</span>
          </div>
        </div>
      </div>
      <div className="w-3/4 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-600 tracking-wider">Trains from {starting} to {destination}</h2>
        <div className="grid grid-cols-1 gap-6 w-full">
          {trains.map(train => (
            <div key={train.train_id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between border border-gray-200">
              <div className='flex justify-between items-center'>
                <div className="flex items-center">
                  <div>
                    <div className="text-xl font-semibold text-[#000000] ">{train.name}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-10">
                  <div className="text-right">
                    <div className='text-gray-600'>{train.departure_time}, Wed</div>
                    <div className="text-xs text-gray-600">{train.startingStationName}</div>
                  </div>
                  <div className="text-right flex flex-col items-center">
                    <div className='text-gray-600'>{train.duration}</div>
                    <IoIosArrowRoundForward className='text-gray-600 w-10'/>
                  </div>
                  <div className="text-right">
                    <div className='text-gray-600'>{train.arrival_time}, Thu</div>
                    <div className="text-xs text-gray-600">{train.destinationStationName}</div>
                  </div>
                </div>
              </div>
              <div className="flex mt-8 gap-2">
                {train.trainClasses.map((trainClass, index) => (
                  <div key={index} className="mb-2 border p-3 h-36 w-1/4 shadow-md cursor-pointer">
                    <div className='flex justify-between items-center'>
                        <span className="text-lg font-bold text-[#000000]">{trainClass.className}</span>
                        <div className="text-[#000000] font-semibold text-lg">₹{trainClass.price}</div>
                    </div>
                    <p className='text-green-600 text-sm'>AVAILABLE {trainClass.seatsAvailable}</p>
                    <p className='text-gray-600 text-sm mt-3'>Free Cancellation</p>
                    <p className='text-gray-400 text-xs'>Updated 2hrs ago</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainSearch;
