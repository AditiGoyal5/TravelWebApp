import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
// import Card from "../components/Cards"
// import Footer from "../components/Footer"

export default function ProfilePage() {
  return (
    <div className="relative bg-[#fffff] ">
      {/* <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div> */}
      <Profile></Profile>
    </div>
  );
}