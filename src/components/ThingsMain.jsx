import {  useState } from 'react';
import ItemCards from "../components/ItemCards"
import { attractions } from "../assets/utilities/cardList";
import { IoSearchSharp } from "react-icons/io5"
import things from '/public/thingsToDo.jpg'
import AttractionSearch from './AttractionsSearch';

export default function ThingsMain() {
  const [destination, setDestination] = useState();
  const [showAttractionSearch, setShowAttractionSearch] = useState(false);


  const handleFindAttraction = () => {
    setShowAttractionSearch(true);
  };


  const handleDestination = (e) => {
    setDestination( e.target.value );
  };

  return (

    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={things}
          className="absolute top-0 left-0 w-full h-3/4 object-cover opacity-90"
        />
        <div className="relative z-10 flex flex-col items-center mt-48 w-full h-full text-[#ffffff]">
          <h1 className="text-4xl font-bold mb-4">Uncover Hidden Travel Gems</h1>
          <div className="relative bg-gray-100 rounded-full shadow-lg flex items-center space-x-2 w-7/12 h-12">
            <IoSearchSharp className='absolute text-gray-500 text-2xl left-2'/>
            <input
              type="text"
              placeholder="Search by Destination, attraction or activity "
              className="px-7 py-2 bg-gray-100 text-gray-800 border-none focus:outline-none rounded-full w-full h-full"
              onChange={(e) => handleDestination(e)}
            />
              <button className='absolute text-[#202020] font-semibold right-2 bg-[#ff9500] rounded-full p-2 w-24' onClick={handleFindAttraction}>Search</button>
            </div>
        </div>
      </div>

      {!showAttractionSearch && <ItemCards list={attractions} heading="Top experiences worldwide" ></ItemCards>}
      {showAttractionSearch && <AttractionSearch destination={destination}/>}
    </>
  );
}