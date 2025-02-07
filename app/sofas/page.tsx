"use client"

import Foot from '@/components/Foot'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { allProducts } from '@/sanity/lib/queries'
import { Product } from '@/types/products'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct() {
            const fetchedProduct: Product[] = await client.fetch(allProducts)
            setProduct(fetchedProduct)
        }
        fetchproduct()
    }, [])

    return (
        <div>
            <Header />
            <div className="back w-full h-[316px] flex flex-col items-center justify-center gap-3">
                <Image src={"/images/logo.svg"} alt='logo' width={77} height={77} />
                <h5 className="text-5xl font-medium">Latest Items</h5>
                <p className='font-medium'>Home</p>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="w-screen flex items-center justify-center font-poppins font-bold text-[40px] text-[#3A3A3A] my-8 xsm:text-3xl">Our Latest Products</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
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
                                        <p className="text-xl font-medium text-[#898989]">${product.price}0.00</p>
                                    </div>
                                </Link>
                            )}
                        </div>
                    )
                    )}
                </div>
            </div>

            <Foot />
            <Footer />
        </div>

    )
}

export default page