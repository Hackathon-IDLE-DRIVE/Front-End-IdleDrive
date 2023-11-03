import React from 'react'

export default function EventListCard() {
  return (
    <>
            <div className="card w-72 bg-base-100 shadow-xl mt-10">
        <figure><img src="https://www.sail.ca/blog/app/uploads/2021/09/fall-camping-tent-1200x628px.jpg" alt="view" /></figure>
        <div className="card-body">
            <h2 className="card-title text-2xl font-semibold">แคมป์ริมแม่น้ำ</h2>

            <div className='flex'>
                <p className='text-sm font-semibold'>18 ต.ค. 2023
                    <span className='text-sm font-semibold ml-2'>18:30</span>
                    <span className='text-sm font-semibold'> น.</span>
                </p>
            </div>

            <div className='Location flex mt-5 mb-3'>
                <div className='text-xl'>🗺️</div>
                <p className='font-medium pt-1 text-sm'>แม่กวง จ.เชียงใหม่</p>

            </div>

            <div className="card-actions justify-center">
                <button className="btn btn-primary bg-blue-800 text-white w-40 h-7 rounded-3xl font-bold text-xl duration-300
                hover:bg-sky-500 hover:cursor-pointer hover:duration-300
                ">เพิ่มเติม</button>
            </div>
        </div>
        </div>
    </>
  )
}
