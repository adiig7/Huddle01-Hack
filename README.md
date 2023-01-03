# MedxHuddle

<img width="100" height="100" src="https://user-images.githubusercontent.com/84569241/210165892-14d79a8b-f3b3-4950-a1da-09f47d207d77.svg">

## Description 

A decentralized web application where patients can consult the doctors online through one to one video calling using Huddle01, by paying the consulting fee of doctor in MATIC. The smart contract has been deployed on Polygon Mumbai Testnet and frontend has been done in ReactJs(Vite) and using TailwindCSS. A user, if is a doctor, can register himself as a doctor onto the platform and can change the availability of his presence for consulting. Huddle01's Iframe has been used in the medXhuddle for having the video call.

## Brief Details

We thought of building something that could benefit the user economy, we had a strong tilt towards the healthcare sector. That's where we got the name for the Dapp 😉.
We used Solidity to write the smart contract that contains the structs for the `User`, `Docotr` and `Appointment` and used Vite and TailwindCSS for the frontend. Yep! Tailwind is superrrrrr cooolll!!! We made several components for the different webpages of the Dapp. We assigned a meeting link for every doctor in the smart contract, the meeting links are generated using an npm package `random-string` for generating random strings while the user registers himself as a doctor. 

The wallet connection has been handled by Rainbowkit and have also used Wagmi for different hooks that it provides. 

The doctor can switch it's availability for the consulting, and if the doctor is available at a particular time and if a user starts an appointment with that doctor, he gets paid the consulting fees by the patient. On the meeting page, a user has an option to rate the doctor as well. If the doctor is not available at a particular time, the user cannot start a meeting with that doctor. 
The user jumps onto to the same meeting link as of the doctor.

## Backend

### Smart Contract Details

Smart Contract Code: [medXhuddle](https://github.com/adiig7/Huddle01-Hack/blob/main/src/contracts/HuddleHack.sol)

### Smart Contract Deployment
The smart contract has been deployed on the Polygon Mumbai Testnet.
Smart Contract Address: <b>0x024455fbb84968e14Be6418cbe6Ce847ce252e63</b>

<br />

## Frontend

For the design and build, we have used React.js and TailwindCSS

All the frontend code is available under [/src](https://github.com/adiig7/Huddle01-Hack/blob/main/src).

### Frontend Pages
 
 - Auth Page

![image](https://user-images.githubusercontent.com/84569241/210166490-1d957e55-e3d2-4565-92d5-d78e5a42c3c3.png)


 
 - Dashboard
 
 ![image](https://user-images.githubusercontent.com/54351909/210312381-00862123-c538-4c96-b4eb-fffee0bde17b.png)

 
 - Add Doctor Page

![image](https://user-images.githubusercontent.com/54351909/210166138-cd75e790-efd8-43bf-a531-4cfd16f67673.png)

 
 - Doctor Details Page
 
 ![image](https://user-images.githubusercontent.com/84569241/210166576-32adb197-7166-44ad-8fc8-1408b54ca681.png)

 
 - Meeting Page
 
![image](https://user-images.githubusercontent.com/54351909/210394402-beb13db1-9da8-4608-938a-8d9295f830dc.png)

 - Team Page
 
![image](https://user-images.githubusercontent.com/54351909/210166076-06c74385-8a92-44e0-93df-8794b8de98a4.png)


<br />

## Team

### Dhrumi Shah
<img src="https://user-images.githubusercontent.com/54351909/210165695-778b8810-c716-425f-bbdf-eda6fb459fcf.png" width="240px" height="240px" />

**Frontend Developer**

Worked on building the frontend

---

### Aditya Gupta
<img src="https://user-images.githubusercontent.com/54351909/210165690-2e0e4eb5-9f0a-45e6-a077-fba01cbdb296.jpg" width="240px" height="240px" />

**Blockend Developer**

Worked on writing the smart contract and the integrations.

---
