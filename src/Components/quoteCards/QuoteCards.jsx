import React from 'react';
import './quoteCards.css';
import quotes from '../../assets/quotes.svg'
import people01 from '../../assets/people01.png'

export default function QuoteCards(props) {
  return (
    <div className='quote section_padding'>
        <div className='quote-head'>
        <img src={quotes} alt="not found" />
        <p>{props.text}</p>
        </div>
        <div className='quote-profile'>
            <div className='quote-profile-img'>
                <img src={props.image} alt="person" />
            </div>
            <div className='quote-profile-name'>
            <h3>{props.name}</h3>
            <p>{props.title}</p>
            </div>
        </div>
    </div>
  )
}
