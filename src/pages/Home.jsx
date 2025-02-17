import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Card from "../components/Cards"
import Travel from "../components/Travel"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="relative bg-[#fffff] ">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Main />
     <Card/>
      <Travel/>
      <Footer></Footer>
    </div>
  );
}