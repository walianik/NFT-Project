import React, { useState } from "react";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import abi from "../abi.json";
const contractAddress = "0x04e25e8f7618c4de9e185a706792bf768c4e450a";
function MintingPage(props) {
  const [refferalAddress, setRefferalAddress] = useState("");
  const [amount, setAmount] = useState("");
  const getRefferalAddress = (event) => {
    setRefferalAddress(event.target.value);
  };
  const getAmount = (event) => {
    setAmount(event.target.value);
  };
  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        console.log("initialize payment", nftContract);
        if (amount !== null && amount !== "") {
          let nftTxn = await nftContract.mint(amount, {
            value: 8360000000000 * amount,
          });
          console.log("mining please wait");
          console.log(nftTxn);
        } else {
          toast.error("Please enter a valid amount", {
            position: "top-center",
          });
        }
      } else {
        console.log("ethereum object does not exist");
      }
    } catch (err) {
      console.log("error", err.message);
      toast.error(err.message, {
        position: "top-center",
      });
    }
  };
  const mintWithRefferal = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        console.log("inside if");
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        console.log("initialize payment", nftContract);
        console.log("address", refferalAddress);
        console.log("amount", amount);
        const validAddress = ethers.utils.isAddress(refferalAddress);
        if (amount !== null && amount !== "") {
          if (refferalAddress !== null && refferalAddress !== "") {
            if (validAddress === true) {
              const nftTxn = await nftContract.ownerBought(refferalAddress);
              console.log("tXn", nftTxn);
              if (nftTxn === true) {
                const Transaction = await nftContract.mintWithReferral(
                  amount,
                  refferalAddress,
                  {
                    value: 8360000000000 * amount,
                  }
                );
                console.log(Transaction);
              } else {
                toast.error("refferal address is not valid", {
                  position: "top-center",
                });
              }
            } else {
              toast.error("Please enter a valid address", {
                position: "top-center",
              });
            }
          } else {
            toast.info("Minting without refferal", {
              position: "top-center",
            });
            mintNftHandler();
          }
        } else {
          toast.error("Please enter a valid amount", {
            position: "top-center",
          });
        }
      } else {
        toast.error("ethereum object does not exist", {
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <div className="container my-3">
        <form name="form1" id="form1">
          <div className="form-group">
            <label
              htmlFor="amount"
              className={`text-${props.mode === "light" ? "black" : "white"}`}
            >
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              value={amount}
              onChange={getAmount}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="refferal"
              className={`text-${props.mode === "light" ? "black" : "white"}`}
            >
              Refferal
            </label>
            <input
              type="text"
              className="form-control"
              id="refferal"
              value={refferalAddress}
              onChange={getRefferalAddress}
            />
          </div>
        </form>
        <button type="" className="btn btn-primary" onClick={mintWithRefferal}>
          Mint
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default MintingPage;
