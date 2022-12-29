import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import styles from "../style";
import ABI from "./../utils/abi"
import { useSigner, useContract, useProvider, useAccount } from "wagmi";
import { useNavigate } from 'react-router-dom';

const InitPage = () => {
  const [name, setName] = useState("");
  const [isUserRegistered, setIsUserRegistered] = useState();
  const [wentThroughLaunch, setWentThroughLaunch] = useState(false);

  const navigateTo = useNavigate();

  const { address } = useAccount();
  const { data: signer } = useSigner();
  const contractAddress = "0x6c1FfCC105dba2Bd915f62DCcAd373adA3E79CAD"
  const contractABI = ABI;

  const provider = useProvider();

  //0x8816A7f90Ec092279f2289b362Edbf944322b53d
  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider
  })

  const checkUserExists = async () => {
    if (address) {
      const userRegistrationStatus = await contract.checkUserExists()
      setIsUserRegistered(userRegistrationStatus)
      console.log(userRegistrationStatus + " second");
      setWentThroughLaunch(true);
    } else {
      console.log("Connect your wallet first");
    }
  }

  const submitNameForUser = async () => {
    if (address) {
      await contract.addUser(name);
      console.log("added successfully");
      navigateTo('/home')
    } else {
      console.log("Not connected");
    }
  }

  useEffect(() => {

  }, [isUserRegistered])
  return (
    <div className="bg-primary w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          <h1 className="text-white h-[150px] nav-heading text-7xl text-center mt-6 text-gradient font-bold">
            User Registration
          </h1>

          <div className="w-[100%] flex flex-col items-center justify-center m-auto mt-20">
            <ConnectButton />
          </div>

          <button
            type="submit"
            className="w-full ml-auto
               mr-auto px-12 py-2 rounded-[10px] bg-blue-gradient 
              text-[20px] font-semibold sm:min-w-[230px] 
               sm:w-auto text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center
               "
            onClick={checkUserExists}
          >
            Launch App
          </button>
          {(wentThroughLaunch) ? ((!isUserRegistered) ? 
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
            </div> : navigateTo('/home'))
            :
            ""
          }
        </div>
      </div>
    </div>
  );
};

export default InitPage;
