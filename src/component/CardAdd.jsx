import React from 'react';
import completeLogo from '../assets/icon-complete.svg'
import './cardAdd.css'

function CardAdd() {
    return (
        <div className='card-added'>
            <img src={completeLogo} alt="" />
            <div>THANK YOU!</div>
            <div>We've added your card details</div>
            <button>Continue</button>
        </div>
    )
}

export default CardAdd
