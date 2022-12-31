import React, { useEffect, useState } from "react";
import { HuddleIframe } from "@huddle01/huddle01-iframe";
import ABI from "../utils/abi";
import { CONTRACT_ADDRESS } from "../constants";
import { useContract, useSigner, useProvider, useAccount } from "wagmi";
import Rating from "@mui/material/Rating";

const MeetingPage = () => {
  const [meetingLink, setMeetingLink] = useState("");
  const { address } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();
  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = ABI;

  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider,
  });

  const getLink = async () => {
    const docData = await contract.getDoctorByAddress(address);
    setMeetingLink(docData.meetingLink);
    console.log(docData);
  };

  const rate = async (ratig) => {
    const docData = await contract.getDoctorByAddress(address);
    const tx = await contract.rateDoctor(docData.doctorWallet, ratig)
    await tx.wait()
    console.log(tx)
  }
  useEffect(() => {
    getLink();
  }, [meetingLink]);

  const iframeConfig = {
    roomUrl: `https://iframe.huddle01.com/${meetingLink}`,
    height: "600px",
    width: "1200px",
    noBorder: false,
  };
  return (
    <div className="my-16">
      <HuddleIframe config={iframeConfig} />
      <div className="items-center justify-center mt-12 gap-4 flex flex-row">
        <p className="text-white text-gradient font-semibold text-3xl">
          Rate your meeting
        </p>
         <Rating
        name="simple-controlled"
          value={0}
        onChange={(event, rating) => {
          rate(event.target.value)
        }}
      />
      </div>
    </div>
  );
};

export default MeetingPage;
