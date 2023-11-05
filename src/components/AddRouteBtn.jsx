import React from 'react'
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

export default function AddRouteBtn() {
  return (
    <>
        <button className='btn btn-primary text-white'>+ เพิ่มเส้นทางของคุณ !</button>
    </>
  )
}
