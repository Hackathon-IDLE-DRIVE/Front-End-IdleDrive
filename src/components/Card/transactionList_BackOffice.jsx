import React from 'react'

export default function Transaction_BackOff() {
  return (
      <>
        <div className='my-10 w-full h-36 px-10 py-5 shadow-xl drop-shadow-xl flex justify-between rounded-xl border-[#D9D9D9] border-2'>
            <div className='flex items-center'>
                <img className='h-24 w-24 rounded-full' src='https://www.rsmotorhomes.com/wp-content/uploads/2022/10/Image_1.png' alt='carPic'/>
                <div className='flex flex-col justify-center ml-5'>
                    <div className='text-xl font-bold'>Dii 444 ชายเหมียง</div>
                    <div className='text-base font-semibold'>Kingdom Luxury</div>
                    <div className='text-base font-semibold'>ระยะเวลา 24 ชั่วโมง</div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-blue-700 text-2xl font-bold'>3250<span> ฿</span></div>
                <div className='font-semibold'>11 ต.ค. 2023<span> | </span><span>18:30 น.</span></div>
            </div>

        </div>
      </>
  )
}
