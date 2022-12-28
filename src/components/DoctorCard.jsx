import React from "react";  
import ABI from "./../utils/abi"
import { useAccount, useSigner, useContract, useProvider} from "wagmi";

const DoctorCard = (props) => {
  const { data: signer } = useSigner();
  const contractAddress = "0x8816A7f90Ec092279f2289b362Edbf944322b53d"
  const contractABI = ABI;

  const provider = useProvider();

  //0x8816A7f90Ec092279f2289b362Edbf944322b53d
  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider
})
  const getNumberOfDocs = async () => {
    const docsCount = await contract.doctorsId();
    return docsCount.toNumber()
  }

  const getSingleDocData = async (id) => {
    const docData = await contract.getDoctor(id);
    const parsedData = {
      id: docData.id,
      name: docData.name,
      pfp: docData.pfp,
      category: docData.category,
      address: docData.doctorWallet,
      description: docData.description,
      price: docData.price,
      rating: docData.rating,
      isAvailable: docData.isAvailable
    }
    return parsedData;
  }

  const getAllDocsData = async () => {
    const totalDocs = await getNumberOfDocs()
    const promises = [];
    console.log(totalDocs + " totalDocs");
    for (let id = 0; id < totalDocs; id++){
      const requestsPromise = getSingleDocData(id);
      promises.push(requestsPromise)
    }
    const _doctors = await Promise.all(promises);
  }
  return (
    <div className="flex justify-center w-full feedback-container relative z-[1]">
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className="flex flex-row">
          <img
            onClick={getAllDocsData}
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
           $ {props.price}
          </h4>
          <div className="flex flex-row ml-36">
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
