import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import styles from "./style";
import InitPage from "./components/InitPage";
import Team from "./components/Team";
import DoctorDetails from "./components/DoctorDetails";
import MyProfile from "./components/MyProfile";
import MeetingPage from "./components/MeetingPage";


export default function App() {
  return (
    <div className = "bg-[#10213B] h-auto">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <header className = {
          `sticky top-0 z-50 ${styles.boxWidth}`
        } >
          <NavBar />
        </header>
      </div>
      <div className = {
        `bg-primary  ${styles.flexStart}`
      } >
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route path="/auth" element={<InitPage />} />
            <Route path="/home" element={<DashBoard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/doc/:docId" element={<DoctorDetails />} />
            <Route path="/updateprofile" element={<MyProfile />} />
            <Route path="/:meetingId" element={<MeetingPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
