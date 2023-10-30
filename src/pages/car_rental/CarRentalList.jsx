import React from 'react'
import Back_myCarList from '../../components/Card/myCarList_BackOffice'
import { useNavigate } from 'react-router-dom'

export const CarRentalList = () => {
  const navigate = useNavigate();

  return (
    <>
  
      <div className='flex justify-around my-10'>
        <div></div>
        <div className='text-center font-bold text-4xl text-blue-700 '>My Vehicle</div>
        <button className='btn h-14 w-32 rounded-2xl shadow-lg drop-shadow-lg bg-blue-800 border-gray-400 text-white text-lg font-bold hover:bg-blue-700 hover:border-gray-400'
        onClick={()=>navigate('/merchant/addcar')}> + เพิ่มรถ </button>
      </div>

      <Back_myCarList status='activate'/>
      <Back_myCarList status='idle'/>
    </>
  )
}
