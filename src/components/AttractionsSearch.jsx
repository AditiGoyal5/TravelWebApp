import axios from 'axios';
import { useState, useEffect } from 'react';
import { useTripNames } from "../assets/utilities/cardList.js";

export default function AttractionSearch({destination}){

    const tripNames = useTripNames();

    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        const fetchAttractions = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/attraction/${destination}` , {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });
            setAttractions(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching trains:', error);
          }
        };
    
        if (destination) {
          fetchAttractions();
        }
      }, [destination]); 

      // const handleAddToTrip = async (attractionId, tripId) => {
      //   try {
      //     await axios.put(`http://localhost:8080/trips/${tripId}/add-attraction/${attractionId}` , {}, {
      //       headers: {
      //         Authorization: `Bearer ${localStorage.getItem('token')}`
      //       }
      //     });
      //     alert('Attraction added to trip successfully!');
      //   } catch (error) {
      //     console.error('Error adding flight to trip:', error);
      //   }
      // };

      const handleAddToTrip = async (attractionId, tripId) => {
        try {
          const response = await axios.put(`http://localhost:8080/trips/${tripId}/add-attraction/${attractionId}`, {}, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          if (response.status === 200) {
            alert('Attraction added to trip successfully!');
          }
        } catch (error) {
          console.error('Error adding attraction to trip:', error.response ? error.response.data : error.message);
        }
      };

    return(

        <div className='flex flex-col  mt-[-150px] mx-12 p-4 mb-4'>
            <h1 className='font-bold text-[#000000] text-3xl'>Ways to tour {destination}</h1>
            <p className='mt-2 text-lg'>Book these experiences for a close-up look at {destination}.</p>
            <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {attractions.map((attraction) => (
                    <div key={attraction.id} className="border rounded-lg shadow-lg bg-[#e0e1dd] mt-5">
                        <img src={attraction.imgURL} alt={attraction.name} className="w-full h-48 " />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{attraction.attractionName}</h2>
                            <p className="text-gray-700">{attraction.category}</p>
                            <p className="text-gray-500 mb-4">{attraction.reviews} reviews</p>
                            {attraction.entryFee === 0 ? (
                                <p className="text-gray-900 font-bold">Free</p>
                            ) : (
                                <p className="text-gray-900 font-bold">from ₹{attraction.entryFee}</p>
                            )}

                <div className="relative group">
                    <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">
                         Reserve
                    </button>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 z-15 w-48">
                        <ul className="list-none p-2 m-0">
                            {tripNames.map(trip => (
                            <li
                                key={trip.tripId}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleAddToTrip(attraction.attraction_id, trip.tripId)}
                            >
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
   
      
    )
}