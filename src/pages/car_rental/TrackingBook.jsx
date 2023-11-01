import React, { useState, useEffect } from "react";
import { getBookingDetails, updateBookingStatus } from "../../service/rentals";
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
      case "Wait for Confirm":
        return [
          "ยืนยันออเดอร์ของคุณ",
          "เตรียมเช็ครถและเอกสารของลูกค้า!",
          "Confirm order",
          "Cancel",
        ];
      case "Confirm order":
        return ["จัดส่งรถ", "กรุณาติดต่อกับลูกค้า", "On-delivery"];
      case "On-delivery":
        return ["ส่งมอบและ เซ็นสัญญา", "เตรียมเอกสารให้พร้อม!", "Pick-up"];
      case "Pick-up":
        return [
          "รอลูกค้าส่งมอบรถคืน",
          "อยู่ในระหว่างเช่ารถ",
          "During the rental",
        ];
      case "During the rental":
        return ["รอลูกค้าส่งมอบรถคืน", "อยู่ในระหว่างเช่ารถ !", "Return"];
      case "Return":
        return ["ตรวจสอบรถของคุณ", "เช็คสภาพรถ!", "Complete"];
      case "Complete":
        return ["เสร็จสมบูรณ์", "ได้รับรายได้แล้ว !"];
      case "Cancel":
        return ["ออเดอร์ถูกยกเลิก"];
      default:
        return ["มีบางอย่างผิดพลาด"];
    }
  };

  const fetchDetailBooking = async () => {
    const res = await getBookingDetails(bookingId);
    setDetailBooking(res);
    console.log(res);
  };

  const updateStatus = async (bookingId, status) => {
    const res = await updateBookingStatus(bookingId, status);
    fetchDetailBooking();
    console.log(res);
  };

  useEffect(() => {
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
          <div className="flex flex-col justify-center items-center">
            <div className="mt-10 w-full flex justify-center">
              <ul className="steps steps-vertical lg:steps-horizontal">
                <li
                  className={`step ${
                    detailBooking.rental.RentalStatus === "Confirm order" ||
                    detailBooking.rental.RentalStatus === "On-delivery" ||
                    detailBooking.rental.RentalStatus === "Pick-up" ||
                    detailBooking.rental.RentalStatus === "During the rental" ||
                    detailBooking.rental.RentalStatus === "Return" ||
                    detailBooking.rental.RentalStatus === "Complete"
                      ? "step-primary"
                      : ""
                  }`}
                >
                  Confirm Order
                </li>
                <li
                  className={`step ${
                    detailBooking.rental.RentalStatus === "On-delivery" ||
                    detailBooking.rental.RentalStatus === "Pick-up" ||
                    detailBooking.rental.RentalStatus === "During the rental" ||
                    detailBooking.rental.RentalStatus === "Return" ||
                    detailBooking.rental.RentalStatus === "Complete"
                      ? "step-primary"
                      : ""
                  }`}
                >
                  On-delivery
                </li>
                <li
                  className={`step ${
                    detailBooking.rental.RentalStatus === "Pick-up" ||
                    detailBooking.rental.RentalStatus === "During the rental" ||
                    detailBooking.rental.RentalStatus === "Return" ||
                    detailBooking.rental.RentalStatus === "Complete"
                      ? "step-primary"
                      : ""
                  }`}
                >
                  Pickup
                </li>
                <li
                  className={`step ${
                    detailBooking.rental.RentalStatus === "Return" ||
                    detailBooking.rental.RentalStatus === "Complete"
                      ? "step-primary"
                      : ""
                  }`}
                >
                  Return
                </li>
                <li
                  className={`step ${
                    detailBooking.rental.RentalStatus === "Complete"
                      ? "step-primary"
                      : ""
                  }`}
                >
                  Complete
                </li>
              </ul>
            </div>

            <div className="container bg-white shadow-lg mt-10 w-3/4 flex flex-col items-center justify-center p-10">
              <div className="text-center text-xl font-bold">ข้อมูลลูกค้า</div>
              <div>
                <span>NAME : </span>Somchai Kankathok
              </div>
              <div>
                <span>Phone : </span>099999999
              </div>
              <div>Document</div>
              <div className="flex justify-center items-center w-2/4">
                {getStatusNext(detailBooking.rental.RentalStatus)[2] && (
                  <button
                    className="btn btn-primary text-white w-2/4"
                    onClick={() => {
                      updateStatus(
                        bookingId,
                        getStatusNext(detailBooking.rental.RentalStatus)[2]
                      );
                    }}
                  >
                    {getStatusNext(detailBooking.rental.RentalStatus)[2]}
                  </button>
                )}

                {getStatusNext(detailBooking.rental.RentalStatus)[3] && (
                  <button
                    className="btn btn-error text-white w-2/4 ml-2"
                    onClick={() => {
                      updateStatus(
                        bookingId,
                        getStatusNext(detailBooking.rental.RentalStatus)[3]
                      );
                    }}
                  >
                    {getStatusNext(detailBooking.rental.RentalStatus)[3]}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrackingBook;