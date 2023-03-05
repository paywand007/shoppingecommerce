import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import TvProduct from '../../components/TvProduct'
function Gaming({ tvData }) {
  return (
    <div className='products-container   '>
      {tvData?.map((tvData, index) => (
        <TvProduct key={index} tvData={tvData} />
      ))}
    </div>
  )
}
export const getServerSideProps = async () => {
  const mobileQuery = '*[_type == "Tv"]'
  const tvData = await client.fetch(mobileQuery)

  return {
    props: { tvData },
  }
}

export default Gaming
