import React from 'react'

export default function CommentReviewCar({ review }) {

    

  return (
    <>
    <div className='w-full border-b my-9'/>
        <div className='review_Container flex'>
            <img className='rounded-full h-12 w-12' src={`http://localhost:3000/api/v1/idledrive/images/${review.user.profileURL}`} alt='konror'/>

            <div className='mx-5'>
                <div className='text-lg font-bold text-black'>{review.user.username}</div>
                <span className='text-sm font-bold text-gray-500'>Total Route : </span>
                <span className='text-sm font-bold text-gray-800'>5</span>
            </div>

            <div className='mx-5'>
                <div className='flex'>
                    <div className='star'>⭐⭐⭐⭐⭐ </div>
                    <span className='text-base font-bold ml-5'>24-10-2023</span>
                </div>
                <div className='w-96'>{review.comment}</div>
            </div>
        </div>
    </>
  )
}
