import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";

const Index = () => {
  return (
    <>
    <h1>Welcome to our fake store!</h1>
    <p>Feel free to add anything to the cart. You won't spend any money  any way :)</p>
    <div className="img-animation">
    <CiShoppingCart />
    <GiClothes />
    </div>
    </>
  )
}

export default Index