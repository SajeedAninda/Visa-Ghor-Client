import React from 'react';
import { Link } from 'react-router-dom';

const OurServices = () => {
    const services = [
        "জন্ম ও মৃত্যু নিবন্ধন",
        "পিডিও/টিটিসি ট্রেনিং সার্টিফিকেট ও কারেকশন",
        "গামকা মেডিক্যাল স্লিপ (নরমাল, চয়েস ও স্লিপ ডিলিট)",
        "বিএমইটি রেজিষ্ট্রেশন ও কারেকশন",
        "তাশির সেন্টারের অ্যাপয়েন্টমেন্ট ডেট",
        "কোভিড-১৯ ও সুরক্ষা সংক্রান্ত কাজ",
        "সৌদির মোফা",
        "ট্রাভেল ইন্সুরেন্স ও হোটেল বুকিং",
        "কাবিননামা ও ম্যারেজ সার্টিফিকেট",
        "টিকেট রিইস্যু/ডেট চেঞ্জ",
        "লিবিয়া ও কাতারের মেডিকেল স্লিপ",
        "পুলিশ ক্লিয়ারেন্স সার্টিফিকেট",
        "টিন সার্টিফিকেট",
        "সৌদি জাওয়াজাত/ইমিগ্রেশন ফিঙ্গারপ্রিন্ট চেক",
        "বিদেশগামীদের ইউরোপাস সিভি/জব কভার লেটার",
        "বিদেশগামীদের একাডেমিক/প্রাতিষ্ঠানিক সার্টিফিকেট"
    ];

    return (
        <div className="bg">
            <div className='w-[80%] mx-auto h-fit pt-12 pb-28 lg:h-fit'>
                <div className='text-center'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-[#952895]'>
                        Our Services
                    </h1>
                    <em className="mt-3">See the List of Services that we provide</em>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href="https://api.whatsapp.com/send?phone=8801763666677"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" p-6 bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white rounded-md shadow-md cursor-pointer transition-transform duration-100 ease-in  transform hover:shadow-lg hover:scale-105 text-[20px] font-bold flex justify-center items-center text-center"
                        >
                            {service}
                        </a>
                    ))}
                </div>
                
                <div className='text-center'>
                    <Link className="flex mx-auto justify-center items-center" to={"/"}>
                        <button className="py-3 px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font-bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
