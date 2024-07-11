import Navbar from '../components/Navbar';
import Main2 from '../components/ThingsMain';
import ItemCards from "../components/ItemCards"
import { attractions } from "../assets/utilities/cardList";
function ThingsToDo() {

    return (
        <div className="relative bg-[#edede9] pb-5">
            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            <Main2/>
            <ItemCards list={attractions} heading="Top experiences worldwide"></ItemCards>
       
      </div>
    );
}

export default ThingsToDo;