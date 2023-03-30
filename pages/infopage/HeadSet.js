import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
 import HeadsetProduct from '../../components/HeadsetProduct'
 import ReactPaginate from 'react-paginate';

function HeadSet({ HeadData }) {
   const [users,setUsers]=useState(HeadData.slice(0,50));
  const[pageNumber,setPageNumber]=useState(0);
  const usersPerPage=15;
  const pagesVisited=pageNumber * usersPerPage;
  const pageCount=Math.ceil(users.length /usersPerPage)

  const [searchTerm,setSearchTerm]=useState('') 
  console.log(HeadData)
  const handlePageClick=({selected})=>{
    setPageNumber(selected);

  }
  return (
    <div className=' text-center'>
     <input type='text'
     onChange={(e)=>{setSearchTerm(e.target.value)}}
     className=' bg-gray-200 text-center text-black py-2 px-[40px] rounded mt-2' placeholder='Search here '/>
      
      <div className='products-container   '>
        
        {users.filter((val)=>{
             if(searchTerm==''){
               return val
             }
             else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
               return val
             }
            }).slice(pagesVisited,pagesVisited+usersPerPage)
     .map((HeadData,index)=>{
       return (
              <HeadsetProduct key={index} HeadData={HeadData} />
   
       )
     })}
   
   
         </div>
         <div className='flex justify-center mt-5'>  <ReactPaginate
           breakLabel="..."
           nextLabel="next >"
           onPageChange={handlePageClick}
           pageRangeDisplayed={5}
           pageCount={pageCount}
           previousLabel="< previous"
           renderOnZeroPageCount={null}
           containerClassName={'paginationBttns '}
           previousLinkClassName={'previosBttn'}
           nextLinkClassName={'nextBttn'}
           disableInitialCallback={'paginationDisabled'}
           activeClassName={'paginationActive'}
         /></div>
       
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
