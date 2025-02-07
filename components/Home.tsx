import React from 'react'
import Image from 'next/image'

function Home() {
    return (
        <div className="w-screen h-auto flex flex-col items-center justify-center mt-12 font-poppins md:w-[1100px]">
            {/* range */}
            <div className="w-[1183px] h-[685px] xsm:w-auto">
                <div className="h-[76px] flex flex-col items-center justify-center gap-3">
                    <h4 className="text-4xl fobt-bold text-[#333333]">Browse The Range</h4>
                    <p className="text-xl xsm:text-[13px] text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {/* items */}
                <div className="flex xsm:flex-col xsm:gap-9 justify-evenly mt-16 xsm:px-6">
                    <div className='transition-transform duration-100 hover:scale-90 shadow-xl'>
                        <Image src={"/images/dining.svg"} alt='dining' width={381} height={480} />
                        <h6 className="text-2xl font-medium text-center mt-2">Dining</h6>
                    </div>

                    <div className='transition-transform duration-100 hover:scale-90 shadow-xl'>
                        <Image src={"/images/living.svg"} alt='living' width={381} height={480} />
                        <h6 className="text-2xl font-medium text-center mt-2">Living</h6>
                    </div>

                    <div className='transition-transform duration-100 hover:scale-90 shadow-xl' >
                        <Image src={"/images/Bedroom.svg"} alt='brdroom' width={381} height={480} />
                        <h6 className="text-2xl font-medium text-center mt-2">Bedroom</h6>
                    </div>
                </div>
                {/* items */}
            </div>
            {/* range */}

            {/* products */}
            <div className="w-screen xsm:h-[2450px] h-auto xsm:w-auto flex flex-col items-center justify-center mt-8">
                <h6 className="font-bold text-[40px] text-[#3A3A3A]">Our Products</h6>
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
            <button className="w-[345px] h-12 border border-[#B88E2F]  text-[#B88E2F] mt-12">Show More</button>
            {/* products */}
        </div>
    )
}

export default Home