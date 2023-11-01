import React from 'react';
import { useNavigate } from 'react-router-dom'

export const History = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex justify-around my-10 flex-col'>
        <div className='text-center font-bold text-5xl mt-30'>History</div>

        <div className='mt-[-80px] mr-20'>
        <div className='flex items-center justify-end m-5 mb-5'>
          <div className='w-7 h-7 bg-[#06de9d]'></div>
          <div className='ml-5 font-bold '>Complet</div>
        </div>

        <div className='flex items-center justify-end mb-5'>
          <div className='w-7 h-7 bg-[#ffe351]'></div>
          <div className='ml-5 font-bold '>In progress</div>
        </div>

        <div className='flex items-center justify-end mr-8 '>
          <div className='w-7 h-7 bg-[#e84e40]'></div>
          <div className='ml-5 font-bold '>Cancel</div>
        </div> 
        </div>

      </div>

      <div className="w-3/4 flex flex-col mx-auto my-10">
              <div className="card lg:card-side bg-base-100 shadow-lg drop-shadow-lg h-65 border-[#D9D9D9] border-2">
                <div className="card-body w-full h-70 flex flex-row">
                  <img
                    className="h-52 border-2 rounded-[20px]"
                    src="https://www.rsmotorhomes.com/wp-content/uploads/2022/10/Image_1.png"
                    alt="Album"
                  />
                  <div className="w-3/4 ml-5">
                    <h1 className="card-title w-11/12 font-bold text-2xl">Rolling Family Plus</h1>
                    <p className="w-11/12 text-s font-semibold mb-35">24 hours</p>
                    

                    <div className='mt-20'>
                      <p className="w-11/12 text-m font-semibold">PICKUP : 8:30 AM , 5/10/2023</p>
                      <p className="w-11/12 text-m font-semibold">RETURN : 8:30 AM , 6/10/2023</p>
                    </div>
                    <p className="text-2xl font-semibold text-right mr-[-180px] mt-[-30px]">12,200 BAHT</p>
                  </div>
                  <div className="w-1/4 h-12 py-2 text-xl text-center font-bold rounded-full 
                     uppercase text-white border-[#D9D9D9] border-2 bg-[#06de9d] "
              >Complete</div>
                </div>
              </div>
            </div>

            <div className="w-3/4 flex flex-col mx-auto my-10">
              <div className="card lg:card-side bg-base-100 shadow-lg drop-shadow-lg h-65 border-[#D9D9D9] border-2">
                <div className="card-body w-full h-70 flex flex-row">
                  <img
                    className="h-52 border-2 rounded-[20px]"
                    src="https://www.rsmotorhomes.com/wp-content/uploads/2022/10/Image_1.png"
                    alt="Album"
                  />
                  <div className="w-3/4 ml-5">
                    <h1 className="card-title w-11/12 font-bold text-2xl">Rolling Family Plus</h1>
                    <p className="w-11/12 text-s font-semibold">24 hours</p>

                    <div className='mt-20 '>
                      <p className="w-11/12 text-m font-semibold">PICKUP : 8:30 AM , 5/10/2023</p>
                      <p className="w-11/12 text-m font-semibold">RETURN : 8:30 AM , 6/10/2023</p>
                    </div>
                    <p className="text-2xl font-semibold text-right mr-[-180px] mt-[-30px]">12,200 BAHT</p>
                  </div>
                  <div className="w-1/4 h-12 py-2 text-xl text-center font-bold rounded-full uppercase
     text-white border-[#D9D9D9] border-2 bg-[#ffe351] "
              >Progress </div>
                </div>
              </div>
              
            </div>

            <div className="w-3/4 flex flex-col mx-auto my-10">
              <div className="card lg:card-side bg-base-100 shadow-lg drop-shadow-lg h-65 border-[#D9D9D9] border-2">
                <div className="card-body w-full h-70 flex flex-row">
                  <img
                    className="h-52 border-2 rounded-[20px]"
                    src="https://www.rsmotorhomes.com/wp-content/uploads/2022/10/Image_1.png"
                    alt="Album"
                  />
                  <div className="w-3/4 ml-5">
                    <h1 className="card-title w-11/12 font-bold text-2xl">Rolling Family Plus</h1>
                    <p className="w-11/12 text-s font-semibold">24 hours</p>

                    <div className='mt-20 '>
                      <p className="w-11/12 text-m font-semibold">PICKUP : 8:30 AM , 5/10/2023</p>
                      <p className="w-11/12 text-m font-semibold">RETURN : 8:30 AM , 6/10/2023</p>
                    </div>
                    <p className="text-2xl font-semibold text-right mr-[-180px] mt-[-30px]">12,200 BAHT</p>
                  </div>
                  <div className="w-1/4 h-12 py-2 text-xl text-center font-bold rounded-full 
    uppercase text-white border-[#D9D9D9] border-2 bg-[#FF5D5D] "
              >Cancel</div>
                </div>
              </div>
              
            </div>
            
         
    </>
  );
};


{/* <div className='flex justify-around my-10 flex-col'>
        <div className='text-center font-bold text-5xl mt-30'>History</div>

        <div className='flex items-center justify-end m-5 mb-4'>
          <div className='w-7 h-7 bg-[#6ad06a]'></div>
          <div className='ml-3'>Complet</div>
        </div>

        <div className='flex items-center justify-end mb-4'>
          <div className='w-7 h-7 bg-[#fff176]'></div>
          <div className='ml-3'>In progress</div>
        </div>

        <div className='flex items-center justify-end mr-8 '>
          <div className='w-7 h-7 bg-[#e84e40]'></div>
          <div className='ml-3'>Cancel</div>
        </div> 
      
        <history_BackOffice status='complet'/>
        <history_BackOffice status='progress'/>
        <history_BackOffice status='cancel'/>
      </div>

      
      <div className="w-3/4 flex flex-col mx-auto my-10">
  <div className="card lg:card-side bg-base-100 shadow-lg drop-shadow-lg h-65 border-[#D9D9D9] border-2">
    <div className="card-body w-full h-70 flex flex-row">
      <img
        className="h-52 border-2 rounded"
        src="https://www.rsmotorhomes.com/wp-content/uploads/2022/10/Image_1.png"
        alt="Album"
      />
      <div className="w-3/4 ml-5">
        <h1 className="card-title w-11/12 font-bold text-2xl">Rolling Family Plus</h1>
        <p className="w-11/12 text-s font-semibold">24 hours</p>

        <div className="mt-20">
          <p className="w-11/12 text-m font-semibold">PICKUP : 8:30 AM , 5/10/2023</p>
          <p className="w-11/12 text-m font-semibold">RETURN : 8:30 AM , 6/10/2023</p>
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-between items-center">
        <div className="h-12 py-2 text-xl text-center font-bold rounded-full uppercase text-white border-[#D9D9D9] border-2 bg-[#6ad06a]">Complete</div>
        <p className="text-2xl font-semibold text-right mt-20">12,200 BAHT</p>
      </div>
    </div>
  </div>
</div>


<div className="w-3/4 flex flex-col mx-auto my-10">
  <div className="card lg:card-side bg-base-100 shadow-lg drop-shadow-lg h-65 border-[#D9D9D9] border-2">
    <div className="card-body w-full h-70 flex flex-row">
      <img
        className="h-52 border-2 rounded"
        src="https://www.rsmotorhomes.com/wp-content/uploads/2022/10/Image_1.png"
        alt="Album"
      />
      <div className="w-3/4 ml-5">
        <h1 className="card-title w-11/12 font-bold text-2xl">Rolling Family Plus</h1>
        <p className="w-11/12 text-s font-semibold">24 hours</p>

        <div className="mt-20">
          <p className="w-11/12 text-m font-semibold">PICKUP : 8:30 AM , 5/10/2023</p>
          <p className="w-11/12 text-m font-semibold">RETURN : 8:30 AM , 6/10/2023</p>
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-between items-center">
        <div className="h-12 py-2  text-xl text-center font-bold rounded-full uppercase text-white border-[#D9D9D9] border-2 bg-[#fff176]">Progress</div>
        <p className="text-2xl font-semibold text-right mt-20">12,200 BAHT</p>
      </div>
    </div>
  </div>
</div>


<div className="w-3/4 flex flex-col mx-auto my-10">
  <div className="card lg:card-side bg-base-100 shadow-lg drop-shadow-lg h-65 border-[#D9D9D9] border-2">
    <div className="card-body w-full h-70 flex flex-row">
      <img
        className="h-52 border-2 rounded"
        src="https://www.rsmotorhomes.com/wp-content/uploads/2022/10/Image_1.png"
        alt="Album"
      />
      <div className="w-3/4 ml-5">
        <h1 className="card-title w-11/12 font-bold text-2xl">Rolling Family Plus</h1>
        <p className="w-11/12 text-s font-semibold">24 hours</p>

        <div className="mt-20">
          <p className="w-11/12 text-m font-semibold">PICKUP : 8:30 AM , 5/10/2023</p>
          <p className="w-11/12 text-m font-semibold">RETURN : 8:30 AM , 6/10/2023</p>
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-between items-center">
        <div className="h-12 py-2 text-xl text-center font-bold rounded-full uppercase text-white border-[#D9D9D9] border-2 bg-[#FF5D5D]">Cancle</div>
        <p className="text-2xl font-semibold text-right mt-20">12,200 BAHT</p>
      </div>
    </div>
  </div>
</div> */}
