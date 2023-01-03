import React, { useEffect, useState } from "react";
import styles from "../style";
import doc from "../assets/doctor.svg";
import matic from "../assets/polygon-matic-logo.svg";
import ABI from "./../utils/abi";
import { useParams, useNavigate, createSearchParams } from "react-router-dom";
import { useAccount, useSigner, useContract, useProvider } from "wagmi";
import { CONTRACT_ADDRESS } from "../constants";
import { ethers } from "ethers";
import { toast, ToastContainer } from "react-toastify";

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

  const { data: signer } = useSigner();
  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = ABI;

  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider,
  });

  const startMeetingWithDoc = async () => {
    const doctorData = await contract.getDoctor(docId);
    const meetingLink = doctorData.meetingLink;
    const price = doctorData.price;
    const isAvailable = doctorData.isAvailable;
    if (isAvailable) {
      const tx = await contract.addAppointment(docId, price, {
        value: price,

      });
      await tx.wait();
      navigateTo(`/${meetingLink}`, {
        state: {
          add: docAddress,
        },
      });
    } else {
      toast.error("Doctor not available right now! 😵", { autoClose: 3000 });
    }
  };

  const navigateToMyMeeting = async () => {
    const doctorData = await contract.getDoctor(docId);
    const meetingLink = doctorData.meetingLink;
    navigateTo(`/${meetingLink}`, {
      state: {
        add: docAddress,
      },
    });
  };

  const changeAvailabilityAndNavigateDoctor = async () => {
    const id = toast.loading("Chaning Availability...");
    const doctorData = await contract.getDoctor(docId);
    const meetingLink = doctorData.meetingLink;
    const isAvailable = doctorData.isAvailable;
    const doctorAdd = doctorData.doctorWallet;
    try {
      if (!isAvailable) {
        const tx = await contract.changeAvailability(doctorAdd);
        await tx.wait();
        setAvailability(true);
        toast.update(id, {
          render: "Switched your availiability 😉",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        const tx = await contract.changeAvailability(doctorAdd);
        await tx.wait();
        setAvailability(false);
        toast.update(id, {
          render: "Switched your availiability 😉",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.update(id, {
        render: "User rejected transaction 🤨",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    }
    
  };

  const getDoctorDetail = async () => {
    try {
      const doctorData = await contract.getDoctor(docId);
      if (doctorData.doctorWallet === "0x0000000000000000000000000000000000000000") {
        toast.error("Oops! Doctor doesn't exist 🫤")
        navigateTo("/home")
      }
      const numberOfRaters = doctorData.numberOfRaters.toNumber();
      const ratingTotal = doctorData.rating.toNumber();
      if (numberOfRaters !== 0) {
        const rates = ratingTotal / numberOfRaters;
        console.log(rates + " rates");
        setRating(rates);
        console.log(rating + "rating");
      } else {
        setRating(0);
      }
      setDocName(doctorData.name);
      setCategory(doctorData.category);
      setPrice(ethers.utils.formatEther(doctorData.price));
      setDocAddress(doctorData.doctorWallet);
      setDescription(doctorData.description);
      setAvailability(doctorData.isAvailable);
    } catch (error) {
      toast.error(error);
    }
  };

  const navigateToUpdateProfile = () => {
    navigateTo("/updateprofile");
  };
  useEffect(() => {
    getDoctorDetail();
  }, [docName, category, availability, rating]);

  return (
    <div className="bg-primary w-full h-auto overflow-auto">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="absolute z-[0] w-[40%] h-[45%] top-0 pink__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          <h1 className="text-white h-[150px] nav-heading text-7xl text-center mt-6 text-gradient font-bold">
            Doctor's Portfolio
          </h1>

          <ToastContainer />

          <div className="relative mx-auto grid grid-cols-1 mt-14 sm:mt-0 gap-[200px] lg:flex lg:justify-center">
            <div className="flex flex-col max-w-[600px] lg:max-w-[336px] ">
              <div className="items-center mb-4">
                <div className="w-full mb-6 items-center justify-center flex ">
                  <img
                    className="w-[150px] item-center object-cover object-center min-h-[150px]"
                    src={doc}
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
              <div className="bg-[#FFFFFF] rounded-[20px] p-6 w-full mb-3 dark:bg-[#33354B]">
                <div className="grid grid-cols-12">
                  <p className="mb-6 text-[18px] col-span-11 font-bold text-gradient dark:text-white md:text-[25px]">
                    {docName}
                  </p>
                </div>
                <p className="mb-2 font-semibold text-white">Fee</p>
                <div className="flex flex-row gap-2">
                  <img src={matic} className="h-[30px] w-[20px]" />
                  <p className="text-[20px] text-white font-bold mb-6">
                    {Number(price)}
                  </p>
                </div>
                <p className="mb-2 font-semibold text-white">Description</p>
                <p className="mb-6 max-w-[450px] text-[#ADB0C9]">
                  {description}
                </p>
                <p className="mb-2 font-semibold text-white"> Availability</p>
                {availability === true ? (
                  <div className="flex flex-row gap-4">
                    <p className="mb-6 max-w-[450px] text-[#ADB0C9] cursor-pointer">
                      <a className="bg-emerald-300 font-ssp cursor-pointer rounded-[24px] py-1 px-4 text-[13px] font-semibold text-cyan-900">
                        Available now
                      </a>
                    </p>
                    {address === docAddress ? (
                      <p
                        className="text-gradient font-semibold cursor-pointer"
                        onClick={changeAvailabilityAndNavigateDoctor}
                      >
                        Change availability
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div className="flex flex-row gap-4">
                    <p className="mb-6 max-w-[450px] text-[#ADB0C9]">
                      <a className="bg-red-500 font-ssp cursor-pointer rounded-[24px] py-1 px-4 text-[13px] font-semibold text-cyan-900">
                        Not available
                      </a>
                    </p>
                    {address === docAddress ? (
                      <p
                        className="text-gradient font-semibold cursor-pointer"
                        onClick={changeAvailabilityAndNavigateDoctor}
                      >
                        Change availability
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                )}
                <p className="mb-2 font-semibold text-white">Rating</p>
                <p className="mb- max-w-[450px] text-[#ADB0C9]">
                  {Number(rating)} / 5
                </p>
              </div>
              {address !== docAddress ? (
                <button
                  className="text-cyan-900 py-3 px-4 font-bold mb-8 mt-3 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center "
                  onClick={startMeetingWithDoc}
                >
                  Start meeting
                </button>
              ) : (
                " "
              )}

              {address === docAddress && availability === true ? (
                <button
                  className="text-cyan-900 py-3 px-4 font-bold mb-4 mt-6 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center "
                  onClick={navigateToMyMeeting}
                >
                  Start Your meeting
                </button>
              ) : (
                <div className="h-40"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
