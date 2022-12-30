import React, { useEffect, useState } from "react";
import styles from "../style";
import { useProvider, useSigner, useAccount } from "wagmi";
import { StoreDoctor } from "../utils/StoreDoctor";
import { StoreContent } from "../utils/StoreContent";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContract } from "wagmi";
import FormControl from '@mui/material/FormControl';
import ABI from "./../utils/abi";

const MyProfile = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [availability, setAvailability] = useState(false);
  const [pfp, setPfp] = useState("abcddd");
  const [rating, setRating] = useState(0);  

  const provider = useProvider();
  const { data: signer } = useSigner();
  const { address } = useAccount();

  const contractAddress = "0x6c1FfCC105dba2Bd915f62DCcAd373adA3E79CAD";
  const contractABI = ABI;

  //0x1C35A430438F127529dD141CABA7Db27E05a33B9
  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider,
  });

  const addDoctor = async () => {
    const doccId = await contract.doctorsId();
    // const docData = await contract.getDoctor(doccId.toNumber() - 1);
    // console.log(doccId + " docciD");
    // console.log(docData+ " docdata");
    // setName(docData);
    // console.log(docData.name + " name");
    
    let doctorInit = {
      'id': doccId.toNumber()-1,
      'name': name,
      'pfp': pfp,
      'category': category,
      'doctorWallet': address,
      'description': description,
      'price': price,
      'rating': rating,
      'isAvailable': availability,
    }
    console.log(doctorInit);
  }

  // const storeDoctor = async () => {
  //   try {
  //     /// show storing Member details to IPFS notification
  //     console.log("Storing the files ");
  //     /// Start loading
  //     const cid = await StoreDoctor(name, description, price, category);
  //     const URL = `https://ipfs.io/ipfs/${cid}`;
  //     console.log(URL + " url");
  //     /// end loading and show the URL to the user to browse
  //     console.log("Member details uploaded to IPFS");
  //     setPfpURI(URL);
  //     await StorePhoto(cid);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const StorePhoto = async (_pfpCID) => {
  //   try {
  //     /// show storing research to IPFS notification
  //     console.log("Storing the files ");
  //     /// startLoading
  //     const cid = await StoreContent(pfp);
  //     const URL = `https://ipfs.io/ipfs/${cid}`;
  //     console.log(URL);
  //     console.log("Research uploaded to IPFS");
  //     /// end loading and show the URL to the user
  //     setPfpURI(URL);
  //     /// calling request with the users detail CID and the CID of the research
  //     request(_pfpCID, cid);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <div className="bg-primary w-full h-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="absolute z-[0] w-[40%] h-[45%] top-0 pink__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-10 blue__gradient" />
            <h1 className="text-white h-[150px] nav-heading text-6xl text-center mt-6 text-gradient font-bold">
              My Arena
            </h1>
            <div className="relative mx-auto grid grid-cols-1 mt-2 sm:mt-0 gap-[200px] lg:flex lg:justify-center">
              <div className="flex flex-col max-w-[600px] lg:max-w-[336px] ">
                <div className="items-center mb-4">
                  <div className="w-full mb-6 items-center justify-center flex flex-col ">
                    {/* <img
                      className="w-[150px] item-center object-cover object-center min-h-[150px]"
                      src={people01}
                    ></img>
                    <button className="text-cyan-900 py-3 px-4 font-bold mb-8 mt-6 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center ">
                      Upload Profile Pic
                    </button> */}

                    <input
                      id="name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="m-auto outline-none mb-6 px-4 py-2 font-medium rounded-[10px] max-w-[300px] text-white bg-[#363952] sm:min-w-[230px] 
              sm:w-auto"
                    ></input>

                    <textarea
                      id="name"
                      type="text"
                      placeholder="Description..."
                      onChange={(e) => setDescription(e.target.value)}
                      className="m-auto outline-none mb-6 px-4 py-2 font-medium rounded-[10px] max-w-[300px] text-white bg-[#363952] sm:min-w-[230px] 
              sm:w-auto"
                    ></textarea>

                     <input
                      id="price"
                      type="number"
                      placeholder="Fee..."
                      min={0}
                      onChange={(e) => setPrice(e.target.value)}
                      className="m-auto outline-none mb-6 px-4 py-2 font-medium rounded-[10px] max-w-[300px] text-white bg-[#363952] sm:min-w-[230px] 
              sm:w-auto"
                    ></input>

                     <FormControl sx = {
                       {
                         m: 1,
                         minWidth: 230,
                         backgroundColor: "#363952",
                         borderRadius: "10px"
                       }
                     }
                     size = "small" >
                      <InputLabel className="label-color" id="demo-simple-select-helper-label">Age</InputLabel>
                      <Select 
                         labelStyle = {
                           {
                             color: '#ff0000',
                           }
                         }
                         sx = {
                           {
                             color: "white",
                             borderRadius: "10px",
                             '.MuiOutlinedInput-notchedOutline': {
                               borderColor: 'rgba(228, 219, 233, 0.25)',
                             },
                             '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                               borderColor: 'rgba(228, 219, 233, 0.25)',
                             },
                             '&:hover .MuiOutlinedInput-notchedOutline': {
                               borderColor: 'rgba(228, 219, 233, 0.25)',
                             },
                             '.MuiSvgIcon-root ': {
                               fill: "white !important",
                             }
                           }
                         }
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={category}
                          label="Category"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <MenuItem value="">
                            <em>Select Category</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      </FormControl>
                    
                    <button className="text-cyan-900 py-3 px-4 font-bold mb-8 mt-6 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center "
                    onClick={addDoctor}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
