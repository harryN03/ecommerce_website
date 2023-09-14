import React, {createContext, useState} from 'react'
import { PRODUCTS } from '../product';

export const shopContext = createContext();

const defaultCart = () => {
    let cart={}
    for (let i=0; i<PRODUCTS.length; i++) {
        cart[PRODUCTS[i].id]=0
    }
    return cart
}

function ShopContext(props) {
    const [cart,setCart] =useState(defaultCart())
    const addItem = (id) => {
        setCart((prev) => ({...prev, [id]: prev[id] +1}))
    }

    const removeItem = (id) => {
        setCart((prev) => ({...prev, [id]: prev[id] - 1}))
    }
    const updateItem = (amount, id) => {
        if (amount<0) {
            setCart((prev) => ({...prev, [id]: amount}))
        }
        else {setCart((prev) => ({...prev, [id]: amount}))}
    }

    const getTotal = () => {
        let total = 0;
        for (let item in cart) {
            if (cart[item] !=0) {
                total += cart[item]*PRODUCTS.find((product) => product.id == item).price
            }
        }
        return total
    }
  return (
    <shopContext.Provider value={{cart,addItem, removeItem, updateItem, getTotal}}>
        {props.children}
    </shopContext.Provider>
  )
}

export default ShopContext