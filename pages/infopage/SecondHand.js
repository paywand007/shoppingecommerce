 

import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import SecondHandProduct from '../../components/SecondHandProduct'
import ReactPaginate from 'react-paginate';
import useTranslation from 'next-translate/useTranslation';
function Gaming({ sData }) {
  const {t}=useTranslation()
const [users,setUsers]=useState(sData.slice(0,50));
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
    return dateString -  dateString2
  });
  setUsers(sortedByDate);
  console.log(" a._createdAt", Date(users._createdAt))
};
 return (
   <div className=' text-center '>
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
      {searchTerm !== '' && (
        <button onClick={resetFilter}><BsFillXCircleFill/></button>
      )}
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
