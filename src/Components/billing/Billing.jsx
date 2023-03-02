import React from "react";
import "./billing.css";
import bill from "../../assets/bill.png";
import apple from "../../assets/apple.svg";
import googlePlay from "../../assets/google.svg";

export default function Billing() {
  return (
    <div className="billing section_padding" id="">
      <div className="billing-image">
        <img src={bill} alt="billing-img" />

        {/* gradient start  */}
        <div className="gradient-start white__gradient"/>
        {/* gradient end */}
        <div className="gradient-end pink__gradient"/>
      </div>

      <div className="billing-content">
        <div className="billing-content-text">
          <h1>Easily control your billing & invoicing</h1>
          <p>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
        </div>
        <div className="billing-content-app-img">
          <img src={apple} alt="app store" />
          <img src={googlePlay} alt="google-play" />
        </div>
      </div>
    </div>
  );
}
