import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, selectCart } from '../cartSlice';
import { CiTrash } from "react-icons/ci";

const CartContent = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div id='cart-content' onClick={e=>e.stopPropagation()}>
      <h1>In your cart: </h1>
      {cart.length
      ?<><table>
      <thead>
        <tr>
        <th>Item</th>
        <th>Amount</th>
        <th>Sum</th>
        <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, i) => {
          return (
            <tr key={i}>
            <td>{item.title}</td>
            <td>{item.amount}</td>
            <td>{item.amount*item.price} $</td>
            <td onClick={() => {dispatch(removeItem(item.title))}}><CiTrash /></td>
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={2}>Total Sum:</th>
          <th>{cart.reduce((sum, item) => sum+item.amount*item.price,0)} $</th>
        </tr>
      </tfoot>
      </table>
      <button>Pay now</button>
      </>
      :<span>Empty</span>}
    </div>
  )
}

export default CartContent