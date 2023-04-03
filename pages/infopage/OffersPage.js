import React from 'react'
import { client, urlFor } from '../../lib/client'
import OfferProduct from '../../components/OfferProduct'
function OffersPage({offerData}) {
  return (
    <div className='products-container   '>
        
        {offerData
     .map((offerData,index)=>{
       return (
              <OfferProduct key={index} offerData={offerData} />
   
       )
     })}
   
   
         </div>
  )
}
export const getServerSideProps = async () => {
    const mobileQuery = '*[_type == "offers"]'
    const offerData = await client.fetch(mobileQuery)
  
    return {
      props: { offerData },
    }
  }
export default OffersPage