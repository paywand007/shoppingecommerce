import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import SecondHandProduct from '../../components/SecondHandProduct'
function Gaming({ sData }) {
  return (
    <div className='products-container   '>
      {sData?.map((sData, index) => (
        <SecondHandProduct key={index} sData={sData} />
      ))}
    </div>
  )
}
export const getServerSideProps = async () => {
  const mobileQuery = '*[_type == "secondhand"]'
  const sData = await client.fetch(mobileQuery)

  return {
    props: { sData },
  }
}

export default Gaming
