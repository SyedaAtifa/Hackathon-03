import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className="w-screen h-[505px] border-t font-poppins xsm:h-[1200px]">
            <footer className="w-[1240px] h-[419px] flex flex-col items-center justify-center xsm:w-screen">
                <div className="w-full h-[312px] flex gap-20 ml-20 xsm:flex-col xsm:w-screen xsm:ml-1">
                    <div className="w-[285px] h-[100px]">
                        <h2 className="text-2xl font-bold">Funiro.</h2>
                        <p className="text-[#9F9F9F] mt-16">400 University Drive Suite 200 Coral Gables,
                            FL 33134 USA</p>
                    </div>

                    <div className="w-[710px] h-[312px] flex gap-20 xsm:flex-col xsm:w-screen xsm:h-auto">
                        <ul className="w-[68px] h-[312px] flex flex-col justify-evenly font-medium">
                            <li className="text-[#9F9F9F]">Links</li>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>

                        <ul className="w-[140px] h-[242px] flex flex-col justify-evenly font-medium">
                            <li className="text-[#9F9F9F]">Help</li>
                            <li> Payment Options</li>
                            <li>Returns</li>
                            <li>Privacy Policies</li>
                        </ul>

                        <div className="w-[286px] h-[100px]">
                            <Image src={"/images/footerimg.svg"} alt='footer' width={286} height={101} />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[59px] border-t flex ml-12 xsm:absolute top-[6700px] xsm:w-screen xsm:ml-0">
                    <p className="mt-12 xsm:mt-6 xsm:ml-9">2023 furino. All rights reverved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer