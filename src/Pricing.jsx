import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Pricing = () => {
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

    let filDhaka = filteredPricing.filter(dhk => dhk.location === "dhaka");
    let filChittagong = filteredPricing.filter(dhk => dhk.location === "chittagong");
    let filSylhet = filteredPricing.filter(dhk => dhk.location === "sylhet");
    let filComilla = filteredPricing.filter(dhk => dhk.location === "comilla");


    return (
        <div className='py-18'>
            <div className='py-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-[#952895] text-center'>Choice Slip Pricing</h1>
                <p className='text-md w-[60%] mt-3 text-[] mx-auto md:text-lg lg:text-xl font-bold text-center text-[#0b65b2]'>View and compare the prices of various medicals before making a choice.</p>

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


                <div className='w-[100%] md:w-[90%] lg:w-[80%] mx-auto overflow-x-auto'>
                    <h2 className='text-semibold italic pb-3 text-lg text-[#952895]'>Regular Slip Time:<span className='font-bold'> 3 to 5 Days</span></h2>
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
                            <div>
                                {/* MEDICAL CENTERS IN DHAKA */}
                                {
                                    filDhaka.length > 0 &&
                                    (<div>
                                        <div className='w-[100%] md:w-[90%] lg:w-[80%] mx-auto overflow-x-auto'>
                                            <h2 className='font-bold pb-1 text-2xl text-[#952895] text-center'>Medical Centers in DHAKA</h2>
                                        </div>
                                        <div className='w-[100%] md:w-[90%] lg:w-[80%] py-6 mx-auto overflow-x-auto'>
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
                                                                    <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">KSA Slip Rate</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {filDhaka.map((prices, index) => (
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
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    )
                                            }
                                        </div>
                                    </div>)
                                }


                                {/* MEDICAL CENTERS IN CHITTAGONG  */}
                                {
                                    filChittagong.length > 0 &&
                                    (
                                        <div>
                                            <div className='w-[100%] md:w-[90%] lg:w-[80%] mx-auto overflow-x-auto'>
                                                <h2 className='font-bold pb-1 text-2xl text-[#d41a1a]  text-center'>Medical Centers in Chittagong</h2>
                                            </div>
                                            <div className='w-[100%] md:w-[90%] lg:w-[80%] py-6 mx-auto overflow-x-auto'>
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
                                                                    <tr className="bg-gradient-to-r from-[#0b64b2c7] to-[#d41a1a] text-white">
                                                                        <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">#SL</th>
                                                                        <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">Medical Center Name</th>
                                                                        <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">KSA Slip Rate</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {filChittagong.map((prices, index) => (
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
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        )
                                                }
                                            </div>
                                        </div>
                                    )
                                }

                                {/* MEDICAL CENTERS IN SYLHET  */}
                                {
                                    filSylhet.length > 0 &&
                                    (<div>
                                        <div className='w-[100%] md:w-[90%] lg:w-[80%] mx-auto overflow-x-auto'>
                                            <h2 className='font-bold pb-1 text-2xl text-[#225c08] text-center'>Medical Centers in Sylhet</h2>
                                        </div>
                                        <div className='w-[100%] md:w-[90%] lg:w-[80%] py-6 mx-auto overflow-x-auto'>
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
                                                                <tr className="bg-gradient-to-r from-[#0b64b2c7] to-[#225c08] text-white">
                                                                    <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">#SL</th>
                                                                    <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">Medical Center Name</th>
                                                                    <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">KSA Slip Rate</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {filSylhet.map((prices, index) => (
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
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    )
                                            }
                                        </div>
                                    </div>)
                                }

                                {/* MEDICAL CENTERS IN COMILLA  */}
                                {
                                    filComilla.length > 0 &&
                                    (
                                        <div>
                                            <div className='w-[100%] md:w-[90%] lg:w-[80%] mx-auto overflow-x-auto'>
                                                <h2 className='font-bold pb-1 text-2xl text-[#000000] text-center'>Medical Centers in Comilla</h2>
                                            </div>
                                            <div className='w-[100%] md:w-[90%] lg:w-[80%] py-6 mx-auto overflow-x-auto'>
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
                                                                    <tr className="bg-gradient-to-r from-[#0b64b2c7] to-[#000000] text-white">
                                                                        <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">#SL</th>
                                                                        <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">Medical Center Name</th>
                                                                        <th className="py-4 px-6 md:px-10 text-center text-xl border border-white">KSA Slip Rate</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {filComilla.map((prices, index) => (
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
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        )
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )
                }


                <Link className="flex justify-center items-center pb-8" to={"/"}>
                    <button className="py-3 px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Pricing;
