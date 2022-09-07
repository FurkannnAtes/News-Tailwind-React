import React from 'react'

const Banner = () => {
    return (
        <div className='md:flex gap-4  mx-5 mt-5'>
            <div className='overflow-hidden relative group'>

                <p className='absolute hover:text-main-red duration-300 select-none left-5 bottom-5 z-10 text-white font-semibold text-2xl'>Traffic Problems in Time Square</p>
                <img className='group-hover:scale-125 duration-700 transition-all' src="https://technext.github.io/newsbox/img/bg-img/1.jpg" alt="" />
            </div>
            <div className='flex flex-col  justify-between '>
                <div className='overflow-hidden relative group mt-5 md:mt-0'>

                    <p className='absolute hover:text-main-red duration-300 select-none left-5 bottom-5 z-10 text-white font-semibold text-2xl'>The best way to spend your holliday</p>
                    <img className='group-hover:scale-125 duration-700 transition-all' src="https://technext.github.io/newsbox/img/bg-img/2.jpg" alt="" />
                </div>
                <div className='overflow-hidden relative group mt-5 md:mt-0'>

                    <p className='absolute hover:text-main-red duration-300 select-none left-5 bottom-5 z-10 text-white font-semibold text-2xl'>Sport Result for the weekend games</p>
                    <img className='group-hover:scale-125 duration-700 transition-all' src="https://technext.github.io/newsbox/img/bg-img/3.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
