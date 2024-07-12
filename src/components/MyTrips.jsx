import img from "/public/girl.png";

import place from "/public/moritious.avif";

export default function MyTrips() {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="relative">
          <img src={img} alt="img" className=" w-full h-full  absolute mb-[0px]" />
        </div>
        <div className="col-span-2 mt-40 ml-44">
          <h1 className="text-2xl font-bold mb-8">Welcome Aditi!!</h1>
          <div>
            <div className="flex gap-4 mb-4">
              <div className="w-24 h-24">
                <img src={place} alt="place" className="w-full h-full object-cover rounded-md" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Trip Title</h1>
                <h4 className="text-sm">Location: Hyderabad</h4>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, qui.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 h-24">
                <img src={place} alt="place" className="w-full h-full object-cover rounded-md" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Trip Title</h1>
                <h4 className="text-sm">Location: Hyderabad</h4>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, qui.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
