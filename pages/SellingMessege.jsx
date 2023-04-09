import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import React, { useRef } from 'react'

import emailjs from '@emailjs/browser'
 
import { useAuthState } from "react-firebase-hooks/auth";
import * as yup from 'yup'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext';

function SellingMessege() {
  const schema = yup.object().shape({
    firstName: yup.string().required('Your Full Name is Required!'),
    lastName: yup.string().required('Your Last Name is Required!'),
    productName: yup.string().required('Your Product Name is Required!'),
email: yup.string().email().required('Your Email is Required!'),
    message: yup.string().required('Your Message is Required!'),
  })
  const { t }=useTranslation()
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_emxyqio', 'template_9zmnhd3', form.current,
     'JPz_F3345zkCt2dT1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
    <div>

<div className=' w-full flex  justify-center items-center   small:m-5'>
  
 
  
        {/* <h1 className='text-4xl subpixel-antialiased text-center text-slate-600 font-semibold'>
        {t('common:getInToch')}
        </h1> */}
        <form
          className='flex w-1/2 flex-col justify-center items-center gap-3 mt-10'
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
       
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
                  {...register('firstName')}
                  id='n44ame'
                />
                <p className='text-sm text-red-500 text-left'>
                  {errors?.firstName?.message}
                </p>
                <label className='w-full flex flex-col' htmlFor='name'>
                {' '}
                <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
                {t('common:LastName')} 
                </p>
                <input
                  className='px-6 py-2   border-2 border-gray-900'
                  type='text'
                  name='lastName'
                  placeholder={t('common:LastName')} 
                  {...register('lastName')}
                  id='nam3e'
                />
                <p className='text-sm text-red-500 text-left'>
                  {errors?.lastName?.message}
                </p>
              </label>
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
                {...register('email')}
                id='name1'
              />
              <p className='text-sm text-red-500 text-left'>
                {errors?.email?.message}
              </p>
            </label>
            
             <label className='  flex flex-col' htmlFor='name'>
                {' '}
                <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
               {t('common:ProductName')} 
                </p>
                <input
                  className='px-6 py-2   border-2 border-gray-900'
                  type='text'
                  name='productName'
                  placeholder={t('common:ProductName')} 
                  {...register('productName')}
                  id='nam3e'
                />
                <p className='text-sm text-red-500 text-left'>
                  {errors?.lastName?.message}
                </p>
              </label>
          </div>
          
          <div className='w-full small:mx-0 medium:mx-0'>
            {' '}
            <label htmlFor='email' className='flex justify-center flex-col '>
              <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
          {t('common:Details')} :
              </p>
              <textarea
                className='border-2 border-gray-900'
                {...register('message')}
                name='message'
                cols='30'
                rows='3'
              />

              <p className='text-sm text-red-500 text-left'>
                {errors?.message?.message}
              </p>
            </label>
          </div>

 
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