import React from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { selectAmount } from '../cartSlice';

const BtnCart = ({toggleShowCartContent}) => {
  let count = useSelector(selectAmount);

  return (
    <button id='header-btn-cart' onClick={toggleShowCartContent}>
    <span className='visually-hidden'>Your cart</span> {/*for accessibility purpose*/}
    <span>{count}</span>
    <GiShoppingCart aria-hidden='true' focusable='false' />
    </button>
  )
}

export default BtnCart