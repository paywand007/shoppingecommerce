import { useState } from 'react'
import Link from 'next/link'
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai'
import {Cart} from './'
import { HiMenu } from 'react-icons/hi'
import { useStateContext } from '../context/StateContext' 

function Navbar() {
  
  const { showCart, setShowCart, totalQuantities } = useStateContext()
   // code for showing menu

  const [menu, setMenu] = useState(false)
  const showMenu = () => {
    setMenu(!menu)
    console.log('clicke me')

  }

  return (
    <div className='flex  m-[20px]  small:w-[300p] small:m-[5px] small:p-0   navbar-container '>
      <h2 className='logo text-3xl text-center   small:ml-0 small:text-3xl '>
        <Link href='/'>APM ELECTROICS</Link>
      </h2>
      <div
        className='flex    w-[900px] h-[50px] p-2 pl-10 text-
        sm text-gray-900 border border-gray-900 rounded-lg
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
            small:hidden medium:hidden'
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

      <div className='flex gap-1'>
        {' '}
        <button type='button' className='cart-icon'>
          <AiOutlineUser />
        </button>
        <button type='button' className='cart-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-8 h-8'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
            />
          </svg>
        </button>
        <button
          type='button'
          className='cart-icon'
          onClick={() => setShowCart(true)}
        >
          <span className='cart-item-qty '> {totalQuantities}</span>
          <AiOutlineShoppingCart />
        </button>
        {showCart && <Cart />}
        <button
          type='button'
          className='cart-icon small:block medium:flex hidden'
        >
          <HiMenu onclick={showMenu} />
        </button>
      </div>
    </div>
  )
}

export default Navbar
