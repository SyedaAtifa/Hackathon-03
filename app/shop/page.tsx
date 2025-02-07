import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import Foot from '@/components/Foot'

function page() {
    return (
        <div>
            <Header />
            <div className="back w-full h-[316px] flex flex-col items-center justify-center gap-3">
                <h5 className="text-5xl font-medium">Shop</h5>
                <p className="font-medium">Home  /
                    Shop</p>
            </div>

            {/* products */}
            <div className="w-screen xsm:h-[2450px] h-auto xsm:w-auto flex flex-col items-center justify-center mt-8">
                <div className="h-[446px] xsm:w-auto flex gap-8 xsm:flex-col mt-12 xsm:gap-20">
                    {/* pro1 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro1">
                            <button className="w-12 h-12 text-white bg-[#E97171] rounded-[50%] ml-52 mt-6">-30%</button>
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Syltherine</h3>
                            <p className="font-medium text-[#898989]">Stylish cafe chair</p>
                            <p className="font-semibold text-lg">Rp 2.500.000 <span className="text-[#B0B0B0]">Rp 3.500.000</span></p>
                        </div>
                    </div>
                    {/* pro1 */}

                    {/* pro2 */}
                    <div className="w-[285px] h-[400px] relative xsm:hidden">
                        <div className="pro1">
                            <button className="w-12 h-12 text-white bg-[#E97171] rounded-[50%] ml-52 mt-6">-30%</button>
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Syltherine</h3>
                            <p className="font-medium text-[#898989]">Stylish cafe chair</p>
                            <p className="font-semibold text-lg">Rp 2.500.000 <span className="text-[#B0B0B0]">Rp 3.500.000</span></p>
                        </div>
                    </div>
                    {/* pro2 */}

                    {/* pro3 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro3">
                            <button className="w-12 h-12 text-white bg-[#E97171] rounded-[50%] ml-52 mt-6">-50%</button></div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Lolito</h3>
                            <p className="font-medium text-[#898989]">Luxury big sofa</p>
                            <p className="font-semibold text-lg">Rp 7.000.000<span className="text-[#B0B0B0]">Rp 14.000.000</span></p>
                        </div>
                    </div>
                    {/* pro3 */}

                    {/* pro4 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro4">
                            <button className="w-12 h-12 text-white bg-[#2EC1AC] rounded-[50%] ml-52 mt-6">New</button>
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Respira</h3>
                            <p className="font-medium text-[#898989]">Outdoor bar table and stool</p>
                            <span className="font-semibold text-lg">Rp 500.000</span>
                        </div>
                    </div>
                    {/* pr04 */}
                </div>
            </div>
            {/* products */}

            {/* 2 products 2*/}
            <div className="w-screen xsm:h-[2300px] h-auto xsm:w-auto flex flex-col items-center justify-center relative xsm:hidden">
                <div className="h-[446px] xsm:w-auto flex gap-8 xsm:flex-col mt-12 xsm:gap-20">
                    {/* pro1 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro5">
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Syltherine</h3>
                            <p className="font-medium text-[#898989]">Stylish cafe chair</p>
                            <p className="font-semibold text-lg">Rp 2.500.000 <span className="text-[#B0B0B0]">Rp 3.500.000</span></p>
                        </div>
                    </div>
                    {/* pro1 */}

                    {/* pro2 */}
                    <div className="w-[285px] h-[400px] relative xsm:hidden">
                        <div className="pro6">
                            <button className="w-12 h-12 text-white bg-[#2EC1AC] rounded-[50%] ml-52 mt-6">New</button>
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Syltherine</h3>
                            <p className="font-medium text-[#898989]">Stylish cafe chair</p>
                            <p className="font-semibold text-lg">Rp 2.500.000 <span className="text-[#B0B0B0]">Rp 3.500.000</span></p>
                        </div>
                    </div>
                    {/* pro2 */}

                    {/* pro3 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro7">
                            <button className="w-12 h-12 text-white bg-[#E97171] rounded-[50%] ml-52 mt-6">-50%</button></div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Lolito</h3>
                            <p className="font-medium text-[#898989]">Luxury big sofa</p>
                            <p className="font-semibold text-lg">Rp 7.000.000<span className="text-[#B0B0B0]">Rp 14.000.000</span></p>
                        </div>
                    </div>
                    {/* pro3 */}

                    {/* pro4 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro8">
                            <button className="w-12 h-12 text-white bg-[#2EC1AC] rounded-[50%] ml-52 mt-6">New</button>
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Respira</h3>
                            <p className="font-medium text-[#898989]">Outdoor bar table and stool</p>
                            <span className="font-semibold text-lg">Rp 500.000</span>
                        </div>
                    </div>
                    {/* pr04 */}
                </div>
            </div>

            {/* 2 products 2*/}
            <div className="w-screen xsm:h-[2300px] h-auto xsm:w-auto flex flex-col items-center justify-center relative xsm:hidden">
                <div className="h-[446px] xsm:w-auto flex gap-8 xsm:flex-col mt-12 xsm:gap-20">
                    {/* pro1 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro5">
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Syltherine</h3>
                            <p className="font-medium text-[#898989]">Stylish cafe chair</p>
                            <p className="font-semibold text-lg">Rp 2.500.000 <span className="text-[#B0B0B0]">Rp 3.500.000</span></p>
                        </div>
                    </div>
                    {/* pro1 */}

                    {/* pro2 */}
                    <div className="w-[285px] h-[400px] relative xsm:hidden">
                        <div className="pro6">
                            <button className="w-12 h-12 text-white bg-[#2EC1AC] rounded-[50%] ml-52 mt-6">New</button>
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Syltherine</h3>
                            <p className="font-medium text-[#898989]">Stylish cafe chair</p>
                            <p className="font-semibold text-lg">Rp 2.500.000 <span className="text-[#B0B0B0]">Rp 3.500.000</span></p>
                        </div>
                    </div>
                    {/* pro2 */}

                    {/* pro3 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro7">
                            <button className="w-12 h-12 text-white bg-[#E97171] rounded-[50%] ml-52 mt-6">-50%</button></div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Lolito</h3>
                            <p className="font-medium text-[#898989]">Luxury big sofa</p>
                            <p className="font-semibold text-lg">Rp 7.000.000<span className="text-[#B0B0B0]">Rp 14.000.000</span></p>
                        </div>
                    </div>
                    {/* pro3 */}

                    {/* pro4 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro8">
                            <button className="w-12 h-12 text-white bg-[#2EC1AC] rounded-[50%] ml-52 mt-6">New</button>
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Respira</h3>
                            <p className="font-medium text-[#898989]">Outdoor bar table and stool</p>
                            <span className="font-semibold text-lg">Rp 500.000</span>
                        </div>
                    </div>
                    {/* pr04 */}
                </div>
            </div>

            {/* 2 products 2*/}
            <div className="w-screen xsm:h-[2300px] h-auto xsm:w-auto flex flex-col items-center justify-center relative xsm:hidden">
                <div className="h-[446px] xsm:w-auto flex gap-8 xsm:flex-col mt-12 xsm:gap-20">
                    {/* pro1 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro5">
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Syltherine</h3>
                            <p className="font-medium text-[#898989]">Stylish cafe chair</p>
                            <p className="font-semibold text-lg">Rp 2.500.000 <span className="text-[#B0B0B0]">Rp 3.500.000</span></p>
                        </div>
                    </div>
                    {/* pro1 */}

                    {/* pro2 */}
                    <div className="w-[285px] h-[400px] relative xsm:hidden">
                        <div className="pro6">
                            <button className="w-12 h-12 text-white bg-[#2EC1AC] rounded-[50%] ml-52 mt-6">New</button>
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Syltherine</h3>
                            <p className="font-medium text-[#898989]">Stylish cafe chair</p>
                            <p className="font-semibold text-lg">Rp 2.500.000 <span className="text-[#B0B0B0]">Rp 3.500.000</span></p>
                        </div>
                    </div>
                    {/* pro2 */}

                    {/* pro3 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro7">
                            <button className="w-12 h-12 text-white bg-[#E97171] rounded-[50%] ml-52 mt-6">-50%</button></div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Lolito</h3>
                            <p className="font-medium text-[#898989]">Luxury big sofa</p>
                            <p className="font-semibold text-lg">Rp 7.000.000<span className="text-[#B0B0B0]">Rp 14.000.000</span></p>
                        </div>
                    </div>
                    {/* pro3 */}

                    {/* pro4 */}
                    <div className="w-[285px] h-[400px]">
                        <div className="pro8">
                            <button className="w-12 h-12 text-white bg-[#2EC1AC] rounded-[50%] ml-52 mt-6">New</button>
                        </div>
                        <div className="w-full h-[140px] bg-[#F4F5F7] flex flex-col gap-2 pt-3 pl-3">
                            <h3 className="font-semibold text-2xl text-[#3A3A3A]">Respira</h3>
                            <p className="font-medium text-[#898989]">Outdoor bar table and stool</p>
                            <span className="font-semibold text-lg">Rp 500.000</span>
                        </div>
                    </div>
                    {/* pr04 */}
                </div>
            </div>

            <div className="flex items-center justify-center">
                <Image src={"/images/shop.svg"} alt='shop' width={392} height={90} />
            </div>

            <Foot />
            <Footer />
        </div>
    )
}

export default page