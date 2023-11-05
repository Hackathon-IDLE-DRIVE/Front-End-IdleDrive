import React from 'react'
import { useNavigate } from "react-router-dom";

export default function AddRouteBtn() {
  
const navigate = useNavigate();
  return (
    <>
        <button className='btn btn-primary text-white'>+ เพิ่มเส้นทางของคุณ !</button>
    </>
  )
}
