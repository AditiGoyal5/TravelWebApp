import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TripSearch({ tripName }) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (tripName) {
      const fetchTrips = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:8080/trips/${tripName}`);
          setTrips(response.data);
          console.log(response.data);
          setError(null);
        } catch (err) {
          setError('Failed to fetch trips.');
          setTrips([]);
        }
        setLoading(false);
      };

      fetchTrips();
    }
  }, [tripName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold">Search Results</h2>
      {trips.length === 0 ? (
        <p>No trips found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trips.map((trip) => (
            <div key={trip.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{trip.tripName}</h3>
              <p>{trip.description}</p>
              <p><strong>Destination:</strong> {trip.destination.name}</p>
              <p><strong>Start Date:</strong> {trip.start_date}</p>
              <p><strong>End Date:</strong> {trip.end_date}</p>
              <p><strong>Number of People:</strong> {trip.number_of_people}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
