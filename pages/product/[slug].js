import React, { useState } from 'react'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai'
import useTranslation from 'next-translate/useTranslation'
import { useAuthState } from "react-firebase-hooks/auth";

import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'
import { useStateContext } from '../../context/StateContext' 
import Link from 'next/link'
import { auth } from '../firbase/firebase';


const ProductDetails = ({ product, products}) => {
  const { image, name, details, price,count } = product
  const { t }=useTranslation()
  const [user, loading] = useAuthState(auth);

  const { decQty, incQty, qty, onAdd } = useStateContext()
  const [index, setIndex] = useState(0)
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container m-5'>
            <img
              src={urlFor(image && image[index])}
              className='product-detail-image w-1/2'
            />
          </div>
          <div className='small-images-container'>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className='product-detail-desc w-1/2'>
          <h1 className='text-[26px] font-bold'>{name}</h1>
          <div className='reviews'>
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>{count}</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
           <div className='quantity'>
            <h3>{t("common:qyntity")}:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          { count === 0 ? (
  <p className='text-red-600 text-2xl font-bold'>Out of stock</p>
) : (
 
      <div className='buttons'>
          
           <button
              type='button'
              className='add-to-cart'
              onClick={() => onAdd(product, qty)}
            >
           {t("common:addtocart")}
            </button>
            <button type='button' className='buy-now'>
           <Link href={'/Payment'}>{t("common:buyNow")}</Link> 
            </button>
          </div>  ) }
          
        </div>
      </div>

      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `
  const products = await client.fetch(query)
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }))

 
 
  return {
    paths,
 
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)

   

  return {
    props: { products, product },
  }
}


export default ProductDetails