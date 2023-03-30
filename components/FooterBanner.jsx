import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  const { t }=useTranslation()

  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{t('common:discont')} {discount}</p>
          <h3>{t('common:largText1')}</h3>
          <h3>{t('common:largText2')}</h3>
          <p>{t('common:saleTime')}</p>
        </div>
        <div className='right'>
          
          <h3>{t("common:apmweb")}</h3>
          
          <p>{t('common:desc1')}</p>
          <Link
            href={`/computer/cooler-master-masterliquid-ml360l-argb-v2-white-edition`}
          >
            <button type='button text-abc'>{t("common:shopNow")}</button>
          </Link>
        </div>

        <img src={urlFor(image)} className='footer-banner-image' width='400' height={400} />
      </div>
    </div>
  )
}

export default FooterBanner
