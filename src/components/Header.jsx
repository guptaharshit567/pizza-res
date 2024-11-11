import React from "react";
import truck from "../assets/truck.png";
import Pizza from "../assets/Pizza.png";
import RedVector from "../assets/RedVector.png";

const Header = () => {
  return (
    <div className="container">
      <div className="left">
        <img src={truck} alt="truck" />
        <h1>
          Discover the <span>Best</span> Food and Drinks
        </h1>
        <p>
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button>Explore Now!</button>
      </div>
      <div className="right">
        <img id="Pizza" src={Pizza} alt="Pizza" />
        <img id="Red" src={RedVector} alt="Vector" />
        <button className="get-in-touch">Get In Touch</button>
      </div>
    </div>
  );
};

export default Header;
