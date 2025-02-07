"use client";

import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Foot from '@/components/Foot'
import Footer from '@/components/Footer'
import { Product } from '@/types/products'
import { urlFor } from '@/sanity/lib/image';
import { getCartItems } from '../actions/actions';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { EmailInput } from 'sanity';
import { client } from '@/sanity/lib/client';

function page() {

    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        streetAddress: "",
        city: "",
        province: "",
        zipCode: "",
        phone: "",
        emailAddress: "",
        additionalInformation: "",
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        country: false,
        streetAddress: false,
        city: false,
        province: false,
        zipCode: false,
        phone: false,
        emailAddress: false,
    });

    useEffect(() => {
        setCartItems(getCartItems());
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory,
        0
    );
    const total = Math.max(subtotal - discount, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };


    const formValidation = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            country: !formValues.country,
            streetAddress: !formValues.streetAddress,
            city: !formValues.city,
            province: !formValues.province,
            zipCode: !formValues.zipCode,
            phone: !formValues.phone,
            emailAddress: !formValues.emailAddress,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };



    const handlePlaceOrder = async () => {

        const orderData = {
            _type: 'order',
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            company: formValues.companyName,
            country: formValues.country,
            streetAddress: formValues.streetAddress,
            city: formValues.city,
            province: formValues.province,
            zipCode: formValues.zipCode,
            phone: formValues.phone,
            emailAddress: formValues.emailAddress,
            cartItems: cartItems.map(item => ({
                _type: 'reference',
                _ref: item._id
            })),
            total: total,
            discount: discount,
            orderDate: new Date().toISOString()

        };

        try {
            await client.create(orderData);
            localStorage.removeItem("appliedDiscount");
            console.log("Order successfully placed:", orderData);
        } catch (error) {
            console.error("Error creating order:", error);
        }
        

        Swal.fire({
            title: "Processing your order....",
            text: "Please wait a moment.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#B88E2F",
            cancelButtonColor: "red",
            confirmButtonText: "Proceed",   
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("appliedDiscount");
                Swal.fire(
                    "Success!",
                    "Your order has been successfully processed.",
                    "success",
                );
            }
            else {
                Swal.fire(
                    "Error!",
                    "Please fill in all the fields before proceeding.",
                    "error"
                );
            }
        });

       
    }

    useEffect(() => {
        async function checkSanityConnection() {
            try {
                const testData = await client.fetch('*[_type == "order"]');
                console.log("Sanity Orders:", testData);
            } catch (error) {
                console.error("Sanity Fetch Error:", error);
            }
        }
        checkSanityConnection();
    }, []);
    


    const [selected, setSelected] = useState("bank");

    return (
        <div>
            <Header />
            <div className="back w-full h-[316px] flex flex-col items-center justify-center gap-3">
                <Image src={"/images/logo.svg"} alt='logo' width={77} height={77} />
                <h5 className="text-5xl font-medium">Checkout</h5>
                <p className="font-medium">Home  /
                    Checkout</p>
            </div>

            <div className="w-full h-[1550px] flex justify-center py-20 xsm:flex-col">
                <div className="w-[708px] h-full flex flex-col gap-6 font-medium xsm:w-screen xsm:justify-center xsm:items-center">
                    <h5 className="h-14 text-4xl font-semibold">Billing details</h5>

                    <div className="w-full h-[121px] flex gap-4">
                        <div className="w-[212px] h-[121px] flex flex-col gap-3 xsm:w-auto">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                placeholder="Enter your first name"
                                value={formValues.firstName}
                                onChange={handleInputChange}
                                className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"
                            />
                            {formErrors.firstName && (
                                <p className="text-red-600 text-sm">First name is required.</p>
                            )}
                        </div>

                        <div className="w-[212px] h-[121px] flex flex-col gap-3 xsm:w-auto">
                            <label htmlFor="lastName">last Name</label>
                            <input
                                id="lastName"
                                placeholder="Enter your last name"
                                value={formValues.lastName}
                                onChange={handleInputChange}
                                className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"
                            />
                            {formErrors.lastName && (
                                <p className="text-red-600 text-sm">Last name is required.</p>
                            )}
                        </div>
                    </div>

                    <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                        <label>Company Name (Optional)</label>
                        <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]" />
                    </div>

                    <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                        <label htmlFor="country">Country / Region</label>
                        <select
                            id="country"
                            aria-placeholder="Please select your country"
                            value={formValues.country}
                            
                            className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5">
                            <option disabled selected className='text-[#9F9F9F]'>Srilanka</option>
                            <option value="pakistan">Pakistan</option>
                            <option value="india">India</option>
                            <option value="bangladesh">Bangladesh</option>
                        </select>
                    </div>

                    <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                        <label htmlFor="streetAddress">Street address</label>
                        <input
                            id="streetAddress"
                            placeholder="Please enter your street address"
                            value={formValues.streetAddress}
                            onChange={handleInputChange}
                            className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"
                        />
                        {formErrors.streetAddress && (
                            <p className="text-red-600 text-sm">Street address is required.</p>
                        )}
                    </div>

                    <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                        <label htmlFor="city">Town / City</label>
                        <input
                            id="city"
                            placeholder="Enter your city name"
                            value={formValues.city}
                            onChange={handleInputChange}
                            className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"
                        />
                        {formErrors.city && (
                            <p className="text-red-600 text-sm">This field is required.</p>
                        )}
                    </div>

                    <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                        <label htmlFor="province">Province</label>
                        <select
                            id="province"
                            aria-placeholder="Select your province."
                            value={formValues.province}
                            className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px] px-5">
                            <option disabled selected className='text-[#9F9F9F]'>Western Province</option>
                            <option value="central">Central Province</option>
                            <option value="eastern">Eastern Province</option>
                            <option value="northern">Northern Province</option>
                        </select>
                    </div>

                    <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                        <label htmlFor="zipCode">ZIP code</label>
                        <input
                            id="zipCode"
                            placeholder="000000"
                            value={formValues.zipCode}
                            onChange={handleInputChange}
                            className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"
                        />
                        {formErrors.zipCode && (
                            <p className="text-red-600 text-sm">Write your city zip code.</p>
                        )}
                    </div>

                    <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            placeholder="+92 000 000 0000"
                            value={formValues.phone}
                            onChange={handleInputChange}
                            className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"
                        />
                        {formErrors.phone && (
                            <p className="text-red-600 text-sm">Enter your phone number.</p>
                        )}
                    </div>

                    <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                        <label htmlFor="emailAddress">Email address</label>
                        <input
                            id="emailAddress"
                            placeholder="xxxxxx@gmail.com"
                            value={formValues.emailAddress}
                            onChange={handleInputChange}
                            className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]"
                        />
                        {formErrors.emailAddress && (
                            <p className="text-red-600 text-sm">Write your email address.</p>
                        )}
                    </div>

                    <div className="w-[453px] h-[121px] flex flex-col gap-3 xsm:w-[340px]">
                        <input className="w-full h-[75px] border border-[#9F9F9F] rounded-[10px]" placeholder='Additional information'></input>
                    </div>
                </div>

                <div className="w-[608px] h-auto font-poppins bg-[#FFF3E3]">
                    <div>
                        <div>
                            <p>Product</p>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div
                                        key={item._id}
                                        className="flex items-center gap-4 py-3 border-b"
                                    >
                                        <div className="w-16 h-16 rounded overflow-hidden">
                                            {item.productImage && (
                                                <Image
                                                    src={urlFor(item.productImage).url()}
                                                    alt={item.title}
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full"
                                                />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium">{item.title}</h3>
                                            <p className="text-xs text-gray-500">
                                                Quantity: {item.inventory}
                                            </p>
                                        </div>
                                        <p className="text-sm font-medium">
                                            ${item.price * item.inventory}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-500">Your cart is empty.</p>
                            )}
                            <div className="text-right pt-4">
                                <p className="font-medium text-[20px]">
                                    Subtotal: <span className="font-medium">${subtotal}</span>
                                </p>
                                
                                <p className="text-lg font-semibold">
                                    Total: ${total.toFixed(2)}
                                </p>
                            </div>

                            <p className="text-sm">
                                Subtotal: <span className="font-medium">${subtotal}</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-auto my-10">
                        <p className="w-full h-auto font-medium text-2xl">Select payment options</p>
                        <div>
                            <div
                                className="p-4 cursor-pointer"
                                onClick={() => setSelected("bank")}
                            >
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="w-5 h-5 flex items-center justify-center border-2 border-gray-500 rounded-full">
                                        {selected === "bank" && (
                                            <div className="w-3 h-3 bg-black rounded-full"></div>
                                        )}
                                    </div>
                                    <p className="font-medium">Direct Bank Transfer</p>
                                </div>
                                <p className="text-sm mt-1 text-[#9F9F9F] font-light">
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>

                            <div className="p-4 cursor-pointer"
                                onClick={() => setSelected("cod")}>
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="w-5 h-5 rounded-full border-2 border-gray-500 flex items-center justify-center">
                                        {selected === "cod" && (
                                            <div className="w-3 h-3 bg-black rounded-full"></div>
                                        )}
                                    </div>
                                    <p className="font-medium">Cash On Delivery</p>
                                </div>
                                <div>
                                    <p className="my-6 font-semibold">
                                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                                    </p>
                                </div>

                                <div className="w-full h-20 flex items-center justify-center">
                                    <button className="w-[318px] h-16 border border-black rounded-2xl"
                                        onClick={handlePlaceOrder}>
                                        Place order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Foot />
            <Footer />
        </div>
    )
}

export default page;