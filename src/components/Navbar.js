import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = (props) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const value = localStorage.getItem("address");
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have metamask installed");
      return;
    } else {
      console.log("wallet exists");
    }
    const accounts = await ethereum.request({
      method: "eth_accounts",
    });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("found an authorized account", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized accounts found");
    }
  };
  useEffect(() => {
    checkWalletIsConnected();
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}
      >
        <Link
          className={`navbar-brand navbrand text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          to="/"
        >
          <img
            className="d-inline-block align-top mx-2"
            src={logo}
            width="30"
            height="30"
          />
          Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navmenu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <form className="form-inline my-2 my-lg-0 ml-auto ">
            <ul className="navbar-nav text-center">
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link navlinkColor text-${
                    props.mode === "dark" ? "light" : "dark"
                  } px-3 dropdown-toggle`}
                  to="/Explore"
                  data-toggle="dropdown"
                >
                  Explore
                </Link>
                <ul
                  className={`dropdown-menu bg-${
                    props.mode === "dark" ? "dark" : "light"
                  }`}
                >
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      All NFTs
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Art
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Collectibles
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Domain Names
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Music
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Photography
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Sports
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Trading Cards
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Utility
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Virtual Cards
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link navlinkColor px-3 dropdown-toggle text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="#"
                  data-toggle="dropdown"
                >
                  Stats
                </Link>
                <ul
                  className={`dropdown-menu bg-${
                    props.mode === "dark" ? "dark" : "light"
                  }`}
                >
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Rankings
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Activity
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link navlinkColor px-3 dropdown-toggle text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/"
                  data-toggle="dropdown"
                >
                  Resources
                </Link>
                <ul
                  className={`dropdown-menu bg-${
                    props.mode === "dark" ? "dark" : "light"
                  }`}
                >
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Help Centre
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Platform-status
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Partners
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Gas-free Marketplace
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Taxes
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      Docx
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      to="/"
                    >
                      NewsLetter
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link navlinkColor px-3 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  to="/CreatePage"
                >
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn px-4 dropdown-toggle NavIconButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <h3
                    className={`text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                  >
                    <i className="bi bi-person-circle"></i>
                  </h3>
                </button>
                <div
                  className={`dropdown-menu dropInNav bg-${
                    props.mode === "dark" ? "dark" : "light"
                  }`}
                >
                  <Link
                    className={`dropdown-item text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                    to="/Profile"
                  >
                    Profile
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className={`dropdown-item text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                    to="/MintingPage"
                  >
                    Favourites
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className={`dropdown-item text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                    to=""
                  >
                    Watchlist
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className={`dropdown-item text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                    to=""
                  >
                    My Collections
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className={`dropdown-item text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                    to=""
                  >
                    Setting
                  </Link>
                  <div className="dropdown-divider"></div>
                  <div className="form-check form-check-inline mx-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onClick={props.darkMode}
                    />
                    <label
                      className={`form-check-label text-${
                        props.mode === "dark" ? "light" : "dark"
                      }`}
                      htmlFor="inlineCheckbox1"
                    >
                      {props.darkModebtn}
                    </label>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn px-4 NavIconButton"
                  onClick={props.connectWalletHandler}
                >
                  <h3
                    className={`text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                  >
                    <i className="bi bi-wallet2"></i>
                  </h3>
                </button>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
