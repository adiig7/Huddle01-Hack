import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./polyfills";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import InitPage from "./components/InitPage";
import Team from "./components/Team";
import DoctorDetails from "./components/DoctorDetails";
import MyProfile from "./components/MyProfile";

const { chains, provider } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" />}/>
            <Route path="/auth" element={<InitPage />} />
            
            <Route path="/home" element={<App />} />
            <Route path="/team" element={<Team />} />
            <Route path="/doc/:docId" element={<DoctorDetails />} />
            <Route path="/updateprofile" element={<MyProfile />} />
          </Routes>
        </RainbowKitProvider>
      </WagmiConfig>
    </Router>
  </React.StrictMode>
);
