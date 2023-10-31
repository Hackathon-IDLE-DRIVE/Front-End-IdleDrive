import React, { useState, useEffect } from "react";
import { getBookingDetails } from "../../service/rentals";
import { format, isValid } from "date-fns";
import Car from "../../images/MotorCar2.png";
import BG from "../../images/BG-Tracking.png";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Status from "../../components/Status";

const TrackingBook = () => {
  const { bookingId } = useParams();
  const [detailBooking, setDetailBooking] = useState();
  const getStatusNext = (status) => {
    switch (status) {
      case "Confirm order":
        return ["จัดส่งรถ", "กรุณาคอยรับโทรศัพท์จากร้าน"];
      case "On-delivery":
        return ["รับรถและ เซ็นสัญญา", "เตรียมเอกสารให้พร้อม!"];
      case "Pick-up":
        return ["ดื่มดำกับรถบ้านของคุณ", "ขอให้สนุก !"];
      case "During the rental":
        return ["รอคืนรถ", "ขอให้สนุก !"];
      case "Return":
        return ["รอทางร้านตรวจสอบ"];
      case "Complete":
        return ["ขอบคุณที่ใช้บริการ", "หวังว่าจะกลับมาใหม่ !"];
      case "Cancel":
        return ["ออเดอร์ถูกยกเลิก"];
      default:
        return ["มีบางอย่างผิดพลาด"];
    }
  };

  useEffect(() => {
    const fetchDetailBooking = async () => {
      const res = await getBookingDetails(bookingId);
      setDetailBooking(res);
      console.log(res);
    };

    fetchDetailBooking();
  }, [bookingId]);

  return (
    <>
      {detailBooking && (
        <div>
          <div className="container shadow-lg bg-white py-10 px-16 rounded-2xl flex justify-between">
            <div>
              <div>
                <div className="text-gray-400 font-bold">ORDERS:</div>
                <div className="font-bold text-[#1D4FB1] text-xl">
                  # {detailBooking.rental.RentalID}
                </div>
              </div>
              <div className="my-4">
                <div className="text-gray-400 font-bold">VEHICLE:</div>
                <div className="text-xl font-bold">{`${detailBooking.Car.make} ${detailBooking.Car.model}`}</div>
                <div className="text-sm font-semibold">
                  {detailBooking.Car.plate}
                </div>
              </div>
              <div>
                <div className="text-gray-400 font-bold">STATUS:</div>
                <div>
                  <Status status={`${detailBooking.rental.RentalStatus}`} />
                </div>
                <div className="font-bold text-sm mt-1">
                  {detailBooking.rental.updatedAt}
                </div>
              </div>
              <div>
                <div className="text-gray-400 font-bold mt-6">ADDRESS:</div>
                <div className="font-bold">
                  168, 24th Bangkhen Bangkok 10220
                </div>
              </div>
            </div>
            <div className=" border-gray-200 border-2 rounded-lg w-[700px] relative p-4">
              <div
                className="bg-white border-2 border-gray-50 shadow-lg w-fit px-6 py-4 flex flex-col justify-start
      absolute right-6 top-9"
              >
                <span className="text-sm text-gray-400 font-semibold">
                  ขั้นตอนต่อไป
                </span>
                <span className="text-2xl font-extrabold">
                  {getStatusNext(detailBooking.rental.RentalStatus)[0]}
                </span>
                <span className="text-xs text-gray-400 font-semibold">
                  {getStatusNext(detailBooking.rental.RentalStatus)[1]}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-4">
                <img src={BG} alt="" />
              </div>
              <motion.div
                className="w-56 absolute inset-x-4 bottom-4"
                animate={{ x: [0, 200, 0] }}
                transition={{ repeat: Infinity, duration: 7 }}
              >
                <img
                  src={Car}
                  alt="Car Image"
                  style={{ width: "100%", height: "auto" }}
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-10 w-full flex justify-center">
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step step-primary">Confirm Order</li>
              <li className="step step-primary">On-delivery</li>
              <li className="step step-primary">Pickup</li>
              <li className="step">Return</li>
              <li className="step">Complete</li>
            </ul>
          </div>

          <div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default TrackingBook;
