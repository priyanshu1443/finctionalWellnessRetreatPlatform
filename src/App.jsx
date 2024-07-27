import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Bigcard from './components/Bigcard'
import Card from './components/Card'
import Button from './components/Button'
import TypeFilter from './components/TypeFilter'
import DateFilter from './components/DateFilter'


function App() {
    const [treats, setTreats] = useState([])
    const [byPagination, setBypagination] = useState(3)
    const [pagination, setPagination] = useState(3)
    const [isNext, setIsNext] = useState(false)
    const [isPreview, setISPreview] = useState(true)
    const [input, setInput] = useState('')
    const [type, setType] = useState('')

    const screenwidth = window.innerWidth

    const getData = async () => {
        const responce = await axios.get("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats")
        setTreats(responce.data)
    }

    useEffect(() => {
        getData()
        if (window.innerWidth <= 1024) {
            setPagination(4)
            setBypagination(4)
        }
    }, [])



    const nextPage = () => {
        let val = pagination + byPagination
        if (pagination < treats.length) setPagination(val)
        if (val >= treats.length) setIsNext(true)
        setISPreview(false)
    }

    const prevPage = () => {
        let val = pagination - byPagination
        if (pagination < byPagination) setPagination(byPagination)
        else if (pagination > byPagination) setPagination(val)
        if (val === byPagination) setISPreview(true)
        setIsNext(false)
    }

    return (
        <div >
            <div>
                <Navigation />
            </div>
            <main className='max-w-[1530px] w-full h-auto px-8 py-6'>
                {
                    screenwidth >= 640 ?
                        <div>
                            <Bigcard />
                        </div> : null
                }

                <div className='h-auto pb-6 sm:h-[100px] sm:flex items-center justify-between'>
                    <div className='sm:flex items-center gap-5'>
                        {/* <TypeFilter data={treats} setType={setType} /> */}
                        <DateFilter data={treats} />
                        <TypeFilter data={treats} setType={setType} />
                    </div>
                    <div className=' w-full sm:w-[200px] lg:w-[400px] h-[36px] rounded-md overflow-hidden border-2 border-border sm:border-none' >
                        <input
                            className=' w-full h-full bg-white sm:bg-backgroundOne text-black sm:text-white px-2 text-md py-2 placeholder:text-black sm:placeholder:text-white border-none outline-0'
                            type="text"
                            placeholder='Search retreats by title'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex gap-8  justify-center align-center flex-wrap'>
                    {
                        treats
                            .filter(data => type === 'None' || type === "" ? data : data.type === type)
                            .filter(data => input !== "" ? data.title.toLowerCase().includes(input.toLowerCase()) : data)
                            .slice(pagination - byPagination, pagination)
                            .map((data, index) => <Card key={index} data={data} />)
                    }
                </div>
                <div className='my-3 pt-3 flex items-center justify-center gap-3'>
                    <Button text='Previous' func={prevPage} disable={isPreview} />
                    <Button text='Next' func={nextPage} disable={isNext} />
                </div>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default App
