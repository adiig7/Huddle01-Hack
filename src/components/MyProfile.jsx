import React, { useEffect, useState } from "react";
import styles from "../style";
import { useProvider, useSigner, useAccount } from "wagmi";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useContract } from "wagmi";
import FormControl from "@mui/material/FormControl";
import ABI from "./../utils/abi";
import { CONTRACT_ADDRESS } from "../constants";

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

  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = ABI;

  //CONTRACT_ADDRESS
  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer || provider,
  });

  const addDoctor = async () => {
    const docData = await contract.getDoctorByAddress(address);
    const doccId = await contract.doctorsId();

    if (docData.doctorWallet === "0x0000000000000000000000000000000000000000") {
      let doctorInit = {
        id: doccId.toNumber(),
        name: name,
        pfp: pfp,
        category: category,
        doctorWallet: address,
        description: description,
        price: price,
        rating: rating,
        isAvailable: availability,
      };
      console.log(doctorInit);

      let tx = await contract.addDoctor(
        doctorInit.name,
        doctorInit.category,
        doctorInit.description,
        doctorInit.pfp,
        doctorInit.price,
        doctorInit.rating,
        doctorInit.isAvailable
      );

      console.log(tx + " transaction");
    } else {
      console.log("ABCD");
    }
  };

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

                    <FormControl
                      sx={{
                        m: 1,
                        minWidth: 230,
                        backgroundColor: "#363952",
                        borderRadius: "10px",
                      }}
                      size="small"
                    >
                      <InputLabel
                        className="label-color"
                        id="demo-simple-select-helper-label"
                      >
                        Category
                      </InputLabel>
                      <Select
                        labelStyle={{
                          color: "#ff0000",
                        }}
                        sx={{
                          color: "white",
                          borderRadius: "10px",
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(228, 219, 233, 0.25)",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(228, 219, 233, 0.25)",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(228, 219, 233, 0.25)",
                          },
                          ".MuiSvgIcon-root ": {
                            fill: "white !important",
                          },
                        }}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>Select Category</em>
                        </MenuItem>
                        <MenuItem value="Psychiatrist">Psychiatrist</MenuItem>
                        <MenuItem value="Pediatrician">Pediatrician</MenuItem>
                        <MenuItem value="Cardiology">Cardialogist</MenuItem>
                        <MenuItem value="Cardiology">ENT specialist</MenuItem>
                        <MenuItem value="Cardiology">Dentist</MenuItem>
                        <MenuItem value="Cardiology">Gynecologist</MenuItem>
                        <MenuItem value="Cardiology">
                          orthopedic surgeon
                        </MenuItem>
                        <MenuItem value="Cardiology">Radiologist</MenuItem>
                        <MenuItem value="Cardiology">Neurologist</MenuItem>
                        <MenuItem value="Cardiology">Therapist</MenuItem>
                      </Select>
                    </FormControl>

                    <button
                      className="text-cyan-900 py-3 px-4 font-bold mb-8 mt-6 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center "
                      onClick={addDoctor}
                    >
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
