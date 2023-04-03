import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import PhotoProduct from '../../components/PhotoProduct'
import ReactPaginate from 'react-paginate';
import useTranslation from 'next-translate/useTranslation'

function Photograph({ photoData }) {
  const {t}=useTranslation()
  const [users,setUsers]=useState(photoData.slice(0,50));
  const[pageNumber,setPageNumber]=useState(0);
  const usersPerPage=16;
  const pagesVisited=pageNumber * usersPerPage;
  const pageCount=Math.ceil(users.length /usersPerPage)

  const [searchTerm,setSearchTerm]=useState('') 
 
  const handlePageClick=({selected})=>{
    setPageNumber(selected);

  }
  const sortProductByName = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
  };
  const sortByPrice = () => {
    const sortedPrice= [...users].sort((a, b) => a.price - b.price);
    setUsers(sortedPrice);
  };
  const sortByHighPrice = () => {
    const sortedPrice= [...users].sort((a, b) => b.price - a.price);
    setUsers(sortedPrice);
  };
  const sortedItems = () => {
    const sortedByDate= [...users].sort((a, b) => {
      const dateString = new Date(a._createdAt);
      const dateString2 = new Date(b._createdAt);
      return dateString2 -  dateString
    });
    setUsers(sortedByDate);
    console.log(" a._createdAt", Date(users._createdAt))
  };
  return (
    <div className=' text-center'>
        <div className='flex justify-evenly mx-[100px] '>
    
    <button onClick={sortProductByName} className='w-[100px] text-black font-semibold bg-gray-300 rounded p-3  '>{t("common:AtoZ")}</button>
     <button onClick={sortByPrice} className='w-[100px] text-black font-semibold bg-gray-300 rounded p-3  '>{t("common:lowPrice")}</button>
    <button onClick={sortByHighPrice} className='w-[100px] text-black font-semibold bg-gray-300 rounded p-3 '>{t("common:highPrice")}</button>
    <button onClick={sortedItems}className='w-[100px] text-black font-semibold bg-gray-300 rounded p-3'>{t("common:lasted")}</button>
    <input type='text'
   onChange={(e)=>{setSearchTerm(e.target.value)}}
   className=' bg-gray-200 text-center text-black h-[40px] px-[40px] rounded mt-[1px]'
    placeholder={t('common:search')}/>
 
  </div> 
    <div className='products-container   '>
         {users.filter((val)=>{
             if(searchTerm==''){
               return val
             }
             else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
               return val
             }
            }).slice(pagesVisited,pagesVisited+usersPerPage)
     .map((photoData, index) => (
        <PhotoProduct key={index} photoData={photoData} />
      ))}
      
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
  const mobileQuery = '*[_type == "photography"]'
  const photoData = await client.fetch(mobileQuery)

  return {
    props: { photoData },
  }
}

export default Photograph