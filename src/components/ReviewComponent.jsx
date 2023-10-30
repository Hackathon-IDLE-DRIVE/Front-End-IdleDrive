import React ,{ useState } from "react";

export default function ReviewComponent() {

    const [count, setCount] = React.useState(0);

  return (
    <>
      <div className="my-10 w-full flex flex-col items-center">
        {/* <div className="text-2xl font-bold text-blue-700">Review</div> */}

        <div className="w-1/2 mx-10 my-5 drop-shadow-xl shadow-xl rounded-xl p-10 border-[#D9D9D9] border-2 flex flex-col items-center">
          <div className=" flex flex-col gap-4 w-full">
          <div className="text-3xl font-bold text-blue-700 m-2 text-center">Review</div>
          <div className="flex justify-between">
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            </div> 
                <p className="text-right font-bold text-blue-800">{count} / 200</p>
            </div>
            <div className="form-control w-full">
              <textarea onChange={e => setCount(e.target.value.length)} type='text' className="textarea textarea-bordered h-24 focus:outline-none shadow-md  border-[#D9D9D9] focus:border-blue-700 focus:border-2" placeholder="ข้อความ" maxlength="200"></textarea>
            </div>
            <button className="btn text-white bg-blue-700 hover:bg-blue-600 shadow-xl drop-shadow-lg border-[#D9D9D9] hover:border-[#D9D9D9]">Comment</button>
          </div>
        </div>
      </div>
    </>
  );
}
