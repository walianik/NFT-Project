import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Nft = () => {
  const { state } = useLocation();
  const { img, name } = state;
  console.log("data", img);
  console.log("name", name);
  const [show, setShow] = useState("hide");
  return (
    <div>
      <div>
        <div className="row topRowNFt">
          <span>
            <a href="" className="editNFt">
              Edit
            </a>
          </span>
          <span>
            <a href="" className="sellNFt">
              Sell
            </a>
          </span>
        </div>
        <div className="container itemContainer">
          <div className="row">
            <div className="summaryCol">
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
                <div className="accordion mx-3" id="accordionExample">
                  <div className="accordion-item itemDropNft">
                    <button
                      className=" accordionBtnNFt"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      onClick={() => {
                        setShow("show");
                      }}
                    >
                      Price History
                    </button>
                    <div
                      id="collapseOne"
                      className={`accordion-collapse collapse ${show}`}
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body bodyAccNft">
                        <div className="bodydrop1AccNft">
                          <div>
                            <div className="timeDropNFt">
                              <div className="dropdown">
                                <button
                                  className="btn btn-secondary dropdown-toggle btnDropTimeNFt"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Dropdown button
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
