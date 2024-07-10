import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Train from './pages/Train';
import Flight from './pages/Flight';
import Hotel from './pages/Hotel'
import './App.css';

function App() {
  return (
   
      <>
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/hotel" element={<Hotel/>}/>
          <Route path="/flight" element={<Flight/>}/>
          <Route path="/train" element={<Train/>}/>
          {/* <Route path="/" element={<Home/>}/> */}
        </Routes>
       
        
      </>
  );
}

export default App;
