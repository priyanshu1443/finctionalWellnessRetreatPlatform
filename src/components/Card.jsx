import React from 'react'

function Card({ data }) {
    const timestamp = data?.date;
    const date = new Date(timestamp * 1000);
    const todayDate = date.getDate()
    const year = date.getFullYear()

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return (
        <>
            <div className=' h-[350px] p-5 bg-backgroundTwo rounded-lg shrink flex items-center flex-col justify-center sm:block w-[350px] sm:w-[450px] md:w-[330px] lg:w-[299px] xl:w-[380px] 2xl:w-[461px]'>
                <img className='w-[180px] h-[120px] rounded-2xl object-cover' src={data.image} alt="" />
                <div>
                    <h3 className='font-semibold text-base my-4 '>{data.title}</h3>
                    <p className='text-sm my-2 '>{data.description}</p>
                    <p className='text-sm my-2'>Date:  {monthNames[date.getMonth()]} {todayDate}-{todayDate + 5},{year}</p>
                    <p className='text-sm my-2'>Location: {data.location}</p>
                    <p className='text-sm my-2'>Price: ${data.price}</p>
                </div>
            </div>
        </>
    )
}

export default Card
