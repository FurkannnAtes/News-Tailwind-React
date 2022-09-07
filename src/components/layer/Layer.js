import React from 'react'

const Layer = () => {
    return (
        <div className='h-[450px] bg-fixed bg-cover bg-no-repeat text-white flex flex-col justify-center mt-20' style={{ backgroundImage: "url(https://technext.github.io/newsbox/img/bg-img/10.jpg)" }}>
            <div className='bg-gray-700 opacity-40 h-[450px] w-full absolute'></div>
            <h6 className='font-semibold text-center z-10'>June 20, 2018</h6>
            <h1 className='text-4xl font-semibold text-center z-10'>Traffic Problems in Time Square</h1>

        </div>
    )
}

export default Layer
