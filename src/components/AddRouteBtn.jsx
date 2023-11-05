import React from 'react'
import { useNavigate } from "react-router-dom";

export default function AddRouteBtn() {
  
const navigate = useNavigate();


function addRoute(){
    navigate('/addroute')
}

  return (
    <>
        <button className='btn btn-primary text-white' onClick={addRoute}>+ เพิ่มเส้นทางของคุณ !</button>
    </>
  )
}
