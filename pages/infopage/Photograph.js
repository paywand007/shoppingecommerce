import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import PhotoProduct from '../../components/PhotoProduct'
function Photograph({ photoData }) {
  const [searchTerm,setSearchTerm]=useState('') 
  console.log(photoData)
  return (
    <div className=' text-center'>
     <input type='text'
     onChange={(e)=>{setSearchTerm(e.target.value)}}
     className=' bg-gray-200 text-center text-black py-2 px-[40px] rounded mt-2' placeholder='Search here '/>
      <div className='products-container   '>
         {photoData.filter((val)=>{
          if(searchTerm==''){
            return val
          }
          else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val
          }
         }).map((photoData, index) => (
        <PhotoProduct key={index} photoData={photoData} />
      ))}
    </div>
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
