import React from 'react';
import adminLottie from "../assets/lottie.json"
import Lottie from 'lottie-react';

const Dashboard = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className='flex justify-center items-center'>
                <div className='flex-1'>
                    <h1 className='text-7xl md:text-8xl lg:text-9xl font-bold'><span className='text-[#952895]'>Admin</span> <br /> <span>Dashboard</span> <br /></h1>
                    <h2 className='text-[#0b65b2] text-5xl font-bold'>Control Your Site from here</h2>
                </div>

                <div className='flex-1'>
                    <Lottie animationData={adminLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;