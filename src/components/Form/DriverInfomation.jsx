import React from "react";

export default function DriverInfomationForm() {
  return (
    <>
      <p className="ml-5 text-bold">ข้อมูลผู้ขับขี่<span className="text-gray-400"> ( ชื่อผู้ขับขี่ต้องเป็นชื่อเดียวกับผู้มารับรถ ) </span></p>
      <div className="my-5 flex flex-col gap-4 mx-10">
        <div className="relative">
            <input
                type="text"
                required
                id="fname"
                placeholder=""
                className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <label for='fname' class="absolute font-medium text-base py-2 px-4 opacity-75 text-[#6B7280] duration-300 transform -translate-y-5 scale-75 bg-white  top-0 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:bg-opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-sm peer-focus:bg-white peer-focus:opacity-100">ชื่อจริง<span className="text-red-500"> *</span></label>
        </div>

        <div className="relative">
            <input
                type="text"
                required
                id="lname"
                placeholder=""
                className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
             <label for='lname' class="absolute font-medium text-base py-2 px-4 opacity-75 text-[#6B7280] duration-300 transform -translate-y-5 scale-75 bg-white  top-0 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:bg-opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-sm peer-focus:bg-white peer-focus:opacity-100">นามสกุล<span className="text-red-500"> *</span></label>
        </div>

        <div className="relative">
            <input
                type="email"
                required
                id="email"
                placeholder=""
                className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
             <label for='email' class="absolute font-medium text-base py-2 px-4 opacity-75 text-[#6B7280] duration-300 transform -translate-y-5 scale-75 bg-white top-0 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:bg-opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-sm peer-focus:bg-white peer-focus:opacity-100">อีเมล (ในการติดต่อขอเอกสาร)<span className="text-red-500"> *</span></label>
        </div>

        <div className="relative">
            <input
                type="text"
                required
                id="phone"
                placeholder=""
                minLength={10}
                maxLength={10}
                className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
             <label for='phone' class="absolute font-medium text-base py-2 px-4 opacity-75 text-[#6B7280] duration-300 transform -translate-y-5 scale-75 bg-white  top-0 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:bg-opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-sm peer-focus:bg-white peer-focus:opacity-100">หมายเลขโทรศัพท์<span className="text-red-500"> *</span></label>
        </div>

        <div className="relative">
            <input
                type="text"
                id="howToUse"
                placeholder=""
                className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
             <label for='howToUse' class="absolute font-medium text-base py-2 px-4 opacity-75 text-[#6B7280] duration-300 transform -translate-y-5 scale-75 bg-white  top-0 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:bg-opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-sm peer-focus:bg-white peer-focus:opacity-100">การใช้งานของคุณ</label>
        </div>

        <div className="relative">
            <input
                type="text"
                id="moreIntel"
                placeholder=""
                className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
             <label for='moreIntel' class="absolute font-medium text-base py-2 px-4 opacity-75 text-[#6B7280] duration-300 transform -translate-y-5 scale-75 bg-white  top-0 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:bg-opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-sm peer-focus:bg-white peer-focus:opacity-100">รายระเอียดเพิ่มเติม (หากมี)</label>
        </div>

        <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
                <label htmlFor="idcard" className=" block text-base font-medium text-gray-500">ภาพถ่ายบัตรประชาชน<span className="text-red-500"> *</span></label>
                <input type="file" required className="file-input file-input-bordered w-full h-10 max-w-xs border-[#D9D9D9] file:text-gray-600 file:rounded-lg file:border-blue-700 file:border-opacity-50 file:hover:bg-blue-700 hover:border-blue-700 file:hover:text-white focus:outline-none cursor-pointer" />
            </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
                <label htmlFor="license" className=" block text-base font-medium text-gray-500">ภาพถ่ายใบขับขี่<span className="text-red-500"> *</span></label>
                <input type="file" required className="file-input file-input-bordered w-full h-10 max-w-xs border-[#D9D9D9] file:text-gray-600 file:rounded-lg file:border-blue-700 file:border-opacity-50 file:hover:bg-blue-700 hover:border-blue-700 file:hover:text-white focus:outline-none cursor-pointer" />
            </div>
            </div>
        </div>

            <label className="label cursor-pointer justify-start">
                <input type="checkbox" className="checkbox-md " />
                <span className="label-text pl-5">
                    ติดต่อเช่ารถจากต่างประเทศ{" "}
                </span>
            </label>   
      </div>

      

        

    </>
  );
}
