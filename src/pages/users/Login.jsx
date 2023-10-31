import React, { useContext, useState } from "react";
import { AuthContext } from "../../service/context/AuthContext";
import { loginUser } from "../../service/users";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await loginUser(credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response });
    }
  };

  return (
    <>
      <div className="text-center mt-10 font-medium text-4xl">
        เข้าสู่ระบบ
        <span className="font-medium text-4xl text-blue-700"> | ผู้ใช้งาน</span>
      </div>

      <div className="login_Container my-5 flex justify-center content-center items-center flex-col w-full h-full">
        <div className="my-10 py-16 bg-white w-1/2 h-full flex flex-col items-center drop-shadow-lg shadow-lg rounded-lg">
          <div className="text-2xl font-bold mb-5 text-blue-700">LOGIN</div>

          <div className="form-control w-full">
            {error && (
              <div className="alert bg-red-500 w-3/5 mx-auto text-white">
                <box-icon name='error-circle' color='#ffffff' ></box-icon>
                <span>Email or Password is Incorrect!</span>
              </div>
            )}
            <label className="label w-full max-w-md mx-auto">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-md mx-auto"
              onChange={handleChange}
            />
          </div>

          <div className="form-control w-full">
            <label className="label w-full max-w-md mx-auto">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              id="password"
              className="input input-bordered w-full max-w-md mx-auto"
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-primary mt-8 bg-blue-700 text-white w-full max-w-md mx-auto hover:bg-sky-400"
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-ring loading-xs"></span>
            ) : (
              <span>Sign IN</span>
            )}
          </button>
          <div className="text-center mt-5">
            <span className="text-xs text-gray-400 font-semibold">
              Don't have account?{" "}
            </span>
            <Link to={'/register'} className="text-xs font-semibold text-blue-700">
              Sign up
            </Link>
          </div>

          <div className="flex justify-center items-center mt-10">
            <span className="w-36 border border-gray-400"></span>
            <span className="px-4 w-36 bg-white text-center">
              or sign in with
            </span>
            <span className="w-36 border border-gray-400"></span>
          </div>

          <button className="flex flex-wrap justify-center w-full max-w-md mx-auto mt-10 border border-blue-700 text-blue-700 font-bold hover:border-gray-500 px-2 py-1.5 rounded-md">
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
