import React, { useState } from "react";

export const AddCar = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the selected image file as a data URL ก็อป GPT มา
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="text-center text-4xl font-bold text-blue-700 my-10">
        เพิ่มรถของท่าน
      </div>
      <div className="w-11/12 mx-auto">
        <div className="w-full flex flex-wrap rounded-xl shadow-xl drop-shadow-xl p-10 border-2 border-[#D9D9D9]">
          <div className="flex w-1/2 flex-wrap justify-around p-5">
            <div className="mb-5">
              <label for="type" className="mb-3 block text-base font-medium">
                ชื่อรุ่นและปี
              </label>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="ชื่อรุ่นและปี"
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label for="color" className="mb-3 block text-base font-medium">
                สี
              </label>
              <input
                type="text"
                name="color"
                id="color"
                placeholder="สี"
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label for="lenght" className="mb-3 block text-base font-medium">
                ระยะทาง
              </label>
              <input
                type="text"
                name="lenght"
                id="lenght"
                placeholder="ระยะทาง"
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label for="gear" className="mb-3 block text-base font-medium">
                ประเภทเกียร์
              </label>
              <input
                type="text"
                name="gear"
                id="gear"
                placeholder="ประเภทเกียร์"
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label for="Fuel" className="mb-3 block text-base font-medium">
                Fuel type
              </label>
              <input
                type="text"
                name="Fuel"
                id="Fuel"
                placeholder="Fuel type"
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>


            <div className="mb-5">
              <label
                for="passager"
                className="mb-3 block text-base font-medium"
              >
                จํานวนผู้โดยสาร
              </label>
              <input
                type="text"
                name="passager"
                id="passager"
                placeholder="จํานวนผู้โดยสาร"
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5 w-5/12">
              <label
                for="carType"
                className="mb-3 block text-base font-medium"
              >
                ประเภทรถ
              </label>
              <select className="select select-sm w-full h-10 rounded-md border border-[#D9D9D9] bg-white px-6 text-base font-medium text-[#6B7280] outline-none focus:outline-none focus:border-[#6A64F1] focus:shadow-md">
                <option disabled selected>ประเภทรถ</option>
                <option>Campercar</option>
                <option>Campervan</option>
                <option>Caravan</option>
                <option>Motorhome</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                for="register"
                className="mb-3 block text-base font-medium"
              >
                ป้ายทะเบียน
              </label>
              <input
                type="text"
                name="register"
                id="register"
                placeholder="ป้ายทะเบียน"
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5 w-11/12">
              <label
                for="Description"
                className="mb-3 block text-base font-medium"
              >
                Description
              </label>
              <textarea
                type="text"
                name="Description"
                id="Description"
                placeholder="Description"
                className="w-full h-36 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5 w-11/12">
              <label
                for="Features"
                className="mb-3 block text-base font-medium"
              >
                Car Features
              </label>
              <textarea
                type="text"
                name="Features"
                id="Features"
                placeholder="Car Features"
                className="w-full h-36 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap justify-around p-10">
            <div className="w-full">
              <label
                for="Features"
                className="mb-3 block text-base font-medium"
              >
                รูป : รอบคัน - ภายใน
              </label>

              <input
                className="file-input border-[#D9D9D9] file:rounded-lg file:border-blue-700 file:hover:bg-blue-700 hover:border-blue-700 file:hover:text-white focus:outline-none "
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {image && (
                <img
                  className="h-36 w-36 rounded-xl mt-10"
                  src={image}
                  alt="Uploaded"
                />
              )}
            </div>

            <div className="w-full">
              <label
                for="Features"
                className="mb-3 block text-base font-medium"
              >
                เอกสารเกี่ยวกับรถ
              </label>

              <input
                className="file-input border-[#D9D9D9] file:rounded-lg file:border-blue-700 file:hover:bg-blue-700 hover:border-blue-700 file:hover:text-white focus:outline-none"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {image && (
                <img
                  className="h-36 w-36 rounded-xl mt-10"
                  src={image}
                  alt="Uploaded"
                />
              )}
            </div>
          </div>

          <div className="flex w-full justify-around">
            <div className="flex flex-col w-1/3 p-10">
              <div className="form-control">
                <label className="label cursor-pointer justify-start">
                  <input type="checkbox" className="checkbox-md " /> 
                  <span className="label-text pl-5">ยืนยันว่าข้าพเจ้าเป็นเจ้าของรถ <span className="text-red-600">*</span></span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-start">
                  <input type="checkbox" className="checkbox-md " /> 
                  <span className="label-text pl-5">ยืนยันข้อตกลงของทางเรา <span className="text-red-600">*</span></span>
                </label>
              </div>
            </div>
            <div className="w-1/3 flex justify-center items-end">
                <button className="btn bg-blue-700 hover:bg-blue-800 rounded-full h-10 w-48 border-[#D9D9D9] shadow-lg drop-shadow-lg
                 text-white">ยืนยันการส่งข้อมูล</button>
             </div>
            <div className="w-1/3">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
