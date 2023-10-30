import React, { useContext, useEffect, useState } from "react";
import CollapseForm from "../../components/CollapseForm";
import {
  useSearchParams,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { bookRental } from "../../service/rentals";
import { AuthContext } from "../../service/context/AuthContext";
import { getDetailCar } from "../../service/cars";
import { format, eachDayOfInterval } from "date-fns";

export const CarCheckout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const pickupDate = searchParams.get("pick-up");
  const returnDate = searchParams.get("return");
  const location = searchParams.get("location");
  const [dateRange, setDateRange] = useState([]);
  const [carDetail, setCarDetail] = useState();
  const { rental_range, total_rate, rental_id } = useLocation().state;

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
    navigate(`/tracking/user/${booking.rental.RentalID}`);
  };

  useEffect(() => {
    const fetchDetailCar = async () => {
      const res = await getDetailCar(id);
      console.log(res);
      setCarDetail(res);
    };
    const calculateDateRange = () => {
      const start = new Date(pickupDate);
      const end = new Date(returnDate);

      const range = eachDayOfInterval({ start, end });
      const formattedRange = range.map((date) => format(date, "yyyy-MM-dd"));

      setDateRange(formattedRange);
    };

    calculateDateRange();
    fetchDetailCar();
  }, [id, pickupDate, returnDate]);

  return (
    <>
      {carDetail && (
        <div className="mx-6 flex">
          <div className="w-3/6">
            <div className="card card-side bg-white shadow-xl h-[270px]">
              <figure className="w-2/5">
                <img
                  className="h-full object-cover"
                  src={`http://localhost:3000/api/v1/idledrive/images/${carDetail.listImage[0].imageURL}`}
                  alt="Car"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                  {carDetail.car.make} {carDetail.car.model}
                </h2>
                <span className="font-semibold">{dateRange.length} DAYS</span>
                <span className="font-semibold text-lg mt-2">
                  PICKUP : {pickupDate}
                </span>
                <span className="font-semibold text-lg">
                  RETURN : {returnDate}
                </span>
                <div className="flex items-center mt-3">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src={`http://localhost:3000/api/v1/idledrive/images/${carDetail.rental.rentalDetail.profileURL}`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-3">
                    <span className="font-semibold">
                      {carDetail.rental.rentalDetail.rental_name}
                    </span>
                    <span>
                      ⭐
                      {carDetail.rental.rentalReview.averageRating
                        ? carDetail.rental.rentalReview.averageRating
                        : 0}
                      ({carDetail.rental.rentalReview.reviewCountSum})
                    </span>
                  </div>
                </div>
              </div>
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
      )}
    </>
  );
};
