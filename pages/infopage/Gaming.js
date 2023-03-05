import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import  GaimingProduct  from '../../components/GaimingProduct'
function Gaming({ gaimeData }) {
  
  return (
    <div className='products-container   '>
      {gaimeData?.map((gaimeData, index) => (
        <GaimingProduct key={index} gaimeData={gaimeData} />
      ))}
    </div>
  )
}
export const getServerSideProps = async () => {
  const mobileQuery = '*[_type == "gaiming"]'
  const gaimeData = await client.fetch(mobileQuery)

  return {
    props: { gaimeData },
  }
}

export default Gaming
