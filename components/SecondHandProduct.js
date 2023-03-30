import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link'
function SecondHandProduct({ sData }) {
  const { image, name, slug, price } = sData

  return (
    <div>
      <Link href={`/secondHand/${slug.current}`}>
        <div className='product-card w-[300px] h-[350px] items-center m-3 border-4 rounded-lg'>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name truncate  '>{name}</p>
          <p className='product-name'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default SecondHandProduct