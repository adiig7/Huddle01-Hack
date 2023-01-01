import React, { useState, useEffect } from "react";
import { useSigner, useContract, useProvider } from "wagmi";
import { useNavigate } from "react-router-dom";
import ABI from "../utils/abi";
import { CONTRACT_ADDRESS } from "../constants";
import { useParams } from "react-router-dom";

const DoctorCard = (props) => {
  const navigateTo = useNavigate();

  const [availability, setAvailability] = useState(false);

  const { data: signer } = useSigner();
  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = ABI;

  const provider = useProvider();
  const { docId } = useParams();

  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider,
  });

  const checkAvailability = async () => {
    console.log(docId.toNumber() + " docidddddddd");
    const doctorData = await contract.getDoctor(docId);
    const isAvailable = doctorData.isAvailable;
    setAvailability(isAvailable);
    console.log(isAvailable);
  };

  const handleClick = (docId) => {
    navigateTo(`/doc/${docId}`);
  };

  useEffect(() => {
    checkAvailability();
  }, []);
  return (
    <div
      className="flex justify-center w-full feedback-container relative z-[1] hover:pointer"
      onClick={() => handleClick(props.id.toNumber())}
    >
      <div className="flex justify-between flex-col px-6 py-8 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-95 hover: duration-300">
        <div className="flex flex-row">
          <img src={props.image} className="h-[50px] w-[40px]" />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient">
              {props.name}
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-slate-300">
              {props.category}
            </p>
          </div>
        </div>
        <p className="font-poppins font-normal text-[16px] leading-[32.4px] text-white my-6 truncate">
          {props.desc}
        </p>
        <div className="flex flex-row gap-20">
          <div className="flex flex-row gap-2">
            <img src={props.matic} className="h-[30px] w-[20px]"></img>
            <h4 className="font-poppins font-semibold text-[18px] leading-[32px] text-white">
              {props.price}
            </h4>
          </div>
          <div className="flex flex-row">
            <img src={props.star} className="w-[30px] h-[30px] mr-2"></img>
            <h4 className="font-poppins  text-[18px] leading-[32px] text-white">
              {props.rate / props.numberOfRaters} / 5
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
