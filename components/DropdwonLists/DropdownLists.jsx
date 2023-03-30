import {useState} from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

function DropdownLists( ) {
  const { t, lang } = useTranslation()
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
         
       {t("common:mobile")}
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
        <Link href={`/infopage/Computer `}>{t("common:computer")}</Link>
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
        <Link href={`/infopage/HeadSet `}>{t("common:headset")}</Link>
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
        <Link href={`/infopage/Gaming `}>{t("common:gaiming")}</Link>
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
        <Link href={`/infopage/Photograph `}>{t("common:photography")}</Link>
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
        <Link href={`/infopage/TvStands `}>{t("common:tv")}</Link>
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
           

      
        <Link href={`/infopage/SecondHand `}>{t("common:secondhand")}</Link>
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
      
    </div>
  )
}

export default DropdownLists