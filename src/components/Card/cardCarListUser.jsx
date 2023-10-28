import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CarlistCard({ carData, queryParams }) {
    const { pickupDate, returnDate, location } = queryParams;
    const { car_id, model, make, rentalRate, description, CarImages } = carData;
    const navigate = useNavigate();

  return (
    <>
        <div className="card w-96 bg-base-100 shadow-lg mt-5 z-0
        hover:cursor-pointer hover:shadow-xl"
        onClick={()=>navigate(`/motorhome/${car_id}?pick-up=${pickupDate}&return=${returnDate}&location=${location}`)}>
            <figure><img className='h-[255px]' src={`http://localhost:3000/api/v1/idledrive/images/${CarImages[0].imageURL}`} alt="Car"/></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{`${make} ${model}`}</h2>
                <p className='text-gray-400 line-clamp-1'>{description}</p>

                <div className='flex justify-between mt-5'>
                    <div className='text-left flex'>
                        <img className='h-6 w-6 rounded mr-2 ' src='https://img.freepik.com/premium-vector/car-logo-vector_25327-40.jpg' alt='idle'/>
                        <span className='text-sm font-bold text-gray-400'>IDLEDrive</span>
                    </div>
    
                    <div className='text-sm font-bold text-right'>⭐ 
                        <span className='text-sm text-gray-700 font-bold text-right mx-1'>4.3</span>
                        <span className='font-semibold text-gray-500'>( 12 review )</span>
                    </div>
                </div>
                <div className='w-full border-b my-1.5'></div>
                <div className="card-actions justify-end">
                    <p className="text-2xl font-bold text-right">{rentalRate}
                        <span className="text-2xl text-gray-500 font-bold text-right"> ฿</span>
                        <span className='text-xs font-bold text-gray-500 pt-3'>/Day</span>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
