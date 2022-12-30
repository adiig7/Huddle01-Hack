import React, { useEffect, useState } from "react";
import styles from "../style";
import people01 from "../assets/people01.png";
import ABI from "./../utils/abi";
import RandomString from "random-string";
import { useParams, useNavigate } from "react-router-dom";
import { useAccount, useSigner, useContract, useProvider } from "wagmi";
import { CONTRACT_ADDRESS } from "../constants";

const DoctorDetails = () => {
  const [docName, setDocName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [docAddress, setDocAddress] = useState(0x00);
  const [availability, setAvailability] = useState(false);
  const [rating, setRating] = useState(0);

  const { address } = useAccount();
  const { docId } = useParams();
  const provider = useProvider();

  const navigateTo = useNavigate();

  // 0x8816A7f90Ec092279f2289b362Edbf944322b53d
  const { data: signer } = useSigner();
  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = ABI;

  //0x1C35A430438F127529dD141CABA7Db27E05a33B9
  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider,
  });

  const navigateToMeetingPage = async () => {
    const doctorData = await contract.getDoctor(docId);
    const isAvailable = doctorData.isAvailable;
  };

  const getDoctorDetail = async () => {
    try {
      const doctorData = await contract.getDoctor(docId);
      setDocName(doctorData.name);
      setCategory(doctorData.category);
      setPrice(doctorData.price);
      setDocAddress(doctorData.doctorWallet);
      setDescription(doctorData.description);
      setAvailability(doctorData.isAvailable);
      setRating(doctorData.rating);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToUpdateProfile = () => {
    navigateTo("/updateprofile");
  };
  useEffect(() => {
    getDoctorDetail();
  }, [docName, category, availability, rating]);

  return (
    <div className="bg-primary w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="absolute z-[0] w-[40%] h-[45%] top-0 pink__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          <h1 className="text-white h-[150px] nav-heading text-7xl text-center mt-6 text-gradient font-bold">
            Doctor's Portfolio
          </h1>

          <div className="relative mx-auto grid grid-cols-1 mt-14 sm:mt-0 gap-[200px] lg:flex lg:justify-center">
            <div className="flex flex-col max-w-[600px] lg:max-w-[336px] ">
              <div className="items-center mb-4">
                <div className="w-full mb-6 items-center justify-center flex ">
                  <img
                    className="w-[150px] item-center object-cover object-center min-h-[150px]"
                    src={people01}
                  ></img>
                </div>
              </div>
              <p className="mb-4 font-semibold text-white">Category</p>
              <div className="flex space-x-2">
                <a className="bg-blue-gradient font-ssp cursor-pointer rounded-[24px] py-1 px-4 text-[13px] font-semibold text-cyan-900">
                  {category}
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[443px]">
              <div className="bg-[#FFFFFF] rounded-[20px] p-6 w-full mb-4 dark:bg-[#33354B]">
                <div className="grid grid-cols-12">
                  <p className="mb-2 text-[18px] col-span-11 font-bold text-gradient dark:text-white md:text-[25px]">
                    {docName}
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="text-[20px] text-white font-bold mb-4">
                    $ {Number(price)}
                  </p>
                </div>
                <p className="mb-2 font-semibold text-white">Description</p>
                <p className="mb-8 max-w-[450px] text-[#ADB0C9]">
                  {description}
                </p>
                <p className="mb-2 font-semibold text-white"> Availability</p>
                {availability === true ? (
                  <div className="flex flex-row gap-4">
                    <p className="mb-8 max-w-[450px] text-[#ADB0C9]">
                      <a
                        a
                        className="bg-emerald-300 font-ssp cursor-pointer rounded-[24px] py-1 px-4 text-[13px] font-semibold text-cyan-900"
                      >
                        Available now
                      </a>
                    </p>
                    <p className="text-gradient font-semibold">
                      Check avaibility
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-row gap-4">
                    <p className="mb-8 max-w-[450px] text-[#ADB0C9]">
                      <a
                        a
                        className="bg-red-500 font-ssp cursor-pointer rounded-[24px] py-1 px-4 text-[13px] font-semibold text-cyan-900"
                      >
                        Not available
                      </a>
                    </p>
                    <p className="text-gradient font-semibold">
                      Check avaibility
                    </p>
                  </div>
                )}
                <p className="mb-2 font-semibold text-white">Rating</p>
                <p className="mb-8 max-w-[450px] text-[#ADB0C9]">
                  {Number(rating)} / 5
                </p>
              </div>
              {address !== docAddress ? (
                <button
                  className="text-cyan-900 py-3 px-4 font-bold mb-8 mt-6 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center "
                  onClick={navigateToMeetingPage}
                >
                  Start meeting
                </button>
              ) : (
                <button
                  className="text-cyan-900 py-3 px-4 font-bold mb-8 mt-6 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center "
                  onClick={navigateToUpdateProfile}
                >
                  Update My Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
