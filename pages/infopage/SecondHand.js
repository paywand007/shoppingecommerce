 

import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import SecondHandProduct from '../../components/SecondHandProduct'
import ReactPaginate from 'react-paginate';

function Gaming({ sData }) {
  const [users,setUsers]=useState(sData.slice(0,50));
 const[pageNumber,setPageNumber]=useState(0);
 const usersPerPage=15;
 const pagesVisited=pageNumber * usersPerPage;
 const pageCount=Math.ceil(users.length /usersPerPage)

 const [searchTerm,setSearchTerm]=useState('') 
 console.log(sData)
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
    .map((sData,index)=>{
      return (
             <SecondHandProduct key={index} sData={sData} />
  
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
  const mobileQuery = '*[_type == "secondhand"]'
  const sData = await client.fetch(mobileQuery)

  return {
    props: { sData },
  }
}

export default Gaming
