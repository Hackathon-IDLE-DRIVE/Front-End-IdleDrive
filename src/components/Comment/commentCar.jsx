import React from 'react'

export default function CommentReviewCar() {

  return (
    <>
    <div className='w-full border-b my-9'/>
        <div className='review_Container flex'>
            <img className='rounded-full h-12 w-12' src='https://express-images.franklymedia.com/5829/sites/8/2023/01/26095655/AP22320098735697.jpg' alt='konror'/>

            <div className='mx-5'>
                <div className='text-lg font-bold text-black'>Mr.Lorem Ipsum</div>
                <span className='text-sm font-bold text-gray-500'>Total Route : </span>
                <span className='text-sm font-bold text-gray-800'>5</span>
            </div>

            <div className='mx-5'>
                <div className='flex'>
                    <div className='star'>⭐⭐⭐⭐⭐ </div>
                    <span className='text-base font-bold ml-5'>24-10-2023</span>
                </div>
                <div className='w-96'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </div>
            </div>
        </div>
    </>
  )
}
