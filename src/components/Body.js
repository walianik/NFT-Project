import { useNavigate } from "react-router-dom";
const Body = () => {
  let navigate = useNavigate();
  const explore = async () => {
    navigate("/Explore");
  };
  const create = async () => {
    navigate("/CreatePage");
  };
  return (
    <>
      <section className="backgroundContainer bg-img">
        <div className="row ">
          <div className="col-lg-6 px-4">
            <h1 className="mt-5">
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <h3 className="my-2">
              OpenSea is the world's first and largest NFT marketplace
            </h3>
            <button
              className="btn btn-primary m-2 exploreButton"
              onClick={explore}
            >
              Explore
            </button>
            <button
              className="btn btn-outline-primary m-2 createButton"
              onClick={create}
            >
              Create
            </button>
          </div>
          <div className="col-lg-6 my-3">
            <div className="card cardOfImage">
              <img
                className="card-img-top imageCard"
                src="https://lh3.googleusercontent.com/u8LQiz9qzp3I1Hc-deLgdDYPFYA0J8ZKQQmxBh5vamFuHOy7OxnL6n5x8EEug6tIB3L3-ZKMFLKQrEoXNN9P4jP-PsW7EgpdC70M=s250"
                alt="No nft"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
