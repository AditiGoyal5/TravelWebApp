import axios from 'axios';
import { useState, useEffect } from 'react';

export default function AttractionSearch({destination}){

    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        const fetchAttractions = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/attraction/${destination}`);
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

    return(

        <div className='flex flex-col  mt-[-150px] mx-12 p-4 mb-4'>
            <h1 className='font-bold text-[#000000] text-3xl'>Ways to tour {destination}</h1>
            <p className='mt-2 text-lg'>Book these experiences for a close-up look at {destination}.</p>
            <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {attractions.map((attraction) => (
                    <div key={attraction.id} className="border rounded-lg overflow-hidden shadow-lg bg-[#e0e1dd] mt-5">
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
                            <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">
                                Reserve
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}