import Navbar from '../components/Navbar';
import Main2 from '../components/HotelMain';
import Cards from "../components/Cards"
function ThingsToDo() {

    return (
        <div className="relative bg-[#edede9] h-">
            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            <Main2/>
            <Cards/>
       
      </div>
    );
}

export default ThingsToDo;