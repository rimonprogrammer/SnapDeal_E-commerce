import React from 'react'
import { Link } from 'react-router-dom'

function AmountToggle({addToCart, amount, SetIncrements, SetDecrease, singleProduct, id}) {
  return (
    <div>
        <div className='d-flex align-items-center'>
            <button className='btn p-4 fs-3 quantity' onClick={SetDecrease}>-</button>
            <p className='pt-3'>{amount}</p>
            <button className='btn p-4 fs-3 quantity' onClick={SetIncrements}>+</button>
        </div>
        <Link to='/Cart' onClick={()=> addToCart(id, amount, singleProduct)}>
            <button className='mt-2 add-to-cart'>Add to cart</button>
        </Link>
    </div>
  )
}

export default AmountToggle;