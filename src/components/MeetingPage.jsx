import React, { useEffect, useState } from "react";
import { HuddleIframe } from "@huddle01/huddle01-iframe";
import ABI from "../utils/abi";
import { CONTRACT_ADDRESS } from "../constants";
import { useContract, useSigner, useProvider, useAccount } from "wagmi";
import Rating from '@mui/material/Rating';

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
    <div>
    <HuddleIframe
      config={iframeConfig} 
    />
    <div>
          <Rating name="read-only" value={2} readOnly />
      </div>
    </div>
  );
};

export default MeetingPage;
