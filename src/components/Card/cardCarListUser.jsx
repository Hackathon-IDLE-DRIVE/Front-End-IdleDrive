import React from 'react'

export default function CarlistCard() {
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://m.carryboycaravan.com/motor-home/rod-baan/motorhome-for-sale-rod-baan-recreational-vehicle-campers-for-pickup-truck-toyota-hilux-revo-4x4-4wd-camping-trips-holiday-travel-tours-rv-carryboy-1.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">Toyota CarryBoy</h2>
                <p className='text-gray-400'>เครื่องยนต์ 2500 cc ดีเซล B7 ขับเคลื่อน 4 ล้อ </p>

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
                    <p className="text-2xl font-bold text-right">9,200
                        <span className="text-2xl text-gray-500 font-bold text-right"> ฿</span>
                        <span className='text-xs font-bold text-gray-500 pt-3'>/Day</span>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
