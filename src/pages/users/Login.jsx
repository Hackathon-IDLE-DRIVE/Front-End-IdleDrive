import React from "react";

export default function Login() {
  return (
    <>
      <div className="text-center mt-10 font-medium text-4xl">เข้าสู่ระบบ<span className="font-medium text-4xl text-blue-700"> | ผู้ใช้งาน</span></div>

      <div className="login_Container my-5 flex justify-center content-center items-center flex-col w-full h-full">
        <div className="my-10 py-16 bg-white w-1/2 h-full flex flex-col items-center drop-shadow-lg shadow-lg rounded-lg">
          <div className="text-2xl font-bold mb-5 text-blue-700">LOGIN</div>

          <div className="form-control w-full">
            <label className="label w-full max-w-md mx-auto">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md mx-auto"
            />
          </div>

          <div className="form-control w-full">
            <label className="label w-full max-w-md mx-auto">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md mx-auto"
            />
          </div>
          <button className="btn btn-primary mt-8 bg-blue-700 text-white w-full max-w-md mx-auto hover:bg-sky-400">
            Sign IN
          </button>
            <div class="text-center mt-5">
                <span class="text-xs text-gray-400 font-semibold">Don't have account? </span>
                <a href="#" class="text-xs font-semibold text-blue-700">Sign up</a>
            </div>
 
            <div className="flex justify-center items-center mt-10">
              <span className="w-36 border border-gray-400"></span>
              <span className="px-4 w-36 bg-white text-center">or sign in with</span>
              <span className="w-36 border border-gray-400"></span>
            </div>

            <button class="flex flex-wrap justify-center w-full max-w-md mx-auto mt-10 border border-blue-700 text-blue-700 font-bold hover:border-gray-500 px-2 py-1.5 rounded-md">
              <img class="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
              Google
            </button>
        </div>
      </div>
    </>
  );
}
