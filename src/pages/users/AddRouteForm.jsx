import React, { useContext, useState } from "react";
import { addRoutes } from "../../service/route";
import { useNavigate } from "react-router-dom";

export default function AddRouteForm() {

    const navigate = useNavigate();

  const [routeDetails, setRouteDetails] = useState({
    name: "",
    price: "",
    time: "",
    lenght: "",
    content: "",
    link: "",
    embedlink: "",
  });

  const [showError, setShowError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRouteDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file && uploadedImages.length < 6) {

      const reader = new FileReader();

      reader.onload = (event) => {
        const uploadedImage = {
          src: event.target.result,
          file: file,
        };

        setUploadedImages((prevImages) => [...prevImages, uploadedImage]);
      };

      reader.readAsDataURL(file);
    } else {
      setShowError(true);
      console.log(showError + ' : image is more than 6 :<');
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('routeData',routeDetails);
    uploadedImages.forEach((file) => {
        formData.append("routeImages", file.file);
    });

    try {
        const response = await addRoutes(1,formData);
        console.log("Route create succesful :", response);
        // navigate("/route");
      } catch (error) {
        console.error("Error create mai dai :", error);
      }
    };

  return (
    <>
      <div className="text-center font-bold text-3xl text-primary my-10">
        สร้างเส้นทาง
      </div>

      <div className="w-full flex justify-center">
        <form onSubmit={handleSubmit}
         className="w-2/4 p-10 mb-10 rounded-xl shadow-xl border-[#D9D9D9] border-2">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              onChange={handleChange}
              value={routeDetails.name}
              name="name"
              id="nameRoute"
              maxLength={255}
              className="pl-5 text-black block py-2.5 px-0 w-full text-sm bg-transparent border-2 rounded-xl border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="nameRoute"
              className="ml-5 px-1 text-primary peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 z-40 bg-white origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:z-30"
            >
              ชื่อเส้นทาง<span className="text-red-500"> *</span>
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                onChange={handleChange}
                value={routeDetails.length}
                name="lenght"
                id="lenght"
                className="pl-5 text-black block py-2.5 px-0 w-full text-sm bg-transparent border-2 rounded-xl border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="lenght"
                className="ml-5 px-1 text-primary peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 z-40 bg-white  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:z-30"
              >
                ระยะทาง ( KM )<span className="text-red-500"> *</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                onChange={handleChange}
                value={routeDetails.price}
                name="price"
                id="price"
                className="pl-5 text-black block py-2.5 px-0 w-full text-sm bg-transparent border-2 rounded-xl border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="price"
                className="ml-5 px-1 text-primary peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 z-40 bg-white  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:z-30"
              >
                ราคา ( ฿ )<span className="text-red-500"> *</span>
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                onChange={handleChange}
                value={routeDetails.time}
                name="time"
                id="time"
                className="pl-5 text-black block py-2.5 px-0 w-full text-sm bg-transparent border-2 rounded-xl border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="time"
                className="ml-5 px-1 text-primary peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 z-40 bg-white  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:z-30"
              >
                เวลา ( วัน )<span className="text-red-500"> *</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                onChange={handleChange}
                value={routeDetails.link}
                name="link"
                id="link_google"
                maxLength={255}
                className="pl-5 text-black block py-2.5 px-0 w-full text-sm bg-transparent border-2 rounded-xl border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="link_google"
                className="ml-5 px-1 text-primary peer-focus:font-medium absolute text-400 duration-300 transform -translate-y-6 scale-75 top-3 z-40 bg-white  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:z-30"
              >
                Link Google<span className="text-red-500"> *</span>
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              onChange={handleChange}
              value={routeDetails.embedlink}
              name="embedlink"
              id="embedlink"
              className="pl-5 text-black block py-2.5 px-0 w-full text-sm bg-transparent border-2 rounded-xl border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="embedlink"
              className="ml-5 px-1 text-primary peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 z-40 bg-white origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:z-30"
            >
              ฝังแผนที่<span className="text-red-500"> *</span>
            </label>
          </div>


          <div className="relative z-0 w-full mb-6 group">
            <textarea
              type="text"
              onChange={handleChange}
              value={routeDetails.content}
              name="content"
              id="content"
              className="pl-5 text-black block py-2.5 px-0 w-full h-36 text-sm bg-transparent border-2 rounded-xl border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="content"
              className="ml-5 px-1 text-primary peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-40 bg-white  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:z-30"
            >
              ข้อมูลเพิ้มเติม<span className="text-red-500"> *</span>
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <label className="mb-3 z-50">
              อัปโหลดรูปภาพ 6 รูป<span className="text-red-500"> *</span>
            </label>
            <input
              type="file"
              name="imageUpload"
              id="imageUpload"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="file-input file:text-blue-700 cursor-pointer file:bg-white pl-5 file:border-none text-black block py-2.5 px-0 w-full text-sm bg-transparent border-2 rounded-xl border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            />
          </div>

          <div className="w-full flex flex-wrap justify-start">
            {uploadedImages.map((image, index) => (
              <div key={index} className="mb-3 mr-6">
                <div className="w-40 h-40 relative">
                  <img
                    src={image.src}
                    alt={`Uploaded Image ${index}`}
                    className=" object-cover"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute right-0 top-0 text-red-600 p-2 rounded-full cursor-pointer bg-none text-bold"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
            >
              ยืนยันการสร้าง
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
