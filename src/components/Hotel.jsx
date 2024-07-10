// src/Hotel.js
import { useEffect, useState } from 'react';
import axios from 'axios';


function Hotel() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/accommodation')
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            
            <div className="hotel-content">
                <h1>Accommodation Details</h1>

                {data ? (
                    <div>
                        {data.map((accommodation, index) => (
                            <div key={index}>
                                <p>Name: {accommodation.name}</p>
                                <p>Type: {accommodation.type}</p>
                                <p>Address: {accommodation.address}</p>
                                <p>Price per night: {accommodation.pricePerNight}</p>
                                <p>Meal Included: {accommodation.mealIncluded ? 'Yes' : 'No'}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default Hotel;
