import React from 'react'

import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'
import useTranslation from 'next-translate/useTranslation'
const Home = ({ products, bannerData  }) => {
  const { t }=useTranslation()

 return ( <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    {console.log(bannerData)}
    {/* {console.log(products)} */}
  
    <div className='products-heading'>
      <h2>{t("common:bestsell")}</h2>
      <p>{t("common:mostrating")}</p>
    </div>

    <div className='products-container'>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />

  </div>
)}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData  },
  }
}

export default Home