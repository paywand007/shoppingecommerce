import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import  PhoneProduct  from '../../components/PhoneProduct'
 
function MobileTablet({ mobileData  }) {
  

  return (
    <>
     
      <div className='products-container   '>
         {mobileData?.map((mobileData,index) => (
   <PhoneProduct key={index} mobileData={mobileData} />
     ))}
    
      </div>
    </>
   
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
   