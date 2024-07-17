import Navbar from '../components/Navbar';
import Main2 from '../components/ThingsMain';
import Footer from "../components/Footer"
function ThingsToDo() {

    return (
        <div className="relative bg-[#ffffff]">
            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            <Main2/>
            <Footer></Footer>
      </div>
    );
}

export default ThingsToDo;