"use client";

import { groq } from "next-sanity"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { client } from '@/sanity/lib/client'
import { Product } from "@/types/products"
import { addToCart, getCartItems } from "@/app/actions/actions"
import Swal from "sweetalert2";
import { useEffect, useState } from "react"
import Header from "@/components/Header";
import SOFA from "@/components/sofa/page";
import Foot from "@/components/Foot";
import Footer from "@/components/Footer";

interface ProductPageProps {
    params: Promise<{ slug: string }>
}

async function getProduct(slug: string): Promise<Product | any> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        title,
        _type,
        price,
        dicountPercentage,
        tags,
        description,
        productImage,
        }` , { slug }
    )
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug)

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault()

        Swal.fire({
            position: "center",
            icon: "success",
            title: `${product.title} added to cart`,
            showConfirmButton: false,
            timer: 1000
        })


        addToCart(product)
    }

   
    return (
        <div className="">
            <Header />
            <div className="w-screen h-screen flex gap-20 items-center justify-center">
                <div className="">
                    {product.productImage && (
                        <Image
                            src={urlFor(product.productImage).url()}
                            alt="image"
                            width={580}
                            height={580}
                        />
                    )}
                </div>

                <div className="w-[700px] flex flex-col gap-10 font-poppins">
                    <h4 className="text-6xl font-bold text-[#3A3A3A]">{product.title}</h4>
                    <div className="w-full flex items-center gap-4">
                        <p className="font-medium text-3xl text-[#898989]">${product.price}0.00</p>
                        <p className="w-20 h-10 flex items-center justify-center border rounded-[20px] bg-[#B88E2F] text-white font-medium">{product.dicountPercentage}%OFF</p>
                    </div>
                    <p> {product.tags} </p>
                    <p className="text-sm">{product.description}</p>

                    <div className="w-full h-16 flex items-center justify-center gap-8">
                        <button className="w-[200px] h-12 bg-[#B88E2F] text-white font-medium">
                        {/* onClick={(e) => handleProcess(e, product)}> */}
                            Buy Now
                        </button>
                        <button className="w-[200px] h-12 bg-[#B88E2F] text-white font-medium"
                            onClick={(e) => handleAddToCart(e, product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                
            </div>
            <Foot />
            <Footer />
        </div>
    )

}

