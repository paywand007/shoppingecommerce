import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
function SellingMessege() {
    const { t }=useTranslation()

  return (
    <div>

<div className=' w-full flex  justify-center items-center   small:m-5'>
  
 
  
        {/* <h1 className='text-4xl subpixel-antialiased text-center text-slate-600 font-semibold'>
        {t('common:getInToch')}
        </h1> */}
        <form
          className='flex w-1/2 flex-col justify-center items-center gap-3 mt-10'
        
        >
          <div className='flex flex-col  w-full gap-3'>
            <div className='  w-full justify-center  gap-2 small:flex-col medium:flex-col'>
              <label className='   flex flex-col' htmlFor='name'>
            
                <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>  {t('common:Name')}</p>
                <input
                  className='px-6 py-2   border-2 border-gray-900'
                  type='text'
                  placeholder={t('common:Name')} 
                  name='firstName'
                //   {...register('firstName')}
                  id='n44ame'
                />
                <p className='text-sm text-red-500 text-left'>
                  {/* {errors?.firstName?.message} */}
                </p>
              </label>
             {' '}
            </div>
          </div>
          <div className='w-full small:mx-0 medium:mx-0'>
          
            <label htmlFor='email' className='flex justify-center flex-col '>
              <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>{t('common:yourEmail')}</p>
              <input
                className='px-3 py-2   border-2 border-gray-900'
                name='email'
                placeholder='example@email.com'
                type='text'
                // {...register('email')}
                id='name1'
              />
              <p className='text-sm text-red-500 text-left'>
                {/* {errors?.email?.message} */}
              </p>
            </label> <label className='  flex flex-col' htmlFor='name'>
                {' '}
                <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
               Product Name :
                </p>
                <input
                  className='px-6 py-2   border-2 border-gray-900'
                  type='text'
                  name='lastName'
                  placeholder={t('common:LastName')} 
                //   {...register('lastName')}
                  id='nam3e'
                />
                <p className='text-sm text-red-500 text-left'>
                  {/* {errors?.lastName?.message} */}
                </p>
              </label>
          </div>
          
          <div className='w-full small:mx-0 medium:mx-0'>
            {' '}
            <label htmlFor='email' className='flex justify-center flex-col '>
              <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
          Details :
              </p>
              <textarea
                className='border-2 border-gray-900'
                // {...register('message')}
                name='message'
                cols='30'
                rows='3'
              />

              <p className='text-sm text-red-500 text-left'>
                {/* {errors?.message?.message} */}
              </p>
            </label>
          </div>

<label> Upload image :          <input type="file" name="image" accept="image/*" placeholder='chose images' />
</label>
          <div className='flex justify-start'>
            <button
              type='submit'
              className='bg-sky-900  text-white rounded-md px-5 py-3'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SellingMessege