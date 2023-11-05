import React, { useEffect, useState } from 'react'
import EventListCard from '../../components/Card/eventCardlistUser'
import { getAllEvents } from '../../service/event'

export default function EventList() {

    const [listEvents, setListEvents] = useState();

    useEffect(()=>{
        const fetchAllEvents = async()=>{
            const res = await getAllEvents();
            setListEvents(res);
            console.log(res);
        }
        fetchAllEvents();
    },[])
    
  return (
    <>
        <div className='text-3xl text-blue-700 font-bold text-center m-10'>Event</div>

        <div className='flex justify-center items-center w-10/12 mx-auto'>
            <div className="carousel w-10/12 h-72">
                <div id="slide1" className="carousel-item relative w-full flex justify-center items-center content-center">
                    <a href="#slide4" className="btn btn-circle hover:bg-blue-700 border-none hover:text-white text-xl">❮</a> 
                    <img className="rounded-xl w1/2 h-full mx-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg" />
                    <a href="#slide2" className="btn btn-circle hover:bg-blue-700 border-none hover:text-white text-xl">❯</a>
                </div> 
                <div id="slide2" className="carousel-item relative w-full flex justify-center items-center content-center">
                    <a href="#slide1" className="btn btn-circle hover:bg-blue-700 border-none hover:text-white text-xl">❮</a> 
                    <img className="rounded-xl w-1/2 h-full mx-10" src="https://images.squarespace-cdn.com/content/v1/61c342ed9e6b627e0357fe0a/e661ab62-d95c-4dea-9525-f3b1838e81ae/05-21_BounceBox_NaturePhotos_001-47.jpg" alt='camp' />
                    <a href="#slide3" className="btn btn-circle hover:bg-blue-700 border-none hover:text-white text-xl">❯</a>
                </div> 
                <div id="slide3" className="carousel-item relative w-full flex justify-center items-center content-center">
                    <a href="#slide2" className="btn btn-circle hover:bg-blue-700 border-none hover:text-white text-xl">❮</a> 
                    <img className="rounded-xl  w-1/2 h-full mx-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8N75eJkvDJEHG1MdWY0Nn5dys9jlbhGYNA&usqp=CAU" />
                    <a href="#slide4" className="btn btn-circle hover:bg-blue-700 border-none hover:text-white text-xl">❯</a>
                </div> 
                <div id="slide4" className="carousel-item relative w-full flex justify-center items-center content-center">
                    <a href="#slide3" className="btn btn-circle hover:bg-blue-700 border-none hover:text-white text-xl">❮</a> 
                    <img className="rounded-xl  w-1/2 h-full mx-10" src="https://www.tourismsaskatchewan.com/-/media/saskparks/production/media-library/stay/camping-group/hero.ashx" />
                    <a href="#slide1" className="btn btn-circle hover:bg-blue-700 border-none hover:text-white text-xl">❯</a>
                </div>
            </div>
        </div>


        <div className='flex flex-wrap mx-auto w-10/12 gap-5'>
        {listEvents ? (
              listEvents.map((event,index)=>(
                <EventListCard event={event} key={index} />
              ))
            ) : (
              <span className="loading loading-ring loading-lg text-primary"></span>
            )}
        </div>


    </>
  )
}
