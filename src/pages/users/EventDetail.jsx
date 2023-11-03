import React from 'react'
import Mapbutton from '../../components/mapbutton'

export default function EventDetail() {
  return (
    <>
        <div className='text-center m-10 text-4xl font-bold text-primary'>Event</div>
        <div className='w-full flex flex-col justify-center items-center'>
            <img src='https://cdn.zipeventapp.com/images/events/8D7D55A7-262C-4FF2-BD96-3F12C77EE5F3/55861DC1-7E4B-42FD-A2B8-B219173C6FD9.jpg' alt='camp'
                className='w-1/3 h-60 object-cover rounded-lg'
            />
            <div className='w-1/2 flex justify-around items-center mt-10'>
                <div>
                    <div className='text-2xl font-bold text-primary'>แคมป์ใต้แสงจันทร์</div>
                    <div className='text-base font-semibold'>18 ต.ค. 2023 | 18:30 น.</div>
                </div>
                <div className='text-sm'>🗺️ ดอยอินทนนท์ จ.เชียงใหม่</div>
            </div>
            <div className='w-1/2 mt-10 indent-10'>ยามเย็นใต้แสงจันทร์ ดาวสวยสดงดงามอะร่ามแท้แรตะลึก มีไม่กี่ที่ที่จะเห็นดาวได้ชัดเจน จนคุณไม่อยากจะเชื่อว่าจะสวยงามเยี่ยงนี้ ทั้งนี้ทั้งนั้น เรามารำวงกันเถินหนา ชวนเพื่อนๆพี่ๆน้องมาชมความสวยงามที่น้อยที่จะมีกันดีกว่า พร้อมกับการตั้งแคมป์ ที่สุดแสนจะวิเศษพร้อมบรรยากาศที่สดชื่น</div>
            
            <div className='text-center mt-10 mb-3 text-3xl font-bold text-primary'>สถานที่</div>

            <div className='relative'>
                <iframe
                    className="mt-3"
                    src="https://www.google.com/maps/d/embed?mid=1rhNqCUE-iLDwcxtRIrKsXa-jMqVgSXIs&ehbc=2E312F"
                    width="640"
                    height="480"
                ></iframe>
                <div className='absolute right-5 bottom-5'>
                    <Mapbutton/>
                </div>
            </div>

            <div className='text-center mt-10 mb-3 text-2xl font-bold text-primary'>สิ่งอำนวยความสะดวก</div>
            <label className='input input-bordered p-3'>
                - Free Wifi
                - Toilet
                - Free Camping 
                - Free Parking
                - Food Festival
            </label>
            


        </div>

    </>
  )
}
