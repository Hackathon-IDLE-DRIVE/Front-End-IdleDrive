import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "boxicons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

import logo from "../../images/idle-w-light.png";
import backdrop from "../../images/motorhome.jpg";

export const Home = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const handleBookingClick = () => {
    const pickupDate = `${format(date[0].startDate, "yyyy-MM-dd")}`;
    const returnDate = `${format(date[0].endDate, "yyyy-MM-dd")}`;

    navigate(`/car-list?pick-up=${pickupDate}&return=${returnDate}`);
  };

  return (
    <div className="flex flex-col items-center h-[800px]">
      <img src={logo} className="h-40" />
      <h1 className="text-3xl font-bold">Roam,Relex, Rent : Your Road to Home on Wheels!</h1>
      <div className="flex flex-col items-center h-fit relative z-30 w-full">
        <div
          className="flex flex-col justify-center items-center w-[1300px] shadow-2xl 
          h-60 p-5 mt-4 rounded-3xl relative z-20 bg-white"
        >
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered w-full max-w-xs my-4"
          />
          <div className="flex rounded-lg border-2 border-stone-400 p-4 w-[600px] relative">
            <div
              className="flex ml-5 pr-24 border-r-2 border-stone-400"
              onClick={() => {
                setOpenDate(!openDate);
              }}
            >
              <box-icon color="#1D4FB1" name="calendar" size="lg" />
              <div className="flex flex-col ml-5">
                <span className="font-bold">{`${format(date[0].startDate, "dd/MM/yyyy")}`}</span>
                <span>{`${format(date[0].startDate, "eeee")}`}</span>
              </div>
            </div>

            <div
              className="flex ml-5"
              onClick={() => {
                setOpenDate(!openDate);
              }}
            >
              <box-icon color="#1D4FB1" name="calendar" size="lg" />
              <div className="flex flex-col ml-5">
                <span className="font-bold">{`${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                <span>{`${format(date[0].endDate, "eeee")}`}</span>
              </div>
            </div>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className="absolute top-20 right-24 z-50"
              />
            )}
          </div>

          <button
            className="bg-[#1D4FB1] text-white text-2xl rounded-xl px-32 py-2 shadow-lg
        absolute -bottom-6 z-10 font-bold"
              onClick={handleBookingClick}
          >
            Explore
          </button>
        </div>
        <div className="absolute z-0 top-1/2">
          <img
            src={backdrop}
            className="w-[1500px] object-none object-center
            rounded-3xl h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};
