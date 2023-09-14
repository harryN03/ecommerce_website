import React from 'react'
import {PRODUCTS } from "../../product"
import Product from "./product"
import Footer from '../../components/footer'
function Shop() {
  return (
    <div>
      <div className='products'>
        {PRODUCTS.map((product) => 
          <Product data={product}/> )}
      </div>
      <Footer />
    </div>
  )
}

export default Shop