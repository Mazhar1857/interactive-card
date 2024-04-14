import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import './cardForm.css';

function CardForm({ handleCardDetail, error, cardDetail, onConfirm }) {

    const handleCardDetalils = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'card-holder-name':
                handleCardDetail(name, value);
                break;
            case 'card-number':
                if (value.length <= 19) {
                    handleCardDetail(name, value);
                }
                break;
            case 'exp-month':
                const keyCode = e.keyCode;
                if (keyCode === 8 && value.length === 1) {
                    handleCardDetail(name, '');
                } else if (value.length <= 2 && value <= 12 && value > 0) {
                    handleCardDetail(name, value);
                }
                break;
            case 'exp-year':
                if (value.length <= 2) {
                    handleCardDetail(name, value);
                }
                break;
            case 'cvc':
                if (value.length <= 3) {
                    handleCardDetail(name, value);
                }
                break;
        }
    }

    return (
        <>
            <form className='card-form' >
                <div className='form-cardholder-name'>
                    <label htmlFor="form-cardholder-name">CARDHOLDER NAME</label>
                    <input id='form-cardholder-name' type="text" name='card-holder-name' value={cardDetail['card-holder-name']} placeholder='e.g. Jane Appleseed' onChange={handleCardDetalils} />
                    <div className='error'>{error['card-holder-name']}</div>
                </div>
                <div className='form-card-number'>
                    <label htmlFor="form-card-number">CARD NUMBER</label>
                    <input id='form-card-number' type="text" placeholder='e.g. 1234 5678 9123 0000' name='card-number' value={cardDetail['card-number']} onChange={handleCardDetalils} />
                    <div className='error'>{error['card-number']}</div>
                </div>
                <div className='form-exp-cvc'>
                    <div className='form-exp-date'>
                        <label htmlFor='form-exp-date'>EXP. DATE (MM/YY)</label>
                        <div id='form-exp-date'>
                            <input type="text" placeholder='MM' name='exp-month' value={cardDetail['exp-month']} onChange={handleCardDetalils} onKeyDown={handleCardDetalils} />
                            <input type="text" placeholder='YY' name='exp-year' value={cardDetail['exp-year']} onChange={handleCardDetalils} />
                        </div>
                        <div className='error'>{error['exp-month'] || error['exp-year']}</div>
                    </div>
                    <div className='form-cvc'>
                        <label htmlFor="cvc">CVC</label>
                        <input id='cvc' type="text" name='cvc' value={cardDetail['cvc']} placeholder='e.g. 123' onChange={handleCardDetalils} />
                        <div className='error'>{error['cvc']}</div>
                    </div>
                </div>

                <button onClick={onConfirm}>Confirm</button>

            </form>
        </>
    )
}

export default CardForm
