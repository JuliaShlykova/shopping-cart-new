import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import FullImg from './FullImg';
import { useDispatch } from 'react-redux';
import { addItem } from '../cartSlice';

const Product = ({title, description, image, price}) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState('');
  const [showDescription, setShowDescription] = useReducer(show=>!show, false);
  const [fullImgUrl, setFullImgUrl] = useState('');
  const dispatch = useDispatch();

  const buyItem = () => {
    setError('');
    if (quantity<=0) {
      setError('Quantity can\'t be less than 1');
    } else if (quantity>100) {
      setError('Quantity can\'t be more than 100');
    } else {
      dispatch(addItem({title, amount: quantity, price}));
      setQuantity(0);
    }
  }

  return (
    <>
    <div className='product-container'>
      <span className='product-title'>{title}</span>
      <img className="product-image" src={image} onClick={()=>setFullImgUrl(image)} alt="" />
      <button className='btn-show-description' onClick={()=>setShowDescription()}>{showDescription?'close':'open description'}</button>
      {showDescription
        ?<span className='product-description'>{description}</span>
        :null
      }
      <span className='product-price'>{price} $</span>
      <input name='quantity' type='number' value={quantity} onChange={e=>setQuantity(Number(e.target.value))} min={0} max={100} />
      {error?<span className='product-error'>{error}</span>:''}
      <button className='btn-buy-item' onClick={buyItem}>Buy</button>
    </div>
    {fullImgUrl?<FullImg imgUrl={fullImgUrl} setFullImgUrl={setFullImgUrl} />:null}
    </>
  )
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default Product