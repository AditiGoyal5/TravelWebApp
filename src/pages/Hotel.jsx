// src/Hotel.js
import Navbar from '../components/Navbar';
import Main2 from '../components/HotelMain';

import Footer from "../components/Footer"
function Hotel() {

    return (
        <div className="relative bg-[#edede9]">
            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            <Main2/>
            
            <Footer></Footer>
       
      </div>
    );
}

export default Hotel;
