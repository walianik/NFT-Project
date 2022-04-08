import React, { useState } from "react";
import Tabs from "./Tabs";
import nft from "../Nft.json";
export default function Explore(props) {
  var array1 = nft;
  const [array2, setArray2] = useState(array1);
  return (
    <>
      <h1
        className={`exploreHeading my-5 text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        Explore Collections
      </h1>
      <div
        className="row mb-3"
        style={{ backgroundColor: props.mode === "light" ? "dark" : "light" }}
      >
        <Tabs className="tabs ">
          <div label="Trending">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Top">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Art">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Collectibles">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Domain Names">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Music">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Photography">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Sports">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Trading Cards">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Utility">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div label="Virtual Words">
            <div className="row nftsRowInExplore">
              {array2.map((element, tokenId) => {
                return (
                  <div className="col-md-4" key={tokenId}>
                    <div
                      className="card NFtCardExplore"
                      //style={{ width: "18rem" }}
                    >
                      <img
                        className="card-img-top"
                        src={element.image}
                        alt="No nft"
                      />
                      <div className="card-body NFtCardBodyExplore">
                        <h3 className="card-title">Name:{element.name}</h3>
                        <h6 className="card-text">TokenId:{element.tokenId}</h6>
                        <p className="card-text">Rating:{element.rating}</p>
                        <p className="card-text priceText">
                          Price:{element.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}
