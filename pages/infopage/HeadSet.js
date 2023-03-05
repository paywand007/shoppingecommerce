import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
 import HeadsetProduct from '../../components/HeadsetProduct'

function HeadSet({ HeadData }) {
  return (
    <>
      {/* <div className='flex justify-center'>
        <input type='text' className='w-[45 0px] h-[50px] border-collapse' />
      </div> */}
      <div className='products-container   '>
        {HeadData?.map((HeadData, index) => (
          <HeadsetProduct key={index} HeadData={HeadData} />
        ))}
      </div>
    </>
  )
}
export const getServerSideProps = async () => {
  const mobileQuery = '*[_type == "Headset"]'
  const HeadData = await client.fetch(mobileQuery)

  return {
    props: { HeadData },
  }
}

export default HeadSet
