import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <div className="h-[100px] w-screen flex items-center justify-center md:w-[1100px]">
      <header className="h-10 w-[1286px] flex justify-between">
        <div className="w-[160px] flex">
          <Image src={"/images/logo.svg"} alt='logo' width={50} height={32} />
          <h1 className="text-4xl font-bold font-Montserrat">furniro</h1>
        </div>
        <ul className="relative h-[21px] w-[430px] flex justify-between pt-3 font-medium font-poppins xsm:hidden">
          <Link href={"/Home"}>
            <li>
              Home
            </li>
          </Link>
          <Link href={"/shop"}>
            <li>
              Shop
            </li>
          </Link>
          <Link href={"/blog"}>
            <li>
              Blog
            </li>
          </Link>
          <Link href={"/contact"}>
            <li>
              Contact
            </li>
          </Link>
        </ul>
        <div className="w-[200px] flex justify-between xsm:justify-evenly">
          <Link href={"/"}>
            <Image className="xsm:hidden"
              src={"/images/account.svg"}
              alt='account'
              width={28}
              height={28}
            />
          </Link>

          <Link href={"/"}>
            <Image
              src={"/images/search.svg"}
              alt='search'
              width={28}
              height={28}
            />
          </Link>

          <Link href={"/"}>
            <Image
            className="xsm:hidden"
              src={"/images/wishlist.svg"}
              alt='wishlist'
              width={28}
              height={28}
            />
          </Link>

          <Link href={"/cart"}>
            <Image
              src={"/images/cart.svg"}
              alt='cart'
              width={28}
              height={28}
            />
          </Link>
        </div>
      </header>
    </div >
)
}


export default Header