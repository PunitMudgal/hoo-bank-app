import React from "react";
import "./cta.css";

export default function CTA() {
  return (
    <div className="cta section_margin">
      <div className="cta-content">
        <h1>Let's try our service now!</h1>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planey.
        </p>
      </div>
      <div className="cta-btn">
        <button className="bg-blue-gradient" type="button">
          Get Started
        </button>
      </div>
    </div>
  );
}
