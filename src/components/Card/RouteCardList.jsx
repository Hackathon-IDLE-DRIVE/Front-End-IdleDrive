import React from 'react'
import { useNavigate } from 'react-router-dom'

const RouteCardList = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className='container w-64 shadow-lg rounded-md mt-3 mr-6
        hover:cursor-pointer hover:shadow-xl'
        onClick={()=>navigate('/route/1')}>
            <div>
                <img src='https://i.ytimg.com/vi/Xk21728RrtY/maxresdefault.jpg'></img>
            </div>
            <div className='flex flex-col p-4'>
                <span className='text-primary font-bold text-lg'>เมืองเชียงใหม่ - ลานกางเต็นท์ป้าต้อย</span>
                <span className='text-sm font-bold'>ระยะเวลา : 2 วัน</span>
                <span className='text-sm font-bold'>ระยะทาง : ~90 KM</span>
                <span className='text-sm font-bold text-right'>4.2/5 ⭐</span>
            </div>
        </div>
    </>
  )
}

export default RouteCardList