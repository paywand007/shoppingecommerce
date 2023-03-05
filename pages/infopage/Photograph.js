import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import PhotoProduct from '../../components/PhotoProduct'
function Photograph({ photoData }) {
  return (
    <div className='products-container   '>
      {photoData?.map((photoData, index) => (
        <PhotoProduct key={index} photoData={photoData} />
      ))}
    </div>
  )
}
export const getServerSideProps = async () => {
  const mobileQuery = '*[_type == "photography"]'
  const photoData = await client.fetch(mobileQuery)

  return {
    props: { photoData },
  }
}

export default Photograph
