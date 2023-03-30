import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

function Product({ product }) {

    console.log(product)

    return ( 
    <div >
        <Link href = { `/product/${product.slug.current}` } > hi </Link> 
        <div className = 'product-card w-[300px] h-[350px] text-center items-center m-3 border-4 rounded-lg' >
        <img src = { urlFor(product.image && product.image[0]) }
        width = { 250 }
        height = { 250 }
        className = 'product-image' />
        <p className = 'product-name truncate text-center  ' > Name: { product.name } </p> 
        <p className = 'product-name' > Price: $ { product.price } </p>
         </div> </div>
    )
}

export default Product