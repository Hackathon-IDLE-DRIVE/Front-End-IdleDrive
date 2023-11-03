import React, { useState, useEffect} from "react";
import { getDetailCar } from "../../service/cars";
import { useNavigate } from "react-router-dom";

export default function HistoryCard(data) {
  const navigate = useNavigate();

  const [car, setCar] = useState();
  const bookData = data.data;


    useEffect(()=>{
        const fetchCarData = async() =>{
            const res = await getDetailCar(bookData.car_idcar);
            setCar(res);
        }
        fetchCarData();

    },[bookData.RentalID])

    const handleClick = () => {
      console.log(bookData.RentalStatus === "Complete");
      console.log(bookData.RentalStatus);
      if(bookData.RentalStatus === "Complete"){
        navigate(`/history/${bookData.RentalID}`);
      }else{
        navigate(`/tracking/user/${bookData.RentalID}`);
      }
    }

  return (
    <>
    {car && <div
    onClick={()=>handleClick()} 
        className="card lg:card-side bg-base-100 shadow-lg drop-shadow-lg h-65 border-[#D9D9D9] border-2 mt-5">
        <div className="card-body w-full h-70 flex flex-row">
          <img
            className="h-52 w-80 border-2 rounded-[20px] object-cover"
            src={`http://localhost:3000/api/v1/idledrive/images/${car.listImage[0].imageURL}`}
            alt="Album"
          />
          <div className="w-3/4 ml-5">
            <h1 className="card-title w-11/12 font-bold text-2xl">
              {car.car.make} {car.car.model}
            </h1>
            <p className="w-11/12 text-s font-semibold mb-35">1 วัน</p>  {/* แก้ตรงนี้เด้อ */}

            <div className="mt-20">
              <p className="w-11/12 text-m font-semibold">
                รับรถ : {bookData.RentalStartDate}
              </p>
              <p className="w-11/12 text-m font-semibold">
                ส่งคืน : {bookData.RentalEndDate}
              </p>
            </div>
            <p className="text-3xl font-bold text-right mr-[-180px] mt-[-30px]">
              {bookData.TotalCost} บาท
            </p>
          </div>
          <div
            className="w-80 h-12 py-2 text-xl text-center font-bold rounded-full 
                     uppercase text-white border-[#D9D9D9] border-2 bg-[#06de9d] "
          >
            {bookData.RentalStatus}
          </div>
        </div>
      </div>}
     
    </>
  );
}
