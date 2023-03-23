import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
 import HeadsetProduct from '../../components/HeadsetProduct'

function HeadSet({ HeadData }) {
  const [searchTerm,setSearchTerm]=useState('') 
  console.log(HeadData)
  return (
    <div className=' text-center'>
     <input type='text'
     onChange={(e)=>{setSearchTerm(e.target.value)}}
     className=' bg-gray-200 text-center text-black py-2 px-[40px] rounded mt-2' placeholder='Search here '/>
      <div className='products-container   '>
         {HeadData.filter((val)=>{
          if(searchTerm==''){
            return val
          }
          else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val
          }
         }).map((HeadData, index) => (
          <HeadsetProduct key={index} HeadData={HeadData} />
        ))}
      </div>
    </div>
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
