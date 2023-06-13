import React from "react";
import Video from "../assets/mp4/Video.mp4";
import "../style/Loading.css";

const Loading = () => {
  
  return (
    <>
      <div className="loading">
        <div className="loading-items">
          <div className="loading-item-mp4">
            <video autoPlay loop muted>
              <source src={Video} type="video/mp4" />
            </video>
            <h3 className="text-box">Welcome to my World!</h3>
          </div>
          <p>Wait...</p>
          <span className="load"></span>
        </div>
      </div>
    </>
  );
};

export default Loading;
