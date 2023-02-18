import { client, urlFor } from '../../lib/client'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai' 
import Product from '../../components/Product'

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
//  const reslt = Object.keys(products).map((item) => {
//    <Product key={item._id}
//    product={item}
//    />
//  })
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img
              src={urlFor(image && image[0])}
              alt=''
              width={600}
              height={600}
            />
          </div>
          {/* <div className='small-images-container'>
          {image?.map((item, i) => {
            <img
              src={urlFor(item)}
              className=''
              onMouseEnter={}
            />
          })}

        </div> */}
        </div>
        <div className='product-detail-desc'>
          <h1 className='text-4xl font-bold'>{name}</h1>
          <div className='reviews'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p>(92)</p>
          </div>
          <h4>Details</h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc'>
              <span className='minus'>
                <AiOutlineMinus />
              </span>
              <span className='num'>0</span>
              <span className='plus'>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className='buttons'>
            {' '}
            <button type='button' className='add-to-cart '>
              Add To Card
            </button>
            <button type='button' className='buy-now'>
              Buy Now
            </button>
          </div>
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
//Don't return all products just return current product
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

  console.log(product)

  return {
    props: { products, product },
  }
}

export default ProductDetails