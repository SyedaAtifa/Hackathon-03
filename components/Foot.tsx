import React from 'react'
import Image from 'next/image'

function Foot() {
  return (
    <div className="w-full h-[270px] bg-[#FAF3EA] my-12 flex items-center justify-evenly font-poppins xsm:flex-col xsm:h-[700px]">
        <div className="w-[337px] h-[70px] flex xsm:flex-col xsm:items-center">
            <div>
                <Image src={"/images/trophy.svg"} alt='trophy' width={60} height={60} />
            </div>
            <div className="xsm:flex flex-col items-center">
               <h5 className="font-semibold text-[25px] text-[#242424]">High Quality</h5>
               <p className="font-medium text-xl text-[#898989]">crafted from top materials</p>
            </div>
        </div>

        <div className="w-[337px] h-[70px] flex xsm:flex-col xsm:items-center">
            <div>
                <Image src={"/images/guarantee.svg"} alt='guarantee' width={60} height={60} />
            </div>
            <div className="xsm:flex flex-col items-center">
               <h5 className="font-semibold text-[25px] text-[#242424]">Warranty Protection</h5>
               <p className="font-medium text-xl text-[#898989]">Over 2 years</p>
            </div>
        </div>

        <div className="w-[337px] h-[70px] flex xsm:flex-col xsm:items-center">
            <div>
                <Image src={"/images/shipping.svg"} alt='shipping' width={60} height={60} />
            </div>
            <div className="xsm:flex flex-col items-center">
               <h5 className="font-semibold text-[25px] text-[#242424]">Free Shipping</h5>
               <p className="font-medium text-xl text-[#898989]">Order over 150 $</p>
            </div>
        </div>

        <div className="w-[337px] h-[70px] flex xsm:flex-col xsm:items-center">
            <div>
                <Image src={"/images/support.svg"} alt='support' width={60} height={60} />
            </div>
            <div className="xsm:flex flex-col items-center">
               <h5 className="font-semibold text-[25px] text-[#242424]">24 / 7 Support</h5>
               <p className="font-medium text-xl text-[#898989]">Dedicated support</p>
            </div>
        </div>
    </div>
  )
}

export default Foot