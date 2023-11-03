import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../service/context/AuthContext";
import { updateCarRental } from "../../service/cars_rental";
export default function MerChantUserEdit() {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState();
  const { id } = useParams();
  const [profileImg, setProfileImg] = useState();
  const { user, dispatch } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    rental_name: "",
    location: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));

    if (type === "file" && name === "profileImage") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profileImage: reader.result,
        }));
      };

      if (files[0]) {
        setProfileImg(files[0]);
        reader.readAsDataURL(files[0]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formPost = new FormData();
    formPost.append("email", formData.email);
    formPost.append("FirstName", formData.fname);
    formPost.append("LastName", formData.lname);
    formPost.append("rental_name", formData.rental_name);
    formPost.append("phone", formData.phone);
    formPost.append("location", formData.location);
    formPost.append("profileImage", profileImg);

    const res = await updateCarRental(id, formPost);
    console.log("Form submitted:", formData);
    console.log(res);

    const updatedUser = res.carRental;

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: updatedUser,
    });

    navigate("/");
  };

  useEffect(() => {
    setFormData({
      fname: user.FirstName || "",
      lname: user.LastName || "",
      phone: user.phone || "",
      email: user.email || "",
      age: user.Birth || "",
      profileImage: null,
      rental_name: user.rental_name || "",
      location: user.location || "",
    });
  }, [id]);

  return (
    <>
      <div className="text-4xl font-medium text-center mt-5">
        ข้อมูล |{" "}
        {user && (
          <span className="text-4xl font-medium text-blue-700 underline underline-offset-8">
            {user.rental_name}
          </span>
        )}
      </div>
      {user && (
        <div className="w-full my-10">
          <div className="mx-auto flex justify-center  indicator relative ">
            <label htmlFor="drop-file">
              <img
                className=" rounded-full h-60 w-60 object-cover border-4  shadow-xl hover:border-blue-700 hover:shadow-lg"
                src={
                  formData.profileImage ||
                  `http://localhost:3000/api/v1/idledrive/images/${user.profileURL}`
                }
                alt="profile"
              />
              <div className="absolute file-input-ghost mb-9 mr-9 w-8 h-8 indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge bg-primary hover:bg-blue-700" />
              <input
                required
                type="file"
                id="drop-file"
                name="profileImage"
                onChange={handleChange}
                className="absolute hidden file-input-ghost mb-9 mr-9 w-8 h-8 indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge bg-primary hover:bg-blue-700"
              />
            </label>
          </div>
        </div>
      )}

      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 mx-auto my-10 py-10 px-5 bg-white border-[#D9D9D9] border-2 shadow-xl flex flex-col items-center rounded-xl drop-shadow-lg"
        >
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="mb-3 block text-base font-medium"
                >
                  ชื่อจริง
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="ชื่อจริง"
                    className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.fname}
                    onChange={handleChange}
                  />

                </div>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium"
                >
                  นามสกุล
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="นามสกุล"
                    className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.lname}
                    onChange={handleChange}
                  />

                </div>
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium"
                >
                  Phone
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    maxLength={10}
                    minLength={10}
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                </div>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <div className="mb-5">
                  <label
                    htmlFor="age"
                    className="mb-3 block text-base font-medium"
                  >
                    ชื่อร้านของคุณ
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="rental_name"
                      name="rental_name"
                      id="rental_name"
                      placeholder="ชื่อร้านของคุณ"
                      className="peer w-64 h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      value={formData.rental_name}
                      onChange={handleChange}
                    />
      
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="location"
                  className="mb-3 block text-base font-medium"
                >
                  สถานที่ปล่อยเช่า
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    name="location"
                    id="location"
                    placeholder="สถานที่ปล่อยเช่า"
                    className="peer w-64 h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.location}
                    onChange={handleChange}
                  />
        
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center my-5 max-w-lg">
            <span className="w-44 border border-gray-400"></span>
            <span className="px-4 w-44 bg-white text-center uppercase text-sm text-primary">
              User & password
            </span>
            <span className="w-44 border border-gray-400"></span>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="mb-3 block text-base font-medium"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.password}
                    onChange={handleChange}
                  />
           
                </div>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="Confirm-Password"
                  className="mb-3 block text-base font-medium"
                >
                  Confirm-Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm-Password"
                    className="peer w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />

                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-8 bg-blue-700 text-white w-full max-w-lg mx-auto hover:bg-sky-400"
          >
            ยืนยันการแก้ไขข้อมูล
          </button>
        </form>
      </div>
    </>
  );
}
