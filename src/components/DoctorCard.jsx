import React from "react";

const DoctorCard = (props) => {
  return (
    <div className="flex justify-center w-full feedback-container relative z-[1]">
      <div className="flex justify-between flex-col px-8 py-10 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
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
          <div className="flex flex-row gap-2">
            <img src={props.matic}></img>
            <h4 className="font-poppins font-semibold text-[18px] leading-[32px] text-white">
              {props.price}
            </h4>
          </div>
          <div className="flex flex-row ml-32">
            <img src={props.star} className="w-[30px] h-[30px] mr-2"></img>
            <h4 className="font-poppins  text-[18px] leading-[32px] text-white">
              {props.rate} / 5
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
