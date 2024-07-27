import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';


function TypeFilter({ data, setType }) {
    const [types, setTypes] = useState([])
    const getAllTypes = () => {
        let type = []
        data.forEach(item => {
            if (!type.includes(item.type)) {
                type.push(item.type)
            }
        });
        type.push('None')
        setTypes(type)
    }
    useEffect(() => {
        getAllTypes()
    }, [data])
    return (
        <>
            <div className=' filter rounded-md  h-[36px] sm:w-[150px] px-3 py-1 bg-backgroundThree sm:bg-backgroundOne cursor-default hover:rounded-b-none my-4 flex items-center justify-between sm:block border-2 hover:block border-border'>
                <span className='mr-3 sm:text-white text-black'>Filter by type</span>
                <FontAwesomeIcon icon={faGreaterThan} rotation={90} className='text-black sm:text-white w-[12px] h-[12px]' />

                <ul className='filterdata hidden rounded-b-md relative top-[5px] right-[12px] w-full sm:w-[150px] px-3 bg-backgroundThree sm:bg-backgroundOne  sm:text-white text-black cursor-default z-10 pb-2 t'>
                    {
                        types.map((item, index) =>
                            <li key={index} className='py-2 ' onClick={() => setType(item)}>{item}</li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default TypeFilter
