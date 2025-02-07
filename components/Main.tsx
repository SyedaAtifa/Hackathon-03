import Link from 'next/link'
import React from 'react'

function Main() {
  return (
    <div className="home w-screen h-[771px] flex items-center justify-end font-poppins md:w-[1100px]">
      <div className="w-[643px] h-[443px] bg-[#FFF3E3] mr-14 flex items-center justify-center xsm:mr-0 xsm:w-screen xsm:p-8">
        <div className="w-[561px] h-[344px] flex flex-col gap-2">
          <p className="text-[#333333] font-semibold">New Arrival</p>
          <h5 className="text-[#B88E2F] font-bold text-[52px] leading-[65px] w-[400px] xsm:w-auto xsm:text-4xl">Discover Our New Collection</h5>
          <p className="font-medium text-lg w-[500px] xsm:w-auto xsm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Link href={"/shop"}>
            <button className="w-[222px] h-[74px] bg-[#B88E2F] mt-12 text-white font-bold">
              BUY Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Main