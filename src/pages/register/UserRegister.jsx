import React from "react";

export default function UserRegister() {
  return (
    <>
      <div className="text-4xl font-medium text-center mt-5">
        สมัครสมาชิก | 
        <span className="text-4xl font-medium text-blue-700"> ผู้ใช้งาน</span>
      </div>
      <div className="w-full">
        <div className="w-1/2 mx-auto my-10 py-10 px-5 bg-white border-[#D9D9D9] border-2 shadow-xl flex flex-col items-center rounded-xl drop-shadow-lg">


          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label for="fName" className="mb-3 block text-base font-medium">ชื่อจริง</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First Name"
                  className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label for="lName" className="mb-3 block text-base font-medium">นามสกุล</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last Name"
                  className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
              <label for="phone" className="mb-3 block text-base font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
              <label for="email" className="mb-3 block text-base font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
              <label for="job" className="mb-3 block text-base font-medium">อาชีพ</label>
                <input
                  type="text"
                  name="job"
                  id="job"
                  placeholder="อาชีพ"
                  className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
              <label for="age" className="mb-3 block text-base font-medium">อายุ</label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  placeholder="อายุ"
                  className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label for="idcard" className="mb-3 block text-base font-medium">ภาพถ่ายบัตรประชาชน</label>
                <input type="file" className="file-input file-input-bordered w-full h-10 max-w-xs border-[#D9D9D9] file:rounded-lg file:border-blue-700 file:hover:bg-blue-700 hover:border-blue-700 file:hover:text-white focus:outline-none cursor-pointer" />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label for="license" className="mb-3 block text-base font-medium">ภาพถ่ายใบขับขี่</label>
                <input type="file" className="file-input file-input-bordered w-full h-10 max-w-xs border-[#D9D9D9] file:rounded-lg file:border-blue-700 file:hover:bg-blue-700 hover:border-blue-700 file:hover:text-white focus:outline-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
              <label for="username" className="mb-3 block text-base font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
              <label for="password" className="mb-3 block text-base font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mx-10 w-9/12 flex">
            <div className="w-1/2 px-3"></div>
            <div className="w-1/2 pl-3">
              <div className="mb-5">
              <label for="Confirm-Password" className="mb-3 block text-base font-medium">Confirm-Password</label>
                <input
                  type="password"
                  name="Confirm-Password"
                  id="Confirm-Password"
                  placeholder="Confirm-Password"
                  className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <button className="btn btn-primary mt-8 bg-blue-700 text-white w-full max-w-lg mx-auto hover:bg-sky-400">Sign Up</button>

          <div className="flex justify-center items-center mt-10 max-w-lg">
            <span className="w-44 border border-gray-400"></span>
            <span className="px-4 w-44 bg-white text-center">
              or sign up with
            </span>
            <span className="w-44 border border-gray-400"></span>
          </div>

          <button className="flex flex-wrap justify-center w-full max-w-lg mx-auto mt-10 border border-blue-700 text-blue-700 font-bold hover:border-gray-500 px-2 py-1.5 rounded-md">
            <img
              className="w-5 mr-2"
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            />
            Google
          </button>



        </div>
      </div>
    </>
  );
}
