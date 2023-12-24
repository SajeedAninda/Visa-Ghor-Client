import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from "../assets/logo.jpg"
import { AuthContext } from '../Authentication/AuthenticationProvider';

const AdminPanel = () => {
    let { logOut } = useContext(AuthContext);

    let handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged Out Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 text-2xl font-bold px-2 mx-2 gap-3">
                        <img src={logo} className='w-[50px] rounded-full' alt="" />
                        <h2>Admin Panel</h2>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal flex justify-between items-center gap-6">
                            {/* Navbar menu content here */}
                            <NavLink
                                to={"/"}
                                end
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#952895]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#952895] rounded-md"
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to={"/admin"}
                                end
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#952895]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#952895] rounded-md"
                                }
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                to={"addSlip"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#952895]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#952895] rounded-md"
                                }
                            >
                                Add Slips
                            </NavLink>

                            <NavLink
                                to={"slipList"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#952895]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#952895] rounded-md"
                                }
                            >
                                Slip List
                            </NavLink>
                            <button onClick={handleLogout} className='text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#952895] rounded-md'>
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu menu-horizontal bg-gradient-to-r from-[#0b64b2c7] to-[#952895] text-white flex flex-col justify-start px-8 items-center gap-6 z-50 h-full">
                    {/* Navbar menu content here */}
                    <NavLink
                                to={"/"}
                                end
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#952895]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#952895] rounded-md"
                                }
                            >
                                Home
                            </NavLink>
                    <NavLink
                        to={"/admin"}
                        end
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#952895]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#952895] rounded-md"
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to={"addSlip"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#952895]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#952895] rounded-md"
                        }
                    >
                        Add Slips
                    </NavLink>

                    <NavLink
                        to={"slipList"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#952895]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#952895] rounded-md"
                        }
                    >
                        Slip List
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;