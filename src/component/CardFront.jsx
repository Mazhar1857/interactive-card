import React from 'react';
import './cardFront.css';
import cardLogo from '../assets/card-logo.svg';
import iconComplete from '../assets/icon-complete.svg';

function CardFront({ cardNumber, cardHolderName, expMonth, expYear, cardDetail }) {
    return (
        <div className='card-front'>
            <img className='front-card-logo' src={cardLogo} alt="" />
            <div className='card-number'>{cardDetail['card-number'] === '' ? `0000 0000 0000 0000` : cardDetail['card-number']}</div>
            <div>
                <div className='cardholder-name'>{cardDetail['card-holder-name'] === '' ? `JANE APPLESEED` : cardDetail['card-holder-name']}</div>
                <div className='exp-date'>{cardDetail['exp-month'] === '' ? `00` : cardDetail['exp-month']}/{cardDetail['exp-year'] === '' ? `00` : cardDetail['exp-year']}</div>
            </div>
        </div>
    )
}
export default CardFront
