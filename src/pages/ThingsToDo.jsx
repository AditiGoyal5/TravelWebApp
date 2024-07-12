import Navbar from '../components/Navbar';
import Main2 from '../components/ThingsMain';
import ItemCards from "../components/ItemCards"
import { attractions } from "../assets/utilities/cardList";
import Footer from "../components/Footer"
function ThingsToDo() {

    return (
        <div className="relative bg-[#edede9]">
            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            <Main2/>
            <ItemCards list={attractions} heading="Top experiences worldwide" ></ItemCards>
            <Footer></Footer>
      </div>
    );
}

export default ThingsToDo;