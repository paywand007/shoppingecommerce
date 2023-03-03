import React from 'react'
import { urlFor } from '../lib/client'

function PhoneProduct({ mobileData }) {
    const { image, name, slug, price } = mobileData;
 
  return (
    <div className='product-card'>
      <img src={urlFor( image[0]) }
        width={250}
        height={250}
        className='product-image'
      />

      <p className='product-name'>{name}</p>
      <p className='product-name'>${price}</p>
    </div>
  )
}

export default PhoneProduct