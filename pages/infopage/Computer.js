import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import ComProduct from '../../components/ComProduct'

function Computer({ comData }) {
  const [searchTerm,setSearchTerm]=useState('') 
  console.log(comData)
  return (
    <div className=' text-center'>
     <input type='text'
     onChange={(e)=>{setSearchTerm(e.target.value)}}
     className=' bg-gray-200 text-center text-black py-2 px-[40px] rounded mt-2' placeholder='Search here '/>
      <div className='products-container   '>
         {comData.filter((val)=>{
          if(searchTerm==''){
            return val
          }
          else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val
          }
         }).map((comData, index) => (
          <ComProduct key={index} comData={comData} />
        ))}
      </div>
    </div>
  )
}
export const getServerSideProps = async () => {
  const mobileQuery = '*[_type == "computer"]'
  const comData = await client.fetch(mobileQuery)

  return {
    props: { comData },
  }
}

export default Computer
