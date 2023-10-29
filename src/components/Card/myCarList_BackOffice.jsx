import React,{useState} from "react";
import Idle from '../../components/MyCarStatus/idle'
import Activate from '../../components/MyCarStatus/activate'

export default function Back_myCarList(data) {

    const status = data.status;

    function showStatus(){
        if(status === 'idle'){
            return <Idle/>
        }
        else if(status === 'activate'){
            return <Activate/>
        }
    }

  return (
    <>
      <div className="w-3/4 flex flex-col mx-auto my-10">
        <div className="card lg:card-side bg-base-100 shadow-lg drop-shadow-lg h-52 border-[#D9D9D9] border-2">
          <figure className="w-1/3">
            <img
            className="h-52"
              src="https://www.rsmotorhomes.com/wp-content/uploads/2022/10/Image_1.png"
              alt="Album"
            />
          </figure>
          <div className="card-body w-full h-52 flex flex-row">
            <div className="w-3/4">
                <h1 className="card-title w-11/12 font-bold text-2xl">Rolling Family Plus</h1>
                <p className="w-11/12 text-lg font-semibold">Dii 444 ชายเหมียง</p>
                <p className="w-11/12 font-semibold text-[#908D8D]">รถบ้านคนใหญ่ยาว สวยหรู หล่อเท่แบบมีสไตร์ มีห้องน้ำในตัว ระบบเครื่องเสียง HighEnd ฟังชั่นครบครัน</p>
            </div>
        
            {showStatus()}
  
          </div>
        </div>
      </div>
    </>
  );
}
