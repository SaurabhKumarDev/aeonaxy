import React from 'react'
import Card from './Card'
import WhyChooseUs from './WhyChooseUs'
import '../App.css'

function PayPal() {
    return (
        <div className='flexNone gap-2 px-2'>
            <div className='widthsixty'>
                <h6>Donate to PayPal Giving Fund</h6>
                <h2 className=' text-4xl mt-3 mb-5 font-medium'>Figures of Speech Theatre</h2>
                <small className=' bg-sky-200 text-blue-700 px-4 py-2 rounded-3xl font-mono' >Arts & Culture</small>
                <address className='my-4'>Freeport, ME <br /> EIN: 01-0432620</address>
                <div className='flex gap-3 my-5 w-max'>
                    <div className='w-15 h-15 p-1' style={{ backgroundColor: "#eeeee4", borderRadius: "50%" }}>
                        <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" /></svg>
                    </div>
                    <div className='w-11 h-11 p-1' style={{ backgroundColor: "#eeeee4", borderRadius: "50%" }}>
                        <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                    </div>
                </div>
                <p>Figures of Speech Theatre creates and tours visionary works of performance forged at the intersection of poetry, music, sculpture and dance. The company has toured all over the world-from Sofia, Bulgaria. to Tokyo, Japan, to Lima, Peru. Besides performing at venues such as the Kennedy Center, the Smithsonian Institution, and the New Victory Theatre on Broadway, the company retains a strong commitment to teaching and performing throughout its home state of Maine</p>
                <br />
                <small className='my-5 mt-5'>Source: PayPal Giving Fund charity profile</small> <br /><br />
                <small className=' font-light'> The info in this profile is provided and managed by the charities themselves.</small>
            </div>
            <div className='widthforty spacing'>
                <div className='flex flex-wrap justify-around gap-3'>
                    <p className=' px-14 w-max py-4 hover:bg-blue-600 hover:text-white' style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>$25</p>
                    <p className=' px-14 w-max py-4 hover:bg-blue-600 hover:text-white' style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>$50</p>
                    <p className=' px-14 w-max py-4 hover:bg-blue-600 hover:text-white' style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>$100</p>
                    <p className=' px-14 w-max py-4 hover:bg-blue-600 hover:text-white' style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>$200</p>
                    <p className=' px-14 w-max py-4 hover:bg-blue-600 hover:text-white' style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>$Other</p>
                </div>
                <div className='mt-4 mb-3'>
                    <input type='radio' />
                    <span> Share my name and email with the charity.</span>
                </div>
                <input type='submit' className='px-6 py-2 bg-blue-900 rounded-3xl text-white mb-3 mt-2' value="Donate Now" />
                <ul className=' list-item ml-9 mt-4 mb-9' style={{listStyle:"initial"}}>
                    <li>PayPal covers all transaction fees.</li>
                    <li>Your're donating to PayPal Giving Fund, a 501(c)(3) charity, <span className=' text-blue-600'>subject to its terms.</span></li>
                    <li>Donations can take <span className='text-blue-600'>up to 45 days</span>to get to your chosen charity. IT's rare, but if <span className='text-blue-600'>we can't send your money to this charity.</span>, we'll ask you to recommend another.</li>
                    <li>If we can't reach you, we'll send it to a similar charity and keep you updated. Your donation is typically tax-deductible in the US.</li>
                </ul>
                <div>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default PayPal
