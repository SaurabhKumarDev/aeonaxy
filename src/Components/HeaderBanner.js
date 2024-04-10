import React from 'react'
import CoverImage from '../Picture/cover-image.jpg'
import ProfilePicture from '../Picture/profile-picture.jpg'

function HeaderBanner() {
    return (
        <div>
            <div className='mt-6'>
                <div className='flex gap-2 items-center text-blue-500 font-medium'>
                    <span className='pb-1'>&larr;</span>
                    <a href='#'>Donate with PayPal</a>
                </div>
                <div className='mt-4'>
                    <img src={CoverImage} className='rounded-t-3xl h-80 w-full' />
                    <img src={ProfilePicture} className=' p-2 border-2 border-solid rounded-full w-44 h-44 relative top-[-6rem] left-[1rem]' />
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner