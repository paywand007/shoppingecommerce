import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import  PhoneProduct  from '../../components/PhoneProduct'
 
function MobileTablet({ mobileData  }) {
  const [searchTerm,setSearchTerm]=useState('') 
  console.log(mobileData)
  return (
    <div className=' text-center'>
     <input type='text'
     onChange={(e)=>{setSearchTerm(e.target.value)}}
     className=' bg-gray-200 text-center text-black py-2 px-[40px] rounded mt-2' placeholder='Search here '/>
      <div className='products-container   '>
         {mobileData.filter((val)=>{
          if(searchTerm==''){
            return val
          }
          else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val
          }
         }).map((mobileData,index) => (
   <PhoneProduct key={index} mobileData={mobileData} />
     ))}
    
      </div>
    </div>
   
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
   