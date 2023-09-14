import { queryAllByPlaceholderText } from '@testing-library/react';
import React, {useContext} from 'react'
import "./product.css"
import { shopContext } from '../../context/ShopContext';
function Product(props) {
    const {id, productName, price, productImage} = props.data;
    const {addItem, cart} = useContext(shopContext)
  return (
    <div className="product">
        <img src={productImage} />
        <div className='name'>{productName}</div>
        <div className='price'>${price}</div>
        <button className='addToCartBtn' onClick={()=>addItem(id)}>Add to cart {cart[id]>0 ? <>({cart[id]})</> : ""}</button>
    </div>
  )
}

export default Product