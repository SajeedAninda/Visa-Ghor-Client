import axios from 'axios';
import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import updateLottie from "../assets/updateLottie.json"
import Swal from 'sweetalert2';

const UpdateList = () => {
    let { id } = useParams();
    let [slipData, setSlipData] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://visa-ghor-server.vercel.app/updateSlipPricing/${id}`)
            .then(res => {
                setSlipData(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    let handleSlipUpdate = (e) => {
        e.preventDefault();
        let medicalName = e.target.medicalName.value;
        let ksaSlipPrice = e.target.ksaSlipPrice.value;
        let regularTimeRequired = e.target.regularTimeRequired.value;
        let urgentTimeRequired = e.target.urgentTimeRequired.value;

        let slipDetails = { medicalName, ksa: ksaSlipPrice, regular: regularTimeRequired, urgent: urgentTimeRequired };

        axios.patch(`https://visa-ghor-server.vercel.app/updateSlipDetails/${id}`, slipDetails)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal
                        .fire({
                            title: "Good job!",
                            text: "Slip Updated Successfully!",
                            icon: "success"
                        });
                    navigate(-1);
                }
            })
    }

    return (
        <div className='w-[90%] mx-auto py-8'>
            <h1 className='text-4xl font-bold text-[#0b65b2] text-center'>Update Slip Prices & Details</h1>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full md:w-[60%]'>
                    <form onSubmit={handleSlipUpdate}>
                        <div>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor="medicalName">Medical Center Name: </label><br />
                            <input defaultValue={slipData?.medicalName} className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]' type="text" name='medicalName' placeholder='Enter Medical Name' />
                        </div>

                        <div className='mt-6'>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor="ksaSlipPrice">KSA Slip Price: </label><br />
                            <input defaultValue={slipData?.ksa} className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]' type="number" name='ksaSlipPrice' placeholder='Enter KSA Slip Price in Numbers' />
                        </div>

                        <div className='mt-6'>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor="regularTimeRequired">Regular Slip Required Time: </label><br />
                            <input defaultValue={slipData?.regular} className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]' type="text" name='regularTimeRequired' placeholder='Enter Regular Slip Time Required (Example: 3 to 7 Days)' />
                        </div>

                        <div className='mt-6'>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor="urgentTimeRequired">Urgent Slip Required Time: </label><br />
                            <input defaultValue={slipData?.urgent} className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]' type="text" name='urgentTimeRequired' placeholder='Enter Urgent Slip Time Required (Example: 1 to 2 Days)' />
                        </div>

                        <div className='mt-6 w-full'>
                            <button className="py-3 w-full px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]" type='submit'>
                                Update
                            </button>
                        </div>
                    </form>
                </div>

                <div className='w-full md:w-[40%]'>
                    <Lottie animationData={updateLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default UpdateList;
