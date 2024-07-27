import React from 'react'

function Bigcard() {
    return (
        <>
            <div className='bg-backgroundTwo rounded-lg px-6 py-4 h-[420px]'>
                <img
                    className=' w-full h-[300px] object-cover rounded-lg'
                    src="https://smarthernews.com/wp-content/uploads/2024/03/jared-rice-xce530fBHrk-unsplash-1.webp"
                    alt=""
                />
                <div className='pt-3'>
                    <h2 className='text-text2 text-2xl font-[400] mb-2'>Discover Your Inner peace</h2>
                    <p className='text-text3 text-md'>Join us for a series of wellness retreats designed to help you  find tranquility and rejuvenation.</p>
                </div>
            </div>
        </>
    )
}

export default Bigcard
