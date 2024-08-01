import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Train from './pages/Train';
import Flight from './pages/Flight';
import Hotel from './pages/Hotel'
import ThingsToDo from './pages/ThingsToDo';
import MyTrips from './pages/MyTrips';
import Profile from './pages/Profile';
import Signup from './pages/Signup'
import Login from './pages/Login'
import './App.css';

function App() {
  return (
   
      <>
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/hotel" element={<Hotel/>}/>
          <Route path="/flight" element={<Flight/>}/>
          <Route path="/train" element={<Train/>}/>
          <Route path="/things-to-do" element={<ThingsToDo/>}/>
          <Route path="/mytrips" element={<MyTrips/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
       
        
      </>
  );
}

export default App;
