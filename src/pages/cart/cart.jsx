import React from 'react'
import { PRODUCTS } from '../../product'
import { useContext } from 'react'
import { shopContext } from '../../context/ShopContext'
import CartItem from "./cartItem"
import "./cart.css"
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cart, getTotal} = useContext(shopContext);
  const navigate = useNavigate();
  const total = getTotal();
  return ( (total !==0) ? (
    <div class="cart">
      <h1>Your cart items</h1>
      <div className='items'>
        {PRODUCTS.map((product) => {
          if (cart[product.id] !==0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      <div>Total: ${total}</div>
      <div className='cart-button'>
        <button onClick={() => {navigate("/")} }>Continue shopping</button>
        <button onClick={() => {navigate("/checkout")}}>Go to checkout</button>
      </div>
    </div>)
    : (
      <div class="cart">
        <h2>Your cart is empty</h2>
        <div className="cart-button">
          <button onClick={() => {navigate("/")} }>Shopping now</button>
        </div>
      </div>)
  )
}

export default Cart