import img from "/public/girl.png";

import place from "/public/moritious.avif";

export default function MyTrips() {
  return (
    <div className="mt-[200px]">
      <form action="">
        <input type="text" placeholder="Trip title"/>
        <input type="text" placeholder="Trip Desc"/>
        <input type="date" placeholder="Start date"/>
        <input type="date" placeholder="End date"/>
        <input type="text" placeholder="Destination"/>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}
