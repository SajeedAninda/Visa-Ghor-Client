import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Link, Navigate } from 'react-router-dom';
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';

const SlipList = () => {
    const [pricing, setPricing] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://visa-ghor-server.vercel.app/slipPrices")
            .then(res => res.json())
            .then(json => {
                const sortedPricing = json.sort((a, b) =>
                    parseInt(a.ksaRegular) - parseInt(b.ksaRegular)
                );

                setPricing(sortedPricing);
                setLoading(false);
            });
    }, []);

    const getColorForKSA = (ksaValue) => {
        // const ksaValue = parseInt(ksa.replace(/,/g, ''));

        if (ksaValue < 6000) {
            return 'text-green-500'; // light green
        } else if (ksaValue >= 6000 && ksaValue < 7000) {
            return 'text-green-800'; // dark green
        } else if (ksaValue >= 7000 && ksaValue < 8000) {
            return 'text-green-800'; // light yellow
        } else if (ksaValue >= 8000 && ksaValue <= 10000) {
            return 'text-orange-500'; // orange
        } else {
            return 'text-red-700'; // red
        }
    };


    const filteredPricing = pricing.filter(prices =>
        prices.medicalName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let handleSlipDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once Deleted, you cannot revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0b65b2',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://visa-ghor-server.vercel.app/slipList/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            setPricing(prevPricing => prevPricing.filter(item => item._id !== id));
                            Swal.fire({
                                title: "Good job!",
                                text: "Deleted Succesfully!",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error("Error :", error);
                    });
            }
        });
    }

    return (
        <div className='py-18'>
            <div className='py-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-[#952895] text-center'>Choice Slip List</h1>
                <p className='text-md w-[60%] mt-3 text-[] mx-auto md:text-lg lg:text-xl font-bold text-center text-[#0b65b2]'>See the Pricing List, Edit or Delete</p>

                {/* Search bar */}
                <div className="my-4 mx-auto max-w-sm md:max-w-lg lg:max-w-xl">
                    <input

                        type="text"
                        className="w-full px-3 py-3 border border-[#0b65b2] focus:border focus:border-[#952895]"
                        placeholder="Search by Medical Center Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className='w-[100%] md:w-[90%] lg:w-[80%] py-6 mx-auto overflow-x-auto'>
                    <div className='flex justify-between items-center gap-3 md:gap-0 pb-2'>
                        <h2 className='text-semibold text-sm md:text-md lg:text-lg italic pb-1'>*Normal Slip (Delay): 900/=</h2>
                        <h2 className='text-semibold text-sm md:text-md lg:text-lg italic pb-1 text-[#952895]'>*Regular Slip Time:<span className='font-bold'> 3 to 5 Days</span></h2>
                    </div>
                    {
                        loading ?
                            (
                                <div className='flex text-center justify-center items-center'>
                                    <ColorRing
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#0b64b2c7', '#952895', '#952895', '#0b64b2c7', '#0b64b2c7']}
                                    />
                                </div>
                            )
                            :
                            (
                                <table className="min-w-full table-auto border-collapse border border-[#0b65b2]">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white">
                                            <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">#SL</th>
                                            <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">Medical Center Name</th>
                                            <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">KSA Regular Slip Rate</th>
                                            <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">Location</th>
                                            <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">Edit</th>
                                            <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredPricing.map((prices, index) => (
                                            <tr key={index}>
                                                <td className="py-4 px-6 md:px-10 text-center border border-[#0b65b2]">
                                                    {index + 1}
                                                </td>
                                                <td className="py-4 px-6 md:px-10 text-center font-medium border border-[#0b65b2]">
                                                    {prices?.medicalName}
                                                </td>
                                                <td className={`py-4 px-6 md:px-10 text-center border border-[#0b65b2] text-lg font-bold ${getColorForKSA(prices?.ksaRegular)}`}>
                                                    {prices?.ksaRegular}/=
                                                </td>
                                                <td className={`py-4 px-6 md:px-10 text-center border border-[#0b65b2] text-lg font-bold `}>
                                                    {prices?.location}
                                                </td>
                                                <td className="py-4 px-6 md:px-10 text-center border border-[#0b65b2] text-lg font-bold text-[#952895]">
                                                    <Link to={`updateSlipPricing/${prices?._id}`}>
                                                        <MdEditSquare className='text-2xl' />
                                                    </Link>
                                                </td>
                                                <td className="py-4 px-6 md:px-10 text-center border border-[#0b65b2] text-lg font-bold text-[#952895]">
                                                    <button onClick={() => handleSlipDelete(prices?._id)}>
                                                        <MdDelete className='text-2xl' />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default SlipList;