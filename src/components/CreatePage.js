import React, { useState } from "react";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
import axios from "axios";
function CreatePage(props) {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [name, setName] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [description, setDescription] = useState("");
  var [dataHash, setDataHash] = useState("");
  const [buffer, setBuffer] = useState(null);
  const Address = localStorage.getItem("address");
  // var error = {};
  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
  });
  var createNft = async () => {
    //uploading image
    const addedImg = await client.add(buffer);
    const imgHash = addedImg.path;
    //making nft json object
    var nft = {
      nftName: name,
      Description: description,
      externalLink: externalLink,
      image: "https://ipfs.io/ipfs/" + imgHash,
    };
    const NFt = JSON.stringify(nft);
    //uploading Nft on ipfs
    const added = await client.add(NFt);
    const dataHash = added.path;
    setDataHash(dataHash);
    console.log("data hash", dataHash);
    const dataUrl = "https://ipfs.io/ipfs/" + dataHash;
    console.log("data url", dataUrl);
    // console.log(externalLink);
    const authToken = localStorage.getItem("auth-token");
    axios
      .post("http://localhost:5000/v1/nft", NFt)
      .then((result) => {
        console.log("submit", result);
        //  var id = result.data.user.id;
        //  var token = result.data.tokens.access.token;
        //  localStorage.setItem("addressId", id);
        //  localStorage.setItem("auth-token", token);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  // const validate = () => {
  //   console.log(externalLink);
  //   if (
  //     externalLink.match(
  //       /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  //     ) ||
  //     externalLink === ""
  //   ) {
  //     console.log("valid");
  //   } else {
  //     console.log("not valid");
  //   }
  // };
  const Call = () => {
    if (Address !== null) {
      return (
        <>
          <div className="row createPageRow1 my-2">
            <div className="container">
              <h1 className="my-4">Create New Item</h1>
              <div>
                <div className="row createPageRow2 my-2">
                  <h5>Image, Audio, Video, Or 3D Model</h5>
                  <span className="spanText">
                    File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3,
                    WAV, OGG, GLB, GLTF. Max size: 100 MB
                  </span>
                </div>
                <label htmlFor="upload-button" className="imageInputBox">
                  {image.preview ? (
                    <img
                      src={image.preview}
                      alt="dummy"
                      width="340"
                      height="250"
                    />
                  ) : (
                    <>
                      <span className="fa-stack fa-2x mt-3 mb-2">
                        <i className="bi bi-images"></i>
                      </span>
                    </>
                  )}
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
                </label>
              </div>
              <div className="row createPageRow2 my-1">
                <label>Name</label>
                <input
                  className=" my-2 createInputBox"
                  placeholder="Item name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
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
                  value={externalLink}
                  onChange={(e) => {
                    setExternalLink(e.target.value);
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
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
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
              <label className="freezeLabel my-1">
                To freeze your metadata, you must create your item first.
              </label>
            </div>
            <hr />
            <div className="row mb-3">
              <button
                type="button"
                className="btn btn-primary mb-5 mt-3 mx-2 createButtonMint"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={createNft}
                disabled={!name || !image}
              >
                Create
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
