import React, { useReducer, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from '../components/Product';
import FullImg from '../components/FullImg';

const Shop = () => {
  const {items} = useLoaderData();

  return (
    <section id='shop-container'>
      {items.map((item)=><Product key={item.id} title={item.title} description={item.description} image={item.image} price={item.price} />)}
    </section>
  )
}

export default Shop