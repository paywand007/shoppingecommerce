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
      <div className=' m-3 rounded hover:text-sky-700 active:text-sky-700   pr-2 border-r-4'>
        <Link   href={`/infopage/Phone`}  >
         
          PHONE | TABLETS
        </Link> 
        {/* {state ? (
          <ul onMouseEnter={showDropdown} className=' text-center'>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null} */}
      </div>
      <div
        className=' m-3   hover:hover:text-sky-700 rounded-lg  pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        {' '}
        <Link href={`/infopage/Computer `}> COMPUTERS | HARDWARES</Link>
        {/* {state ? (
          <ul onMouseEnter={showDropdown} className=' text-center'>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null} */}
      </div>

      <div
        className='m-3   hover:hover:text-sky-700 rounded-lg pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        {' '}
        <Link href={`/infopage/HeadSet `}>HEADSETS | AIRPODS</Link>
        {/* {state ? (
          <ul className=' text-center' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null} */}
      </div>
      <div
        className='m-3  hover:hover:text-sky-700 rounded-lg pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <Link href={`/infopage/Gaming `}>GAMING</Link>
        {/* {state ? (
          <ul className=' text-center' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null} */}
      </div>
      <div
        className='m-3   hover:hover:text-sky-700 rounded-lg  pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <Link href={`/infopage/Photograph `}>PHOTOGRAPHY</Link>
        {/* {state ? (
          <ul className=' text-center  ' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null} */}
      </div>
      <div
        className='m-3   hover:hover:text-sky-700 rounded-lg pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <Link href={`/infopage/TvStands `}> TV | STANDS</Link>
        {/* {state ? (
          <ul className=' text-center' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null} */}
      </div>

      <div
        className='m-3  hover:hover:text-sky-700 rounded-lg  pr-2 border-r-4'
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <Link href={`/infopage/SecondHand `}> SECONDE HAND</Link>
        {/* {state ? (
          <ul className=' text-center' onMouseEnter={showDropdown}>
            <li>value 1</li>
            <li>value 2</li>
            <li>value 3</li>
            <li>value 4</li>
          </ul>
        ) : null} */}
      </div>
      {/* <div className='m-3   hover:hover:text-sky-700 rounded-lg  pr-2 border-r-4'>
        ABOUT US
      </div> */}
      <div className='m-3   hover:hover:text-sky-700 rounded-lg'>
        <Link href={`/infopage/ContactUs`}>CONTACT US</Link>{' '}
      </div>
    </div>
  )
}

export default DropdownLists