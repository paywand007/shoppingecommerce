import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import React, { useRef,useState } from 'react'

import emailjs from '@emailjs/browser'

import * as yup from 'yup'
import {auth} from'../pages/firbase/firebase'
import useTranslation from 'next-translate/useTranslation'

import { useStateContext } from '../context/StateContext'


function Payment() {
  const schema = yup.object().shape({
    firstName: yup.string().required('Your Full Name is Required!'),
    lastName: yup.string().required('Your Last Name is Required!'),
    location: yup.string().required('Your Location is Required!'),
    email: yup.string().email().required('Your Email is Required!'),
      phone: yup.number().required('Your phone number is Required!'),
    
  })

  const {
    totalPrice,
   cartItems,
  } = useStateContext()
  console.log(cartItems)
const itmes=cartItems.map((i)=>{
    return `${i.name} and Quantity of products =${i.quantity} ` 
  }).join('-') 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const form = useRef()

  const sendEmail = () => {
    console.log('hey')
    //  e.preventDefault();

    emailjs
      .sendForm(
        'service_21dgncx',
        'template_o6d93pf',
        form.current,
        'YtasHwtJdxT7HfPFg'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    form.current.reset()
  }
  const { t }=useTranslation()
 // const [authUser, setAuthUser] = useState(auth);
 const [authUser, setAuthUser] = useState(auth);
console.log(authUser)
  return (
    <div className='flex  justify-center my-[100px] gap-3 small:flex-col '>
    <div className=' w-full flex-1  justify-center   small:m-5'>
      <h1 className='text-4xl subpixel-antialiased text-center text-slate-600 font-semibold'>
     {t('common:FillThisToPay')}
      </h1>
    { authUser && <form
        className='flex w-full flex-col gap-3 mt-10'
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
      >
        <div className='flex flex-col  w-full gap-3'>
          <div className='flex  w-full justify-center  gap-2 small:flex-col medium:flex-col'>
            <label className=' w-1/2 flex flex-col' htmlFor='name'>
              {' '}
              <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>       {t('common:Name')} </p>
              <input
                className='px-6 py-2   border-2 border-gray-900'
                type='text'
                placeholder= {t('common:Name')} 
                name='firstName'
                {...register('firstName')}
                id='n44ame'
              />
              <p className='text-sm text-red-500 text-left'>
                {errors?.firstName?.message}
              </p>
            </label>
            <label className='w-1/2 flex flex-col' htmlFor='name'>
              {' '}
              <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
              {t('common:LastName')} 
              </p>
              <input
                className='px-6 py-2   border-2 border-gray-900'
                type='text'
                name='lastName'
                placeholder= {t('common:LastName')} 
                {...register('lastName')}
                id='nam3e'
              />
              <p className='text-sm text-red-500 text-left'>
                {errors?.lastName?.message}
              </p>
            </label>{' '}
          </div>
        </div>
        <div className='w-full small:mx-0 medium:mx-0'>
          {' '}
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
        </div>
        <div className='w-full small:mx-0 medium:mx-0'>
          {' '}
          <label htmlFor='email' className='flex justify-center flex-col '>
            <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
    {t('common:phone')}:
            </p>
            <input
              className='px-3 py-2   border-2 border-gray-900'
              name='phone'
              placeholder='+964 777 77 77'
              type='text'
              {...register('phone')}
              id='name1'
            />

            <p className='text-sm text-red-500 text-left'>
              {errors?.phone?.message}
            </p>
          </label>
        </div>
        <div className='w-full small:mx-0 medium:mx-0'>
          {' '}
          <label htmlFor='email' className='flex justify-center flex-col '>
            <p className='text-left text-lg subpixel-antialiased text-slate-600 font-semibold'>
          {t('common:location')} :
            </p>
            <input
              className='px-3 py-2   border-2 border-gray-900'
              name='location'
              placeholder=' Erbil,Havalan'
              type='text'
              {...register('location')}
              id='name1'
            />

            <p className='text-sm text-red-500 text-left'>
              {errors?.location?.location}
            </p>
          </label>
        </div>
 <div className='w-full small:mx-0 medium:mx-0'>
           
              <textarea
                className='border-2 border-gray-900 hidden'
             value={itmes}
             name='itmes'
                cols='60'
                rows='3'

              />

              
           
          </div>
        <div className='flex justify-start'>
          <button
            type='submit'
            className='bg-sky-900  text-white rounded-md px-5 py-3'
          >
           {t('common:send')}
          </button>
        </div>
      </form>  
      
      }
    </div>
  </div>
  )
}

export default Payment

{/* <div className='flex m-8'>
<form ref={form} onSubmit={sendEmail} className='flex-col justify-center'>
<div className='flex justify-between bg-slate-300 gap-3'>  <label>Name</label>
<input type="text" name="user_name" />
</div>
<div>
<label>Email</label>
<input type="email" name="user_email" />
</div>
<div>
<label>Message</label>
<textarea name="message" />
</div>
<input type="submit" value="Send" />
</form>
</div> */}