import './App.css';
import CardFront from './component/CardFront';
import CardBack from './component/CardBack';
import CardForm from './component/CardForm';
import CardAdd from './component/CardAdd';
import { useEffect, useState } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [cardDetail, setCardDetail] = useState({
    'card-holder-name': '',
    'card-number': '',
    'exp-month': '',
    'exp-year': '',
    'cvc': ''
  })

  const [error, setError] = useState({});
  const [isConfirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  const handleCardDetail = (name, value) => {
    setCardDetail((preDetail) => {
      if (name === 'card-number') {
        const i = value.replace(/\s/g, '');
        return { ...preDetail, [name]: format(i) }
      } else {
        return { ...preDetail, [name]: value }
      }
    })
  }

  function format(str) {
    if (str.length < 4) return str;
    else {
      let [fl, sl, tl, ftl, ...lstr] = str;
      lstr = lstr.reduce((acc, el, i) => (i % 4 ? acc[acc.length - 1] += el : acc.push(el), acc), []);
      return `${fl}${sl}${tl}${ftl} ${lstr.join(' ')}`.trim();
    }
  }

  const onConfirm = (e) => {
    e.preventDefault();
    setError(validateCardDetail(cardDetail));
    setConfirm(true);
  }

  useEffect(() => {
    if (Object.entries(error).length === 0 && isConfirm) {
      console.log('this is confirm');
      navigate("/cardAdd");
      setConfirm(false)
    }
  }, [error, navigate]);


  // const handleBackButton = (event) => {
  //   event.preventDefault();
  //   navigate(-1); // Navigate back using the history stack
  //   window.removeEventListener('popstate', handleBackButton);
  // }


  // window.addEventListener('popstate', handleBackButton);



  const validateCardDetail = (cardDetail) => {
    const error = {};

    const cardNumber = cardDetail['card-number'].split(' ').join('');
    console.log(typeof cardNumber)
    console.log(cardNumber.length)

    if (cardDetail['card-holder-name'] === '') {
      error['card-holder-name'] = 'Can\'t be blank'
    }

    if (cardDetail['card-number'] === '') {
      error['card-number'] = 'Can\'t be blank'
    } else if (isNaN(cardNumber)) {
      error['card-number'] = 'Wrong format, numbers Only'
    } else if (!(cardNumber.length === 16)) {
      error['card-number'] = 'card number should be 16 digit'
    }

    if (cardDetail['exp-month'] === '') {
      error['exp-month'] = 'Can\'t be blank';

    }

    if (cardDetail['exp-year'] === '') {
      error['exp-year'] = 'Can\'t be blank';
    }

    if (cardDetail['cvc'] === '') {
      error['cvc'] = 'Can\'t be blank';
    }
    return error;
  };


  return (
    <div className='container'>
      <div className='front-card'><CardFront cardDetail={cardDetail} /></div>
      <div className='back-card'><CardBack cardDetail={cardDetail} /></div>
      <div className='form-card'>
        <Routes>
          <Route path='/' element={<CardForm
            handleCardDetail={handleCardDetail}
            cardDetail={cardDetail}
            onConfirm={onConfirm}
            error={error}
          />} />
          <Route path='/cardAdd' element={<CardAdd />} />
        </Routes>
      </div>
    </div >
  )
}

export default App
