import React from 'react';
import { Link } from 'react-router-dom';

const AirTicketPrices = () => {
    return (
        <div className="bg">
            <div className='w-[80%] mx-auto h-screen py-28 lg:h-screen'>
                <div className='text-center'>
                    <h1 className='text-7xl md:text-8xl lg:text-9xl font-bold'><span className='text-[#952895]'>Air Ticket Prices</span> <br /> <span>Will Be Updated</span> <br /> <span className='text-[#0b65b2]'>Soon</span></h1>
                    <em className="mt-3">Please Stay in Touch with us</em>
                    <Link className="flex mx-auto justify-center items-center py-8" to={"/"}>
                    <button className="py-3 px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]">
                        Back to Home
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default AirTicketPrices;