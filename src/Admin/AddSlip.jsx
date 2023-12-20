import React from 'react';
import "./addSlip.css"
import addLottie from "../assets/addLottie.json"
import Lottie from 'lottie-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddSlip = () => {
    let handleAddSlipPrice = (e) => {
        e.preventDefault();
        let medicalName = e.target.medicalName.value;
        let ksaRegularPrice = e.target.ksaRegularPrice.value;
        let ksaUrgentPrice = e.target.ksaUrgentPrice.value;


        let slipDetails = { medicalName, ksaRegular: ksaRegularPrice, ksaUrgent: ksaUrgentPrice};
        axios.post("https://visa-ghor-server.vercel.app/addSlip", slipDetails)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Slip Added Successfully!",
                        icon: "success"
                    });
                    e.target.medicalName.value = "";
                    e.target.ksaRegularPrice.value = "";
                    e.target.ksaUrgentPrice.value = "";
                }
            })
    }



    return (
        <div className='w-[90%] mx-auto py-8'>
            <h1 className='text-4xl font-bold text-[#0b65b2] text-center'>Enter Slip Price & Details</h1>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full md:w-[60%]'>
                    <form onSubmit={handleAddSlipPrice}>
                        <div>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor="medicalName">Medical Center Name: </label><br />
                            <input className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]' type="text" name='medicalName' placeholder='Enter Medical Name' />
                        </div>

                        <div className='mt-6'>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor="ksaSlipPrice">KSA Regular Slip Price: </label><br />
                            <input className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]' type="number" name='ksaRegularPrice' placeholder='Enter KSA Slip Price in Numbers' />
                        </div>

                        <div className='mt-6'>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor="ksaSlipPrice">KSA Urgent Slip Price: </label><br />
                            <input className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]' type="number" name='ksaUrgentPrice' placeholder='Enter KSA Slip Price in Numbers' />
                        </div>

                        <div className='mt-6 w-full'>
                            <button className="py-3 w-full px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]" type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className='w-full md:w-[40%]'>
                    <Lottie animationData={addLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AddSlip;