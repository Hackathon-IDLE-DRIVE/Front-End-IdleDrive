import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import CarlistCard from "../../components/Card/cardCarListUser"
import { format } from "date-fns";
import { getCarListAvailability } from "../../service/rentals";

export const CarList = () => {
  const [searchParams] = useSearchParams();
  const [carList, setCarlist] = useState([]);
  const pickupDate = searchParams.get("pick-up");
  const returnDate = searchParams.get("return");
  const location = searchParams.get("location");
  const [locationInput , setLocationInput] = useState(location);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: pickupDate ? new Date(pickupDate) : new Date(),
      endDate: returnDate ? new Date(returnDate) : new Date(),
      key: "selection",
    },
  ]);
  const queryParams = {
    pickupDate,
    returnDate,
    location: locationInput,
  };

  useEffect(() => {
    const fetchCarList = async() =>{
      const response = await getCarListAvailability(pickupDate,returnDate,location);
      setCarlist(response);
      console.log(response);
    }

    fetchCarList();

  }, [pickupDate, returnDate, location]);

  return (
    <>
      <div className="flex flex-col w-full border-b-2 p-5 items-center md:flex-row">
        <div>
          Location
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered w-full max-w-xs my-4"
            value={locationInput}
            onChange={(e)=>setLocationInput(e.target.value)}
          />
        </div>
        <div className="md:ml-10">
          Date
          <div
            className="flex h-fit items-center border-2 relative
         p-3 rounded-lg my-4 px-16"
          >
            <div
              className="text-base"
              onClick={() => {
                setOpenDate(!openDate);
              }}
            >
              {`${format(date[0].startDate, "dd/MM/yyyy")} `}
              <box-icon name="chevron-right" size='xs'/>
              {` ${format(date[0].endDate, "dd/MM/yyyy")}`}
            </div>

            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className="absolute top-full left-0 z-20"
              />
            )}
          </div>
        </div>
        <div className="md:ml-20 md:mt-6">
          <button className="bg-[#1D4FB1] px-10 py-3 text-white rounded-2xl
          font-bold">
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="flex w-full border-b-2 p-5">
          <button className="mr-5 bg-white shadow-md py-2 px-4 rounded-lg hover:shadow-lg">
            Price
          </button>
          <button className="mr-5 bg-white shadow-md py-2 px-4 rounded-lg hover:shadow-lg">
            Rating
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="text-gray-400">{carList.length} result</div>
        <div className="flex flex-row flex-wrap justify-evenly">
          {carList && carList.length > 0 ? (
            carList.map((carData, index)=>(
              <CarlistCard key={index} queryParams={queryParams} carData={carData}/>
            ))
          ):(
            <div className="w-full h-[200px] flex justify-center items-center text-[#1D4FB1]">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
