import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
function HeadsetProduct({ comData }) {
  const { image, name, slug, price } = comData

  return (
    <div>
      <Link href={`/computer/${slug.current}`}>
        <div className='product-card w-[300px] h-[350px] items-center m-3 border-4 rounded-lg'>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-name'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default HeadsetProduct
