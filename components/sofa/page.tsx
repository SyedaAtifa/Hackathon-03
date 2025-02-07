"use client"

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { four } from '@/sanity/lib/queries'
import { Product } from '@/types/products'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const SOFA = () => {

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(four)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  }, [])

  return (
    <div className="w-screen mx-auto my-24 xsm:flex xsm:flex-col xsm:items-center xsm:justify-center md:w-[1100px]">
      <h2 className="flex items-center justify-center font-poppins font-bold text-[40px] text-[#3A3A3A] xsm:text-3xl">Our Latest Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {product.map((product) => (
          <div key={product._id} className="flex flex-col gap-3 transition-transform duration-100 hover:scale-110 shadow-xl">
            {product.slug?.current && (
              <Link href={`/product/${product.slug.current}`}>
                {product.productImage && (
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt="image"
                    width={280}
                    height={400}
                  />
                )}
                <div className="flex flex-col gap-2">
                  <p className="text-[#3A3A3A] font-semibold text-2xl font-poppins">{product.title}</p>
                  <p className="text-xl font-medium text-[#898989]">$ {product.price}0.00</p>

                </div>
              </Link>
            )}
          </div>
        )
        )}
      </div>
      <div className="w-screen h-20 flex items-center justify-center">
        <Link href={"/sofas"}>
          <button className="w-[345px] h-12 border border-[#B88E2F]  text-[#B88E2F] mt-12">
            Show More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SOFA;