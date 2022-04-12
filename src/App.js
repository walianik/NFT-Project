import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import MintingPage from "./components/MintingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/Explore";
import FilteredPage from "./components/FilteredPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePage from "./components/CreatePage";
function App() {
  const [mode, setMode] = useState("light");
  const [darkModebtn, setdarkModebtn] = useState("Enable night mode");
  const [currentAccount, setCurrentAccount] = useState(null);
  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setdarkModebtn("Enable light mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setdarkModebtn("Enable Night mode");
    }
  };
  const connectWalletHandler = async () => {
    const { ethereum } = window;
    const value = localStorage.getItem("address");
    if (ethereum) {
      if (value != null) {
        localStorage.removeItem("address");
      } else if (value == null) {
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const value = accounts[0];
          console.log("Found an account! Address:", value);
          localStorage.setItem("address", value);
          setCurrentAccount(value);
          toast.success("Wallet is Connected", {
            position: "top-center",
          });
        } catch (err) {
          toast.error("user denied connection", {
            position: "top-center",
          });
        }
      }
    } else {
      toast.info("Please install metamask", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          darkMode={darkMode}
          darkModebtn={darkModebtn}
          connectWalletHandler={connectWalletHandler}
        />
        {/* <CreatePage /> */}
        <Routes>
          <Route path="/" element={<Body mode={mode} />}></Route>
          <Route
            path="/CreatePage"
            element={<CreatePage mode={mode} />}
          ></Route>
          <Route
            path="/MintingPage"
            element={<MintingPage mode={mode} />}
          ></Route>
          <Route
            path="/Profile"
            element={
              <Profile
                connectWalletHandler={connectWalletHandler}
                mode={mode}
              />
            }
          ></Route>
          <Route path="/Explore" element={<Explore mode={mode} />}></Route>
          <Route
            path="/FilteredPage"
            element={<FilteredPage mode={mode} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
