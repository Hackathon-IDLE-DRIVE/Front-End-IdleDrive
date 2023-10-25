import React from 'react'

export default function RecentCard() {
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title uppercase font-bold">Order ID : 
                <div className='text-xl font-bold text-blue-700'>#624235741</div>
            </h2>

            <div className='flex justify-between mt-3'>
                <img className='w-32 h-28 bg-cover bg-center rounded-xl' src='https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2021-Avida-Busselton-Motorhome-white-1001x565-%281%29.jpg' alt='motorhome' />
                
                <div className='flex-col'>
                    <p className='font-bold text-xl'>Rolling Family Plus</p>
                    <p className='font-bold text-sm'>DII 4444 กรุงเทพมหานคร</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mt-3 w-full h-6 bg-blue-800 text-white duration-300
                        hover:bg-sky-500 hover:cursor-pointer hover:duration-300
                        ">PENDING</button>
                    </div>
                </div>
            </div>
            <div className='w-full border-b my-1.5'/>
            <div className='flex justify-start'>
                <div className='flex'>
                    <img className='h-12 w-12 rounded mr-2 ' src='https://img.freepik.com/premium-vector/car-logo-vector_25327-40.jpg' alt='idle'/>
                    
                    <div className='flex-col'>
                        <p className='text-sm font-bold text-black'>IDLEDrive</p>
                        <div className='text-sm font-bold'>⭐ 
                            <span className='text-sm text-gray-700 font-bold text-right mx-1'>4.3</span>
                            <span className='font-semibold text-gray-500'>( 12 review )</span>
                        </div>
                    </div>
                </div> 
            </div>
          </div>
        </div>
    </>
  )
}
