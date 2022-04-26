import React, { useState } from "react";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
import axios from "axios";
import { debounce } from "lodash";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "./Spinner";
function CreatePage(props) {
  const { state } = useLocation();
  var { nftImg, nftName, nftDescription, nftId } = state;
  console.log(nftImg, nftName, nftDescription, nftId);
  var [image, setImage] = useState({ preview: nftImg, raw: "" });
  const [name, setName] = useState(nftName);
  const [externalLink, setExternalLink] = useState("");
  const [description, setDescription] = useState(nftDescription);
  var [dataHash, setDataHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [buffer, setBuffer] = useState(null);
  const Address = localStorage.getItem("address");
  const accessToken = localStorage.getItem("auth-token");
  const apiUrl = "localhost:5000/v1/";
  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
  });
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const debName = useCallback(
    debounce((name) => setName(name), 1000),
    []
  );
  const handleChangeName = (name) => {
    debName(name);
  };
  const debLink = useCallback(
    debounce((link) => setExternalLink(link), 1000),
    []
  );
  const handleChangeLink = (link) => {
    debLink(link);
  };
  const debDescription = useCallback(
    debounce((word) => setDescription(word), 1000),
    []
  );
  const handleChangeDescription = (word) => {
    debDescription(word);
  };
  const updateNft = async () => {
    setLoading(true);
    const addedImg = await client.add(buffer);
    const imgHash = addedImg.path;
    const data = {
      img: "https://ipfs.io/ipfs/" + imgHash,
      nftName: name,
      description: description,
      externalLink: externalLink,
    };
    console.log(nftId);
    const NFt = JSON.stringify(data);
    //uploading Nft on ipfs
    const added = await client.add(NFt);
    const dataHash = added.path;
    setDataHash(dataHash);
    console.log("data hash", dataHash);
    const dataUrl = "https://ipfs.io/ipfs/" + dataHash;
    console.log("data url", dataUrl);
    console.log("update");

    authAxios
      .patch(`http://localhost:5000/v1/nft/${nftId}`, data)
      .then((result) => {
        toast.success("Updated", {
          position: "top-center",
        });
        console.log("data", result);
        setLoading(false);
      });
  };
  const deleteNft = () => {
    authAxios.delete(`http://localhost:5000/v1/nft/${nftId}`).then((result) => {
      //console.log("data", data);
      console.log(result);
      toast.success("Deleted", {
        position: "top-center",
      });
    });
  };
  // var error = {};

  const imageRemove = () => {
    console.log("remove");
    setImage({
      preview: null,
    });
  };

  const Call = () => {
    if (Address !== null) {
      return (
        <>
          <div className=" createPageRow1 my-2">
            <div className="container">
              <h1 className="my-4">Edit {nftName}</h1>
              {loading && <Spinner />}
              <div className="imgParent">
                <div className="imgChild">
                  <div className="row createPageRow2 my-2">
                    <h5>Image, Audio, Video, Or 3D Model</h5>
                    <span className="spanText">
                      File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3,
                      WAV, OGG, GLB, GLTF. Max size: 100 MB
                    </span>
                  </div>
                  <label
                    htmlFor="upload-button"
                    id="label-image"
                    className="imageInputBox"
                  >
                    <img
                      src={image.preview}
                      alt="dummy"
                      width="340"
                      height="250"
                    />
                    <input
                      type="file"
                      id="upload-button"
                      style={{ display: "none" }}
                      onChange={async (e) => {
                        e.preventDefault();
                        if (e.target.files.length) {
                          setImage({
                            preview: URL.createObjectURL(e.target.files[0]),
                            raw: e.target.files[0],
                          });
                          //converting image in buffer
                          const reader = new window.FileReader();
                          reader.readAsArrayBuffer(e.target.files[0]);
                          reader.onloadend = () => {
                            setBuffer(reader.result);
                          };
                          console.log(Buffer(setBuffer));
                        }
                      }}
                    />
                    <div className="crossIcon">
                      <button className="crossIconBtn" onClick={imageRemove}>
                        <i className="bi bi-x crossIconIcon"></i>
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <div className="row createPageRow2">
                <label>Name</label>
                <input
                  className=" my-2 createInputBox"
                  id="name"
                  //placeholder="Item name"
                  defaultValue={name}
                  onChange={(e) => {
                    handleChangeName(e.target.value);
                  }}
                />
              </div>
              <div className="row createPageRow2 my-1">
                <label>External Link</label>
                <span className="spanText">
                  OpenSea will include a link to this URL on this item's detail
                  page, so that users can click to learn more about it. You are
                  welcome to link to your own webpage with more details.
                </span>
                <input
                  className=" my-2 createInputBox"
                  id="externalLink"
                  name="extenalLink"
                  type="url"
                  placeholder="https://yoursite.io/item/"
                  defaultValue={externalLink}
                  onChange={(e) => {
                    handleChangeLink(e.target.value);
                  }}
                />
              </div>
              {/* <p>{errstatus}</p> */}
              <div className="row createPageRow2 my-1">
                <label>Description</label>
                <span className="spanText">
                  The description will be included on the item's detail page
                  underneath its image. Markdown syntax is supported.
                </span>
                <textarea
                  className=" my-2 createInputBox p-2"
                  placeholder="Provide a detailed description of your item"
                  defaultValue={description}
                  onChange={(e) => {
                    handleChangeDescription(e.target.value);
                  }}
                />
              </div>
              <div className="row createPageRow2 my-1">
                <label>Collection</label>
                <span className="spanText">
                  This is the collection where your item will appear.
                  <i className="bi bi-info-circle mx-2"></i>
                </span>
                <input
                  className=" my-2 createInputBox"
                  placeholder="Select Collection"
                />
              </div>
              <div className="row createPageRow2 my-1">
                <label>Supply</label>
                <span className="spanText">
                  The number of items that can be minted. No gas cost to you!
                  <i className="bi bi-info-circle mx-2"></i>
                </span>
                <input className=" my-2 createInputBox" />
              </div>
              <div className="row createPageRow2 my-1">
                <label>
                  Freeze metadata <i className="bi bi-info-circle mx-2"></i>
                </label>
                <span className="spanText">
                  Freezing your metadata will allow you to permanently lock and
                  store all of this item's content in decentralized file
                  storage.
                </span>
              </div>
              <div className="freezeLabel my-1 ">
                To freeze your metadata, you must create your item first.
              </div>
              <hr />
              <div className="row mb-3">
                <button
                  type="button"
                  className="btn btn-primary mb-5 mt-3 mx-2 createButtonMint"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={updateNft}
                >
                  Save Changes
                </button>
                <button
                  className="btn btn-primary mb-5 mt-3 mx-2 ml-auto createButtonMint"
                  onClick={deleteNft}
                >
                  delete
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          You created {name}!
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p className="modalContent">
                          woot! you just created {name}.
                        </p>
                        <img src={image.preview} width="200" height="200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (Address === null) {
      return (
        <div>
          <div className="row notConnectedRow">
            <h1
              className={`my-3 text-${
                props.mode === "light" ? "black" : "white"
              } `}
            >
              Metamask not Connected
            </h1>
            <button
              className="btn btn-outline-primary my-3 connectToMetaMaskButton"
              onClick={props.connectWalletHandler}
            >
              Connect to Metamask
            </button>
          </div>
        </div>
      );
    }
  };
  return <Call />;
}
export default CreatePage;
