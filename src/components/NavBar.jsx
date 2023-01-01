import { useEffect, useState } from "react";
import React from "react";
import { navLinks } from "../constants";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ABI from "./../utils/abi";
import { useSigner, useContract, useProvider, useAccount } from "wagmi";
import { CONTRACT_ADDRESS } from "../constants";

const NavBar = () => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [doctorExists, setDoctorExists] = useState(false);
  const [available, setAvailable] = useState(false);
  const [id, setId] = useState(0);
  const [meeting, setMeeting] = useState("");

  const navigateTo = useNavigate();

  const {address} = useAccount()

  const { data: signer } = useSigner();
  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = ABI;

  const provider = useProvider();

  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider,
  });

  const checkDoctor = async () => {
    const doctorData = await contract.getDoctorByAddress(address);
    console.log(doctorData.isAvailable + " ac");
    setId(doctorData.id)
    setAvailable(doctorData.isAvailable)
    setMeeting(doctorData.meetingLink)
    if (doctorData.doctorWallet !== "0x0000000000000000000000000000000000000000") {
      setDoctorExists(true)
    }
  }

  const openMyProfile = async () => {
    navigateTo(`/doc/${id}`)
  }

  const openMyMeeting = async () => {
    navigateTo(`/${meeting}`)
  }

  useEffect(() => {
    checkDoctor()
  }, [doctorExists, active, address])

  const goToPage = (destination, title) => {
    setActive(title);
    navigateTo(`/${destination}`);
  };

  return (
    <nav className={`w-full h-16 flex py-6 justify-between items-center 
    navbar button-index ${window.location.href.slice(-4) === "auth" ? "navbar-hidden" : ""}`}>
      <h1 className="text-white nav-heading text-4xl text-gradient font-bold">
        med
      </h1>
      <h1 className="text-white nav-heading-1 text-4xl text-gradient font-bold">
        X
      </h1>
      <h1 className="text-white nav-heading text-4xl text-gradient font-bold">
        huddle
      </h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins text-white font-normal cursor-pointer text-[16px] mr-10 ${
              active === nav.title ? "text-gradient" : "text-dimWhite"
            }`}
            onClick={() => goToPage(nav.link, nav.title)}
          >
            <a>{nav.title}</a>
          </li>
        ))}
      </ul>
      {doctorExists ? <p
        className={`font-poppins mr-5 text-white font-normal cursor-pointer text-[16px] mr-10}`}
        onClick={openMyProfile}
      >
        My Profile
      </p> : ""}

      <ConnectButton showBalance={false} />

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar text-white`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
