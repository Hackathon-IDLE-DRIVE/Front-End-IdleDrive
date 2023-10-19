import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    // You can dynamically generate query parameters based on your logic
    const pickUp = '2023-10-05';
    const checkout = '2023-12-15';

    // Use the `history` object to navigate to the booking route with query parameters
    navigate(`/booking?pick-up=${checkin}&return=${checkout}`);
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={handleBookingClick}></button>
    </div>
  )
}
