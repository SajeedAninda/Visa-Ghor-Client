import axios from 'axios';
import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import updateLottie from '../assets/updateLottie.json';
import Swal from 'sweetalert2';

const UpdateList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        axios
            .get(`https://visa-ghor-server.vercel.app/updateSlipPricing/${id}`)
            .then((res) => {
                const { medicalName, ksaRegular } = res.data;
                setValue('medicalName', medicalName);
                setValue('ksaRegularPrice', ksaRegular);
                setValue('location', res.data.location);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id, setValue]);

    const onSubmit = async (data) => {
        try {
            const { medicalName, ksaRegularPrice, location } = data;
            const slipDetails = { medicalName, ksaRegular: ksaRegularPrice, location };

            const response = await axios.put(`https://visa-ghor-server.vercel.app/updateSlipDetails/${id}`, slipDetails);

            if (response.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Good job!',
                    text: 'Slip Updated Successfully!',
                    icon: 'success',
                });
                navigate(-1);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='w-[90%] mx-auto py-8'>
            <h1 className='text-4xl font-bold text-[#0b65b2] text-center'>Update Slip Prices & Details</h1>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full md:w-[60%]'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor='medicalName'>
                                Medical Center Name:
                            </label>
                            <br />
                            <input
                                {...register('medicalName', { required: 'Medical Name is required' })}
                                defaultValue=''
                                className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]'
                                type='text'
                                placeholder='Enter Medical Name'
                            />
                        </div>

                        <div className='mt-6'>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor='ksaSlipPrice'>
                                KSA Regular Slip Price:
                            </label>
                            <br />
                            <input
                                {...register('ksaRegularPrice', { required: 'KSA Regular Price is required' })}
                                defaultValue={0}
                                className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]'
                                type='number'
                                placeholder='Enter KSA Slip Price in Numbers'
                            />
                        </div>

                        <div className='mt-6'>
                            <label className='text-[#952895] font-semibold text-2xl' htmlFor='location'>
                                Location:
                            </label>
                            <br />
                            <select
                                {...register('location', { required: 'Location is required' })}
                                defaultValue='dhaka'
                                className='w-full px-3 py-3 border-2 rounded-md mt-2 border-[#0b65b2]'
                            >
                                <option value='dhaka'>Dhaka</option>
                                <option value='chittagong'>Chittagong</option>
                                <option value='sylhet'>Sylhet</option>
                                <option value='comilla'>Comilla</option>
                            </select>
                        </div>

                        <div className='mt-6 w-full'>
                            <button
                                className='py-3 w-full px-6 rounded-md bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white font bold hover:bg-gradient-to-r hover:from-[#952895] hover:to-[#0b64b2c7]'
                                type='submit'
                            >
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
