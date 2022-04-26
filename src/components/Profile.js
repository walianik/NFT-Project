import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";
import nft from "../Nft.json";
import Spinner from "./Spinner";
import axios from "axios";
import { useEffect } from "react";
export default function Profile(props) {
  let navigate = useNavigate();
  const [addressBox, setAddressBox] = useState("Copy");
  const [collectedCount, setCollectedCount] = useState(0);
  const [data, setData] = useState([]);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value, setValue] = useState(false);
  const [loading, setLoading] = useState(false);
  var array1 = nft;
  const [array2, setArray2] = useState(array1);
  const Address = localStorage.getItem("address");
  const accessToken = localStorage.getItem("auth-token");
  const apiUrl = "localhost:5000/v1/";
  var d = Date(Date.now());
  d.toString();
  if (Address !== null) {
    if (Address.length > 10) {
      var address =
        Address.substring(0, 6) + "...." + Address.substring(37, 42);
    }
  }
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  useEffect(() => {
    authAxios
      .get("http://localhost:5000/v1/nft")
      .then((res) => {
        setLoading(true);
        let resultData = res.data.results;
        console.log("data got in profile", resultData);
        setData(resultData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const copyAddress = async () => {
    await navigator.clipboard.writeText(Address);
    setAddressBox("Copied");
  };
  //Filter
  const sort = (data) => {
    var array = data.filter(function (item) {
      return item.rating > 4;
    });
    return array;
  };

  const onChange1 = (event) => {
    setValue1(event.target.value);
  };
  const onChange2 = (event) => {
    setValue2(event.target.value);
  };
  const sortOnPrice = (data) => {
    var array = data.filter(function (item) {
      console.log("inside sort on price");
      return value2 >= item.price && item.price >= value1;
    });
    return array;
  };
  const checkValue = async () => {
    if (value === true || value === "on") {
      console.log("in if");
      setValue(false);
    } else if (value === false || value === "off") {
      console.log("in else if");
      setValue(true);
    }
  };
  const filter = async () => {
    let tempData = array1;
    if (value && value === true) {
      tempData = sort(tempData);
    }
    if (value2 !== null && value2 !== "" && value1 !== null && value1 !== "") {
      tempData = sortOnPrice(tempData);
    }
    setArray2(tempData);
  };
  useEffect(() => {
    setCollectedCount(data.length);
  });
  const Call = () => {
    console.log("got", Address);
    if (Address !== null) {
      return (
        <div
          className={`card profileCard bg-${
            props.mode === "light" ? "light" : "dark"
          }`}
        >
          {loading && <Spinner />}
          <div className="card-img-top imageCardProfile" alt="Card image cap" />
          <div className="card-body cardBodyProfile">
            <div className="row profileImageRow">
              <img
                src="https://images.unsplash.com/photo-1646635142090-f535f5977655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="profileImage"
                alt=""
              />
            </div>
            <div className="row contentRowProfile">
              <div className="row headingRow">
                <div
                  className={`nameProfile text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                >
                  Unnamed
                </div>
              </div>
              <div className="row headingRow">
                <div
                  className="AddressProfile"
                  id="addressBox"
                  onClick={copyAddress}
                >
                  {address}
                </div>
              </div>
              <div className="row headingRow">
                <h4
                  className={`text-${props.mode === "dark" ? "light" : "dark"}`}
                >
                  {d}
                </h4>
              </div>
            </div>
            <div>
              <ul className="nav nav-tabs TabsProfile">
                <li className="nav-item ">
                  <a
                    href="#Collected"
                    className="nav-link navItemProfile"
                    data-toggle="tab"
                  >
                    <i className="bi bi-file-earmark-plus Iconinprofile"></i>
                    Collected
                    <span className="spanUnderProfile">{collectedCount}</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#Created"
                    className="nav-link navItemProfile"
                    data-toggle="tab"
                  >
                    <i className="bi bi-align-top Iconinprofile"></i>
                    Created
                    <span className="spanUnderProfile">0</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#Favorited"
                    className="nav-link navItemProfile"
                    data-toggle="tab"
                  >
                    <i className="bi bi-heart Iconinprofile"></i>
                    Favorited
                    <span className="spanUnderProfile">0</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#Hidden"
                    className="nav-link navItemProfile"
                    data-toggle="tab"
                  >
                    <i className="bi bi-eye-slash-fill Iconinprofile"></i>
                    Hidden
                    <span className="spanUnderProfile">0</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#Activity"
                    className="nav-link navItemProfile"
                    data-toggle="tab"
                  >
                    <i className="bi bi-arrow-counterclockwise Iconinprofile"></i>
                    Activity
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link navItemProfile dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="bi bi-list-ul Iconinprofile"></i>
                    Offers
                    <i className="bi bi-caret-down-fill ml-3"></i>
                  </a>
                  <div className="dropdown-menu dropdownMenuprofile">
                    <a href="#" className="dropdown-item">
                      <i className="bi bi-arrow-down-left Iconinprofile"></i>
                      Offers Recieved
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                      <i className="bi bi-arrow-up-right Iconinprofile"></i>
                      Offers Made
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link navItemProfile dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="bi bi-tag-fill Iconinprofile"></i>
                    Listings
                    <i className="bi bi-caret-down-fill ml-3"></i>
                  </a>
                  <div className="dropdown-menu ">
                    <a href="#" className="dropdown-item">
                      <i className="bi bi-list-check Iconinprofile"></i>
                      Active
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                      <i className="bi bi-info-circle Iconinprofile"></i>
                      Inactive
                    </a>
                  </div>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="Collected">
                  <br />
                  <div className="row">
                    <div className="col-lg-3">
                      <div id="accordion" className="filterAccordion">
                        <button
                          className="btn btn-link filterHeading"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Filters
                        </button>
                        <hr />
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="row internalFilterRow">
                            <input
                              type="checkbox"
                              // value={value}
                              // onClick={checkValue}
                            />
                            <label
                              className="form-check-label filterLabelRating"
                              htmlFor="flexCheckDefault"
                            >
                              rating greater than 4
                            </label>
                          </div>
                          <hr />
                          <div className="row my-2 ">
                            <input
                              className="inputCol"
                              value={value1}
                              onChange={onChange1}
                            ></input>
                            <input
                              className="inputCol2"
                              value={value2}
                              onChange={onChange2}
                            ></input>
                          </div>
                          <div className="row my-3">
                            <button
                              className="btn btn-primary"
                              onClick={filter}
                            >
                              Apply filters
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <input
                          className="inputInProfile"
                          placeholder="Search"
                        />
                        <input
                          className="inputInProfile"
                          placeholder="Single Items"
                        />
                        <input
                          className="inputInProfile"
                          placeholder="Recently Recieved"
                        />
                      </div>
                      <div className="row my-5">
                        {data.map((element, tokenId) => {
                          return (
                            <div
                              className="col-md-4 nftColProfile"
                              key={tokenId}
                            >
                              <div
                                className="card NFtCardProfile m-2"
                                onClick={() => {
                                  navigate("/Nft", {
                                    state: {
                                      img: element.img,
                                      name: element.nftName,
                                      description: element.description,
                                      nftId: element.id,
                                    },
                                  });
                                  console.log(element);
                                }}
                              >
                                <img
                                  className="card-img-top"
                                  src={element.img}
                                  alt="No nft"
                                />
                                <div className="card-body NFtCardBodyExplore">
                                  <h3 className="card-title">
                                    Name:{element.nftName}
                                  </h3>
                                  <h6 className="card-text">
                                    description:{element.description}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="Created">
                  <br />
                  <div className="row">
                    <div className="col-lg-3">
                      <div id="accordion" className="filterAccordion">
                        <button
                          className="btn btn-link filterHeading"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Filters
                        </button>
                        <hr />
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="row internalFilterRow">
                            <input
                              type="checkbox"
                              value={value}
                              onChange={checkValue}
                            />
                            <label
                              className="form-check-label filterLabelRating"
                              htmlFor="flexCheckDefault"
                            >
                              rating greater than 4
                            </label>
                          </div>
                          <hr />
                          <div className="row my-2 ">
                            <input
                              className="inputCol"
                              value={value1}
                              onChange={onChange1}
                            ></input>
                            <input
                              className="inputCol2"
                              value={value2}
                              onChange={onChange2}
                            ></input>
                          </div>
                          <div className="row my-3">
                            <button
                              className="btn btn-primary"
                              onClick={filter}
                            >
                              Apply filters
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <input
                          className="inputInProfile"
                          placeholder="Search"
                        />
                        <input
                          className="inputInProfile"
                          placeholder="Single Items"
                        />
                        <input
                          className="inputInProfile"
                          placeholder="Recently Recieved"
                        />
                      </div>
                      <div className="row profileCollectedRow">
                        <div
                          className="profileCollected"
                          placeholder="No Items to display"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="Favorited">
                  <br />
                  <div className="row profileCollectedRow">
                    <input
                      type=""
                      className="profileCollected"
                      placeholder="You have not favorited any items yet"
                    />
                  </div>
                </div>
                <div className="tab-pane" id="Hidden">
                  <br />
                  <div className="row">
                    <div className="col-lg-3">
                      <div id="accordion" className="filterAccordion">
                        <button
                          className="btn btn-link filterHeading"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Filters
                        </button>
                        <hr />
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="row internalFilterRow">
                            <input
                              type="checkbox"
                              value={value}
                              onChange={checkValue}
                            />
                            <label
                              className="form-check-label filterLabelRating"
                              htmlFor="flexCheckDefault"
                            >
                              rating greater than 4
                            </label>
                          </div>
                          <hr />
                          <div className="row my-2 ">
                            <input
                              className="inputCol"
                              value={value1}
                              onChange={onChange1}
                            ></input>
                            <input
                              className="inputCol2"
                              value={value2}
                              onChange={onChange2}
                            ></input>
                          </div>
                          <div className="row my-3">
                            <button
                              className="btn btn-primary"
                              onClick={filter}
                            >
                              Apply filters
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <input
                          className="inputInProfile"
                          placeholder="Search"
                        />
                        <input
                          className="inputInProfile"
                          placeholder="Single Items"
                        />
                        <input
                          className="inputInProfile"
                          placeholder="Recently Recieved"
                        />
                      </div>
                      <div className="row profileCollectedRow">
                        <input
                          className="profileCollected"
                          placeholder="No Items to display"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="Activity">
                  <br />
                  <div className="row">
                    <div className="col-lg-3 my-4">
                      <div id="accordion" className="filterAccordion">
                        <button
                          className="btn btn-link filterHeading"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Filters
                        </button>
                        <hr />
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="row internalFilterRow">
                            <input
                              type="checkbox"
                              value={value}
                              onChange={checkValue}
                            />
                            <label
                              className="form-check-label filterLabelRating"
                              htmlFor="flexCheckDefault"
                            >
                              rating greater than 4
                            </label>
                          </div>
                          <hr />
                          <div className="row my-2 ">
                            <input
                              className="inputCol"
                              value={value1}
                              onChange={onChange1}
                            ></input>
                            <input
                              className="inputCol2"
                              value={value2}
                              onChange={onChange2}
                            ></input>
                          </div>
                          <div className="row my-3">
                            <button
                              className="btn btn-primary"
                              onClick={filter}
                            >
                              Apply filters
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row profileCollectedRow">
                        <input
                          type="text"
                          className="profileCollected "
                          placeholder="No Trading History"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              className="btn btn-outline-primary my-3"
              onClick={props.connectWalletHandler}
            >
              Connect to Metamask
            </button>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <Call />
    </div>
  );
}
