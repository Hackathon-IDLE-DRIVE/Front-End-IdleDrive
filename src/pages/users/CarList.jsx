import React from 'react'
import { useSearchParams } from 'react-router-dom';

export const CarList = () => {
  const [searchParams] = useSearchParams();
  const pickupDate = searchParams.get('pick-up');
  const returnDate = searchParams.get('return');


  return (
    <>
    <div>CarList</div>
    </>
  )
}
