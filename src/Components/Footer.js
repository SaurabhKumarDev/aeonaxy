import React from 'react'
import '../App.css'
import FooterImage from '../Picture/paypal with name.png'
import USAImage from '../Picture/england.png'

function Footer() {
    return (
        <div className='text-blue-900 my-7 mx-5'>
            <img src={FooterImage} className='w-28 h-28' />
            <div className='my-5 flex justify-between'>
                <div className=''>
                    <ul className='footerFlex gap-7'>
                        <li>Help</li>
                        <li>Contact</li>
                        <li>Fees</li>
                        <li>Security</li>
                        <li>Apps</li>
                        <li>Shop</li>
                        <li>Enterprise</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div>
                    <img src={USAImage} className=' h-8' />
                </div>
            </div>
            <hr />
            <div className='flex justify-between my-5'>

                <ul className='footerFlex gap-7'>
                    <li>About</li>
                    <li>Newsroom</li>
                    <li>Jobs</li>
                    <li>Investor Relations</li>
                    <li>Values in Action</li>
                    <li>Public Policy</li>
                    <li>Sitemap</li>
                </ul>
                <ul className='gap-7 footerLeftDisplayNone'>
                    <li className=' opacity-60'>&copy; 1999 - {new Date().getFullYear()}</li>
                    <li>Accessibility</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                    <li>Legal</li>
                </ul>

            </div>
        </div>
    )
}

export default Footer 
