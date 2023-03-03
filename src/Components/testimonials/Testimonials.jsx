import React from "react";
import "./testimonials.css";
import { people } from "../Data";
import QuoteCards from "../quoteCards/QuoteCards";

export default function Testimonials() {
  return (
    <div className="testi section_padding">
      <div className="testi-text">
        <h1>What People are saying about us</h1>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="testi-quote">
        {people.map((card) => (
          <QuoteCards
            key={card.id}
            title={card.title}
            text={card.text}
            name={card.name}
            image={card.img}
          />
        ))}
      </div>
    </div>
  );
}
