import React, { useEffect, useState } from "react";
import RecentCard from "../../components/Card/recentBookingCardListUser";
import BG from "../../images/BG-Tracking.png";
import Car from "../../images/MotorCar2.png";
import Status from "../../components/Status";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { format, isValid  } from "date-fns";
import socketIOClient from "socket.io-client";
import { getBookingDetails } from "../../service/rentals";

export const Tracking = () => {
  const { id } = useParams();
  const [detailBooking, setDetailBooking] = useState();
  const [status, setStatus] = useState('Confirm-Order');
  const [statusTime, setStatusTime] = useState('Test');

  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000");

    const fetchDetailBooking = async() =>{
      const res = await getBookingDetails(id);
      setDetailBooking(res);
      setStatus(res.rental.RentalStatus);
      setStatusTime(format(new Date(res.rental.updatedAt), "dd-MM-yyyy hh:mm a"));
    }

    fetchDetailBooking();

    socket.on("statusUpdated", (data) => {

      if (isValid(new Date(data.rental.updatedAt))) {
        setStatusTime(format(new Date(data.rental.updatedAt), "dd-MM-yyyy hh:mm a"));
      }

      if (data.id === id) {
        setStatus(data.rental.RentalStatus);
      }
    });

    return () => {
      socket.disconnect();
    };


  }, [id]);


  return (
    <>
    {detailBooking &&
    <div className="mx-10">
      <div className="container">
        <div className="font-bold text-2xl">Track Booking</div>
        <div className="text-sm text-gray-400">
          Monitor Status and Booking in Real-Time
        </div>
      </div>
      <div className="font-bold text-xl mt-6">Booking Preview</div>
      <div className="container shadow-lg bg-white py-10 px-16 rounded-2xl flex justify-between">
        <div>
          <div>
            <div className="text-gray-400 font-bold">ORDERS:</div>
            <div className="font-bold text-[#1D4FB1] text-xl"># {detailBooking.rental.RentalID}</div>
          </div>
          <div className="my-4">
            <div className="text-gray-400 font-bold">VEHICLE:</div>
            <div className="text-xl font-bold">{`${detailBooking.Car.make} ${detailBooking.Car.model}`}</div>
            <div className="text-sm font-semibold">{detailBooking.Car.plate}</div>
          </div>
          <div>
            <div className="text-gray-400 font-bold">STATUS:</div>
            <div>
              <Status status={`${status}`} />
            </div>
            <div className="font-bold text-sm mt-1">{statusTime}</div>
          </div>
          <div>
            <div className="text-gray-400 font-bold mt-6">ADDRESS:</div>
            <div className="font-bold">168, 24th Bangkhen Bangkok 10220</div>
          </div>
        </div>
        <div className=" border-gray-200 border-2 rounded-lg w-[700px] relative p-4">
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
      <div className="text-lg font-bold mt-10">Recent Booking</div>
      <div className="container flex flex-wrap justify-evenly">
        <RecentCard />
        <RecentCard />
        <RecentCard />
        <RecentCard />
      </div>
    </div>
    }
    </>
  );
};
