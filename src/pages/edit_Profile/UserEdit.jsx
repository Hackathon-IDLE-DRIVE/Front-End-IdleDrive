import React, { useEffect, useState,useContext } from "react";
import { createUser, getUserById, updateUser } from "../../service/users";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from '../../service/context/AuthContext'
import BASE_URL from "../../service/baseURL";

export default function UserEdit() {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState();
  const { id } = useParams();
  const [profileImg, setProfileImg] = useState();
  const { dispatch } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    age: "",
    username: "",
    password: "",
    profileImage: null,
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
  
    if (type === "file" && name === "profileImage") {
      const file = files[0];
  
      if (!file.type.startsWith('image/')) {
        console.error('Invalid file type. Please select an image.');
        document.getElementById('my_modal_1').showModal()
        return;
      }
  
      if (file.size > 3 * 1024 * 1024) {
        console.error('File size exceeds 3MB limit.');
        document.getElementById('my_modal_2').showModal()
        return;
      }
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profileImage: reader.result,
        }));
      };
  
      if (file) {
        setProfileImg(file);
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "file" ? files[0] : value,
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formPost = new FormData();
    formPost.append("email", formData.email);
    formPost.append("FirstName", formData.fname);
    formPost.append("LastName", formData.lname);
    formPost.append("Birth", formData.age);
    formPost.append("phone", formData.phone);
    formPost.append("profileImage", profileImg);

    const res = await updateUser(id, formPost);
    console.log("Form submitted:", formData);

    const updatedUser = res.user;

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: updatedUser,
    });

    navigate("/");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserById(id);
      setUserDetail(res);
      console.log(res);

      setFormData({
        fname: res.FirstName || "",
        lname: res.LastName || "",
        phone: res.phone || "",
        email: res.email || "",
        age: res.Birth || "",
        profileImage: null,
        password: "",
        confirmPassword: "",
      });
    };

    fetchUser();
  }, [id]);

  return (
    <>
      <div className="text-4xl font-medium text-center mt-5">
        ข้อมูล | คุณ{" "}
        {userDetail && (
          <span className="text-4xl font-medium text-blue-700 underline underline-offset-8">
            {userDetail.FirstName}
          </span>
        )}
      </div>
      {userDetail && (
        <div className="w-full my-10">
          <div className="mx-auto flex justify-center  indicator relative ">
            <label htmlFor="drop-file">
              <img
                className=" rounded-full h-60 w-60 object-cover border-4  shadow-xl hover:border-blue-700 hover:shadow-lg"
                src={
                  formData.profileImage ||
                  `${BASE_URL}/api/v1/idledrive/images/${userDetail.profileURL}`
                }
                alt="profile"
              />
              <div className="absolute file-input-ghost mb-9 mr-9 w-8 h-8 indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge bg-primary hover:bg-blue-700" />
              <input
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
              <div className="mb-5"></div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="age"
                  className="mb-3 block text-base font-medium"
                >
                  วันเกิด
                </label>
                <div className="relative">
                  <input
                    required
                    type="date"
                    name="age"
                    id="age"
                    placeholder="วันเกิด"
                    className="peer w-64 h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.age}
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
            ยืนยันการแก้ไข
          </button>
        </form>
      </div>


      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">เกิดข้อผิดพลาด!</h3>
          <p className="py-4">
            ประเภทไฟล์ไม่ถูกต้อง กรุณาเลือกรูปภาพใหม่อีกครั้ง
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">เกิดข้อผิดพลาด!</h3>
          <p className="py-4">ขนาดไฟล์เกินขีดจำกัด 3MB</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
