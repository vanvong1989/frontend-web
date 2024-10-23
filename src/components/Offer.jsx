import React from "react";
import { useEffect, useState } from "react";

const Offer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-26T12:15:00") - +new Date();
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        years: String(Math.floor(difference / (1000 * 60 * 60 * 24 * 365))).padStart(2, "0"),
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"), 
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
        milliseconds: String(Math.floor(difference % 1000)).padStart(3, "0"), 
      };
    } else {
      timeLeft = {
        years: "00",
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        milliseconds: "000",
      };
    }
  
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1); 
  
    return () => clearTimeout(timer);
  });
  
  return (
    <section className=" bg-banner bg-center bg-cover h-[555px] p-8 rounded-xl max-padd-container my-8">
      <div className="flex items-center flex-col gap-1 mt-40 max-w-xl">
        <h3 className="uppercase medium-20">Sales Fever</h3>
        <h2 className="bold-44 uppercase">20% off Everything</h2>
        <span className="italic font-ace">Offer ends in</span>
        <div className="flex gap-x-4 xs:gap-x-7 mt-2 ">
        <div className="bg-white sm:text-sm p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeLeft.years}</span>
            <span className="block">Years</span>
          </div>
          <div className="bg-white sm:text-sm p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeLeft.days}</span>
            <span className="block">Days</span>
          </div>
          <div className="bg-white sm:text-sm p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeLeft.hours}</span>
            <span className="block">Hours</span>
          </div>
          <div className="bg-white sm:text-sm p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeLeft.minutes}</span>
            <span className="block">Minutes</span>
          </div>
          <div className="bg-white sm:text-sm p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeLeft.seconds}</span>
            <span className="block">Seconds</span>
          </div>
          <div className="bg-white sm:text-sm p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeLeft.milliseconds}</span>
            <span className="block">milliseconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
