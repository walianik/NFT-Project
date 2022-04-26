import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const SellNft = () => {
  //   const { state } = useLocation();
  //   const { name, description } = state;
  //   console.log(name);
  const { state } = useLocation();

  const { img, name, description } = state;
  return (
    <div>
      <div className="row topRowNFt"></div>
      <div>
        <div className="fresContainer">
          <div className="row fresContainerRow">
            <div className="col">
              <form action="">
                <h1 className="saleHeading">List item for sale</h1>
                <div className="chooseType">
                  <div className="typeHeading">
                    <label className="typeLabel">
                      <div className="typeLabeldiv">
                        Type
                        <i className="bi bi-info-circle infoIcon"></i>
                      </div>
                    </label>
                  </div>
                  <div className="chooseBtn">
                    <button className="fixedPriceBtn">
                      <div className="fixedBtnInner">
                        <i className="bi bi-coin dollarIcon"></i>
                      </div>
                      Fixed Price
                    </button>
                    <button className="timedAuctionBtn">
                      <div className="fixedBtnInner">
                        <i className="bi bi-clock-fill"></i>
                      </div>
                      Timed Auction
                    </button>
                  </div>
                </div>
                <div className="priceType">
                  <div className="priceTypeInner">
                    <div className="priceTypeHeading">
                      <label className="typeLabel">
                        <div className="typeLabeldiv">
                          Price
                          <i className="bi bi-info-circle infoIcon"></i>
                        </div>
                      </label>
                    </div>
                    <div className="priceTypeBody">
                      <div className="priceTypeBodyInnerdiv">
                        <div className="priceTypeInnerDiv">
                          <div className="chooseMethPrice">
                            <div className="chooseCurrencyPrice">
                              <div className="chooseCurrencyPriceInnerdiv">
                                <img
                                  src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                                  alt=""
                                  className="imageEth"
                                />
                              </div>
                            </div>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="chooseCurrencyPriceInput"
                            />
                          </div>
                          <div className="enterAmountChoosePrice">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Amount"
                              className="enterAmountChoosePriceInput"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="durationType">
                  <div className="durationTypeInner">
                    <div className="durationTypeHeading">
                      <label className="typeLabel">
                        <div className="typeLabeldiv">Duration</div>
                      </label>
                    </div>
                    <button className="durationBtn">
                      <div className="durationBtnInner">
                        <i className="bi bi-calendar calenderIconDuration"></i>
                      </div>
                      <div className="durationBtnInnerText">1 Month</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col rightCol">
              <div className="previewInnerCol">
                <h1 className="previewHeading">Preview</h1>
                <div className="previewImage">
                  <div className="previewHeadingBody">
                    <div className="previewHeaddiff">
                      <div className="blankDivPreview"></div>
                      <div className="blanlDivPreview"></div>
                    </div>
                  </div>
                  <div className="articleImgPreview">
                    <div className="articleInner">
                      <div className="articleImgInner">
                        <div className="imgArticleInner">
                          <img src={img} alt="" className="imageTagPreview" />
                        </div>
                      </div>
                    </div>
                    <div className="collectionNamePreview">
                      <div className="collectionPreviewInner">
                        <div className="collectionPreviewInnerDiv1">
                          <div className="collectionPreviewInnerDiv1Inner">
                            <a
                              href=""
                              className="collectionPreviewInnerDiv1InnerAnchor"
                            >
                              <div className="anchorText">
                                Untitled Collection
                              </div>
                            </a>
                          </div>
                          <div className="collectionFooter">
                            <div className="collectionNftname">{name}</div>
                          </div>
                        </div>
                        <div className="collectionPreviewInnerDiv2">
                          <span className="priceTextCollectionPreview">
                            Price
                          </span>
                          <span className="collectionEthereumSymbol">
                            <div className="spancollectionEthereumSymbol">
                              <div className="symbolEtherColl">
                                <div className="symbolEther">
                                  <img
                                    src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg"
                                    alt=""
                                    className="imgEtherSymbol"
                                  />
                                </div>
                              </div>
                              <div className="priceTag"></div>
                            </div>
                          </span>
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

export default SellNft;
