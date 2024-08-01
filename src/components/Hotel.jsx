import { useEffect, useState } from 'react';
import axios from 'axios';
import { Slider } from "@material-tailwind/react";
import { hotelChains , ammenities } from '../assets/utilities/cardList';
import img from "/public/luxuryHotel.jpg"
import { LuCheck } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { useTripNames } from "../assets/utilities/cardList.js";

function Hotel({destination}) {
    const [data, setData] = useState(null);
    const tripNames = useTripNames();

    const handleAddToTrip = async (accommodationId, tripId) => {
        try {
          const response = await axios.put(`http://localhost:8080/trips/${tripId}/add-accommodation/${accommodationId}` ,{}, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });


          if (response.status === 200) {
            alert('Accommodation added to trip successfully!');
          }
        } catch (error) {
          console.error('Error adding flight to trip:', error);
        }
      };

    useEffect(() => {
        axios.get(`http://localhost:8080/accommodation/${destination}` , {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className="flex gap-4 mx-3 mt-[-150px] w-full ">
                <div className="w-1/4 p-4 bg-white border-r border-gray-200 rounded-xl h-fit">
                    <h3 className="text-lg font-semibold mb-4 text-gray-600">Filters</h3>
                    <div className="mb-4 border-bottom">
                    <h4 className="text-md font-medium mb-2 text-gray-600">Chains</h4>
                    <ul>
                        {hotelChains.map((h, index) => (
                        <li key={index} className="flex items-center mb-1 text-gray-600">
                            <input type="checkbox" className="mr-2" />
                            <span>{h}</span>
                        </li>
                        ))}
                    </ul>
                    </div>

                    <div className="mb-4 border-bottom">
                        <h4 className="text-md font-medium mb-2 text-gray-600">Amenities</h4>
                        <ul>
                            {ammenities.map((tf, index) => (
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
                <h1 className="text-2xl font-semibold mb-4 text-[#fffff] tracking-wider">Showing Properties in {destination}</h1>

                {data ? (
                    <div className='grid grid-cols-1 gap-6'>
                        {data.map((accommodation, index) => (
                            <div key={index} className='flex bg-white rounded-lg shadow-lg p-4 flex  border border-gray-200'>
                                <div className='flex gap-4'>
                                    <img src={img} alt="" className='w-1/4 rounded-lg'/>
                                    <div className='flex flex-col'>
                                        <h2 className='text-xl font-bold'>{accommodation.name} <FaStar className='inline text-sm ml-2'/> <FaStar className='inline text-sm'/><FaStar className='inline text-sm'/><FaStar className='inline text-sm'/><FaStar className='inline text-sm' /></h2>
                                        <p className='text-[#bc6c25] font-semibold'>{accommodation.address}</p>
                                        <p className='text-[#588157] mt-3'><LuCheck className='inline mr-1'/>Free cancellation till 24hrs before check in</p>
                                        {accommodation.mealIncluded && <p className='text-[#588157]'><LuCheck className='inline mr-1'/>Breakfast included</p>}
                                        <div className="relative group">
                                            <button className='border mt-4 bg-[#184e77] text-white w-1/2 py-1'>Add to Trip</button>
                                            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 z-10 w-48">
                                                <ul className="list-none p-2 m-0">
                                                {tripNames.map(trip => (
                                                    <li key={trip.tripId} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleAddToTrip(accommodation.accommodationId, trip.tripId)}>
                                                    {trip.tripName}
                                                    </li>
                                                ))}
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='w-1/4'>
                                    <div className='flex gap-2'>
                                        <p className='font-bold text-[#184e77] text-lg'>{accommodation.remark}</p>
                                        <p className='bg-[#184e77] text-[#ffffff] font-semibold p-1 rounded' >{accommodation.rating}</p>
                                    </div>
                                    
                                    <h1 className='text-[#000000] font-bold text-lg mt-2'>₹{accommodation.pricePerNight}</h1>
                                    <p className='text-sm text-gray-500'>+₹2,880 taxes and fees</p>
                                    <p className='text-sm text-gray-500'>per night</p>
                                </div>
                                
                                <hr />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            </div>
        </>
    );
}

export default Hotel;
