import Navbar from "./components/navbar/Navbar"
import Banner from "./components/banner/Banner"
import NavTabs from "./components/navTabs/NavTabs"
import Layer from "./components/layer/Layer"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-gray-200 flex flex-col lg:flex-row justify-center lg:justify-start gap-3 items-center h-40 px-5 lg:px-15 mx-5">
        <span className="bg-main-bg-red px-8 py-5 text-xl font-extrabold text-white lg:mr-5 lg:ml-10">Trending</span>
        <p className="font-semibold"> Welcome the most accurate news here</p>
      </div>
      <Banner />
      <NavTabs />
      <Layer />
      <div className="w-4/5 mx-auto my-5"><img src="https://technext.github.io/newsbox/img/bg-img/add2.png" alt="" /></div>
      <Footer />
    </div>
  );
}

export default App;
