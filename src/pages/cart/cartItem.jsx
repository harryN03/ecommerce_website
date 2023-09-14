import React from 'react'
import "./cart.css"
import { useContext } from 'react';
import { shopContext } from '../../context/ShopContext';

function CartItem(props) {
    const { cart, removeItem, addItem, updateItem} = useContext(shopContext)
    const {id, price , productImage, productName} =props.data;
  return (
        <div class="item">
            <img src={productImage} />
            <div className='description'>
                <div>{productName}</div>
                <div>${price}</div>
                <div className='count-btn'>
                    <button onClick={() => removeItem(id)}> - </button>
                    <input value={cart[id]} onChange={(event) => updateItem(Number(event.target.value), id)}/>
                    <button onClick={() => addItem(id)}> + </button>
                </div>
            </div>  
        </div>

  )
}

export default CartItem