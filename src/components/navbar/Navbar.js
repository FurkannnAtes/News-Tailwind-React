import React from 'react'

const Navbar = () => {


    function handleNavCollapse() {
        let navbarCollapse = document.getElementById("mainNavCollapse")
        navbarCollapse.classList.toggle("hidden")


    }
    return (
        <div className='flex items-center justify-between h-[150px] px-5 lg:px-20 '>

            <div className='text-black font-extrabold text-4xl'>News<span className='text-main-red '>OFENOS</span></div>
            <button className="text-4xl lg:hidden " onClick={() => handleNavCollapse()} >
                <i className="bi bi-list"></i>
            </button>

            <ul id='mainNavCollapse' className='border-b-4 bg-white lg:border-0 w-full lg:w-auto px-5 ease-in duration-500 absolute hidden left-0 top-[150px] lg:relative lg:left-auto lg:top-auto lg:h-auto lg:flex gap-5'>
                <li className='mb-5 lg:mb-0 text-center '><a href='#'>Agenda</a></li>
                <li className='mb-5 lg:mb-0 text-center '><a href='#'>World</a></li>
                <li className='mb-5 lg:mb-0 text-center '><a href='#'>Sport</a></li>
                <li className='mb-5 lg:mb-0 text-center '><a href='#'>Authors</a></li>
            </ul>
            <div className='hidden lg:flex cursor-pointer'><img src="https://technext.github.io/newsbox/img/bg-img/add.png" alt="" /></div>
        </div>
    )
}

export default Navbar
