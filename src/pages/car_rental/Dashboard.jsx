import React from 'react'
import Transaction_BackOff from '../../components/Card/transactionList_BackOffice'

export const Dashboard = () => {
  return (
    <>
      <div className='my-10 mx-20'>
        <div className='text-3xl font-bold text-blue-700'>กระแสรายได้</div>
        <div className='text-5xl font-bold text-blue-700'>14,000 BAHT</div>
      </div>

      <div className='mx-auto p-10 w-2/3 h-60 shadow-xl drop-shadow-2xl rounded-2xl flex justify-around items-center border-[#D9D9D9] border-2'>
          <div className='text-center flex flex-col gap-8'>
            <div className='text-4xl font-bold text-blue-700'>ยอดทั้งหมด</div>
            <div className='text-4xl font-bold text-black'>17,000<span> ฿</span></div>
            
          </div>
          <div className='h-full border-blue-700 border-2'/>
          <div className='text-center flex flex-col gap-8'>
            <div className='text-4xl font-bold text-blue-700'>ค่าใช้จ่ายทั้งหมด</div>
            <div className='text-4xl font-bold text-black'>3000<span> ฿</span></div>
          </div>
      </div>

      <div className='w-2/3 mx-auto my-10 text-left'>
        <div className='text-3xl font-bold text-blue-700'>ธุรกรรมล่าสุด</div>
        <Transaction_BackOff/>
        <Transaction_BackOff/>
      </div>
    </>
  )
}
