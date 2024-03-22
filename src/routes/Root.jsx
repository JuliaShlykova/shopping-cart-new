import React, { useReducer } from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import CartContent from '../components/CartContent';

const Root = () => {
  const [showCartContent, toggleShowCartContent] = useReducer(show=>!show, false);

  return (
    <main onClick={() => {showCartContent?toggleShowCartContent():''}}>
      <Nav toggleShowCartContent={toggleShowCartContent}/>
      <Outlet />
      {showCartContent?<CartContent />:null}
    </main>
  )
}

export default Root