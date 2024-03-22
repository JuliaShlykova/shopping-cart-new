import React from 'react'
import { NavLink } from 'react-router-dom';
import BtnCart from './BtnCart';

const Nav = ({toggleShowCartContent}) => {

  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
      </nav>
      <BtnCart toggleShowCartContent={toggleShowCartContent} />
    </header>
  )
}

export default Nav