import React from 'react'
import Link from 'next/link'
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineDingding,
} from 'react-icons/ai'

function Navbar() {
   
  return (
    <div className='flex flex-row al m-[20px]  small:w-[300p] small:m-[10px] small:p-0   navbar-container '>
      <h2 className='logo text-center ml-[80px]  '>
        <Link href='/' >E MALL</Link>
      </h2>
      <div
        className='flex    w-[900px] p-2 pl-10 text-
        sm text-gray-900 border border-gray-900 rounded-lg
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
            '
      >
        <input
          type='text'
          id='search-navbar'
          className=' w-[900px]   small:w-[100px]   md:flex-col p-2 pl-10 text-
        md text-gray-900 border-none  checked:bg-blue-500
            '
          placeholder='Search...'
        />
        <button type='button' className='cart-icon'>
          <AiOutlineSearch />
        </button>
      </div>

      <div>
        {' '}
        <button type='button' className='cart-icon'>
          <AiOutlineUser />
        </button>
        <button type='button' className='cart-icon'>
          <span className='cart-item-qty '> 1</span>
          <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  )
}
  
export default Navbar