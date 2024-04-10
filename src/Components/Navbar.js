import React from 'react'
import NavImage from '../Picture/paypal.png'

function Navbar() {
    return (
        <div className='' style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)" }}>
            <nav class="flex items-center justify-between flex-wrap p-8">
                <div class="flex items-center flex-shrink-0 mr-6">
                    <img src={NavImage} class="fill-current h-8 w-8 mr-2" width="54" height="54" />
                    {/* <span class="font-semibold text-xl tracking-tight">PayPal</span> */}
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-5">
                            Personal
                        </a>
                        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-5">
                            Business
                        </a>
                        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-5">
                            Developer
                        </a>
                        <a href="#" class="block mt-4 lg:inline-block lg:mt-0">
                            Help
                        </a>
                    </div>
                    <div>
                        <a href="#" class="inline-block text-sm font-medium mx-4 text-blue-700 rounded-3xl border-purple-950  px-4 py-2 leading-none border rounded hover:border-transparent mt-4 lg:mt-0">My PayPal</a>
                        <a href="#" class="inline-block text-sm px-4 py-2 font-medium text-blue-700 rounded-3xl border-purple-950 leading-none border rounded hover:border-transparent mt-4 lg:mt-0">Log out</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
