import React from 'react';
import './cardBack.css';


function CardBack({ cvc, cardDetail }) {
    return (
        <div className='card-back'>
            <div className='cv-number'>{cardDetail['cvc'] === '' ? `000` : cardDetail['cvc']}</div>
        </div>
    )
}

export default CardBack
