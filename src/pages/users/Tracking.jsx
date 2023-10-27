import React from "react";
import RecentCard from "../../components/Card/recentBookingCardListUser";
import BG from "../../images/BG-Tracking.png";
import Car from "../../images/MotorCar2.png";
import Status from "../../components/Status";
import { motion } from "framer-motion";

export const Tracking = () => {
  return (
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
            <div className="font-bold text-[#1D4FB1] text-xl">#564683</div>
          </div>
          <div className="my-4">
            <div className="text-gray-400 font-bold">VEHICLE:</div>
            <div className="text-xl font-bold">Toyota CarryBoy</div>
            <div className="text-sm font-semibold">DII 4444 กรุงเทพมหานคร</div>
          </div>
          <div>
            <div className="text-gray-400 font-bold">STATUS:</div>
            <div>
              <Status status={"During the rental"} />
            </div>
            <div className="font-bold text-sm mt-1">24-10-23 7.30 AM</div>
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
  );
};
