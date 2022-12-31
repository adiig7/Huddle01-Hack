import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import styles from "../style";
import ABI from "./../utils/abi";
import logo from "../assets/logo.svg";
import { useSigner, useContract, useProvider, useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { CONTRACT_ADDRESS } from "../constants";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const InitPage = () => {
  const [name, setName] = useState("");
  const [isUserRegistered, setIsUserRegistered] = useState();
  const [wentThroughLaunch, setWentThroughLaunch] = useState(false);

  const notifyError = (message) => {
    toast.error(message, { autoClose: 5000 });
  };
  
  const notifySuccess = (message) => { 
    toast.success(message);
  };

  const navigateTo = useNavigate();

  const { address } = useAccount();
  const { data: signer } = useSigner();
  const contractAddress = CONTRACT_ADDRESS
  const contractABI = ABI;

  const provider = useProvider();

  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider,
  });

  const checkUserExists = async () => {
    if (address) {
      const userRegistrationStatus = await contract.checkUserExists();
      setIsUserRegistered(userRegistrationStatus);
      console.log(userRegistrationStatus + " second");
      setWentThroughLaunch(true);
    } else {
      notifyError("Connect your wallet first")
    }
  };

  const submitNameForUser = async () => {
    if (address) {
      await contract.addUser(name);
      notifySuccess("User added successfully")
      navigateTo("/home");
    } else {
      console.log("Not connected");
    }
  };

  useEffect(() => {
    if (address) {
      <redirect exact from="/auth" to="/home" />
    }
  }, [isUserRegistered]);
  return (
    <div className="bg-primary w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

              <ToastContainer />

          <img src={logo} className="w-[150px] h-[150px] m-auto mt-4"></img>
          <div className="m-auto flex flex-row justify-center mt-6">
            <h1 className="text-white nav-heading text-4xl text-gradient font-bold">
              med
            </h1>
            <h1 className="text-white nav-heading-1 text-4xl text-gradient font-bold">
              X
            </h1>
            <h1 className="text-white nav-heading text-4xl text-gradient font-bold">
              huddle
            </h1>
          </div>

          <div className="w-[100%] flex flex-col items-center justify-center m-auto  mt-[80px]">
            <ConnectButton />
          </div>
          <div className="justify-center m-auto items-center flex mt-6">
            <button
              type="submit"
              className="w-full button-index
                px-12 py-2 rounded-[10px] bg-blue-gradient 
              text-[20px] font-semibold sm:min-w-[230px] 
               sm:w-auto text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center
               "
              onClick={checkUserExists}
            >
              Launch App
            </button>
          </div>

          {wentThroughLaunch ? (
            !isUserRegistered ? (
              <div className="relative mt-8 flex flex-col">
                <input
                  id="name"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="m-auto outline-none mb-6 px-4 py-2 font-medium rounded-[10px] max-w-[280px] text-white feedback-card sm:min-w-[230px] 
              sm:w-auto"
                ></input>
                <button
                  type="submit"
                  className="w-full ml-auto
               mr-auto px-12 py-2 rounded-[10px] bg-blue-gradient 
              text-[20px] font-semibold sm:min-w-[230px] 
               sm:w-auto text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center
               "
                  onClick={submitNameForUser}
                >
                  Submit
                </button>
              </div>
            ) : (
              navigateTo("/home")
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default InitPage;
