import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { getDetailCar,updateCar } from '../../service/cars';
export const EditCar = () => {
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState({
    model: "",
    make: "",
    color: "",
    fuel_type: "",
    seat: "",
    plate: "",
    transmission: "",
    description: "",
    feature: "",
    rentalRate: "",
    car_rental_id_rental: "",
    status: "",
    type: "",
    location: "",
  });
  // Fetch car details when the component mounts
  useEffect(() => {
   
    // Fetch car details using the id
    const fetchCarDetails = async () => {
      try {
        console.log('car id '+id);
        const carData = await getDetailCar(id);
        setCarDetails(carData.car);
        console.log(carData);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    fetchCarDetails();
  }, [id]);

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
  // const [carImages, setCarImages] = useState([]);
  // const [carDocuments, setCarDocuments] = useState([]);
  // const [carFileImages, setCarFileImages] = useState([]);
  // const [carFileDocument, setCarFileDocument] = useState([]);


  const handleSubmit = async () => {
    console.log('Updated car details:', carDetails);
    try {
      const response = await updateCar(id, carDetails);
      console.log('Car updated successfully:', response);
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  return (
    <>
      <div className="text-center text-4xl font-bold text-blue-700 my-10">
        แก้ไขข้อมูลรถของท่าน
      </div>
      <div className="w-11/12 mx-auto">
        <div className="w-full flex flex-wrap rounded-xl shadow-xl drop-shadow-xl p-10 border-2 border-[#D9D9D9]">
          <div className="flex w-1/2 flex-wrap justify-around p-5">
            <div className="mb-5">
              <label
                htmlFor="model"
                className="mb-3 block text-base font-medium"
              >
                ชื่อรุ่นและปี
              </label>
              <input
                type="text"
                name="model"
                id="model"
                placeholder="ชื่อรุ่นและปี"
                value={carDetails.model}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="make"
                className="mb-3 block text-base font-medium"
              >
                ยี่ห้อ
              </label>
              <input
                type="text"
                name="make"
                id="make"
                placeholder="ยี่ห้อ"
                value={carDetails.make}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="color"
                className="mb-3 block text-base font-medium"
              >
                สี
              </label>
              <input
                type="text"
                name="color"
                id="color"
                placeholder="สี"
                value={carDetails.color}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="fuel_type"
                className="mb-3 block text-base font-medium"
              >
                เชื้อเพลิง
              </label>
              <input
                type="text"
                name="fuel_type"
                id="fuel_type"
                placeholder="เชื้อเพลิง"
                value={carDetails.fuel_type}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="seat"
                className="mb-3 block text-base font-medium"
              >
                จำนวนที่นั่ง
              </label>
              <input
                type="text"
                name="seat"
                id="seat"
                placeholder="จำนวนที่นั่ง"
                value={carDetails.seat}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="transmission"
                className="mb-3 block text-base font-medium"
              >
                ประเภทเกียร์
              </label>
              <input
                type="text"
                name="transmission"
                id="transmission"
                placeholder="ประเภทเกียร์"
                value={carDetails.transmission}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="rentalRate"
                className="mb-3 block text-base font-medium"
              >
                ราคา
              </label>
              <input
                type="text"
                name="rentalRate"
                id="rentalRate"
                placeholder="ราคา"
                value={carDetails.rentalRate}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="location"
                className="mb-3 block text-base font-medium"
              >
                ที่ตั้ง
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="ที่ตั้ง"
                value={carDetails.location}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5 w-5/12">
              <label
                htmlFor="type"
                className="mb-3 block text-base font-medium"
              >
                ประเภทรถ
              </label>
              <select
                name="type"
                value={carDetails.type}
                onChange={handleChange}
                className="select select-sm w-full h-10 rounded-md border border-[#D9D9D9] bg-white px-6 text-base font-medium text-[#6B7280] outline-none focus:outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option disabled value={""}>
                  ประเภทรถ
                </option>
                <option value={"Campercar"}>Campercar</option>
                <option value={"Campervan"}>Campervan</option>
                <option value={"Caravan"}>Caravan</option>
                <option value={"Motorhome"}>Motorhome</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="plate"
                className="mb-3 block text-base font-medium"
              >
                ป้ายทะเบียน
              </label>
              <input
                type="text"
                name="plate"
                id="plate"
                placeholder="ป้ายทะเบียน"
                value={carDetails.plate}
                onChange={handleChange}
                className="w-full h-10 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5 w-11/12">
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium"
              >
                คำอธิบาย
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="คำอธิบาย"
                value={carDetails.description}
                onChange={handleChange}
                className="w-full h-36 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5 w-11/12">
              <label
                htmlFor="feature"
                className="mb-3 block text-base font-medium"
              >
                Car features
              </label>
              <textarea
                type="text"
                name="feature"
                id="feature"
                placeholder="Car features"
                value={carDetails.feature}
                onChange={handleChange}
                className="w-full h-36 rounded-md border border-[#D9D9D9] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          {/* <div className="flex w-1/2 flex-wrap justify-around p-10">
            <div className="w-full">
              <label
                htmlFor="Features"
                className="mb-3 block text-base font-medium"
              >
                รูป : รอบคัน - ภายใน
              </label>

              <input
                className="file-input border-[#D9D9D9] file:rounded-lg file:border-blue-700 file:hover:bg-blue-700 hover:border-blue-700 file:hover:text-white focus:outline-none "
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                multiple
              />
              {console.log('IMGFILE',carFileImages)}
              <div className="flex flex-wrap justify-start mt-6">
                {carImages.map((images, index) => (
                  <div key={index} className="relative mr-6 mt-3">
                    <span className="absolute top-0 right-0
                    hover:cursor-pointer"
                    onClick={()=>deleteCarImg(index)}>
                      <box-icon name="x" size="md" color="red"></box-icon>
                    </span> 
                    <img
                      className="h-36 w-36 rounded-xl"
                      src={images.url}
                      alt="Uploaded"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="Features"
                className="mb-3 block text-base font-medium"
              >
                เอกสารเกี่ยวกับรถ
              </label>

              <input
                className="file-input border-[#D9D9D9] file:rounded-lg file:border-blue-700 file:hover:bg-blue-700 hover:border-blue-700 file:hover:text-white focus:outline-none"
                type="file"
                accept="image/*"
                onChange={handleDocumentUpload}
                multiple
              />
              <div className="flex flex-wrap justify-start mt-6">
              {carDocuments.map((images, index) => (
                  <div key={index} className="relative mr-6">
                    <span className="absolute top-0 right-0
                    hover:cursor-pointer"
                    onClick={()=>deleteDocumentImg(index)}>
                      <box-icon name="x" size="md" color="red"></box-icon>
                    </span> 
                    <img
                      className="h-36 w-36 rounded-xl"
                      src={images.url}
                      alt="Uploaded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div className="flex w-full justify-around">
            <div className="flex flex-col w-1/3 p-10">
              <div className="htmlForm-control">
                <label className="label cursor-pointer justify-start">
                  <input type="checkbox" className="checkbox-md " />
                  <span className="label-text pl-5">
                    ยืนยันว่าข้าพเจ้าเป็นเจ้าของรถ{" "}
                    <span className="text-red-600">*</span>
                  </span>
                </label>
              </div>
              <div className="htmlForm-control">
                <label className="label cursor-pointer justify-start">
                  <input type="checkbox" className="checkbox-md " />
                  <span className="label-text pl-5">
                    ยืนยันข้อตกลงของทางเรา{" "}
                    <span className="text-red-600">*</span>
                  </span>
                </label>
              </div>
            </div>
            <div className="w-1/3 flex justify-center items-end">
              <button
                className="btn bg-blue-700 hover:bg-blue-800 rounded-full h-10 w-48 border-[#D9D9D9] shadow-lg drop-shadow-lg
                 text-white"
                onClick={handleSubmit}
              >
                ยืนยันการส่งข้อมูล
              </button>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </div>
    </>
  );
};
