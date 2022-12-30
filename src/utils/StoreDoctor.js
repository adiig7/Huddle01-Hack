// customized to store a json file created from the data we enter
import { Web3Storage } from "web3.storage";

import { WEB3STORAGE_TOKEN } from "./../constants/index"

function getAccessToken() {
  return WEB3STORAGE_TOKEN;
}

function MakeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

// stores the details of the members with the file name , memebr.json on the ipfs from the customized data propvided
export const StoreDoctor = async (name, description, price, category) => {
  const obj = { Name: name, Description: description, price: price, category: category };
  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
  const files = [new File([blob], "doctor.json")];
  console.log("Uploading data to IPFS....");
  const client = MakeStorageClient();
  const cid = await client.put(files);
  console.log("Stored files with cid: ", cid);
  return cid;
};
