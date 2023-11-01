import React from 'react'
import Complet from '../CarHistory/complete';
import Progress from '../CarHistory/progress';
import Cancel from '../CarHistory/cancle';

export default function history_BackOffice(data) {
    const status = data.status;

    function showHistory(){
        if(status === 'complet'){
            return <Complet/>
        }
        else if(status === 'progress'){
            return <Progress/>
        }
        else if(status === 'cancel'){
            return <Cancel/>
        }
    } 

    return (
        <>
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

                    <div className='mt-20'>
                      <p className="w-11/12 text-m font-semibold">PICKUP : 8:30 AM , 5/10/2023</p>
                      <p className="w-11/12 text-m font-semibold">RETURN : 8:30 AM , 6/10/2023</p>
                    </div>
                    <p className="text-2xl font-semibold text-right mr-[-180px] mt-[-30px]">12,200 BAHT</p>
                  </div>
                  {showHistory()} 
                </div>
              </div>
              
            </div>

        </>
    );
}

