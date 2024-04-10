import React from 'react'
import FirstImage from '../Picture/whyUs 1.png'
import SecondImage from '../Picture/WhyUs2.png'
import ThirdImage from '../Picture/WhyUs3.png'

function WhyChooseUs() {
    return (
        <div style={{ backgroundColor: "#eeeee4" }} className='py-9 rounded-xl my-6 px-7'>
            <h1 className='text-2xl mb-4'>PayPal helps your gifts do more good</h1>
            <div className='WhyChooseUsFlex'>
                <div className='flex flex-col gap-3 spacing'>
                    <img src={FirstImage} className=' w-28 h-28' />
                    <h2 className=' font-medium text-xl'>Safe and secure donations</h2>
                    <p>Charities are in good standing so you can donate more securely.</p>
                </div>
                <div className='flex flex-col gap-3 spacing'>
                    <img src={SecondImage} className=' w-28 h-28' />
                    <h2 className='font-medium text-xl'>No transaction fees</h2>
                    <p>Help charities pay less in fees and do more with your donation.</p>
                </div>
                <div className='flex flex-col gap-3 spacing'>
                    <img src={ThirdImage} className=' w-28 h-28' />
                    <h2 className='font-medium text-xl'>Recive a tax receipt</h2>
                    <p>A record of your kindness is sent right to your email.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
