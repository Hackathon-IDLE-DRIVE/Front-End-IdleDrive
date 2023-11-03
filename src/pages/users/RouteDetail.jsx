import React from "react";
import ImageDetailShow from "../../components/ImageDetail";

const RouteDetail = () => {
  const listImage = [
    "bcad7410-dfed-11ec-a462-21a90511a99f_webp_original.jpg",
    "bcad7410-dfed-11ec-a462-21a90511a99f_webp_original.jpg",
    "bcad7410-dfed-11ec-a462-21a90511a99f_webp_original.jpg",
    "bcad7410-dfed-11ec-a462-21a90511a99f_webp_original.jpg",
    "bcad7410-dfed-11ec-a462-21a90511a99f_webp_original.jpg",
    "bcad7410-dfed-11ec-a462-21a90511a99f_webp_original.jpg",
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-3xl font-bold mb-10 mt-10 text-primary">
          Route เชียงใหม่-แม่กำปอง
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div>
            <ImageDetailShow imgList={listImage} />
          </div>

          <div className="w-2/4 mt-10 p-6 flex flex-col justify-center items-center">
            <div>
              <div className="text-lg text-primary text-center font-bold">เกี่ยวกับเส้นทาง</div>
              <ul className="list-disc mt-6">
                <li>ระยะเวลา : 5 days</li>
                <li>ระยะทาง : 295 kilometres</li>
              </ul>
            </div>

            <p className="text-center mt-10">
              This route is perfect for those who want to combine a few days of
              nature with history and gastronomy. The Ardennes is a forested low
              mountain range whose core is located in an area between Liège and
              the Dutch border to the north, the German border to the east, the
              north side of the province of Luxembourg to the south and the
              course of the Meuse to the west. In this route you will find:
              unprecedented natural beauty no fewer than 41 attractions for
              young or old (make a choice or extend your trip) dozens of
              beautiful hiking and cycling routes By the way, the route of the
              cycling classic Liège-Bastogne-Liège largely runs along this
              Motorhome Route. For lovers of war history: the Battle of the
              Bulge that took place in December 1944 in the region between
              Malmedy and Bastogne is kept alive here by numerous war memorials
              and war museums. Add to this the rich gastronomic culture and you
              have the recipe for a successful holiday. This road trip starts
              and ends in beautiful Spa and drives along the most beautiful
              things the Belgian Ardennes have to offer. Our route suggestions +
              your personal preferences= an unforgettable motorhome trip! Choose
              the sights that appeal to you most, speed up or slow down your
              travel days and choose the perfect motorhome stopover with the
              filters in the app. Have a good trip!
            </p>
          </div>
        </div>

        <div className="text-3xl text-primary font-bold mt-10">Google Map</div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m52!1m8!1m3!1d287390.53537950525!2d99.04115753057907!3d18.841506878214247!3m2!1i1024!2i768!4f13.1!4m41!3e0!4m3!3m2!1d18.7929!2d99.0004!4m5!1s0x30d98854987dcf85%3A0x89e41e534a24aa8f!2z4LiZ4LmJ4Liz4Lie4Li44Lij4LmJ4Lit4LiZ4Liq4Lix4LiZ4LiB4Liz4LmB4Lie4LiHIOC4rS7guYHguKHguYjguK3guK3guJk!3m2!1d18.8163724!2d99.22772859999999!4m5!1s0x30d98c2468b8743b%3A0x52c14525c6694a04!2z4LiY4Liy4Lij4LiX4Lit4LiH4Lil4Lit4LiU4LiI4LmMIC0gVGhhcm50aG9uZyBMb2RnZXM!3m2!1d18.867423!2d99.30756!4m5!1s0x30d98c2ccea80a17%3A0xc3fd661df188da96!2z4Lio4Li54LiZ4Lii4LmM4Lie4Lix4LiS4LiZ4Liy4LmC4LiE4Lij4LiH4LiB4Liy4Lij4Lir4Lil4Lin4LiH4LiV4Li14LiZ4LiV4LiB!3m2!1d18.8668753!2d99.3224453!4m5!1s0x30d98de37735e855%3A0x21415daae69122dd!2z4LmB4Lih4LmI4LiB4Liz4Lib4Lit4LiH!3m2!1d18.863096!2d99.3506604!4m5!1s0x30d9866aaaaaaaab%3A0x6852280be2694b52!2z4LmA4LiU4Lit4LiwIOC5hOC4iOC5geC4reC4meC4l-C5jCDguYDguIrguLXguKLguIfguYPguKvguKHguYg!3m2!1d18.892502!2d99.35166!4m5!1s0x30d98f8d1bfd36d3%3A0x354d6a91042eea7!2z4Lil4Liy4LiZ4LiB4Liy4LiH4LmA4LiV4LmH4LiZ4LiX4LmM4LiB4Li04LmI4Lin4Lid4Li04LmI4LiZIOC4leC4s-C4muC4pSDguKvguYnguKfguKLguYHguIHguYnguKcg4Lit4Liz4LmA4Lig4LitIOC5geC4oeC5iOC4reC4reC4mSDguYDguIrguLXguKLguIfguYPguKvguKHguYg!3m2!1d18.8563331!2d99.3667158!5e0!3m2!1sth!2sth!4v1698988431459!5m2!1sth!2sth"
          className="mt-6"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <a
          className="btn mt-10"
          target="_blank"
          rel="noreferrer"
          href="https://maps.app.goo.gl/SiM3QQq3JyPBQEaK7"
        >
          Open Google Map
        </a>
      </div>
    </>
  );
};

export default RouteDetail;
