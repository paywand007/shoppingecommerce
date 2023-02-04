import React from 'react'
import Cumputers from './data'
import Link from 'next/link'
import DropdownLists from './DropdownLists'
function Menu() {
  
    return (
      <div className='flex justify-center'>
        
        <DropdownLists  />
      </div>
    )
}

export default Menu