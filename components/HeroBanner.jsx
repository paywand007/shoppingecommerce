import React,{useEffect} from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

function HeroBanner({ heroBanner }) {
  
  const { t }=useTranslation()
 
  return (
    <div className='hero-banner-container  ml-[70px] small:flex-col small:m-0'>
      <div > 
      
        <h3 className='font-sans ' >{t("common:apmweb")}</h3>
        <p className='beats-solo'></p>
        
        <h1 className='text-black'>  </h1>
        <img
          src={urlFor(heroBanner.image)}
          alt='headphones'
          className='hero-banner-image'
        />
        <div>
          <Link
            href={`/computer/cooler-master-masterliquid-ml360l-argb-v2-white-edition`}
          >
            <button type='button text-abc'>{t("common:shopNow")}</button>
          </Link>
          <div className='desc'>
            <h5 >{t("common:desc")}</h5>
            <p>{t("common:desc1")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner