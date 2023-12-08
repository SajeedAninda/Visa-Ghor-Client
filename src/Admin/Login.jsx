import React, { useContext } from 'react';
import Lottie from "lottie-react";
import loginLottie from "../assets/loginLottie.json";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthenticationProvider';
import Swal from 'sweetalert2';

const Login = () => {
    let { signIn, signUp } = useContext(AuthContext);
    let navigate = useNavigate();

    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        // signUp(email, password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log(user)
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                Swal.fire({
                    title: "Good job!",
                    text: "Login Successful!",
                    icon: "success"
                });
                navigate("/admin");
            })
            .catch((error) => {
                let errorCode = error.code;
                console.log(errorCode);
                if (errorCode === "auth/invalid-credential") {
                    return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Invalid Email or Password!"
                      });
                }
            });
    }

    return (
        <div className='h-fit'>
            <div className='w-[85%] bg-gradient-to-r from-[#0b64b286] to-[#952895b7] mx-auto px-12 my-12 h-fit rounded-md shadow-xl'>
                <div className='py-6'>
                    <h1 className='text-white text-center font-bold text-4xl'>Login</h1>
                    <p className='text-white text-center font-bold text-lg mt-1'>Please Login With Your Credentials</p>
                </div>

                <div>
                    <form onSubmit={handleLogin} className='pb-12 gap-8 flex flex-row-reverse justify-center items-center'>
                        <div className='w-full lg:w-[50%]'>
                            <div className='w-full mt-4'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="email">Email:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Email' type="email" id='email' name='email' required />
                            </div>

                            <div className='w-full mt-4'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="password">Password:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Password' type="password" id='password' name='password' required />
                            </div>
                            <button className='py-3 w-full bg-[#05386B] border-2 border-[#05386B] text-white font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[#05386B] hover:border-2 hover:border-[#05386B]' type='submit'>
                                Login
                            </button>
                        </div>
                        <div className='hidden lg:block w-[50%]'>
                            <Lottie animationData={loginLottie} loop={true} />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;