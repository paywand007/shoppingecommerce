import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
function TvStands({ TvData }) {
  // console.log(mobileData[0].image[0].asset._ref)

  return (
    <div className='products-container '>
      {TvData &&
        TvData.map((data) => {
          console.log(data.image)
          return (
            <div className='product-card rounded w-[300px] h-[350px] items-center m-3 border-4'>
              <img
                src={urlFor(data.image && data.image[0])}
                width={250}
                height={250}
                className='product-image'
              />
              <p className='product-name border-t-[3px]'>{data.name}</p>
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
  const mobileQuery = '*[_type == "Tv"]'
  const TvData = await client.fetch(mobileQuery)

  return {
    props: { TvData },
  }
}

export default TvStands