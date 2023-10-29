import React, { useContext, useEffect, useLayoutEffect } from "react";
import CollapseForm from "../../components/CollapseForm";
import {
  useSearchParams,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { bookRental } from "../../service/rentals";
import { AuthContext } from "../../service/context/AuthContext";

export const CarCheckout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const pickupDate = searchParams.get("pick-up");
  const returnDate = searchParams.get("return");
  const location = searchParams.get("location");
  const { rental_range, total_rate, rental_id } = useLocation().state;
  const userID = user.id;

  const onSubmit = async () => {
    const Rentals = {
      car_idcar: id,
      RentalStartDate: pickupDate,
      RentalEndDate: returnDate,
      user_id: user.id,
      address: location,
      TotalCost: total_rate + 5000,
      carRental_id: rental_id,
    };
    console.log(Rentals);

    const booking = await bookRental(Rentals);

    console.log("[Booking System]-Booking !", booking);
    navigate(`/tracking/user/${userID}/${booking.rental.RentalID}`);
  };

  return (
    <div className="mx-6 flex">
      <div className="w-3/6">
        <div className="flex flex-col justify-center text-center h-[270px] shadow-xl">
          CarCard
        </div>
        <div className="mt-20">
          <CollapseForm title={"Driver Information"}>
            <p>Form for driver</p>
          </CollapseForm>
          <CollapseForm title={"Payment Information"}>
            <p>Form for driver</p>
          </CollapseForm>
          <CollapseForm title={"Protection options"}>
            <p>Form for driver</p>
          </CollapseForm>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center w-2/6 h-full bg-white shadow-md ml-20
      p-6 sticky top-20 rounded-lg"
      >
        <p className="font-bold text-lg">Cost Summary</p>
        <div className="flex w-full justify-between mb-2">
          <span>ค่าเช่ารถ {rental_range} วัน</span>
          <div>฿{total_rate}</div>
        </div>
        <div className="flex w-full justify-between mb-2">
          <span>ค่าจัดส่ง</span>
          <div className="text-green-500">฿0</div>
        </div>
        <div className="flex w-full justify-between mb-2">
          <span>ค่ามัดจำในวันรับรถ (ได้คืนในวันคืนรถ)</span>
          <div>฿5,000</div>
        </div>
        <div className="w-full border-2 my-4"></div>
        <div className="flex w-full justify-between font-bold text-xl mt-2">
          <span>Subtotal</span>
          <div>฿{total_rate + 5000}</div>
        </div>
        <button
          className="bg-[#1D4FB1] w-full py-2 rounded-lg text-white font-bold mt-3"
          onClick={onSubmit}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};
