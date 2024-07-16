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