import Foot from '@/components/Foot'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <Header />
            <div className="back w-full h-[316px] flex flex-col items-center justify-center gap-3">
                <Image src={"/images/logo.svg"} alt='logo' width={77} height={77} />
                <h5 className="text-5xl font-medium">Blog</h5>
                <p className="font-medium">Home  /
                    Blog</p>
            </div>

            <div className="w-screen h-auto m-24 font-poppins flex gap-20">
                {/* blog1 */}
                <div className="w-[820px] h-auto">
                    <div className="w-full h-[800px]">
                        <Image src={"images/blog1.svg"}
                            alt='blog'
                            width={800}
                            height={600}
                        />
                        <div className="flex gap-8 text-[#9F9F9F] my-3">
                            <div>
                                <p className="flex gap-2">
                                    <Image
                                        src={"/images/admin.svg"}
                                        alt='admin'
                                        width={20}
                                        height={20}
                                    />
                                    <span>Admin</span>
                                </p>
                            </div>

                            <div>
                                <p className="flex gap-2">
                                    <Image
                                        src={"/images/calender.svg"}
                                        alt='calender'
                                        width={20}
                                        height={20}
                                    />
                                    <span>14 oct 2022</span>
                                </p>
                            </div>

                            <div>
                                <p className="flex gap-2">
                                    <Image
                                        src={"/images/tag.svg"}
                                        alt='tag'
                                        width={20}
                                        height={20}
                                    />
                                    <span>Wood</span>
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <h4 className="font-medium text-3xl my-5">Going all-in with millennial design</h4>
                            <p className="text-sm text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                            <button className="my-8 border-b border-black">Read more</button>
                        </div>
                    </div>
                    {/* blog1 */}

                    {/* blog2 */}
                    <div className="w-[820px] h-auto">
                        <div className="w-full h-[800px]">
                            <Image src={"images/blog2.svg"}
                                alt='blog'
                                width={800}
                                height={600}
                            />
                            <div className="flex gap-8 text-[#9F9F9F] my-3">
                                <div>
                                    <p className="flex gap-2">
                                        <Image
                                            src={"/images/admin.svg"}
                                            alt='admin'
                                            width={20}
                                            height={20}
                                        />
                                        <span>Admin</span>
                                    </p>
                                </div>

                                <div>
                                    <p className="flex gap-2">
                                        <Image
                                            src={"/images/calender.svg"}
                                            alt='calender'
                                            width={20}
                                            height={20}
                                        />
                                        <span>14 oct 2022</span>
                                    </p>
                                </div>

                                <div>
                                    <p className="flex gap-2">
                                        <Image
                                            src={"/images/tag.svg"}
                                            alt='tag'
                                            width={20}
                                            height={20}
                                        />
                                        <span>Handmade</span>
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <h4 className="font-medium text-3xl my-5">Exploring new ways of decorating</h4>
                                <p className="text-sm text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                                <button className="my-8 border-b border-black">Read more</button>
                            </div>
                        </div>
                    </div>
                    {/* blog2 */}

                    {/* blog3 */}
                    <div className="w-[820px] h-auto">
                        <div className="w-full h-[800px]">
                            <Image src={"images/blog3.svg"}
                                alt='blog'
                                width={800}
                                height={600}
                            />
                            <div className="flex gap-8 text-[#9F9F9F] my-3">
                                <div>
                                    <p className="flex gap-2">
                                        <Image
                                            src={"/images/admin.svg"}
                                            alt='admin'
                                            width={20}
                                            height={20}
                                        />
                                        <span>Admin</span>
                                    </p>
                                </div>

                                <div>
                                    <p className="flex gap-2">
                                        <Image
                                            src={"/images/calender.svg"}
                                            alt='calender'
                                            width={20}
                                            height={20}
                                        />
                                        <span>14 oct 2022</span>
                                    </p>
                                </div>

                                <div>
                                    <p className="flex gap-2">
                                        <Image
                                            src={"/images/tag.svg"}
                                            alt='tag'
                                            width={20}
                                            height={20}
                                        />
                                        <span>Wood</span>
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <h4 className="font-medium text-3xl my-5">Handmade pieces that took time to make</h4>
                                <p className="text-sm text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                                <button className="my-8 border-b border-black">Read more</button>
                            </div>
                        </div>
                    </div>
                    {/* blog3 */}
                </div>
                <div className="">
                    <div className="w-[400px] h-[540px]">
                        <button className="w-[300px] h-14 border rounded-lg border-gray-600">
                            <input 
                            />
                        </button>
                        <p className="font-medium text-2xl m-10">Categories</p>
                        <ul className="text-[#9F9F9F] flex flex-col gap-10 mx-7">
                            <li className="w-[250px] flex justify-between">Crafts <span>2</span></li>
                            <li className="w-[250px] flex justify-between">Design <span>8</span></li>
                            <li className="w-[250px] flex justify-between">Handmade <span>7</span></li>
                            <li className="w-[250px] flex justify-between">Interior <span>1</span></li>
                            <li className="w-[250px] flex justify-between">Wood <span>6</span></li>
                        </ul>
                    </div>
                    <div>
                        <Image
                        src={"/images/blog4.svg"}
                        alt='blog'
                        width={393}
                        height={650}
                        />
                    </div>
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