import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Funiro() {
  return (
    <div className="w-screen h-auto items-center justify-center">
      <div className="h-auto w-screen flex mt-10 justify-center xsm:w-screen xsm:flex-col xsm:gap-3">
        <div className="w-[422px] h-[250px] flex flex-col gap-4 ml-12 xsm:w-screen xsm:ml-0">
          <p className="w-[360px] text-[40px] font-bold text-[#3A3A3A]">50+ Beautiful rooms inspiration</p>
          <p className="w-[360px] font-medium text-[#616161]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <Link href={"/sofas"}>
            <button className='w-[176px] h-12 text-white font-semibold  bg-[#B88E2F]'>Explore More</button>
          </Link>
        </div>
        <Image src={"/images/room1.svg"} alt='room' width={404} height={582} />
        <div className="flex flex-col gap-14 ml-6 xsm:hidden relative">
          <Image src={"/images/room2.svg"} alt='room' width={372} height={486} />
          <Image src={"/images/Indicator.svg"} alt='imdicator' width={120} height={27} />
        </div>
      </div>

      <div className="w-screen h-[780px] mt-12 flex flex-col items-center justify-center">
        <div className="w-[356px] h-[86px] flex items-center flex-col">
          <p className="w-[222px] h-[30px] font-semibold text-xl text-[#616161]">Share your setup with</p>
          <h4 className="w-[356px] h-12 font-bold text-[40px] text-[#3A3A3A]">#FuniroFurniture</h4>
        </div>

        {/* images */}
        <div className="w-full h-[500px] mt-8 flex items-center justify-center gap-2">
          <div>
            <div className="">
              <Image src={"/images/furinture1.svg"} alt='funiro' width={451} height={312} />
            </div>

            <div className='ml-[108px] mt-4'>
              <Image src={"/images/furniture2.svg"} alt='furniro2' width={344} height={242} />
            </div>
          </div>

          <div className='my-20'>
            <Image src={"/images/furniture3.svg"} alt='funiro3' width={295} height={392} />
          </div>

          <div>
            <div className=''>
              <Image src={"/images/furniture4.svg"} alt='funiro4' width={290} height={348} />
            </div>

            <div className="mt-4 flex gap-2">
              <Image src={"/images/furniture5.svg"} alt='funiro5' width={178} height={242} />
              <div>
                <Image src={"/images/furniyure7.svg"} alt='funiro6' width={258} height={196} />
              </div>
            </div>
          </div>
        </div>
        {/* images  */}
      </div>
    </div>
  )
}

export default Funiro