import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Card from "../components/Cards"

export default function Home() {
  return (
    <div className="relative bg-[#edede9] pb-4">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Main />
     <Card/>
    </div>
  );
}