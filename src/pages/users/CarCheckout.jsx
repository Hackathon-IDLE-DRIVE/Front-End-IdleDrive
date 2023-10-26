import React from "react";
import CollapseForm from "../../components/CollapseForm";

export const CarCheckout = () => {
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

      <div className="flex flex-col justify-center items-center w-2/6 h-full bg-white shadow-md ml-20
      p-6 sticky top-20 rounded-lg">
        <p className="font-bold text-lg">Cost Summary</p>
        <div className="flex w-full justify-between mb-2">
          <span>ค่าเช่ารถ 2 วัน</span>
          <div>฿10,900</div>
        </div>
        <div className="flex w-full justify-between mb-2">
          <span>ค่าจัดส่ง</span>
          <div className="text-green-500">฿0</div>
        </div>
        <div className="flex w-full justify-between mb-2">
          <span>ค่ามัดจำในวันรับรถ (ได้คืนในวันคืนรถ)</span>
          <div>฿10,000</div>
        </div>
        <div className="w-full border-2 my-4"></div>
        <div className="flex w-full justify-between font-bold text-xl mt-2">
          <span>Subtotal</span>
          <div>฿10,900</div>
        </div>
        <button className="bg-[#1D4FB1] w-full py-2 rounded-lg text-white font-bold mt-3">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};
