import React from 'react';
import logo from "./assets/logo.jpg";
import './App.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    let currentYear = new Date().getFullYear();

    return (
        <footer className="footerBg rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex justify-center md:justify-start items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="w-[60px] rounded-full" alt=" Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Visa Ghor</span>
                    </a>
                    <ul className="flex justify-center md:justify-start flex-wrap items-center mb-6 text-base font-medium text-[#151515] sm:mb-0 ">
                        <li>
                            <Link to="/slip_price" className="hover:underline me-4 md:me-6">Slip Prices</Link>
                        </li>
                        <li>
                            <Link to="/air_ticket_prices" className="hover:underline me-4 md:me-6">Air Ticket</Link>
                        </li>
                        <li>
                            <Link to="/tourist_visa_prices" className="hover:underline me-4 md:me-6">Tourist Visa</Link>
                        </li>
                        <li>
                            <Link to="/other_services" className="hover:underline me-4 md:me-6">Others</Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:underline">Login</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="flex gap-1 justify-center items-center text-base text-[#151515] sm:text-center ">&#169;{currentYear} <a href="#" className="hover:underline"> VisaGhor™ -</a> All Rights Reserved.</span>
            </div>
        </footer>


    );
};

export default Footer;