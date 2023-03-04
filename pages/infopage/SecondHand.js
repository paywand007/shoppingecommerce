import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
function SecondHand({ secondHand }) {
  // console.log(mobileData[0].image[0].asset._ref)

  return (
    <div className='products-container ' width={250} height={250}>
      {secondHand &&
        secondHand.map((data) => {
          console.log(data.image)
          return (
            <div className='product-card rounded w-[300px] h-[350px] items-center m-3 border-4'>
              <img
                src={urlFor(data.image && data.image[0])}
                width={250}
                height={250}
                className='product-image rounded w-[200px] h-[250px] items-center '
              />
              <p className='product-name border-t-[3px] text-center'>
                {data.name}
              </p>
              <p className='product-name text-center text-bold'>
                ${data.price}
              </p>
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
  const mobileQuery = '*[_type == "akam"]'
  const secondHand = await client.fetch(mobileQuery)

  return {
    props: { secondHand },
  }
}

export default SecondHand