import React from "react";
import "./home.css";
import discount from "../../assets/Discount.svg";
import robot from '../../assets/robot.png'

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="home-content-discount_stript bg-discount-gradient">
          <img src={discount} alt="discount png" />
          <p>
        20% Discount for 1 Month Account
          </p>
        </div>
        <div className="home-content-heading">
          <h1>
            The Next
            <br />
            <span className="text-gradient">Generation</span> <br />
            Payment Method
          </h1>
        </div>
        <div className="home-content-paragraph">
            <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
        </div>
      </div>
      <div className="home-image">
        <img src={robot} alt="robot Image" />
        <div className="gradient-start pink__gradient"/>
        <div className="gradient-mid white__gradient"/>
        <div className="gradient-end blue__gradient"/>
      </div>
    </div>
  );
}
