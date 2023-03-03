import React from 'react';
import './brand.css';
import airbnb from '../../assets/airbnb.png'
import binance from '../../assets/binance.png'
import coinbase from '../../assets/coinbase.png'
import dropbox from '../../assets/dropbox.png'


export default function Brand() {
  return (
    <div className='brand section_padding'>
        <div className='brand-image-1'>
        <img src={airbnb} alt="brand" />
        <img src={binance} alt="brand" />
        </div>
        <div className='brand-image-2'>
        <img src={coinbase} alt="brand" />
        <img src={dropbox} alt="brand" />
        </div>
    </div>
  )
}
