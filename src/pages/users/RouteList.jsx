import React from "react";
import RouteCardList from "../../components/Card/RouteCardList";

const RouteList = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <div className="flex flex-wrap justify-evenly w-full">
            <RouteCardList/>
            <RouteCardList/>
            <RouteCardList/>
            <RouteCardList/>
          </div>
          <div className="flex flex-wrap justify-evenly mt-12">
            <RouteCardList/>
            <RouteCardList/>
            <RouteCardList/>
            <RouteCardList/>
          </div>
        </div>
        <div className="font-bold mt-16 text-2xl text-primary">พื้นที่ตั้งแคมป์ชุมชน</div>
        <iframe
          className="mt-3 border-none"
          src="https://www.google.com/maps/d/embed?mid=1rhNqCUE-iLDwcxtRIrKsXa-jMqVgSXIs&ehbc=2E312F"
          width="820"
          height="550"
        ></iframe>
      </div>
    </>
  );
};

export default RouteList;
