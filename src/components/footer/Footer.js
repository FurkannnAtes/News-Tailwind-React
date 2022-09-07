import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col relative overflow-hidden'>
            <div className='text-black font-extrabold  text-4xl text-center mx-auto z-20 bg-white px-5 '>News<span className='text-main-red '>OFENOS</span></div>
            <div className='w-screen bg-black h-[2px] absolute top-5'></div>
            <div>
                <div className='flex  flex-row gap-8 md:w-2/3 mx-auto mt-5 justify-evenly'>
                    <a href="" className='hover:text-main-red duration-500'>Contact Us</a>
                    <a href="" className='hover:text-main-red duration-500'>Closed Caption</a>
                    <a href="" className='hover:text-main-red duration-500'>Site Map</a>
                </div>
                <div className='flex flex-row w-1/3 mx-auto mt-10 justify-evenly'>
                    <a href="" className='hover:text-main-red duration-500'>  <i className="bi bi-twitter"></i></a>
                    <a href="" className='hover:text-main-red duration-500'>  <i className="bi bi-instagram"></i></a>
                    <a href="" className='hover:text-main-red duration-500'>  <i className="bi bi-facebook"></i></a>
                    <a href="" className='hover:text-main-red duration-500'>  <i className="bi bi-github"></i></a>
                </div>
                <p className='text-center w-2/3 mx-auto mt-5'>Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. Proin ac urna at lectus volutpat lobortis. Vestibulum venenatis iaculis diam vitae lobortis. Donec tincidunt viverra elit, sed consectetur est pr etium ac. Mauris nec mauris tellus.</p>
                <h6 className='text-center mt-5 py-5 border-t-2'>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</h6>
            </div>
        </div>
    )
}

export default Footer
