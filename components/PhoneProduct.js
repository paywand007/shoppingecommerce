import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link';
function PhoneProduct({ mobileData }) {
    const { image, name, slug, price } = mobileData;
 
  return (
    <div>
      <Link href={`/phone/${slug.current}`}>
        <div className='product-card w-[300px] h-[350px] text-center items-center m-3 border-4 rounded-lg'>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name truncate text-center '>Name: {name}</p>
          <p className='product-name'>Price: ${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default PhoneProduct