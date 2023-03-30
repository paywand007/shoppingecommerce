import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import  GaimingProduct  from '../../components/GaimingProduct'
function Gaming({ gaimeData }) {
  
  const [searchTerm,setSearchTerm]=useState('') 
  console.log(gaimeData)
  return (
    <div className=' text-center'>
     <input type='text'
     onChange={(e)=>{setSearchTerm(e.target.value)}}
     className=' bg-gray-200 text-center text-black py-2 px-[40px] rounded mt-2' placeholder='Search here '/>
      <div className='products-container   '>
         {gaimeData.filter((val)=>{
          if(searchTerm==''){
            return val
          }
          else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val
          }
         }).map((gaimeData, index) => (
        <GaimingProduct key={index} gaimeData={gaimeData} />
      ))}
    </div>
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