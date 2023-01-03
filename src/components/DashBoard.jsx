import React, { useEffect, useState } from "react";
import styles from "../style";
import DoctorCard from "./DoctorCard";
import ABI from "./../utils/abi";
import { useSigner, useContract, useProvider, useAccount } from "wagmi";
import star from "../assets/star.svg";
import matic from "../assets/polygon-matic-logo.svg";
import { CONTRACT_ADDRESS } from "../constants";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import doc from "../assets/doctor.svg";

const DashBoard = () => {
  const [doctors, setDoctors] = useState([]);
  const [rating, setRating] = useState(0);

  const { data: signer } = useSigner();
  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = ABI;

  const provider = useProvider();

  const { address } = useAccount();

  const navigateTo = useNavigate();

  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider,
  });
  const getNumberOfDocs = async () => {
    const docsCount = await contract.doctorsId();
    return docsCount.toNumber();
  };

  const checkUserExists = async () => {
    if (address) {
      const userRegistrationStatus = await contract.checkUserExists();
      console.log(userRegistrationStatus);
      if (!userRegistrationStatus) {
        console.log("abcd");
        navigateTo("/auth");
      }
    } else {
      navigateTo("/home");
    }
  };

  const getSingleDocData = async (id) => {
    const docData = await contract.getDoctor(id);
    const numberOfRaters = docData.numberOfRaters.toNumber();
    const ratingTotal = docData.rating.toNumber();
    if (numberOfRaters !== 0) {
      const rates = ratingTotal / numberOfRaters;
      setRating(rates);
      console.log(rates + "r");
    } else {
      setRating(0);
    }
    const parsedData = {
      id: docData.id,
      name: docData.name,
      pfp: docData.pfp,
      category: docData.category,
      address: docData.doctorWallet,
      description: docData.description,
      price: docData.price,
      rating: docData.rating.toNumber(),
      isAvailable: docData.isAvailable,
      numberOfRaters: docData.numberOfRaters.toNumber(),
    };
    return parsedData;
  };

  const getAllDocsData = async () => {
    checkUserExists()
    const totalDocs = await getNumberOfDocs();
    const promises = [];
    console.log(totalDocs + " totalDocs");
    for (let id = 0; id < totalDocs; id++) {
      // if (id === 3) {
      //   return;
      // }
      const requestsPromise = getSingleDocData(id);
      promises.push(requestsPromise);
    }
    const _doctors = await Promise.all(promises);
    setDoctors(_doctors);
    console.log(doctors);
  };

  useEffect(() => {
    getAllDocsData();
  }, []);

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <ToastContainer />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        {/* <div
          className={`flex lg:flex-row md:flex-col sm: flex-col justify-end items-center ${styles.boxWidth} `}
        > */}
        <div className="lg:grid grid-cols-3 gap-8 md:flex-col sm:flex-col">
          {doctors ? (
            doctors.map((doctor) => {
              return (
                <DoctorCard
                  id={doctor.id}
                  image={doc}
                  name={doctor.name}
                  category={doctor.category}
                  price={ethers.utils.formatEther(doctor.price)}
                  matic={matic}
                  desc={doctor.description}
                  rate={doctor.rating}
                  numberOfRaters={doctor.numberOfRaters}
                  star={star}
                />
              );
            })
          ) : (
            <a>No doctors present</a>
          )}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default DashBoard;
