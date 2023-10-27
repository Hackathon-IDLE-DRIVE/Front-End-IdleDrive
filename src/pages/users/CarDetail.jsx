import React, { useState } from "react";
import ImageDetailShow from "../../components/ImageDetail";
import Section from "../../components/Section";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import CommentReviewCar from "../../components/Comment/commentCar";

export const CarDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { id } = useParams();
  const pickupDate = searchParams.get("pick-up");
  const returnDate = searchParams.get("return");
  const location = searchParams.get("location");

  return (
    <>
      <div className="flex flex-col justify-evenly lg:flex-row">
        <div className="w-full lg:w-3/6">
          <div className="mb-6 mt-3">
            <h1 className="font-bold text-3xl mb-2">Rolling Family Plus</h1>
            <div className="flex">
              <span className="font-semibold">4.8</span>
              <box-icon type="solid" name="star" color="yellow" />
              <div>(12 review)</div>
            </div>
          </div>

          <ImageDetailShow />
          <Section title={"ผู้ให้เช่ารถ"}>
            <div className="flex items-center">
              <div className="avatar mr-4">
                <div className=" w-20 rounded-full">
                  <img src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg" />
                </div>
              </div>
              <div>
                <div className="font-semibold">Mr.lorem</div>
                <div>
                  <span>4.8</span>
                  <box-icon size="xs" type="solid" name="star" color="yellow" />
                  <span className="ml-2">(52 review)</span>
                </div>
              </div>
            </div>
          </Section>
          <Section title={"Description"}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </Section>
          <Section title={"Feature"}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </Section>
          <div className="w-full border-2 my-4"></div>
          <Section title={"Review"}>
            <div className="flex justify-center">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Total Review</div>
                  <div className="stat-value text-[#1D4FB1]">12</div>
                  <div className="stat-desc">Total Review in this year</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Average Rating</div>
                  <div className="stat-value text-[#1D4FB1]">4.8</div>
                  <div className="stat-desc">Average Rating in this year</div>
                </div>
              </div>
            </div>
            <CommentReviewCar/>
            <CommentReviewCar/>
          </Section>
        </div>
        <div className="mt-24">
          <div className="w-full lg:w-[400px] h-fit shadow-md p-5 flex flex-col justify-center rounded-xl sticky top-20">
            <span className="font-bold text-2xl mb-10">Duration</span>

            <div className="pb-2 border-b-2">
              <div className="flex justify-between">
                <span>ค่าเช่ารถ 2 วัน</span>
                <div>฿10,900</div>
              </div>
              <span className="text-xs text-gray-600">
                ราคาต่อวัน ฿5,450 x 2 วัน
              </span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <span className="font-bold">ราคารวมทั้งหมด</span>
                <div className="font-bold text-2xl">฿10,900</div>
              </div>
              <div className="flex justify-between mb-10">
                <span className="text-xs text-gray-600">
                  ค่ามัดจำในวันรับรถ (ได้คืนในวันคืนรถ)
                </span>
                <div className="text-xs">฿3,000</div>
              </div>
            </div>
            <button className="bg-[#1D4FB1] w-full py-2 rounded-lg text-white font-bold"
            onClick={()=>navigate(`/motorhome/1/checkout?pick-up=${pickupDate}&return=${returnDate}&location=${location}`)}>
              {" "}
              SELECT{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
