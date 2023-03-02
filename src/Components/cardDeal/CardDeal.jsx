import React from "react";
import './cardDeal.css';
import card from '../../assets/card.png';
import Container from '../container/Container';

export default function CardDeal() {
  return (
    <div className="cardDeal section_padding">
       {/* <div className="cardDeal-left_content">
        <h1>Find a better card deal in few easy steps.</h1>
        <p>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="bg-blue-gradient" type="button">Get Started</button>
      </div> */}
      
      <Container title="Find a better card deal in few easy steps." description="Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau." />

      <div className="cardDeal-image">
        <img src={card} alt="card" />
      </div>
    </div>
  );
}
