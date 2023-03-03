import React from "react";
import './cardDeal.css';
import card from '../../assets/card.png';
import Container from '../container/Container';

export default function CardDeal() {
  return (
    <div className="cardDeal section_padding">
      
      <Container title="Find a better card deal in few easy steps." description="Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau." />

      <div className="cardDeal-image">
        <img src={card} alt="card" />
      </div>
    </div>
  );
}
