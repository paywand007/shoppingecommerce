import React from 'react'
import { client, urlFor } from '../../lib/client'
import useTranslation from 'next-translate/useTranslation'

export default function AboutUs({comData}) {
  const { t }=useTranslation()
  return (
<div className='     m-5 '>
  <div className=''>
    <h1 className='text-4xl text-center font-medium text-cyan-900  '>{t('common:aboutUs')}</h1>
    <p className=' p-14  text-xl leading-relaxed'>
      {t('common:aboutUsP')}
    </p>
  </div>
  <h1 className=' text-center m-7 text-4xl  font-medium text-cyan-900 '>{t('common:ourTeam')}</h1>
  <div className='flex justify-center m-8'> 
  {comData.map((item,index)=>{
return <div key={index} className=' flex justify-center text-center w-[400px]  rounded-sm'>
  <div>  <img   
  className='w-full rounded-full h-[350px] mx-auto object-contain'
 src={urlFor(item.image && item.image[0])}
 alt="paywand" />
 <h1 className='mt-5  text-center p-3 text-2xl font-medium text-cyan-900   '>{item.name}</h1>
 <h3 className='font-medium text-cyan-900 '>{item.job}</h3></div>

 
</div>

 })}</div>

</div>
  )
}
export const getServerSideProps = async () => {
  const mobileQuery = '*[_type == "newtest"]'
  const comData = await client.fetch(mobileQuery)

  return {
    props: { comData },
  }
}

