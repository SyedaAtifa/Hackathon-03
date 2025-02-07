"use client"

import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Foot from '@/components/Foot'
import Footer from '@/components/Footer'
import { Product } from '@/types/products'
import { getCartItems, removeItem, updateCartItems } from '../actions/actions'
import Swal from 'sweetalert2'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'

function page() {

    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        setCartItems(getCartItems())
    }, [])

    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are You Sure?",
            text: "You will not be able to recocver this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(id)
                setCartItems(getCartItems())
                Swal.fire("Removed!", "Item has been removed.", "success");
            }
        })
    }

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartItems(id, quantity);
        setCartItems(getCartItems())
    }

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product)
            handleQuantityChange(id, product.inventory + 1)
    }

    const handledecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.inventory > 1)
            handleQuantityChange(id, product.inventory - 1)
    }

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
    }

    const router = useRouter();
    const handleProceed = (_id?: any) => {
        Swal.fire({
            title: "proceed to checkout?",
            text: "Please review your cart before checkout.",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#B88E2F",
            cancelButtonColor: "#3A3A3A",
            confirmButtonText: "Yes, proceed!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("success", "Your order has been successfully processed.", "success");
                router.push("/Checkout");
                setCartItems([]);
            }
        })
    }

    return (
        <div className="f">
            <Header />
            <div className="back w-full h-[316px] flex flex-col items-center justify-center gap-3">
                <Image src={"/images/logo.svg"} alt='logo' width={77} height={77} />
                <h5 className="text-5xl font-medium">Cart</h5>
                <p className="font-medium"><Link href={"/Home"}>Home</Link>  /
                    Cart</p>
            </div>


            <div className="container mx-auto p-4 lg:p-10">
                <div className="overflow-x-auto flex gap-8">
                    <table className="w-[900px] bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-4 text-left">Product</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Quantity</th>
                                <th className="p-4">Subtotal</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item._id} className="border-t h-16">
                                    <td className="p-4 flex items-center">
                                        {item.productImage && (
                                            <Image
                                                src={urlFor(item.productImage).url()}
                                                alt='{item.title}'
                                                width={50}
                                                height={50}
                                            />
                                        )}
                                        {item.title}
                                    </td>
                                    <td className="p-4">$ {item.price}0.00</td>
                                    <td className="p-4 flex items-center justify-center gap-2">
                                        <button onClick={() => handledecrement(item._id)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                                        <span>{item.inventory}</span>
                                        <button onClick={() => handleIncrement(item._id)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                                    </td>
                                    <td className="p-4">$ {item.price * item.inventory}.000</td>
                                    <td className="p-4">
                                        <button onClick={() => handleRemove(item._id)}>
                                            <Image
                                                src={"/images/del.svg"}
                                                alt='Remove'
                                                width={24}
                                                height={24}
                                            />
                                        </button>
                                    </td>
                                    <button className="w-[100px] h-10 border bg-[#B88E2F] rounded-[15px] text-xl text-white"
                                        onClick={() => handleProceed()}>
                                        Proceed
                                    </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div>
                        <div className="w-[393px] h-[390px] border bg-[#F9F1E7] flex flex-col items-center gap-10">
                            <h6 className="h-12 my-7 text-[32px] font-semibold">Cart Totals</h6>
                            <p className="font-medium flex gap-20">Subtotal:
                                <span className="text-[#B88E2F]">$ {calculatedTotal()}.000</span>
                            </p>

                            <button className="w-[222px] h-[59px] border border-black rounded-[15px] text-xl"
                                onClick={() => handleProceed()}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
                <Foot />
                <Footer />
            </div>
        </div>
    );
}

export default page;


