import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
 import {PhoneProduct} from '../../components/PhoneProduct'
function MobileTablet({ mobileData  }) {
  // console.log(mobileData[0].image[0].asset._ref)

  return (
    <div className='products-container '>
      {mobileData &&
        mobileData.map((data) => {
          console.log(data.image)
          return (
            <div className='product-card'>
              <img
                src={urlFor(data.image && data.image[0])}
                width={250}
                height={250}
                className='product-image'
              />
              <p className='product-name'>{data.name}</p>
              <p className='product-name'>${data.price}</p>
            </div>
            
          )
        })}
    </div>

    // <div className='products-container'>
    //   {mobileData?.map((mobileData) => (
    //     <PhoneProduct key={mobileData._id} mobileData={mobileData} />
    //   ))}
    // </div>
  )
}
export const getServerSideProps = async () => {
  const mobileQuery = '*[_type == "paywand"]'
  const mobileData = await client.fetch(mobileQuery)

  return {
    props: { mobileData },
  }
}

export default MobileTablet
   