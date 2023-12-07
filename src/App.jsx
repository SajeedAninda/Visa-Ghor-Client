import logo from "./assets/logo.jpg";
import './App.css';
import { FiPhoneCall } from 'react-icons/fi';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import { MdMarkEmailRead } from 'react-icons/md';
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="bg">
      <div className='w-[80%] mx-auto h-full py-28 lg:h-screen flex flex-col lg:flex-row justify-around items-center'>
        <div className='text-center lg:text-left w-full lg:flex-1'>
          <h1 className='text-7xl md:text-8xl lg:text-9xl font-bold'><span className='text-[#952895]'>Website</span> <br /> <span>Coming</span> <br /> <span className='text-[#0b65b2]'>Soon</span></h1>
          <em className="mt-3">If you have any Queries, Please Contact Us</em>
        </div>


        <div className='w-full lg:flex-1 flex justify-center items-end'>
          <div role="listitem" className="relative pt-28 w-[90%] lg:w-[85%]">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img src={logo} alt="Logo" role="img" className="rounded-full object-cover h-full w-full shadow-lg" />
                </div>
              </div>
              <div className="px-6 py-16">
                <h1 className="font-bold text-3xl text-center mb-1">Jashim Enayet</h1>
                <p className="text-[#033430] text-md text-center">Proprietor</p>
                <div className="flex flex-col xl:flex-row justify-evenly">
                  <div className="text-center text-[#033430] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                    <span><BiSolidPhoneCall></BiSolidPhoneCall></span>
                    <span><a href="tel:+8801763666677">+8801763-666677</a></span>
                  </div>

                  <div className="text-center text-[#033430] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                    <span><FiPhoneCall></FiPhoneCall></span>
                    <span><a href="tel:+8801711517080">+8801711-517080</a></span>
                  </div>
                </div>
                <div className="text-center text-[#033430] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                  <span><TbDeviceLandlinePhone></TbDeviceLandlinePhone></span>
                  <span><a href="tel:+8809602111122">09602-111122</a></span>
                </div>
                <div className="text-center text-[#033430] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                  <span><MdMarkEmailRead></MdMarkEmailRead></span>
                  <span><a href="mailto: info@visaghor.com">info@visaghor.com</a></span>
                </div>

                <div className="text-center font-semibold text-[#033430] mt-2 text-lg pt-2 flex items-center justify-center gap-2">
                  <span>Baitul Khair Tower, 48/A-B <br />Level-11/1107, Purana Paltan, Dhaka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-6 pb-8">
        <Link to={"/slip_price"} className="flex justify-center items-center" >
          <button className="py-3 px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]">
            See Choice Slip Pricing
          </button>
        </Link>

        <Link to={"/air_ticket_prices"} className="flex justify-center items-center" >
          <button className="py-3 px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]">
            See Air Ticket Prices
          </button>
        </Link>

        <Link to={"/tourist_visa_prices"} className="flex justify-center items-center" >
          <button className="py-3 px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]">
            See Tourist Visa Prices
          </button>
        </Link>

        <Link to={"/other_services"} className="flex justify-center items-center" >
          <button className="py-3 px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]">
            See Other Services
          </button>
        </Link>
      </div>
    </div>
  )
}

export default App
