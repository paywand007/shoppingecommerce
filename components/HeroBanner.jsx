import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
function HeroBanner({ heroBanner }) {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'> {heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt='headphones'
          className='hero-banner-image'
        />
        <div>
          <Link
            href={`/computer/cooler-master-masterliquid-ml360l-argb-v2-white-edition`}
          >
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>DESCRPTION</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner