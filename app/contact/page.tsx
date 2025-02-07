import Foot from '@/components/Foot'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className="w-screen font-poppins">
            <Header />
            <div className="back w-full h-[316px] flex flex-col items-center justify-center gap-3">
                <Image src={"/images/logo.svg"} alt='logo' width={77} height={77} />
                <h5 className="text-5xl font-medium">Contact</h5>
                <p className="font-medium">Home  /
                    Contact</p>
            </div>

            <div className="w-screen h-[300px] flex flex-col gap-4 items-center justify-center">
                <h6 className="font-semibold text-4xl">Get In Touch With Us</h6>
                <p className="w-[644px] text-[#9F9F9F] text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>

            <div className="w-screen h-auto flex items-centr justify-center gap-16">
                <div className="w-[340px] h-[540px] flex flex-col gap-12 font-poppins">
                    <div className="flex flex-col gap-2">
                        <Image
                            src={"/images/address.svg"}
                            alt='address'
                            width={22}
                            height={28}
                        />
                        <p className="text-2xl font-medium">Address</p>
                        <span>236 5th SE Avenue, New York NY10000, United States</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Image
                            src={"/images/phone.svg"}
                            alt='phone'
                            width={30}
                            height={30}
                        />
                        <p className="text-2xl font-medium">Phone</p>
                        <span>Mobile: +(84) 546-6789<br />
                            Hotline: +(84) 456-6789</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Image
                            src={"/images/clock.svg"}
                            alt='clock'
                            width={23}
                            height={23}
                        />
                        <p className="text-2xl font-medium">Working Time</p>
                        <span>Monday-Friday: 9:00 - 22:00<br />
                            Saturday-Sunday: 9:00 - 21:00</span>
                    </div>
                </div>

                <div className="font-poppins flex flex-col gap-12">
                    <div>
                        <label>Your name</label><br />
                        <input 
                        placeholder='Abc'
                        className="w-[530px] h-[75px] border border-[#9F9F9F] rounded-[10px]"/>
                    </div>
                    <div>
                        <label>Email address</label>
                        <input
                        placeholder='Abc@def.com' 
                        className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]" />
                    </div>
                    <div>
                        <label>Subject</label>
                        <input
                        placeholder='This is optional' 
                        className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"/>
                    </div>
                    <div className="">
                        <label>Message</label>
                        <input 
                        placeholder='Hi I did like to ask about'
                        className="w-full h-[120px] border border-[#9F9F9F] rounded-[10px]"/>
                    </div>
                    <button className="w-[240px] h-14 flex items-center justify-center bg-[#B88E2F] border rounded-md text-white">Submit</button>
                </div>
            </div>

            <Foot />
            <Footer />

        </div>
    )
}

export default page