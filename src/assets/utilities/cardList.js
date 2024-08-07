import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import mountain from "/public/mountain.jpg"
import itlay from "/public/itlay.jpg"
import paris from "/public/paris.avif"
import dubai from "/public/dubai.jpg"
import maldives from "/public/maldives.jpg"
import london from "/public/london.avif"
import river_rafting from "/public/river-rafting.jpg"
import skydive from "/public/skydive.jpg"
import surfing from "/public/surfing.jpg"
import trekking from "/public/trekking.jpg"
import hotel1 from "/public/dubaiHotel.jpeg"
import hotel2 from "/public/jaipurHotel.jpg"
import hotel3 from "/public/franceHotel.jpg"
import hotel4 from "/public/londonHotel.jpg"

export const location =[{img:itlay , name:"Itlay" , path:"/"} , 
                        {img: paris, name:"Paris" , path:"/"} , 
                        {img:maldives , name:"Maldives" , path:"/"} , 
                        {img:dubai , name:"Dubai" , path:"/"}, 
                        {img:mountain , name:"Switzerland" , path:"/"},
                        {img:london , name:"London" , path:"/"}
                       ]

export const attractions =[{img:skydive , desc:"Skydive over the Swiss Alps in Interlaken." , price:"from $100 per adult" , path:"/"} , 
                       {img: river_rafting, desc:"Navigate the rapids of the Grand Canyon" , price:"from $100 per adult" , path:"/"} , 
                       {img:surfing , desc:"Surf the legendary waves of Hawaii." , price:"from $100 per adult" ,path:"/"} , 
                       {img:trekking , desc:"Trek through breathtaking landscapes" , price:"from $100 per adult" , path:"/"}, 
                      ]
export const hotels =[{img:hotel1 , desc:"JW Marriott Marquis Hotel" , price:"from $100 per adult" , path:"/"} , 
                      {img:hotel2, desc:"Rambagh Palace" , price:"from $100 per adult" , path:"/"} , 
                      {img:hotel3, desc:"Hotel Colline de France" , price:"from $100 per adult" ,path:"/"} , 
                      {img:hotel4 , desc:"West Hollywood" , price:"from $100 per adult" , path:"/"}, 
                     ]

export const airlines = ["IndiGo"  , "Akasa Air" , "Air India" , "AirAsia" , "Vistara" , "SpiceJet"]
export const trainsList = ["Udyan Express"  , "Ltt Cbe Express" , "Dadar Ten Exp" , "Ju Sbc Exp" ]
export const trainsClassFilters = ["1st Class Ac"  , "2 Tier Ac" , "3 Tier AC" , "Sleeper"]
export const hotelChains = ["Fab Hotels"  , "Oyo Hotels" , "Treebo Hotels" , "The Oberoi", "Taj",  "Airbnb" ,"Hostels"]
export const ammenities = ["Wifi"  , "Spa" , "Swimming Pool" , "Parking", "Bar",  "Balcony/Terrace"]


const getUsernameFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.log(null);
      return null; // No token found
    }
    
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      console.log(decodedToken.sub)
      return decodedToken.sub; 
    } catch (error) {
      console.error('Invalid token:', error);
      return null; // Token decoding failed
    }
  };

  export const username = getUsernameFromToken();

  export let user2=null;

  const getUserByUsername = async (username) => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${username}` ,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      } );
      // console.log(response);
      if (response.status === 200) {
        user2=response.data;
        console.log(response.data);
      }
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error; // Re-throw the error for further handling if needed
    }
  };

  // Exporting the userId as a promise
export const user1 = getUserByUsername(username);
console.log(user1);
  

  
export const fetchTripNamesAndId = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/trips/trip-name-id/${user2.userId}` , {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the trip names!", error);
        return [];
    }
};

// Hook to use trip names
export const useTripNames = () => {
    const [tripNames, setTripNames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTripNamesAndId();
            setTripNames(data);
        };
        fetchData();
    }, []);

    return tripNames;
};


export const fetchAllTrips = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/trips/byId/${user2.userId}` , {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the trips!", error);
        return [];
    }
};
export const useAllTrips = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAllTrips();
            setTrips(data);
        };
        fetchData();
    }, []);

    return trips;
};
