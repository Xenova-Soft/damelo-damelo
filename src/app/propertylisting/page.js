import React from 'react'
import Image from 'next/image'
// import Footer from '@/components/Footer'
import Footer from '../../components/Footer/Footer'

function PropertyListingPage() {
    return (
        <div className="w-full mx-0 my-0 px-0 py-0">
            {/* Breadcrum section of the Property Listing Page */}
            <div className="w-full p-5 flex items-center gap-2"> 
                Damelo
                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                Owner's area
                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                How to post a property listing on Damelo
            </div>

            {/* Property Listing Posting Container */}
            <div className="w-full p-2 flex justify-center bg-[#FAFFE0]"> 
                <div className="w-full max-w-7xl p-5 my-10 shadow-lg bg-white flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full">
                        <h1 className="font-bold text-2xl">How to post a listing on Damelo</h1>
                        <br/>
                        <p>Your <strong>first 2 listings are free</strong>. You can post up to 5 listings for bedrooms free of charge.</p>
                        <br/>
                        <p>You have access to a private area where you can manage your listing and contacts received.</p>
                        <br/>
                        <p>You can efficiently answer questions, exchange information and arrange viewings with our chat.</p>
                        <br/>
                        <p>To sell or rent faster, <a href="#" className="text-blue-600 underline">contact an estate agency.</a></p>
                        <button className="bg-[#B62682] text-white p-4 my-10 rounded-md hover:bg-[#8c1d64] w-full lg:w-1/3">Place your free listing</button>
                        <p>Are you an estate agent? Discover our <a href="#" className="text-blue-600 underline">advantages for estate agents.</a></p>
                    </div>
                    <div className="w-full flex justify-center">
                        <Image
                            height={500}
                            width={500}
                            className="object-cover"
                            src={"/advertise_property_landing.png"}
                            alt="Advertise Property"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full p-2 flex justify-center bg-white"> 
                <div className="w-full max-w-7xl p-5 items-center">
                    <div className="w-full">
                        <h1 className="font-bold text-lg">What steps do I need to take to post a listing as a private property owner?</h1>
                        <br/>
                        <p>There are 4 key points to sell or rent your property as soon as possible: </p>
                        <br/>
                        <p className="font-bold text-lg">1. Upload the best photos you have and, if possible, a map with the rooms' layout</p>
                        <div>
                            <ul className="list-disc list-inside mx-10">
                                <li><strong>Have quality photos at hand</strong> when posting your listing. You can add them later, but without them, you won't see results. </li>
                                <li><strong>The cover photo is crucial.</strong> It will be the front page of your listing, the only one that will be emailed to those interested in your listing and will appear in the results lists.</li>
                                <li><strong>Arrange your photos in a logical order</strong> to create a compelling story, and go for horizontal images, as they look great. </li>
                                <li><strong>Even a hand-drawn floor plan</strong>, while not detailed, provides useful information for those interested so they can visualise the layout of the rooms and what it would be like to live there. </li>
                            </ul>
                        </div>
                        <p>If you're still not sure how to take the best photos, you can use the tips and tricks we shared in a video on <a href="#" className="text-blue-600 underline">how to photograph houses with your mobile phone.</a></p>
                    </div>
                    <br/>
                    <p className="font-bold text-lg">2. Enter the extact address</p>
                    <p>To make sure people looking in the area find out about your listing, <strong>you must provide an accurate address for your property</strong>. If, for some reason, you don't want to give it, you can <strong>hide the address for 9.90 €</strong>.</p>
                    <br/>
                    <p className="font-bold text-lg">3. Enter a price that's in line with the market value</p>
                    <p>If you're not sure, you can do a <a href="#" className="text-blue-600 underline">free property valuation</a> via our website or check the average prices for that area.</p>
                    <br/>
                    <p className="font-bold text-lg">4. Enter your property's characteristics and describe your home in detail</p>
                    <p>Include information about your property, such as the number of bedrooms, m2, bathrooms, etc. Also mention extras, like if there is a lift, a terrace, a parking space, a storage room, etc. In the end, <strong>it all adds value to your property</strong>.</p>
                    <br/>
                    <p><strong>Highlight your property's unique features</strong>, especially those not visible in the photos. Don't forget to mention nearby services, public transport and places of interest too.</p>
                </div>
            </div>
            <div className="w-full p-0 flex bg-white justify-center"> 
                <div className="w-full max-w-7xl px-5 py-0 flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full">
                        <h1 className="font-bold text-2xl">Advantages of posting on Damelo</h1>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 flex justify-center bg-white">
                <div className="w-full max-w-7xl px-5 py-0 mb-10 bg-white flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full">
                        <h1 className="font-bold text-xl">Guaranteed visibility</h1>
                        <p>The listings posted on idealista are viewed by millions of users, giving you the chance to sell or rent your property more quickly and effectively.</p>
                    </div>
                    <div className="w-full">
                        <br/>
                        <h1 className="font-bold text-xl">The best experience</h1>
                        <p>The idealista APP has several features that will help you manage your listing, and for those looking for a property, you can set up customised alerts to find out about new properties immediately.</p>
                    </div>
                    <div className="w-full">
                        <h1 className="font-bold text-xl">Loads of products for your listing</h1>
                        <p>We offer a wide variety of tools to improve your listing's position and gain visibility.</p>
                    </div>
                </div>
            </div>
            <div className="w-full py-0 flex bg-[#F4F5F2] justify-center"> 
                <div className="w-full max-w-7xl px-5 py-6 flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full">
                        <h1 className="font-bold text-2xl">Some services to help sell or rent your property</h1>
                    </div>
                </div>
            </div>
            <div className="w-full pb-8 flex justify-center bg-[#F4F5F2]">
                <div className="w-full max-w-7xl px-5 py-0 my-0 flex flex-col md:flex-row gap-2">
                    {/* First Container */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-full p-5 bg-white">
                            <h1 className="font-bold text-xl">We recommend an agency for a personalised service</h1>
                            <br />
                            <p>We can help you with anything, but a real estate agent will study and adapt to your individual case.</p>
                            <br />
                            <p><a href="#" className="text-blue-600 hover:underline font-bold">See lists of expert agencies in your area.</a></p>
                        </div>
                    </div>

                    {/* Second Container */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-full p-5 bg-white">
                            <h1 className="font-bold text-xl">Are you an estate agent?</h1>
                            <br />
                            <p>We offer a range of services and prices adapted to your needs. Up-to-date training and real estate management software. Plus you will have a team of photographers and more support services available.</p>
                            <br />
                            <p><a href="#" className="text-blue-600 hover:underline font-bold">Discover the advantages for estate agents.</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PropertyListingPage
