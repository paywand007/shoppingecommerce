import {useState} from 'react'
import Link from 'next/link'
function DropdownLists( ) {

  const [state, setState] = useState(false)
  const showDropdown = () => {
    setState(true)
  }
  const hideDropdown = () => {
    setState(false)
    }

 
  return (
    <div className='border w-[900] rounded flex justify-center cursor-pointer  m-3  text-lg text-black bg-primary-blue  Dropdowns small:flex-col medium:flex-col small:w-full medium:w-full'>
      <div className=' m-3 rounded hover:rounded-lg  pr-2 border-r-4'>
        PHONE & TABLETS
        {state ? (
          <ul onMouseEnter={showDropdown} className=' text-center'>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null}
      </div>
      <div
        className=' m-3 rounded hover:rounded-lg  pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        HEADSET | AIRPODS
        {state ? (
          <ul onMouseEnter={showDropdown} className=' text-center'>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null}
      </div>

      <div
        className='m-3 rounded hover:rounded-lg pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        COMPUTERS | LAPTOPS
        {state ? (
          <ul className=' text-center' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null}
      </div>
      <div
        className='m-3 rounded hover:rounded-lg pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        GAMING
        {state ? (
          <ul className=' text-center' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null}
      </div>
      <div
        className='m-3 rounded hover:rounded-lg  pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        PHOTOGRAPHY
        {state ? (
          <ul className=' text-center  ' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null}
      </div>
      <div
        className='m-3 rounded hover:rounded-lg pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        TELEVISION
        {state ? (
          <ul className=' text-center' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null}
      </div>

      <div
        className='m-3 rounded hover:rounded-lg  pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        SECONDE HANDE
        {state ? (
          <ul className=' text-center' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null}
      </div>
      <div className='m-3 rounded hover:rounded-lg  pr-2 border-r-4'>
        ABOUT US
      </div>
      <div className='m-3 rounded hover:rounded-lg'>
        <Link href='/'>CONTACT US</Link>{' '}
      </div>
    </div>
  )
}

export default DropdownLists