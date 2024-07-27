import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function DateFilter({ data }) {
    const [date, setDate] = useState([])
    const getAllTypes = () => {
        let datearr = []
        data.forEach(item => {
            const timestamp = item?.date;
            const date = new Date(timestamp * 1000);
            const todayDate = date.getDate()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            if (!datearr.includes(item.type)) {
                datearr.push(`${todayDate}-${month}-${year}`)
            }
        });
        datearr.push('None')
        setDate(datearr)
    }
    useEffect(() => {
        getAllTypes()
    }, [data])


    return (
        <>
            <div className=' filter rounded-md  h-[36px] sm:w-[150px] px-3 py-1 bg-backgroundThree sm:bg-backgroundOne cursor-default hover:rounded-b-none my-4 flex items-center justify-between sm:block border-2 hover:block border-border'>
                <span className='mr-3 sm:text-white text-black'>Filter by Date</span>
                <FontAwesomeIcon icon={faGreaterThan} rotation={90} className='text-black sm:text-white w-[12px] h-[12px]' />

                <ul className='filterdata hidden rounded-b-md relative top-[5px] right-[12px] w-full sm:w-[150px] px-3 bg-backgroundThree sm:bg-backgroundOne  sm:text-white text-black cursor-default z-10 pb-2 h-[200px] overflow-hidden overflow-y-auto '>
                    {
                        date.map((item, index) =>
                            <li key={index} className='py-2 '>{item}</li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default DateFilter
