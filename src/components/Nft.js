import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nft = (props) => {
  const { state } = useLocation();
  const { img, name, description, nftId } = state;
  console.log("data", img);
  console.log("name", name);
  console.log("description", description, nftId);
  const [isAboutCollectionActive, setIsAboutCollectionActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isListingsActive, setIsListingsActive] = useState(false);
  const [isOffersActive, setIsOffersActive] = useState(false);
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  const [isDetailsActive, setIsDetailsActive] = useState(false);
  const navigate = useNavigate();
  const editFunc = () => {
    navigate("/Edit", {
      state: {
        nftImg: img,
        nftName: name,
        nftDescription: description,
        nftId: nftId,
      },
    });
  };
  const sellFunc = () => {
    navigate("/Sell", {
      state: {
        img: img,
        name: name,
        description: description,
        nftId: nftId,
      },
    });
  };
  console.log(img, name, description);
  return (
    <div>
      <div>
        <div className="row topRowNFt">
          <span>
            <a href="" className="editNFt" onClick={editFunc}>
              Edit
            </a>
          </span>
          <span>
            <a href="" className="sellNFt" onClick={sellFunc}>
              Sell
            </a>
          </span>
        </div>
        <div className="itemContainer mb-3">
          <div className="row">
            <div className="summaryCol my-3">
              <div className="articleNftImage">
                <div className="row articleHead">
                  <span>
                    <i className="bi bi-suit-diamond-fill"></i>
                  </span>
                  <span></span>
                  <span>
                    <i className="bi bi-heart"></i> 0
                  </span>
                </div>
                <div className="row articleBody ">
                  <div className="imgDiv">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
              <div className="my-4 mx-4">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header accordionHeading"
                      id="headingOne"
                    >
                      <button
                        className="accordion-button dropBtnNFt"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => {
                          setIsDescriptionActive(!isDescriptionActive);
                        }}
                      >
                        <i className="bi bi-list-nested mr-2"></i> Description
                      </button>
                    </h2>
                    {isDescriptionActive && (
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse show`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="row dropRow">
                            <div className="dropRowBody">
                              <h3>Created By you</h3>
                              <br />
                              <h6>{description}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="my-4 mx-4">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header accordionHeading"
                      id="headingOne"
                    >
                      <button
                        className="accordion-button dropBtnNFt"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => {
                          setIsAboutCollectionActive(!isAboutCollectionActive);
                        }}
                      >
                        <i className="bi bi-list mr-2"></i> About Collection
                      </button>
                    </h2>
                    {isAboutCollectionActive && (
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse show`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="row dropRow">
                            <div className="dropRowBody">No Items Yet</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-4 mx-4">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header accordionHeading"
                      id="headingOne"
                    >
                      <button
                        className="accordion-button dropBtnNFt"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => {
                          setIsDetailsActive(!isDetailsActive);
                        }}
                      >
                        <i className="bi bi-card-list mr-2"></i> Details
                      </button>
                    </h2>
                    {isDetailsActive && (
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse show`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="row dropRow">
                            <div className="dropRowBody">No Items Yet</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mainCol">
              <section className=" row rowMainHeader">
                <div className="itemInfo">
                  <div className="itemCollectionDetail">
                    <a href="">
                      <div className="mainHeadingNft"> Untitled Collection</div>
                    </a>
                  </div>
                  <div className="toolbarWrapper">
                    <button className="buttonTool btnArrow">
                      <div>
                        <i className="bi bi-arrow-clockwise"></i>
                      </div>
                    </button>
                    <a href="" className="anchorTool">
                      <div>
                        <i className="bi bi-chevron-double-right"></i>
                      </div>
                    </a>
                    <button className="buttonTool">
                      <i className="bi bi-share-fill"></i>
                    </button>
                    <button className="buttonTool btnDots">
                      <i className="bi bi-three-dots-vertical"></i>
                    </button>
                  </div>
                </div>
                <h1>{name}</h1>
              </section>
              <section className=" row itemCounts">
                <div className="ownedByHeading">
                  <div className="ownedText">
                    Owned by
                    <a href="">
                      <span>you</span>
                    </a>
                  </div>
                </div>
              </section>
              <div className="itemFrameDrop">
                <div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2
                        className="accordion-header accordionHeading"
                        id="headingOne"
                      >
                        <button
                          className="accordion-button dropBtnNFt"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          onClick={() => {
                            setIsActive(!isActive);
                          }}
                        >
                          <i className="bi bi-bezier2 mr-2"></i> Price History
                        </button>
                      </h2>
                      {isActive && (
                        <div
                          id="collapseOne"
                          className={`accordion-collapse collapse show `}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="row dropRow">
                              <div className="dropRowHeader">
                                <div>
                                  <li className="nav-item dropdown dropTimeNft">
                                    <a
                                      className={`nav-link text-${
                                        props.mode === "dark" ? "light" : "dark"
                                      } px-3 dropdown-toggle`}
                                      to="/Explore"
                                      data-toggle="dropdown"
                                    >
                                      All Time
                                    </a>
                                    <ul
                                      className={`dropdown-menu bg-${
                                        props.mode === "dark" ? "dark" : "light"
                                      }`}
                                    >
                                      <li>
                                        <a
                                          className={`dropdown-item text-${
                                            props.mode === "dark"
                                              ? "light"
                                              : "dark"
                                          }`}
                                          to="/"
                                        >
                                          All NFTs
                                        </a>
                                      </li>
                                      <li className="dropdown-divider"></li>
                                      <li>
                                        <a
                                          className={`dropdown-item text-${
                                            props.mode === "dark"
                                              ? "light"
                                              : "dark"
                                          }`}
                                          to="/"
                                        >
                                          Art
                                        </a>
                                      </li>
                                      <li className="dropdown-divider"></li>
                                      <li>
                                        <a
                                          className={`dropdown-item text-${
                                            props.mode === "dark"
                                              ? "light"
                                              : "dark"
                                          }`}
                                          to="/"
                                        >
                                          Collectibles
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </div>
                              </div>
                              <div className="dropRowBody">No Items Yet</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2
                        className="accordion-header accordionHeading"
                        id="headingOne"
                      >
                        <button
                          className="accordion-button dropBtnNFt"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          onClick={() => {
                            setIsListingsActive(!isListingsActive);
                          }}
                        >
                          <i className="bi bi-tag-fill mr-2"></i> Listings
                        </button>
                      </h2>
                      {isListingsActive && (
                        <div
                          id="collapseOne"
                          className={`accordion-collapse collapse show`}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="row dropRow">
                              <div className="dropRowBody">No Items Yet</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2
                        className="accordion-header accordionHeading"
                        id="headingOne"
                      >
                        <button
                          className="accordion-button dropBtnNFt"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          onClick={() => {
                            setIsOffersActive(!isOffersActive);
                          }}
                        >
                          <i className="bi bi-list-ul mr-2"></i> Offers
                        </button>
                      </h2>
                      {isOffersActive && (
                        <div
                          id="collapseOne"
                          className={`accordion-collapse collapse show`}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="row dropRow">
                              <div className="dropRowBody">No Items Yet</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
