import React from 'react'

export default function CarlistCard() {
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://m.carryboycaravan.com/motor-home/rod-baan/motorhome-for-sale-rod-baan-recreational-vehicle-campers-for-pickup-truck-toyota-hilux-revo-4x4-4wd-camping-trips-holiday-travel-tours-rv-carryboy-1.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">Toyota CarryBoy</h2>
                <div className='text-sm font-bold'>4.3
                    <span> ⭐</span>
                    <span className='font-semibold text-gray-500'>( 12 review )</span>
                </div>
                <div className="card-actions justify-end">
                    <p className="text-2xl font-bold text-right">9,200 <span className="text-2xl font-bold text-right">BAHT</span></p>
                </div>
            </div>
        </div>
    </>
  )
}
