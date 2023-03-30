import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import TvProduct from '../../components/TvProduct'
import ReactPaginate from 'react-paginate';

function Gaming({ tvData }) {
  const [users,setUsers]=useState(tvData.slice(0,50));
 const[pageNumber,setPageNumber]=useState(0);
 const usersPerPage=15;
 const pagesVisited=pageNumber * usersPerPage;
 const pageCount=Math.ceil(users.length /usersPerPage)

 const [searchTerm,setSearchTerm]=useState('') 
 console.log(tvData)
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
    .map((tvData,index)=>{
      return (
             <TvProduct key={index} tvData={tvData} />
  
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
  const mobileQuery = '*[_type == "Tv"]'
  const tvData = await client.fetch(mobileQuery)

  return {
    props: { tvData },
  }
}

export default Gaming
