import React from 'react'
import { client, urlFor } from '../../lib/client'
export default function AboutUs({comData}) {
  
  return (
<div className='flex justify-center'>
 {comData.map((item,index)=>{
return <div key={index} className='w-[400px]'>
  <img   
  className='rounded'
 src={urlFor(item.image && item.image[0])}
 alt="paywand" />
 <h1>Paywand Mohammed</h1>
 <p>{item.details}</p>
</div>

 })}
</div>
  )
}
export const getServerSideProps = async () => {
  const mobileQuery = '*[_type == "newtest"]'
  const comData = await client.fetch(mobileQuery)

  return {
    props: { comData },
  }
}

