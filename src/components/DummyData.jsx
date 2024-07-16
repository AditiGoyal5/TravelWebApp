import { CiShoppingTag } from "react-icons/ci";
import { MdOutlineDashboardCustomize, MdContentPasteSearch } from "react-icons/md";

export default function DummyData() {
  return (
    <>
      <div className="mt-[-150px] mx-12">
        <div className="flex gap-4 py-4">
          <div className="w-1/4 text-center">
            <div className="bg-[#f4978e] p-3.5 rounded-full inline-block">
              <CiShoppingTag size={35} color="white" />
            </div>
            <h2 className="text-[#000000] font-semibold mt-4 text-lg">Get the best deals</h2>
            <p>Compare flight prices from hundreds of airlines and travel sites in one place.</p>
          </div>
          <div className="w-1/4 text-center">
            <div className="bg-[#f4978e] p-3.5 rounded-full inline-block">
              <MdContentPasteSearch size={35} color="white" />
            </div>
            <h2 className="text-[#000000] font-semibold mt-4 text-lg">Search without worry</h2>
            <p>We're completely free to use—no hidden charges or fees on flight prices at all.</p>
          </div>
          <div className="w-1/4 text-center">
            <div className="bg-[#f4978e] p-3.5 rounded-full inline-block">
              <MdOutlineDashboardCustomize size={35} color="white" />
            </div>
            <h2 className="text-[#000000] font-semibold mt-4 text-lg">Customise your results</h2>
            <p>Filter for your airlines, flight times, desired price, and more.</p>
          </div>
          <div className="w-1/4 text-center">
            <div className="bg-[#f4978e] p-3.5 rounded-full inline-block">
              <MdOutlineDashboardCustomize size={35} color="white" />
            </div>
            <h2 className="text-[#000000] font-semibold mt-4 text-lg">Customise your results</h2>
            <p>Filter for your airlines, flight times, desired price, and more.</p>
          </div>
        </div>

        {/* <div className="flex gap-5 mt-8 mb-5">
          <div className="flex bg-white p-4 rounded-lg shadow-md w-1/3 border">
            <div className="mr-4">
              <img src="https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png" className="w-12 h-12" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-800">Planning to book an international flight?</p>
              <a href="#" className="text-blue-600">Check Travel Guidelines</a>
            </div>
          </div>

          <div className="flex bg-white p-4 rounded-lg shadow-md w-1/3 border">
            <div className="mr-4">
              <img src="https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png" className="w-12 h-12" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-800">We are now available in हिंदी!</p>
              <a href="#" className="text-blue-600">Change Language</a>
            </div>
          </div>

          <div className="flex bg-white p-4 rounded-lg shadow-md w-1/3 border">
            <div className="mr-4">
              <img src="https://promos.makemytrip.com/notification/xhdpi/web-check-in-116x116-23062020.png" className="w-12 h-12" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-800">Complete your web check-in on Trippy in easy steps</p>
              <a href="#" className="text-blue-600">Know More</a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
