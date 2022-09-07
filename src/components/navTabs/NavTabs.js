

const NavTabs = () => {

    return (
        <div className="flex flex-col lg:flex-row px-5 md:px-20 w-full gap-5 mt-5">
            <div className="lg:w-2/3">
                <div className="bg-gray-200 flex  flex-col md:flex-row justify-between items-center  px-5">
                    <span className="text-gray-500 font-extrabold font-lg">ALL THE NEWS</span>
                    <div className="flex  flex-col md:flex-row gap-4">
                        <span className="text-main-red text-center md:text-start" >LATEST</span>
                        <span className="text-center md:text-start">POPULAR</span>
                        <span className="text-center md:text-start">INTERNATIONAL</span>
                        <span className="text-center md:text-start">LOCAL</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  py-4 gap-4  ">
                    <div className="bg-white md:w-1/2 hover:-translate-y-2 duration-500 group mx-auto"
                    ><img src="https://technext.github.io/newsbox/img/bg-img/14.jpg" alt="" />
                        <h6 className="text-gray-500">June 20, 2018</h6>
                        <p className="text-2xl font-semibold group-hover:text-main-red duration-500">Elon Musk: Tesla worker admitted to sabotage</p>
                        <h6 className="text-gray-500">By Michael Smith</h6>
                    </div>
                    <div className="bg-white md:w-1/2 hover:-translate-y-2 duration-500 group mx-auto"
                    ><img src="https://technext.github.io/newsbox/img/bg-img/15.jpg" alt="" />
                        <h6 className="text-gray-500">June 20, 2018</h6>
                        <p className="text-2xl font-semibold group-hover:text-main-red duration-500">Elon Musk: Tesla worker admitted to sabotage</p>
                        <h6 className="text-gray-500">By Michael Smith</h6>
                    </div>
                </div>
                <div className="flex flex-col gap-7 mt-10 ">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-1/2 flex  group cursor-pointer mx-auto">
                            <div><img src="https://technext.github.io/newsbox/img/bg-img/16.jpg" alt="" /></div>
                            <div className="p-1 flex flex-col justify-between">
                                <h6>June 20, 2018</h6>
                                <p className="group-hover:text-main-red duration-500 font-semibold">Nearly a quarter have no emergency savings</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex  group cursor-pointer  mx-auto">
                            <div><img src="https://technext.github.io/newsbox/img/bg-img/17.jpg" alt="" /></div>
                            <div className="p-1 flex flex-col justify-between">
                                <h6>June 20, 2018</h6>
                                <p className="group-hover:text-main-red duration-500 font-semibold">Nearly a quarter have no emergency savings</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-1/2 flex  group cursor-pointer  mx-auto">
                            <div><img src="https://technext.github.io/newsbox/img/bg-img/18.jpg" alt="" /></div>
                            <div className="p-1 flex flex-col justify-between">
                                <h6>June 20, 2018</h6>
                                <p className="group-hover:text-main-red duration-500 font-semibold">Nearly a quarter have no emergency savings</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex  group cursor-pointer  mx-auto">
                            <div><img src="https://technext.github.io/newsbox/img/bg-img/19.jpg" alt="" /></div>
                            <div className="p-1 flex flex-col justify-between">
                                <h6>June 20, 2018</h6>
                                <p className="group-hover:text-main-red duration-500 font-semibold">Nearly a quarter have no emergency savings</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-1/2 flex  group cursor-pointer  mx-auto">
                            <div><img src="https://technext.github.io/newsbox/img/bg-img/20.jpg" alt="" /></div>
                            <div className="p-1 flex flex-col justify-between">
                                <h6>June 20, 2018</h6>
                                <p className="group-hover:text-main-red duration-500 font-semibold">Nearly a quarter have no emergency savings</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex  group cursor-pointer  mx-auto">
                            <div><img src="https://technext.github.io/newsbox/img/bg-img/21.jpg" alt="" /></div>
                            <div className="p-1 flex flex-col justify-between">
                                <h6>June 20, 2018</h6>
                                <p className="group-hover:text-main-red duration-500 font-semibold">Nearly a quarter have no emergency savings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 lg:mt-0 sm:w-1/2 lg:w-1/3 flex flex-col gap-5 mx-auto">
                <div className="bg-gray-200 flex flex-col gap-5 py-5">
                    <h1 className="text-center font-semibold text-4xl">Subscribe to our newsletter</h1>
                    <input className="w-5/6 bg-gray-500 h-[40px] text-center mx-auto outline-none" type="text" placeholder="Your E-mail" />
                    <button className="duration-500 hover:bg-black  font-extrabold h-[40px] font-xl text-white bg-main-bg-red w-5/6 mx-auto"> Subscribe</button>
                    <p className="w-5/6 mx-auto text-center italic">Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh . volutpat lobortis.</p>
                </div>
                <div >
                    <img className="w-full" src="https://technext.github.io/newsbox/img/bg-img/add3.png" alt="" />
                </div>
            </div>
        </div >
    )
}

export default NavTabs
