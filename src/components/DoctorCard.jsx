import React from "react";

const DoctorCard = (props) => {
  return (
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className="flex flex-row">
          <img
            src={props.image}
            className="w-[48px] h-[48px] rounded-full"
          ></img>
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient">
              {props.name}
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-slate-300">
              {props.category}
            </p>
          </div>
        </div>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          {props.desc}
        </p>
        <div className="flex flex-row ml-2">
          <h4 className="font-poppins font-semibold text-[18px] leading-[32px] text-white">
            {props.price}
          </h4>
          <div className="flex flex-row ml-24">
            <img src={props.rate} className="w-[32px] h-[32px] " />
            <img src={props.rate} className="w-[32px] h-[32px] " />
            <img src={props.rate} className="w-[32px] h-[32px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
